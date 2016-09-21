/**
 * 30 Days of React Native
 * https://github.com/thecookiejar/30-days-of-react-native
 * @thecookiejar
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigation from './components/NavigationBar.js';
import MainRoute from './MainScene';

export default class App extends Component {
  render() {
    return (
      <Navigation initialRoute={ MainRoute() } />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
