/**
 * 30 Days of React Native
 * https://github.com/omgnuts/rn-30
 * @javantwm
 */

// Day 02 - A weather app

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Util from './../../Util';

export default () => {
  return {
    class: WeatherView,
    title: 'Weather App',
  }
};


const weatherData =[{  
  key:0,
  city:"Singapore",
  night:!0,
  bg:require('./imgs/w2.png'),
  abs:"Mostly Cloudy",
  degree:28,
  today:{  
    week:"Sunday",
    day:"Today",
    high:32,
    low:25
  },
  hours:[{  
      key:101,
      time:"Now",
      icon:"ios-moon",
      degree:"27\xb0",
      color:"rgba(255,255,255,1)"
    },{  
      key:102,
      time:"3AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:103,
      time:"4AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:104,
      time:"5AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:105,
      time:"6AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:106,
      time:"6:52 AM",
      icon:"ios-sunny-outline",
      degree:"Sunrise",
      color:"#fedf32"
    },{  
      key:107,
      time:"7AM",
      icon:"ios-partly-sunny",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:108,
      time:"8AM",
      icon:"ios-partly-sunny",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:109,
      time:"9AM",
      icon:"ios-sunny",
      degree:"27\xb0",
      color:"#fedf32"
    },{  
      key:110,
      time:"10AM",
      icon:"ios-sunny",
      degree:"29\xb0",
      color:"#fedf32"
    },{  
      key:111,
      time:"11AM",
      icon:"ios-sunny",
      degree:"31\xb0",
      color:"#fedf32"
    },{  
      key:112,
      time:"12PM",
      icon:"ios-sunny",
      degree:"31\xb0",
      color:"#fedf32"
    },{  
      key:113,
      time:"1PM",
      icon:"ios-sunny",
      degree:"32\xb0",
      color:"#fedf32"
    },{  
      key:114,
      time:"2PM",
      icon:"ios-partly-sunny",
      degree:"32\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:115,
      time:"3PM",
      icon:"ios-partly-sunny",
      degree:"32\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:116,
      time:"4PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:117,
      time:"5PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:118,
      time:"6PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:119,
      time:"6:59 PM",
      icon:"ios-partly-sunny-outline",
      degree:"Sunset",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:120,
      time:"7PM",
      icon:"ios-cloudy-night",
      degree:"29\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:121,
      time:"8PM",
      icon:"ios-cloudy-night",
      degree:"29\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:122,
      time:"9PM",
      icon:"ios-cloudy-night",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:123,
      time:"10PM",
      icon:"ios-cloudy-night",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:124,
      time:"11PM",
      icon:"ios-cloudy",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:125,
      time:"12AM",
      icon:"ios-cloudy",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:126,
      time:"1AM",
      icon:"ios-cloudy",
      degree:"27\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:127,
      time:"2AM",
      icon:"ios-cloudy",
      degree:"27\xb0",
      color:"rgba(255,255,255,0.8)"
    }],
  days:[{  
      key:21,
      day:"Monday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:22,
      day:"Tuesday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:23,
      day:"Wednesday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:24,
      day:"Thursday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:25,
      day:"Friday",
      icon:"ios-rainy",
      high:32,
      low:25
    },{  
      key:26,
      day:"Saturday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:27,
      day:"Sunday",
      icon:"ios-rainy",
      high:32,
      low:24
    },{  
      key:28,
      day:"Monday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:29,
      day:"Tuesday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    }],
  info:"Today: Mostly cloudy currently. It's 28\xb0; the high today was forecase to be 32 \xb0.",
  rise:"6:52 AM",
  down:"6:59 PM",
  prop:"10%",
  humi:"94%",
  dir:"NE",
  speed:" 8 km/hr",
  feel:"15\xb0",
  rain:"0.0 cm",
  pres:"1,009 mb",
  sight:"9.7 km",
  uv:"0"

},{  
  key:1,
  city:"Kuala Lumpur",
  night:!1,
  bg:require('./imgs/w3.png'),
  abs:"Mostly Cloudy",
  degree:29,
  today:{  
    week:"Sunday",
    day:"Today",
    high:32,
    low:25
  },
  hours:[{  
      key:101,
      time:"Now",
      icon:"ios-moon",
      degree:"27\xb0",
      color:"rgba(255,255,255,1)"
    },{  
      key:102,
      time:"3AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:103,
      time:"4AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:104,
      time:"5AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:105,
      time:"6AM",
      icon:"ios-cloudy-night",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:106,
      time:"6:52 AM",
      icon:"ios-sunny-outline",
      degree:"Sunrise",
      color:"#fedf32"
    },{  
      key:107,
      time:"7AM",
      icon:"ios-partly-sunny",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:108,
      time:"8AM",
      icon:"ios-partly-sunny",
      degree:"26\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:109,
      time:"9AM",
      icon:"ios-sunny",
      degree:"27\xb0",
      color:"#fedf32"
    },{  
      key:110,
      time:"10AM",
      icon:"ios-sunny",
      degree:"29\xb0",
      color:"#fedf32"
    },{  
      key:111,
      time:"11AM",
      icon:"ios-sunny",
      degree:"31\xb0",
      color:"#fedf32"
    },{  
      key:112,
      time:"12PM",
      icon:"ios-sunny",
      degree:"31\xb0",
      color:"#fedf32"
    },{  
      key:113,
      time:"1PM",
      icon:"ios-sunny",
      degree:"32\xb0",
      color:"#fedf32"
    },{  
      key:114,
      time:"2PM",
      icon:"ios-partly-sunny",
      degree:"32\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:115,
      time:"3PM",
      icon:"ios-partly-sunny",
      degree:"32\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:116,
      time:"4PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:117,
      time:"5PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:118,
      time:"6PM",
      icon:"ios-partly-sunny",
      degree:"31\xb0",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:119,
      time:"6:59 PM",
      icon:"ios-partly-sunny-outline",
      degree:"Sunset",
      color:"rgba(255,255,255,0.9)"
    },{  
      key:120,
      time:"7PM",
      icon:"ios-cloudy-night",
      degree:"29\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:121,
      time:"8PM",
      icon:"ios-cloudy-night",
      degree:"29\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:122,
      time:"9PM",
      icon:"ios-cloudy-night",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:123,
      time:"10PM",
      icon:"ios-cloudy-night",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:124,
      time:"11PM",
      icon:"ios-cloudy",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:125,
      time:"12AM",
      icon:"ios-cloudy",
      degree:"28\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:126,
      time:"1AM",
      icon:"ios-cloudy",
      degree:"27\xb0",
      color:"rgba(255,255,255,0.8)"
    },{  
      key:127,
      time:"2AM",
      icon:"ios-cloudy",
      degree:"27\xb0",
      color:"rgba(255,255,255,0.8)"
    }],
  days:[{  
      key:21,
      day:"Monday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:22,
      day:"Tuesday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:23,
      day:"Wednesday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:24,
      day:"Thursday",
      icon:"ios-rainy",
      high:33,
      low:25
    },{  
      key:25,
      day:"Friday",
      icon:"ios-rainy",
      high:32,
      low:25
    },{  
      key:26,
      day:"Saturday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:27,
      day:"Sunday",
      icon:"ios-rainy",
      high:32,
      low:24
    },{  
      key:28,
      day:"Monday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    },{  
      key:29,
      day:"Tuesday",
      icon:"ios-partly-sunny",
      high:32,
      low:25
    }],
  info:"Today: Mostly cloudy currently. It's 28\xb0; the high today was forecase to be 32 \xb0.",
  rise:"6:52 AM",
  down:"6:59 PM",
  prop:"10%",
  humi:"94%",
  dir:"NE",
  speed:" 8 km/hr",
  feel:"15\xb0",
  rain:"0.0 cm",
  pres:"1,009 mb",
  sight:"9.7 km",
  uv:"0"
}];


class WeatherView extends Component {
  constructor() {
    super();
    this.state = this._initState();
  }
  
  _back() {
    this.props.navigator.pop();
  }

  _initState() {
    return {
      weather: weatherData
    }
  }

  render() {
    const slides = this.state.weather.map((elem, index) => {
      const hourView = elem.hours.map((hourElem, hourIndex) => {
        return (
          <View key={hourElem.key} style={styles.withinDayHoursBox}>
                  <Text style={hourIndex==0? styles.withinDayHoursTimeBold:styles.withinDayHoursTime}>{hourElem.time}</Text>
                  <Icon name={hourElem.icon} size={25} style={[styles.withinDayHoursIcon,{color:hourElem.color}]}></Icon>
                  <Text style={hourIndex==0? styles.withinDayHoursDegreeBold:styles.withinDayHoursDegree}>{hourElem.degree}</Text>
                </View>
        );
      });

      const dayView = elem.days.map((dayElem, dayIndex) => {
        return (
          <View key={dayElem.key} style={styles.withinWeekLine}>
            <View style={styles.withinWeekDay}>
              <Text style={styles.withinWeekDayText}>{dayElem.day}</Text>
            </View>
            <View style={styles.withinWeekIcon}>
              <Icon name={dayElem.icon}  style={styles.withinWeekIconIcon} size={25}></Icon>
            </View>
            <View style={styles.withinWeekDegree}>
              <Text style={styles.withinWeekHigh}>{dayElem.high}</Text>
              <Text style={elem.night?styles.withinWeekLowNight:styles.withinWeekLow}>{dayElem.low}</Text>
            </View>
          </View>
        );
      });

      return (
        <View key={elem.key}>
          <Image style={styles.image} source={elem.bg}></Image>
          <ScrollView style={styles.pageContainer}  showsVerticalScrollIndicator={false}>
            <View style={styles.headInfo}>
              <Text style={styles.city}>{elem.city}</Text>
              <Text style={styles.abs}>{elem.abs}</Text>
              <Text style={styles.degree}>{elem.degree}</Text>
              <Text style={styles.circle}>°</Text>
            </View>
            <View style={styles.withinDay}>
              <View style={styles.withinDayGeneral}>
                <View style={styles.withinDayHead}>
                  <Text style={styles.withinDayWeek}>{elem.today.week}</Text>
                  <Text style={styles.withinDayDay}>{elem.today.day}</Text>
                </View>
                <View style={styles.withinDayTail}>
                  <Text style={styles.withinDayHigh}>{elem.today.high}</Text>
                  <Text style={elem.night?styles.withinDayLowNight:styles.withinDayLow}>{elem.today.low}</Text>
                </View>
              </View>
              <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.withinDayHoursContainer}> 
                <View style={styles.withinDayHours}>
                  {hourView}
                </View>
            </ScrollView>
            <View style={styles.withinWeek}>
              {dayView}
            </View>
            <View style={styles.weatherInfo}>
              <Text style={styles.weatherInfoText}>{elem.info}</Text>
            </View>
            <View style={styles.weatherOther}>
              <View style={styles.weatherOtherSection}>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Sunrise:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.rise}</Text>
                </View>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Sunset:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.down}</Text>
                </View>
              </View>
              <View style={styles.weatherOtherSection}>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Chance of Rain:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.prop}</Text>
                </View>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Humidity:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.humi}</Text>
                </View>
              </View>
              <View style={styles.weatherOtherSection}>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Wind:</Text>
                  <Text style={styles.weatherOtherValue}><Text style={{fontSize:10}}>{elem.dir}</Text>{elem.speed}</Text>
                </View>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Feels Like:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.feel}</Text>
                </View>
              </View>
              <View style={styles.weatherOtherSection}>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Precipitation:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.rain}</Text>
                </View>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Pressure:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.pres}</Text>
                </View>
              </View>
              <View style={styles.weatherOtherSection}>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>Visibility:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.sight}</Text>
                </View>
                <View style={styles.weatherOtherLine}>
                  <Text style={styles.weatherOtherTitle}>UV Index:</Text>
                  <Text style={styles.weatherOtherValue}>{elem.uv}</Text>
                </View>
              </View>
            </View>
            </View>
          </ScrollView>
        </View>
      );
    });

    return(
      <View>
        <Swiper 
        style={styles.wrapper} 
        showsButtons={false}
        paginationStyle={{bottom:10, paddingTop:10, borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel}}
        dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
                {slides}
        </Swiper>
        <TouchableHighlight onPress={()=>this._back()} style={styles.backBtn}>
          <Icon size={17} name="ios-list-outline" style={styles.backBtnIcon}></Icon>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer:{
    backgroundColor:"transparent",
    position: "absolute",
    width: Util.size.width,
    left:0,
    top: 20,
    height: Util.size.height - 53
  },
  headInfo:{
    paddingTop:70,
    alignItems:"center",
    paddingBottom:60,
  },
  city:{
    fontSize: 25,
    color:"#fff",
    paddingBottom: 5,
    backgroundColor:"transparent"
  },
  abs:{
    fontSize:15,
    color:"#fff",
    backgroundColor:"transparent"
  },
  degree:{
    fontSize:85,
    color:"#fff",
    fontWeight: "100",
  },
  circle:{
    fontSize:35,
    color:"#fff",
    fontWeight: "300",
    position:"absolute",
    top:130,
    right:Util.size.width/2-55,
  },
  withinDayGeneral:{
    flexDirection:"row",
    width: Util.size.width,
  },
  withinDayHead:{
    flex:1,
    flexDirection:"row",
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  withinDayTail:{
    flex:1,
    flexDirection:"row",
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  withinDayWeek:{
    fontSize:15,
    color: "#fff",
    fontWeight: "400",
    width:60,
  },
  withinDayDay:{
    fontSize:15,
    color: "#fff",
    fontWeight: "300",
    width:50,
  },
  withinDayHigh:{
    fontSize:16,
    color: "#fff",
    fontWeight: "200",
    width:30,
  },
  withinDayLow:{
    fontSize:16,
    color: "#eee",
    fontWeight: "200",
    width:30,
  },
  withinDayLowNight:{
    fontSize:16,
    color: "#aaa",
    fontWeight: "200",
    width:30,
  },
  withinDayHoursBox:{
    width:55,
  },
  withinDayHoursContainer:{
    marginTop:3,
    borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel,
    borderBottomColor:"rgba(255,255,255,0.7)",borderBottomWidth:Util.pixel
  },
  withinDayHours:{
    paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,
    flexDirection:"row",
    flexWrap:"nowrap"
  },
  withinDayHoursTime:{
    color:"#fff",
    fontSize:12,
    textAlign:"center"
  },
  withinDayHoursTimeBold:{
    color:"#fff",
    fontSize:13,
    textAlign:"center",   
    fontWeight:"500",
  },
  withinDayHoursIcon:{
    textAlign:"center",
    paddingTop:5,
  },
  withinDayHoursDegree:{
    color:"#fff",
    fontSize:14,
    paddingTop:5,
    textAlign:"center"
  },
  withinDayHoursDegreeBold:{
    color:"#fff",
    fontSize:15,
    textAlign:"center",
    paddingTop:5,
    fontWeight:"500"
  },
  withinWeek:{
    paddingTop:5
  },
  withinWeekLine:{
    flexDirection:"row",
    height: 28
  },
  withinWeekDay:{
    justifyContent:"center",
    alignItems:"flex-start",
    flex:1,
  },
  withinWeekIcon:{
    justifyContent:"center",
    alignItems:"center",
    flex:1, 
  },
  withinWeekDegree:{
    justifyContent:"flex-end",
    alignItems:"center",
    flex:1,
    flexDirection:"row",
    paddingRight:25,
  },
  withinWeekHigh:{
    color:"#fff",
    width:35,
    fontSize:16,
    textAlign:"right"
  },
  withinWeekIconIcon:{
    color:"#fff"
  },
  withinWeekLow:{
    color:"#eee",
    width:35,
    fontSize:16,
    textAlign:"right"
  },
  withinWeekLowNight:{
    color:"#aaa",
    width:35,
    fontSize:16,
    textAlign:"right"
  },
  withinWeekDayText:{
    color:"#fff",
    paddingLeft:20,
    fontSize:15,
  },
  weatherInfo:{
    marginTop:5,
    borderTopColor:"rgba(255,255,255,0.7)", borderTopWidth:Util.pixel,
    borderBottomColor:"rgba(255,255,255,0.7)", borderBottomWidth:Util.pixel
  },
  weatherInfoText:{
    color:"#fff",
    fontSize:15,
    paddingTop:10,paddingLeft:20,paddingBottom:10,paddingRight:20,
  },
  weatherOther:{
    paddingTop:10
  },
  weatherOtherSection:{
    paddingBottom:10
  },
  weatherOtherLine:{
    flexDirection:"row",
    flexWrap:"nowrap"
  },
  weatherOtherTitle:{
    width: Util.size.width/2-15,
    color:"#fff",
    textAlign:"right",
    fontSize: 15,
  },
  weatherOtherValue:{
    width: Util.size.width/2,
    paddingLeft:15,
    flex:1,
    fontSize: 15,
    color:"#fff",
  },
  backBtn:{
    position:"absolute", 
    right:20,bottom:7
  },
  backBtnIcon:{
    color:"#fff"
  },
})