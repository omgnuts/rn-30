'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  MapView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Util from '../../Util';
import Icon from 'react-native-vector-icons/Ionicons';

export default() => {
  return {
    class: FindLocationView,
    title: 'Find Location',
  }
}

class Map extends Component {
  static propTypes = {
    mapType: React.PropTypes.oneOf(['standard', 'satellite', 'hybrid']),
    showLocation: React.PropTypes.bool,
  }

  constructor() {
    super();
    this.state =  {
      firstLoad: true,
      mapRegion: undefined,
      annotations: [],
    };
  }

  _getAnnotations(region) {
    return [{
      latitude: region.latitude,
      longitude: region.longitude,
      title: 'You Are Here!',
    }]
  }

  _onRegionChangeComplete = (region) => {
    if (this.state.firstLoad) {
      this.setState({
        annotations: this._getAnnotations(region),
        firstLoad: false,
      });
    }
  }

  render() {
    return (
      <MapView style={this.props.style}
        mapType={this.props.mapType}
        showsUserLocation={this.props.showLocation}
        followUserLocation={this.props.showLocation}
        onRegionChangeComplete={this._onRegionChangeComplete}
        region={this.state.mapRegion}
        annotations={this.state.annotations} 
      />
    )
  }


}

class FindLocationView extends Component {
  constructor() {
    super();
    this.state = {
      showLocation: false
    };
  }

  _findLocation() {
    this.setState({
      showLocation: true
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Map style={styles.map}
          mapType='standard' 
          showLocation={this.state.showLocation} 
        />
        <TouchableHighlight style={styles.btn}
          underlayColor='#00bd03'
          onPress={() => this._findLocation()}>
            <Text style={styles.btnText}>
              <Icon size={18} name="ios-navigate" />
              &nbsp; Find my location
            </Text>
        </TouchableHighlight>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 60
  }, 
  map: {
    width: Util.size.width,
    height: Util.size.height - 120
  },
  btn: {
    backgroundColor: '#00a803',
    width: Util.size.width-80,
    height: 40,
    borderWidth: Util.pixel,
    borderColor: '#009302',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 10
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff'
  },

});