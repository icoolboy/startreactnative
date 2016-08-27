import React, {Component} from 'react';
import {AppRegistry, View, Image, Text, TouchableHighlight, Alert, TextInput, StyleSheet} from 'react-native';

var alertMessage = "Hi my friend i'm erfan"

class ChatApp extends Component {
	render() {
		return(
			<View style={styles.mainSection}>
				<View style={styles.headerSection} />
				<View style={styles.centerSection}>
					<Image source={{uri : 'https://maxcdn.icons8.com/Share/icon/Logos//facebook_messenger1600.png'}} 
					style={{width : 200, height : 180}}
					/>
					<TextInput 
					style={[styles.textInputs, styles.topMarginer]} 
					placeholder="Username" 
					placeholderTextColor="#5691b8" 
					underlineColorAndroid="#1e90ff"
					maxLength={10}/>
					
					<TextInput 
					style={styles.textInputs} 
					placeholder="******" 
					placeholderTextColor="#5691b8" 
					underlineColorAndroid="#1e90ff" 
					secureTextEntry={true}
					maxLength={10}/>
					<TouchableHighlight style={styles.loginBtn} 
					onPress={() => Alert.alert(
						'My Alert Message',
						alertMessage,
					)}>
						<Text style={styles.loginBtnText}>LOGIN ME</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.footerSection}>
					<Text style={styles.footerText}>Lost password ?</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainSection : {
		flex : 1
	},
	headerSection : {
		flex : 1,
		backgroundColor : '#fff'
	},
	centerSection : {
		flex : 6,
		backgroundColor : '#fff',
		flexDirection : 'column',
		alignItems : 'center'
	},
	footerSection : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#fff'
	},
	footerText : {
		color : '#4f93bd'
	},
	loginBtn : {
		width : 200,
		height : 45,
		marginTop : 10,
		flexDirection : 'row',
		backgroundColor : '#48BBEC',
		alignSelf : 'center',
		justifyContent : 'center'
	},
	loginBtnText : {
		fontSize : 18,
		color : '#fff',
		alignSelf : 'center'
	},
	textInputs : {
		width : 180, 
		height : 40, 
		color : '#00008b'
	},
	topMarginer : {
		marginTop : 10
	}
});

AppRegistry.registerComponent("ChatApplication", () => ChatApp);
