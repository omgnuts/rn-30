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
  TouchableOpacity,
} from 'react-native';

import MainScene from './MainScene';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
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

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {navigator.props.nbProps.title}
      </Text>
    );
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      navigationBarHidden: false,
      nbProps: {
        title: "Nothing"
      },    
    };
  }

  renderNavigationBar(title) {
    this.setState({ 
      nbProps: {
        title: title,
      },
    });    
  }

  renderScene(route, navigator) {
    return <route.scene navigator={navigator} {...route.passProps} />
  }



  render() {
    const initRoute = {
      scene: MainScene,
      passProps: {
        setNavbar: this.renderNavigationBar.bind(this),
      },
    }

    return (
      <Navigator
        style={styles.container}
        initialRoute={initRoute}
        renderScene={this.renderScene.bind(this)}
        renderNavBar={this.renderNavigationBar.bind(this)}
        nbProps={this.state.nbProps}
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
    paddingLeft: 15,
  },
  navBarRightButton: {
    paddingRight: 15,
  },
  navBarButtonText: {
    color: '#5890FF',
  },  
});

AppRegistry.registerComponent('App', () => App);
