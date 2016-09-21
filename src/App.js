/**
 * 30 Days of React Native
 * https://github.com/omgnuts/rn-30
 * @javantwm
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigation from './components/Navigation.js';
import MainScene from './MainScene';

export default class App extends Component {
  render() {
    return (
      <Navigation initialRoute={ MainScene() } />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
