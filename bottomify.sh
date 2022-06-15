#!/usr/bin/env bash

git clone https://github.com/gamemanual0/gm0.git --depth 1

echo "html_js_files = ['js/bottom.js']" >> gm0/source/conf.py
mkdir -p gm0/source/_static/js
cp bottom.js gm0/source/_static/js
cp gmOwO.png gm0/source/_static/assets/gm0-logo.png
cp gmOwO.png gm0/source/_static/assets/gm0-logo_white.png

rm -rf gm0/.git
mv gm0/* .

git config user.email "i@didntask.com"
git config user.name "gm🥺ifier"

git add .
git commit -m "Updated gm🥺"

git push --force origin main:bottom
