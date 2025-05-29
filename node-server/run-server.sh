#!/bin/sh

currentPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $currentPath

node server.js
