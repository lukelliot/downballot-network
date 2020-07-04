#!/bin/bash

# Build webpack output
eval "./node_modules/.bin/react-scripts build"

# If server/build dir exists; then remove server/build dir
[ -d "./server/build" ] && eval "rm -r ./server/build"

# Move new /build dir to /server
eval "mv build server/build"
