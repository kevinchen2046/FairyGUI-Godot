param(
    [string]$GodotExe = "D:\godot\Godot_v4.7-stable_win64.exe",
    [string]$GdbExe = "D:\mingw64\bin\gdb.exe",
    [string]$ProjectPath = (Join-Path $PSScriptRoot "..\examples")
)

$ErrorActionPreference = "Stop"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$project = (Resolve-Path $ProjectPath).Path
$logDir = Join-Path $root "diagnostics"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null

$godotLog = Join-Path $logDir "godot.log"
$crashLog = Join-Path $logDir "native-crash.log"
$gdbCommands = Join-Path $logDir "gdb-commands.txt"

@"
set pagination off
set confirm off
set print thread-events off
set logging file $($crashLog.Replace('\', '/'))
set logging overwrite on
set logging enabled on
handle SIGSEGV stop print nopass
handle SIGABRT stop print nopass
run
echo \n========== ALL THREADS ==========\n
thread apply all bt full
echo \n========== LOADED MODULES ==========\n
info sharedlibrary
quit
"@ | Set-Content -LiteralPath $gdbCommands -Encoding ASCII

Write-Host "Godot log:  $godotLog"
Write-Host "Crash log:  $crashLog"
Write-Host "请在打开的 Godot 编辑器中复现崩溃；崩溃后调用栈会自动写入日志。"

& $GdbExe --quiet --batch `
    -x $gdbCommands `
    --args $GodotExe --path $project --editor --verbose --log-file $godotLog

Write-Host "调试会话结束。"
