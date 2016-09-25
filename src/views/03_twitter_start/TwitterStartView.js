'use strict';

import React, { Component } from 'react';

import {
  View, 
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,

Animated,
Easing,
RefreshControl,
TabBarIOS  
} from 'react-native';

import Util from './../../Util';
import Icon from 'react-native-vector-icons/Ionicons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);


export default () => {
  return {
    class: TwitterStartView,
    title: 'Twitter Start Animation',
  }
}

class Entrance extends Component{
  static propTypes = {
    hideThis: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
       transformAnim: new Animated.Value(1), 
       opacityAnim: new Animated.Value(1), 
     };
  }

  componentDidMount() {
    Animated.timing(         
       this.state.transformAnim,    
       {toValue: 50,
        duration: 1200,
        delay:2000,
        easing: Easing.elastic(2),
      },          
    ).start();
    Animated.timing(         
       this.state.opacityAnim,    
       {toValue: 0,
        duration: 800,
        easing: Easing.elastic(1),
        delay:2200,
      },          
     ).start();
    setTimeout(() => {
      this.props.hideThis();
    }, 3300);              
  }

  render () {
    return(
      <Animated.View style={[styles.entrance,{opacity:this.state.opacityAnim}]}>
        <AnimatedIcon size={60} style={[styles.twitter,{transform:[{scale:this.state.transformAnim}]}]} name="logo-twitter"></AnimatedIcon>
      </Animated.View>
    )
  }
}

class TwitterPost extends Component{
  constructor() {
    super();
    this.state = {
      isRefreshing: false,
    };
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 1000);
  }

  render() {
    return(
      <ScrollView
      style={styles.twitterPostContainer}
      refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={()=>this._onRefresh()}
            tintColor="#ddd"/>}>
            <Image source={require('./imgs/twitts.png')} style={{width:Util.size.width, height:Util.size.height-110}}></Image>
      </ScrollView>
    )
  }
}

class TwitterFlow extends Component {
  render() {
    return(
      <View>
        <View style={styles.nav}>
          <View style={styles.navLeft}>
            <Icon name="ios-person-add" size={23} style={{color:"#1b95e0", paddingLeft:10}}></Icon>
          </View>
          <View style={styles.navMid}>
            <Icon name="logo-twitter" size={27} style={{color:"#1b95e0"}}></Icon>
          </View>
          <View style={styles.navRight}>
            <Icon name="ios-search" size={23} style={{color:"#1b95e0", width:30}}></Icon>
            <Icon name="ios-create-outline" size={23} style={{color:"#1b95e0", width:30, paddingRight:10}}></Icon>
          </View>
        </View>
        <TwitterPost/>
      </View>
    )
  }  
}

class TwitterTab extends Component {
  constructor()  {
    super();
    this.state = {
      selected: 'Timelines'
    }
  }

  switchTab(tabName) {
    this.setState({
      selected: tabName
    });
  }

  render() {
    return (
      <TabBarIOS
        barTintColor="#fff"
        tintColor="#1b95e0">
        <Icon.TabBarItem
          title="Timelines"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={ () => this.switchTab('Timelines') }
          selected={ this.state.selected === 'Timelines' }>
          <TwitterFlow/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Notifications"
          iconName="ios-notifications-outline"
          selectedIconName="ios-notifications"
          onPress={ () => this.switchTab('Notifications') }
          selected={ this.state.selected === 'Notifications'}>
          <TwitterFlow/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Messages"
          iconName="ios-mail-outline"
          selectedIconName="ios-mail"
          onPress={ () => this.switchTab('Messages') }
          selected={ this.state.selected === 'Messages'}>
          <TwitterFlow/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Me"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          onPress={ () => this.switchTab('Me') }
          selected={ this.state.selected === 'Me'}>
          <TwitterFlow/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }

}

class TwitterStartView extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  hideEntrance() {
    this.setState({
      show: false
    });
  }

  render() {
    let entrance = this.state.show ? <Entrance hideThis={ ()=> this.hideEntrance() } /> : <View/>
    return (
      <View style={styles.twitterContainer}>
        <TwitterTab/>
        {entrance}
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  itemWrapper:{
    backgroundColor: '#fff'
  },
  twitterContainer:{
    width: Util.size.width,
    height: Util.size.height
  },
  entrance:{
    position: "absolute",
    top:0, left:0,
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor:"#1b95e0",
    alignItems:"center",
    justifyContent:"center"
  },
  twitter:{
    color:"#fff",
    position:"relative",
    top: -20,
    textAlign: "center"
  },
  nav:{
    flexDirection: "row",
    paddingTop: 30,
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ddd",
    paddingBottom:5,
    backgroundColor:"#fff"
  },
  navLeft:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"center",
  },
  navMid:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  navRight:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
    flexDirection:"row"
  },
  twitterPostContainer:{
    width: Util.size.width,
    height:Util.size.height-90,
    position:"relative",
    top:-20
  },
});