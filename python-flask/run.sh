#!/bin/bash

currentPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$currentPath"

#pip install Flask
python3 web.py