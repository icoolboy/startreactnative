import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

class MyApp extends Component {
	render() {
		return(
			<View style={styles.Main}>
				<View style={styles.Boxs}/>
				<View style={styles.Boxs} />
				<View style={styles.Boxs}/>
				<View style={styles.Boxs}/>
				<View style={styles.Boxs}/>
				<View style={styles.Boxs}/>
				<View style={styles.Boxs}/>
				<View style={styles.Boxs}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Main : {
		flex : 1,
		flexDirection : 'column',
		justifyContent : 'center',
		alignItems : 'center'
	},
	Boxs : {
		width : 30,
		height : 30,
		backgroundColor : 'red'
	}
});

AppRegistry.registerComponent("my app", () => MyApp);
