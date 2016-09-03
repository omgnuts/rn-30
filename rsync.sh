#!/bin/bash

SOURCE=~/react-native/30-days-of-react-native/

#--include="*.js" \

rsync -avrn --no-perms --no-owner --no-group \
--include="src/" \
--include="index.android.js" \
--include="index.ios.js" \
--exclude="*/" \
--exclude=".*" \
--exclude="*.json" \
--exclude="*.sh" \
$SOURCE . 
