
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Navigator,
    StyleSheet,
} from 'react-native';

export default () => { 
    return {
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
    }
};

// export class NavBar extends Component {

//   renderScene(route, navigator) {
//     return <route.class navigator={navigator} />
//   }

//   render() {
//     return (
//       <Navigator
//         style={styles.container}
//         initialRoute={MainRoute()}
//         renderScene={this.renderScene.bind(this)}
//         navigationBar={
//           <Navigator.NavigationBar
//             routeMapper={NavigationBarRouteMapper()}
//             style={styles.navBar}
//           />
//         }
//       />
//     );
// }


const styles = StyleSheet.create({
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
