#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
echo -e "${CYAN}"

# Build webpack output
eval "./node_modules/.bin/react-scripts build"

# If server/build dir exists; then remove server/build dir

if [ -d "./server/build" ]; then
  echo -e "${CYAN}Destroying ./server/build directory..."
  eval "rm -r ./server/build"
  echo -e "${GREEN}Successfully removed ./server/build directory!\n"
fi

# Move new /build dir to /server
echo -e "${CYAN}Moving Webpack bundle to ./server/build..."
eval "mv build server/build"
echo -e "${GREEN}Successfully moved Webpack bundle!"
