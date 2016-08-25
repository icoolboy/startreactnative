import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

class MySecondApp extends Component {
  render() {
    return(
      <View style={{flex : 1, flexDirection : 'column', justifyContent : 'space-between'}}>
        <View style={{width : 40, height : 60, backgroundColor : '#ff80ff'}} />
        <View style={{width : 40, height : 60, backgroundColor : '#ff00ff'}}/>
        <View style={{width : 40, height : 60, backgroundColor : 'red'}}/>
        <View style={{width : 40, height : 60, backgroundColor : 'blue'}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent("MySecondApplication", () => MySecondApp);
