import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';

class MyFirstApp extends Component {
  render() { 
    return(
      <Text>Hello mobile application</Text>
      <Text>Im new mobile developer</Text>
    );
  }
}

AppRegistry.registerComponent("FirstMobileApplication", () => MyFirstApp);
