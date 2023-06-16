#!/bin/bash -i

nvm use 18
yarn config set --home enableTelemetry 0
yarn install --pure-lockfile
