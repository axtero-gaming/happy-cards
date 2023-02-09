#!/usr/bin/env bash

mode=$1

if [[ $mode == 'release' ]]; then
  npm run release:build
else
  npm run dev:build
fi

npm run copy-build-to-www
if [ ! -d ./platforms/android ]; then
  cordova platform rm android
  cordova platform add android
fi
cordova build android
gulp copy-apk
