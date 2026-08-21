#!/usr/bin/env python3
"""Package current Git changes into a password-protected ZIP with a .bin suffix.

The script calls 7-Zip to create a standard ZipCrypto ZIP. This encryption is
less secure than AES, but it is compatible with Windows' built-in extractor
after the resulting .bin file is copied or renamed to use a .zip extension.
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime
from pathlib import Path


DEFAULT_PASSWORD = "284090520"


def git_paths(repo_root: Path, *args: str) -> list[str]:
    """Return Git paths without quotePath escaping or line-based parsing.

    Git normally prints Chinese and other non-ASCII paths as quoted octal escape
    sequences.  ``-z`` returns the original path bytes separated by NUL, which
    also safely supports spaces, quotes and newline characters in file names.
    """
    result = subprocess.run(
        ["git", *args, "-z", "--"],
        cwd=repo_root,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode != 0:
        error = result.stderr.decode("utf-8", errors="replace").strip()
        raise RuntimeError(error or f"git {' '.join(args)} failed")
    output = result.stdout.decode("utf-8", errors="surrogateescape")
    return [path for path in output.split("\0") if path]


def find_repo_root() -> Path:
    result = subprocess.run(
        ["git", "rev-parse", "--show-toplevel"],
        text=True,
        encoding="utf-8",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError("Run this script from inside a Git repository.")
    return Path(result.stdout.strip()).resolve()


def find_7zip() -> str:
    for executable in ("7z.exe", "7za.exe", "7z", "7za"):
        found = shutil.which(executable)
        if found:
            return found
    common_paths = (
        Path(r"C:\Program Files\7-Zip\7z.exe"),
        Path(r"C:\Program Files (x86)\7-Zip\7z.exe"),
        Path(r"D:\Program Files (x86)\TencentGame\QQGameTempest\Hall.57986\7za.exe"),
    )
    for executable in common_paths:
        if executable.is_file():
            return str(executable)
    raise RuntimeError("7-Zip was not found. Install it or add 7z.exe / 7za.exe to PATH.")


def collect_files(repo_root: Path, output_path: Path) -> list[Path]:
    has_head = subprocess.run(
        ["git", "rev-parse", "--verify", "--quiet", "HEAD"],
        cwd=repo_root,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    ).returncode == 0
    paths: set[str] = set()
    if has_head:
        paths.update(git_paths(repo_root, "diff", "--name-only", "--diff-filter=ACMR", "HEAD"))
    else:
        paths.update(git_paths(repo_root, "diff", "--name-only", "--diff-filter=ACMR", "--cached"))
        paths.update(git_paths(repo_root, "diff", "--name-only", "--diff-filter=ACMR"))
    paths.update(git_paths(repo_root, "ls-files", "--others", "--exclude-standard"))

    files: list[Path] = []
    output_path = output_path.resolve()
    for relative_path in sorted(paths):
        file_path = (repo_root / relative_path).resolve()
        # Do not recursively package the output or archives from an earlier run.
        if file_path == output_path or (file_path.name.startswith("git_changes_") and file_path.suffix in {".bin", ".zip"}):
            continue
        if file_path.is_file() and file_path.is_relative_to(repo_root):
            files.append(file_path)
    return files


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("-o", "--output", type=Path, help="Output archive path; .bin is appended when omitted.")
    parser.add_argument("--password", default=DEFAULT_PASSWORD, help="Archive password (default: %(default)s).")
    return parser.parse_args()


def run_7zip(arguments: list[str], cwd: Path) -> None:
    result = subprocess.run(
        arguments,
        cwd=cwd,
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode != 0:
        details = (result.stdout + result.stderr).strip()
        raise RuntimeError(f"7-Zip failed with exit code {result.returncode}.\n{details}")


def main() -> int:
    args = parse_args()
    repo_root = find_repo_root()
    output_path = args.output or repo_root / f"git_changes_{datetime.now():%Y%m%d_%H%M%S}.bin"
    if not output_path.is_absolute():
        output_path = repo_root / output_path
    if output_path.suffix.lower() != ".bin":
        output_path = output_path.with_name(f"{output_path.name}.bin")
    output_path = output_path.resolve()

    files = collect_files(repo_root, output_path)
    if not files:
        print("No added or changed files to archive. Deleted files are not archived.", file=sys.stderr)
        return 1

    seven_zip = find_7zip()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    if output_path.exists():
        output_path.unlink()

    # A UTF-8 list file safely passes whitespace and Chinese file names to 7-Zip.
    with tempfile.NamedTemporaryFile("w", encoding="utf-8-sig", suffix=".txt", delete=False) as file_list:
        file_list.write("\n".join(path.relative_to(repo_root).as_posix() for path in files))
        list_path = Path(file_list.name)
    try:
        run_7zip(
            [
                seven_zip,
                "a",
                "-tzip",
                "-scsUTF-8",
                f"-p{args.password}",
                "-mem=ZipCrypto",
                str(output_path),
                f"@{list_path}",
            ],
            repo_root,
        )
        # Verify immediately. A successful result proves that the output is a
        # readable password-protected ZIP despite its .bin filename.
        run_7zip([seven_zip, "t", "-tzip", f"-p{args.password}", str(output_path)], repo_root)
    finally:
        list_path.unlink(missing_ok=True)

    print(f"Packaged and verified {len(files)} files: {output_path}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except RuntimeError as error:
        print(f"Error: {error}", file=sys.stderr)
        raise SystemExit(1)
