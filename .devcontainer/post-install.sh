#!/bin/sh

git config --global user.name "MaySoMusician" \
  && git config --global user.email "maysomusician@gmail.com" \
  && git config --global user.useConfigOnly true \
  && git config --global core.editor "nano" \
  && git config --global pull.ff "only"

yarn config set --home enableTelemetry 0
yarn install
