#!/bin/bash

if [ -e from_shorts_to_watch.zip ]; then
  rm from_shorts_to_watch.zip
fi

zip from_shorts_to_watch.zip *.js *.json