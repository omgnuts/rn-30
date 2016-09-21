
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Navigator,
    StyleSheet,
} from 'react-native';

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
                Next
                </Text>
            </TouchableOpacity>
        );
    },

    Title: (route, navigator, index, navState) => {
        console.log('.... title' + route.title);
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title} [{index}]
            </Text>
        );
    },
};

export default class extends Component {

    render() {
        return (
            <Navigator.NavigationBar
                {...this.props}
                style={styles.navBar}
                routeMapper={NavigationBarRouteMapper}
            />

        );
    }
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
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
