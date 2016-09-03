/*
 * Day 1
 * A stop watch
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Util from './../Util';

/**
 * TimerFace displays the TotalTime & the current LapseTime
 */
class TimerFace extends Component {
  static propTypes = {
    totalTime: React.PropTypes.string.isRequired,
    sectionTime: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.tfContainer}>
        <Text style={styles.tfSectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.tfTotalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}

class TimerControl extends Component {
  static propTypes = {
    startTimer: React.PropTypes.func.isRequired,
    stopTimer: React.PropTypes.func.isRequired,
    resetTimer: React.PropTypes.func.isRequired,
    lapseTimer: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = this._getStates('stopped');
  }

  _getStates(mode) {
    switch(mode) {
      case 'started': // show stop
        return {
          startStopText: 'Stop',
          resetLapseText: 'Lapse',
        };
      case 'stopped': // show reseted
        return {
          startStopText: 'Start',
          resetLapseText: 'Reset',
        };
    }
  }

  _startStop() {
    if (this.props.isStopped) { // is currently stopped
      this.props.startTimer();
      this.setState(this._getStates('started'));
    } else {
      this.props.stopTimer();
      this.setState(this._getStates('stopped'));
    }
  }

  _resetLapse() {
    if (this.props.isStopped) { // reset
      this.props.resetTimer();
    } else { // lapse
      this.props.lapseTimer();
    }
  }

  render() {
    return (
      <View style={styles.tcContainer}>
        <View style={{flex:1, alignItems:'flex-start'}}>
          <TouchableHighlight style={styles.btnResetLapse} onPress={()=>this._resetLapse()}>
            <Text style={styles.btnResetLapseText}>{this.state.resetLapseText}</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <TouchableHighlight style={styles.btnStartStop} onPress={()=>this._startStop()}>
            <Text style={styles.btnStartStopText}>{this.state.startStopText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class TimerLapse extends Component {
  static PropTypes = {
    lapses: React.PropTypes.array.isRequired,
  };

  render() {
    let dataSource = (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 }))
              .cloneWithRows(this.props.lapses);

    return (
      <ListView
        style={styles.lapseList}
        dataSource={dataSource}
        enableEmptySections={true}
        renderRow={(row)=>
          <View style={styles.lapseItem}>
            <Text style={styles.lapseItemTitle}>{row.title}</Text>
            <Text style={styles.lapseItemTime}>{row.time}</Text>
          </View>
        }/>
    );
  }

}

export default class extends Component {
  constructor() {
    super();
    this.state = this._initState();
  }

  componentWillUnmount() {
    this._stopTimer();
    this._resetTimer();
  }

  _formatTime(time) {
    // make it all look nice
    let minute = Math.floor(time / (60 * 1000));
    let second = Math.floor((time - 60 * 1000 * minute)/1000);
    let millis = Math.floor((time % 1000) / 10);
    return  (minute < 10 ? '0' + minute: minute) + ':' +
            (second < 10 ? '0' + second: second) + '.' +
            (millis < 10 ? '0' + millis: millis);
  }

  _initState() {
    return {
      isStopped: true,
      initialTimestamp: 0,
      totalTime: 0,
      pausedTime: 0,

      lapseTimestamp: 0,
      lapseTime: 0,
      pausedLapseTime: 0,

      lapses:[],
    };
  }

  _lapseTimer() {
    let lapser = { title: 'Lap ' + (this.state.lapses.length + 1), time: this._formatTime(this.state.lapseTime) };
    this.setState({
      lapseTimestamp: (new Date()).getTime(),
      lapses: [ lapser, ...this.state.lapses ],
      lapseTime: 0,
      pausedLapseTime: 0,
    });
  }

  _resetTimer() {
    this.setState(this._initState());
  }

  _stopTimer() {
    this.setState({
      isStopped: true
    })
  }

  _startTimer() {
    let startTimestamp = (new Date()).getTime();
    this.setState({
      isStopped: false,
      initialTimestamp: startTimestamp,
      lapseTimestamp: startTimestamp,
    })

    let interval = setInterval(() => {
      let currentTimestamp = (new Date()).getTime();
      this.setState({
        totalTime: this.state.pausedTime + (currentTimestamp - this.state.initialTimestamp),
        lapseTime: this.state.pausedLapseTime + (currentTimestamp - this.state.lapseTimestamp),
      });

      if (this.state.isStopped) {
        this.setState({
          pausedTime: this.state.totalTime,
          pausedLapseTime: this.state.lapseTime,
        });
        // stop the scheduler
        clearInterval(interval);
      };
    }, 100);
  }

  render() {
      return (
        <View style={styles.container}>
          <TimerFace
            totalTime={this._formatTime(this.state.totalTime)}
            sectionTime={this._formatTime(this.state.lapseTime)}
          />
          <TimerControl
            startTimer={()=>this._startTimer()}
            stopTimer={()=>this._stopTimer()}
            lapseTimer={()=>this._lapseTimer()}
            resetTimer={()=>this._resetTimer()}
            isStopped={this.state.isStopped}
          />
          <TimerLapse lapses={this.state.lapses}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:65,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  tfContainer:{
    width: Util.size.width,
    paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
    backgroundColor: "#fff",
    borderBottomWidth: 1, borderBottomColor:"#ddd",
    height: 170,
  },
  tfSectionTime:{
    fontSize: 20,
    fontWeight:"100",
    paddingRight: 30,
    color: "#555",
    position:"absolute",
    left:Util.size.width-140,
    top:30
  },
  tfTotalTime:{
    fontSize: Util.size.width === 375? 70:60,
    fontWeight: "100",
    color: "#222",
    paddingLeft:20
  },
  tcContainer:{
      width: Util.size.width,
      height: 100,
      flexDirection:"row",
      paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
  },
  btnStartStop:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnResetLapse:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStartStopText:{
    fontSize:14,
    backgroundColor:"transparent"
  },
  btnResetLapseText:{
    fontSize:14,
    backgroundColor:"transparent",
    color:"#555"
  },
  lapseList:{
    width: Util.size.width,
    height: Util.size.height - 350,
    paddingLeft: 15,
  },
  lapseItem:{
    height: 40,
    borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
    paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  lapseItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  lapseItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"right",
    paddingRight:20,
    color:"#222"
  },
});
