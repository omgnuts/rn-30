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
    if (index === 0 || route.left === undefined || route.left === null) {
      return null;
    }

    // return route.left as an override
    if (typeof route.left === 'function') {
      return route.left();
    }

    var handle = (route.left.handle === undefined || route.left.handle === null) ? 
      () => navigator.pop() : route.left.handle;
    
    // else route.left probably just uses a default implementation similar to ios.
    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
          onPress={handle}
          style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            {previousRoute.left.name}
          </Text>
      </TouchableOpacity>
    );
  },

  RightButton: (route, navigator, index, navState) => {
    if (route.right === undefined || route.right === null ||
      route.right.handle === undefined || route.right.handle === null
    ) {
      return null;
    }

    // return route.right as an override
    if (typeof route.right === 'function') {
      return route.right();
    }

    return (
      <TouchableOpacity
          onPress={route.right.handle}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            {route.right.name}
          </Text>
      </TouchableOpacity>
    );
  },

  Title: (route, navigator, index, navState) => {
    if (route.title === undefined || route.title === null) {
      return null;
    }    

    // return route.right as an override
    if (typeof route.title === 'function') {
      return route.title();
    }
    
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
