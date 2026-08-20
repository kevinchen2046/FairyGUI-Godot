#!/bin/sh
set -eu

target="$1"

scons platform=ios arch=universal ios_simulator=yes target="$target" dev_build=no debug_symbols=no -j2
scons platform=ios arch=arm64 ios_simulator=no target="$target" dev_build=no debug_symbols=no -j2

xcodebuild -create-xcframework \
  -library "examples/addons/fairygui/bin/libfairygui.ios.${target}.a" \
  -library "examples/addons/fairygui/bin/libfairygui.ios.${target}.simulator.a" \
  -output "examples/addons/fairygui/bin/libfairygui.ios.${target}.xcframework"

xcodebuild -create-xcframework \
  -library "godot-cpp/bin/libgodot-cpp.ios.${target}.arm64.a" \
  -library "godot-cpp/bin/libgodot-cpp.ios.${target}.universal.simulator.a" \
  -output "examples/addons/fairygui/bin/libgodot-cpp.ios.${target}.xcframework"
