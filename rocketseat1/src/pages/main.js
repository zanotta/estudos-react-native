import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class Main extends Component {

	static navigationOptions = {
		title: 'JSHunty',
	};

	render(){
		return(
			<View>
				<StatusBar backgroundColor="#27ae60" barStyle="light-content" />
				<Text>Página Inicial</Text>
			</View>
		);
	}

}