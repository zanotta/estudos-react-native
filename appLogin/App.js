import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Logo from './components/logo';
import Form from './components/form';

export default class App extends Component {
	render() {
		return (
		<View style={styles.container}>
			<Logo />
			<Form />
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ecf0f1',
	}
});
