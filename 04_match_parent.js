import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

class MyApp extends Component {
	render() {
		return(
			<View style={styles.Main}>
				<View style={styles.FirstView}/>
				<View style={styles.SecondView}/>
				<View style={styles.ThirdView}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Main : {
		flex : 1
	},
	FirstView : {
		flex : 1,
		backgroundColor : 'red'
	},
	SecondView : {
		flex : 2,
		backgroundColor : 'blue'
	},
	ThirdView : {
		flex : 3,
		backgroundColor : 'green'
	}
	
});

AppRegistry.registerComponent("myapplication", () => MyApp);
