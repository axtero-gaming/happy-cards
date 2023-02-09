#!/usr/bin/env bash

mode=$1

if [[ $mode == 'release' ]]; then
  npm run release:build
else
  npm run dev:build
fi

npm run copy-build-to-www
if [ ! -d ./platforms/ios ]; then
  cordova platform rm ios
  cordova platform add ios
fi
cordova build ios
# gulp copy-apk
