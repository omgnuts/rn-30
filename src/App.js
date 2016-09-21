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
// import NavigationBar from './components/NavigationBar.js';

var NavigationBarRouteMapper = {
    LeftButton: (route, navigator, index, navState) => {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                {previousRoute.title}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: (route, navigator, index, navState) => {
        return (
            <TouchableOpacity
                onPress={() => navigator.push(newRandomRoute())}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                {route.right} 
                </Text>
            </TouchableOpacity>
        );
    },

    Title: (route, navigator, index, navState) => {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title} [{index}]
            </Text>
        );
    },
};

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
            routeMapper={NavigationBarRouteMapper}
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
