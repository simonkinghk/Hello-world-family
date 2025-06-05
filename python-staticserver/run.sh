#!/bin/bash

currentPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$currentPath/html"

python3 -m http.server 8000

