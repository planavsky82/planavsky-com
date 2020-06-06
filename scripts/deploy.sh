#!/usr/bin/env sh

cd angular
npm run build:mffr
cd ..
rm -rf dist
mkdir -p dist
cd angular
mv dist/mffr ../dist
cd ../dist/mffr
mkdir -p web-components
cd ../../stencil-web-components
npm run build
mv dist ../dist/mffr/web-components
firebase deploy
