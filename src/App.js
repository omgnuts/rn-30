/**
 * 30 Days of React Native
 * https://github.com/thecookiejar/30-days-of-react-native
 * @thecookiejar
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
} from 'react-native';

// import TestView from './TestView'
import AppView from './AppView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationBarHidden: false
    }
  }

  hideNavigationBar(state) {
    this.setState({
      navigationBarHidden: state
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          title: '30 Days of React Native',
          component: AppView,
          passProps: {hideNavigationBar: this.hideNavigationBar.bind(this)},
          backButtonTitle: 'Back',
          shadowHidden: true,
        }}
        navigationBarHidden={this.state.navigationBarHidden}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

AppRegistry.registerComponent('App', () => App);
