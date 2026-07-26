#!/usr/bin/env python3
"""构建、生成文档并部署 FairyGUI-Godot。

默认构建 Windows editor 和 template_release 两个变体，并把插件文件复制到
``tools/deploy_config.json`` 中列出的 Godot 项目。部署采用临时文件 + 原子替换，
目标 DLL 被 Godot 锁定时不会删除旧文件，也不会卡在 input() 等待输入。
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOOLS_DIR = ROOT / "tools"
SRC_DIR = ROOT / "src"
DOC_DIR = ROOT / "doc_classes"
BIN_DIR = ROOT / "examples" / "addons" / "fairygui" / "bin"
DESCRIPTOR = ROOT / "examples" / "addons" / "fairygui" / "fairygui.gdextension"
CONFIG_PATH = TOOLS_DIR / "deploy_config.json"
CACHE_PATH = TOOLS_DIR / ".build_cache.json"

TARGETS = ("editor", "template_release")
ARTIFACTS = {
    "editor": "libfairygui.windows.editor.x86_64.dll",
    "template_release": "libfairygui.windows.template_release.x86_64.dll",
}
BUILD_CONFIG_FILES = ("SConstruct", "gdextension_build_profile.json", "tools/update_docs.py", "tools/build_and_deploy.py")
OBSOLETE_ARTIFACTS = (
    "libfairygui.windows.template_debug.x86_64.dll",
    "libfairygui.windows.editor.dev.x86_64.dll",
)


def cleanup_build_sidecars() -> None:
    """删除 SCons 生成但插件运行不需要的导入库/中间产物。"""
    for path in BIN_DIR.glob("*.a"):
        try:
            path.unlink()
        except OSError as exc:
            print(f"  [WARN] 无法清理构建副产物 {path.name}: {exc}")


def run(cmd: list[str], desc: str, cwd: Path = ROOT) -> bool:
    print(f"\n{'=' * 72}\n  {desc}\n  {' '.join(cmd)}\n{'=' * 72}")
    try:
        result = subprocess.run(cmd, cwd=cwd, check=False)
    except OSError as exc:
        print(f"  [ERROR] 无法启动命令: {exc}")
        return False
    if result.returncode:
        print(f"  [ERROR] 失败，退出码: {result.returncode}")
        return False
    print("  [OK] 完成")
    return True


def load_config() -> list[Path]:
    if not CONFIG_PATH.exists():
        print(f"  [WARN] 配置文件不存在: {CONFIG_PATH}")
        return []
    try:
        data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"  [ERROR] 无法读取部署配置: {exc}")
        return []
    result = []
    for value in data.get("target_projects", []):
        path = Path(os.path.expandvars(os.path.expanduser(str(value))))
        if not path.is_absolute():
            path = (CONFIG_PATH.parent / path).resolve()
        else:
            path = path.resolve()
        if path.is_dir():
            result.append(path)
        else:
            print(f"  [WARN] 部署目标不存在，跳过: {path}")
    return result


def _newest_mtime(files: tuple[str, ...], dirs: tuple[Path, ...], extensions: tuple[str, ...]) -> float:
    newest = 0.0
    for name in files:
        path = ROOT / name
        if path.is_file():
            newest = max(newest, path.stat().st_mtime)
    for directory in dirs:
        if directory.is_dir():
            for path in directory.rglob("*"):
                if path.is_file() and path.suffix in extensions:
                    newest = max(newest, path.stat().st_mtime)
    return newest


def _load_cache() -> dict:
    try:
        return json.loads(CACHE_PATH.read_text(encoding="utf-8")) if CACHE_PATH.exists() else {}
    except (OSError, json.JSONDecodeError):
        return {}


def _save_cache(cache: dict) -> None:
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def _source_mtime() -> float:
    return _newest_mtime(BUILD_CONFIG_FILES, (SRC_DIR,), (".h", ".hpp", ".cpp", ".py", ".json"))


def _docs_mtime() -> float:
    return _newest_mtime(("tools/update_docs.py",), (SRC_DIR,), (".h", ".hpp", ".cpp", ".py"))


def is_build_stale() -> bool:
    cache = _load_cache()
    if _source_mtime() > cache.get("build", {}).get("newest_mtime", 0):
        return True
    return any(not (BIN_DIR / name).is_file() for name in ARTIFACTS.values())


def is_docs_stale() -> bool:
    return _docs_mtime() > _load_cache().get("docs", {}).get("newest_mtime", 0) or not any(DOC_DIR.glob("*.xml"))


def mark_done(kind: str, mtime: float) -> None:
    cache = _load_cache()
    cache[kind] = {"newest_mtime": mtime, "last_run": dt.datetime.now().isoformat(timespec="seconds")}
    _save_cache(cache)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def copy_atomic(src: Path, dest: Path, retries: int = 8, delay: float = 1.5) -> bool:
    """复制并校验文件；目标被 Godot 锁定时自动重试且保留旧文件。"""
    dest.parent.mkdir(parents=True, exist_ok=True)
    expected = sha256(src)
    for attempt in range(1, retries + 1):
        temporary = dest.with_name(f".{dest.name}.{os.getpid()}.tmp")
        try:
            shutil.copy2(src, temporary)
            os.replace(temporary, dest)
            if sha256(dest) != expected:
                raise OSError("部署后校验失败（SHA-256 不一致）")
            return True
        except OSError as exc:
            try:
                temporary.unlink(missing_ok=True)
            except OSError:
                pass
            if attempt < retries:
                print(f"  [RETRY {attempt}/{retries}] {dest.name}: {exc}; {delay:g}s 后重试")
                time.sleep(delay)
            else:
                print(f"  [ERROR] 部署失败: {src} -> {dest}\n         {exc}")
    return False


def deploy(projects: list[Path], target_names: list[str]) -> bool:
    if not projects:
        print("  [SKIP] 没有有效部署目标")
        return True
    files = [BIN_DIR / ARTIFACTS[name] for name in target_names if name in ARTIFACTS]
    files.append(DESCRIPTOR)
    missing = [path for path in files if not path.is_file()]
    if missing:
        print("  [ERROR] 缺少部署文件:")
        for path in missing:
            print(f"         {path}")
        return False
    success = True
    for project in projects:
        plugin_dir = project / "addons" / "fairygui"
        for src in files:
            dest = (plugin_dir / "bin" / src.name) if src.parent == BIN_DIR else (plugin_dir / src.name)
            if src.resolve() == dest.resolve():
                continue
            print(f"  {src.name} -> {project.name}/addons/fairygui/")
            success = copy_atomic(src, dest) and success
        for old_name in OBSOLETE_ARTIFACTS:
            old = plugin_dir / "bin" / old_name
            if old.exists():
                try:
                    old.unlink()
                    print(f"  清理旧产物: {old.name}")
                except OSError as exc:
                    print(f"  [WARN] 无法清理旧产物 {old}: {exc}")
    return success


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--force", action="store_true", help="忽略缓存并重新生成、编译")
    parser.add_argument("--no-docs", action="store_true")
    parser.add_argument("--no-deploy", action="store_true")
    parser.add_argument("--deploy-only", action="store_true")
    parser.add_argument("--target", choices=TARGETS, action="append", help="只构建指定 target，可重复")
    parser.add_argument("--jobs", type=int, default=4, help="SCons 并行任务数")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    targets = args.target or list(TARGETS)
    if args.deploy_only:
        build_targets = []
    elif args.force or is_build_stale():
        build_targets = targets
    else:
        print("[SKIP] 源文件未变化且所有 DLL 均存在，跳过编译")
        build_targets = []

    if not args.deploy_only and not args.no_docs:
        if args.force or is_docs_stale():
            if not run([sys.executable, str(TOOLS_DIR / "update_docs.py")], "步骤 1: 生成中文类文档"):
                return 1
            mark_done("docs", _docs_mtime())
        else:
            print("[SKIP] 文档未变化，跳过文档生成")

    for target in build_targets:
        cmd = ["scons", "platform=windows", f"target={target}", "dev_build=no", "debug_symbols=no", f"-j{max(1, args.jobs)}"]
        if not run(cmd, f"编译 target={target}"):
            return 1
    cleanup_build_sidecars()
    if build_targets:
        mark_done("build", _source_mtime())

    if not args.no_deploy:
        if not deploy(load_config(), targets or list(TARGETS)):
            print("\n[ERROR] 部署未完成：请关闭占用插件 DLL 的 Godot 编辑器/运行中的游戏后重试 --deploy-only")
            return 1
    else:
        print("[SKIP] 跳过部署 (--no-deploy)")
    print("\n全部完成！")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
