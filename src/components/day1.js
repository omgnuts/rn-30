/*
 * Day 1
 * A stop watch
 */

'use strict';

import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import Util from './../Util';

class WatchFace extends Component {

  render() {
    return (
      <Text> Hello </Text>
    )
  }

}

export default class extends Component {

  render() {
      return(
        <WatchFace/>
      )
  }
}
