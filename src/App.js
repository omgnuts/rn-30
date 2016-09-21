/**
 * 30 Days of React Native
 * https://github.com/thecookiejar/30-days-of-react-native
 * @thecookiejar
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MainRoute, { MainScene, MMM } from './MainScene';
import NavigationBarRouteMapper from './components/NavigationBar.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  renderScene(route, navigator) {
    return <route.class navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={MainRoute()}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper()}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('App', () => App);
