/**
 * 30 Days of React Native
 * https://github.com/omgnuts/rn-30
 * @javantwm
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DefaultRouteMapper = { 

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
          {route.title}
      </Text>
    );
  },
}

export default class extends Component {

  renderScene(route, navigator) {
    return <route.class navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={DefaultRouteMapper}
            style={styles.navBar}
          />
        }
        {...this.props}
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
