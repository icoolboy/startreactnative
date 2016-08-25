import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

class MyThirdApp extends Component {
  render() {
    return(
      <View style={styles.Main}>
        <View style={[styles.SubBox, styles.FirstBox]} />
        <View style={[styles.SubBox, styles.SecondBox]} />
        <View style={[styles.SubBox, styles.ThirdBox]} />
        <View style={[styles.SubBox, styles.FourthBox]} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
	Main : {
		flex : 1,
		flexDirection : 'column',
		justifyContent : 'space-between'
	},
	SubBox : {
		width : 50,
		height : 60,
	},
	FirstBox : {
		backgroundColor : 'green'
	},
	SecondBox : {
		backgroundColor : '#fff000'
	},
	ThirdBox : {
		backgroundColor : 'blue'
	}, 
	FourthBox : {
		backgroundColor : 'red'
	}
});

AppRegistry.registerComponent("MyThirdApplication", () => MyThirdApp);
