#!/bin/sh

yarn config set --home enableTelemetry 0
yarn install --pure-lockfile
