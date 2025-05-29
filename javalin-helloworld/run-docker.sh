#!/bin/sh

currentPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $currentPath

docker-compose build
docker-compose up

