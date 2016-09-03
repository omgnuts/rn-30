#!/bin/bash

SOURCE=~/react-native/30-days-of-react-native/


echo $SOURCE

rsync -a --no-perms --no-owner --no-group \
--include="src/" \
--include="index.android.js" \
--include="index.ios.js" \
--exclude="*" \
$SOURCE . 