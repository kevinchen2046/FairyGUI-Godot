#!/usr/bin/env python3
"""FairyGUI-Godot 一键编译部署脚本。

流程:
  1. 更新文档 (python tools/update_docs.py)
  2. 编译 editor + template_debug (scons)
  3. 将 DLL 复制到配置的目标项目 (tools/deploy_config.json)

用法:
  python tools/build_and_deploy.py              # 完整流程（增量：无变化则跳过）
  python tools/build_and_deploy.py --force      # 强制全部重新构建
  python tools/build_and_deploy.py --no-docs    # 跳过文档更新
  python tools/build_and_deploy.py --no-deploy  # 跳过部署
  python tools/build_and_deploy.py --deploy-only  # 仅部署
  python tools/build_and_deploy.py --target editor  # 只编译 editor
"""

import datetime
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC_DIR = ROOT / "src"
BIN_DIR = ROOT / "examples" / "addons" / "fairygui" / "bin"
CONFIG_PATH = Path(__file__).parent / "deploy_config.json"
CACHE_PATH = Path(__file__).parent / ".build_cache.json"

TARGETS = ["editor", "template_debug"]

# 需监控的构建配置文件（改动任一个触发重编译）
BUILD_CONFIG_FILES = ["SConstruct", "SCsub", "config.py"]

# target → DLL 文件名映射
DLL_SUFFIX_MAP = {
    "editor": "libfairygui.windows.editor.x86_64.dll",
    "template_debug": "libfairygui.windows.template_debug.x86_64.dll",
}


def run(cmd: list, desc: str, cwd=None) -> bool:
    """运行命令并打印输出"""
    print(f"\n{'='*60}")
    print(f"  {desc}")
    print(f"  {' '.join(cmd)}")
    print(f"{'='*60}")
    result = subprocess.run(cmd, cwd=cwd or ROOT, text=True)
    if result.returncode != 0:
        print(f"\n  [ERROR] 失败，退出码: {result.returncode}")
        return False
    print(f"  [OK] 完成")
    return True


def load_config() -> list:
    """加载部署目标配置"""
    if not CONFIG_PATH.exists():
        print(f"  [WARN] 配置文件不存在: {CONFIG_PATH}")
        print(f"  请创建 {CONFIG_PATH}，格式:\n  {{\"target_projects\": [\"F:/path/to/project\"]}}")
        return []
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        cfg = json.load(f)
    return cfg.get("target_projects", [])


# ─── 增量缓存 ───────────────────────────────────────────────

def _newest_mtime(files: list, dirs: list, extensions: tuple) -> float:
    """扫描文件列表和目录，返回所有匹配文件的最新 mtime。"""
    newest = 0.0
    for f in files:
        p = ROOT / f
        if p.exists():
            newest = max(newest, p.stat().st_mtime)
    for d in dirs:
        if not d.exists():
            continue
        for root, _, filenames in os.walk(d):
            for fn in filenames:
                if fn.endswith(extensions):
                    newest = max(newest, os.path.getmtime(os.path.join(root, fn)))
    return newest


def _load_cache() -> dict:
    if CACHE_PATH.exists():
        with open(CACHE_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def _save_cache(cache: dict):
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2)


def is_build_stale() -> bool:
    """源文件或构建配置是否有变化（需要重编译）。
    同时检查输出 DLL 是否存在，防止缓存有效但 DLL 被误删的情况。"""
    cache = _load_cache()
    last = cache.get("build", {}).get("newest_mtime", 0)
    current = _newest_mtime(BUILD_CONFIG_FILES, [SRC_DIR], (".h", ".cpp"))
    if current > last or last == 0:
        return True
    # 缓存说源文件没变化，但也要确认 DLL 确实还在
    for dll_name in DLL_SUFFIX_MAP.values():
        if not (BIN_DIR / dll_name).exists():
            return True
    return False


def is_docs_stale() -> bool:
    """头文件是否有变化（需要重新生成文档）。"""
    cache = _load_cache()
    last = cache.get("docs", {}).get("newest_mtime", 0)
    current = _newest_mtime([], [SRC_DIR], (".h",))
    return current > last or last == 0


def mark_build_done():
    """编译成功后更新缓存时间戳。"""
    cache = _load_cache()
    cache["build"] = {
        "newest_mtime": _newest_mtime(BUILD_CONFIG_FILES, [SRC_DIR], (".h", ".cpp")),
        "last_run": datetime.datetime.now().isoformat(),
    }
    _save_cache(cache)


def mark_docs_done():
    """文档生成成功后更新缓存时间戳。"""
    cache = _load_cache()
    cache["docs"] = {
        "newest_mtime": _newest_mtime([], [SRC_DIR], (".h",)),
        "last_run": datetime.datetime.now().isoformat(),
    }
    _save_cache(cache)


# ─── 部署 ───────────────────────────────────────────────────

def copy_with_retry(src: Path, dest: Path, retries=5) -> bool:
    """复制文件，目标被锁定时阻塞等待用户关闭占用进程后重试。"""
    for attempt in range(1, retries + 1):
        try:
            # 先删除目标文件，有时即使文件被"残留锁定"，
            # delete 比 overwrite 更容易成功（Windows 特有的共享删除语义）
            if dest.exists():
                try:
                    dest.unlink()
                except OSError:
                    pass  # 删不掉没关系，让 copy2 自己去报错
            shutil.copy2(src, dest)
            return True
        except OSError as e:
            # OSError 覆盖 PermissionError 及其他 Windows 文件错误
            if attempt < retries:
                print(f"  [RETRY {attempt}/{retries}] 复制失败: {e}")
                print(f"         源: {src}")
                print(f"         目标: {dest}")
                locked = "[WinError 32]" in str(e)
                if locked:
                    print(f"         请确认 Godot 编辑器/游戏已关闭，然后按回车重试...")
                else:
                    print(f"         请检查目标路径权限后按回车重试...")
                input()
            else:
                print(f"  [ERROR] {retries} 次重试后仍失败: {e}")
                print(f"         源: {src}")
                print(f"         目标: {dest}")
                return False
    return False


def deploy(targets: list, dll_names: list):
    """将 BIN_DIR 中的 DLL 复制到所有目标项目。"""
    if not targets:
        print("\n  [SKIP] 没有配置部署目标，请在 tools/deploy_config.json 中添加。")
        return

    # 先检查哪些 DLL 可用
    available = []
    missing = []
    for dll_name in dll_names:
        src = BIN_DIR / dll_name
        if src.exists():
            available.append((dll_name, src))
        else:
            missing.append(dll_name)

    if missing:
        print(f"  [WARN] 以下 DLL 未编译，跳过: {missing}")
    if not available:
        print(f"  [ERROR] BIN_DIR 中没有任何 DLL，请先执行构建。")
        print(f"         BIN_DIR = {BIN_DIR}")
        return

    print(f"  待部署: {[name for name, _ in available]}")
    print(f"  目标项目: {len(targets)} 个")

    for dll_name, src in available:
        for project_path in targets:
            dest_root = Path(project_path).expanduser().resolve()
            dest = dest_root / "addons" / "fairygui" / "bin" / dll_name
            # 源和目标相同时跳过（理论上不会出现，除非配置了项目自身路径）
            if src.resolve() == dest:
                print(f"  跳过（同路径）: {dll_name}")
                continue
            dest.parent.mkdir(parents=True, exist_ok=True)
            if copy_with_retry(src, dest):
                print(f"  {dll_name} -> {dest_root.name}/addons/fairygui/bin/")


def main():
    deploy_only = "--deploy-only" in sys.argv
    force = "--force" in sys.argv
    skip_docs = "--no-docs" in sys.argv or deploy_only
    skip_deploy = "--no-deploy" in sys.argv

    # 支持 --target 仅编译单个目标
    custom_target = None
    for i, arg in enumerate(sys.argv):
        if arg == "--target" and i + 1 < len(sys.argv):
            custom_target = sys.argv[i + 1]

    build_targets = [custom_target] if custom_target else TARGETS

    if force:
        print("\n  [FORCE] 强制模式：忽略增量缓存，全部重新构建")
        _save_cache({})  # 清空缓存

    # --deploy-only 模式：跳过文档和编译
    if deploy_only:
        print("\n  [DEPLOY-ONLY] 跳过文档更新和编译，直接部署 bin/ 中已有 DLL")
    else:
        # 第1步：更新文档
        if not skip_docs:
            if not force and not is_docs_stale():
                print("\n  [SKIP] 头文件无变化，跳过文档更新")
            else:
                if not run([sys.executable, "tools/update_docs.py"], "步骤 1/3: 更新类文档"):
                    print("文档更新失败，是否继续编译？(不会自动继续，请检查错误后重试)")
                else:
                    mark_docs_done()
        else:
            print("\n  [SKIP] 跳过文档更新 (--no-docs)")

        # 第2步：编译
        if not force and not is_build_stale():
            print("\n  [SKIP] 源文件无变化且 DLL 存在，跳过编译")
            build_targets = []
        for i, target in enumerate(build_targets, start=2 if skip_docs else 3):
            total_steps = len(build_targets) + (1 if not skip_deploy else 0) + (1 if not skip_docs else 0)
            step_label = f"步骤 {i}/{total_steps}"
            if not run(["scons", "-j8", f"target={target}"], f"{step_label}: 编译 target={target}"):
                print(f"\n  [ERROR] 编译 {target} 失败，中止。")
                sys.exit(1)
        if build_targets:
            mark_build_done()

    # 第3步：部署
    if not skip_deploy:
        config = load_config()
        if config:
            all_build_targets = [custom_target] if custom_target else TARGETS
            dlls = [DLL_SUFFIX_MAP[t] for t in all_build_targets if t in DLL_SUFFIX_MAP]
            print(f"\n{'='*60}")
            print(f"  {'步骤 4/4' if deploy_only else '步骤 3/3'}: 部署到目标项目")
            print(f"{'='*60}")
            deploy(config, dlls)
        else:
            print("\n  [SKIP] 无部署目标")
    else:
        print("\n  [SKIP] 跳过部署 (--no-deploy)")

    print(f"\n{'='*60}")
    print(f"  全部完成!")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
