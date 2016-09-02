/**
 * 30 Days of React Native
 * https://github.com/thecookiejar/30-days-of-react-native
 * @thecookiejar
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

import Day1 from './components/day1';


export default class extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
        key: 0,
        title: 'A stopwatch',
        component: Day1,
        isFA: false,
        icon: 'ios-stopwatch',
        size: 48,
        color: '#ff856c',
        hideNav: false,
      },{
        key: 1,
        title: 'A weather app',
        component: Day1,
        isFA: false,
        icon: 'ios-sunny',
        size: 60,
        color:'#90bdc1',
        hideNav: true,
      },{
        key: 2,
        title: 'Twitter',
        component: Day1,
        isFA: true,
        icon: 'twitter',
        size: 50,
        color: '#2aa2ef',
        hideNav: true,
      }]
    }
  }

  _loadDay(index) {
    var nextRoute = {
      title: this.state.days[index].title,
      component: this.state.days[index].component,
    };
    this.props.navigator.push(nextRoute);
    this.props.hideNavigationBar(this.state.days[index].hideNav);
  }

  render() {
    var self = this;
    var items = this.state.days.map(function(elem, index) {
      return (
        <TouchableHighlight onPress={() => self._loadDay(index)}
          key={elem.key}
          style={[styles.touchBox, index%3==2 ? styles.touchBox2 : styles.touchBox1]}
          underlayColor='#eee'>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day {index+1}</Text>
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
              <Image style={styles.image} source={{uri:'day1'}}/>
              <Text style={styles.slideText}>Day 1: A stopwatch </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => self._loadDay(1)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri:'day2'}}/>
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
