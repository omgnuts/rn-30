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
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Util from './Util';

import TimerView from './views/01_timer/TimerView';
import WeatherView from './views/02_weather/WeatherView';
import TwitterStartView from './views/03_twitter_start/TwitterStartView';

export default () => {
  return {
    class: MainScene,
    title: 'App List',
    left: { name: 'Back' },
    right: { name: 'Alert', handle: () => alert('hello') },
  }
};

class MainScene extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
        route: TimerView,
        isFA: false,
        icon: 'ios-stopwatch',
        size: 48,
        color: '#ff856c',
      },{
        route: WeatherView,
        isFA: false,
        icon: 'ios-sunny',
        size: 60,
        color:'#90bdc1',
      },{
        route: TwitterStartView,
        isFA: true,
        icon: 'twitter',
        size: 50,
        color: '#2aa2ef',
      }]
    };
  }

  _loadDay(index) {
    this.props.navigator.push(this.state.days[index].route());
  }

  render() {
    var self = this;
    var items = this.state.days.map(function(elem, index) {
      return (
        <TouchableHighlight onPress={() => self._loadDay(index)}
          key={index}
          style={[styles.touchBox, index%3==2 ? styles.touchBox2 : styles.touchBox1]}
          underlayColor='#eee'>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>App {index+1}</Text>
            {elem.isFA ?
              <IconFA
                size={elem.size}
                name={elem.icon}
                style={[styles.boxIcon, {color:elem.color}]} /> :
              <Icon
                size={elem.size}
                name={elem.icon}
                style={[styles.boxIcon, {color:elem.color}]} />
            }
          </View>
        </TouchableHighlight>
      );
    });
    
    return (
      <ScrollView>
        <Swiper
          height={150}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={5.0}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>

          <TouchableHighlight onPress={() => self._loadDay(0)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./imgs/banner1.png')}/>
              <Text style={styles.slideText}>Day 1: A stopwatch </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => self._loadDay(1)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./imgs/banner2.png')}/>
              <Text style={styles.slideText}>Day 2: A weather app </Text>
            </View>
          </TouchableHighlight>
        </Swiper>

        <View style={styles.touchBoxContainer}>
          {items}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    flex: 1,
    alignSelf: 'stretch',
  }
});
