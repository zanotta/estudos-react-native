import React from 'react';
import { TextInput, View, StyleSheet, Vibration, TouchableOpacity, Text } from 'react-native';

startVibration = () => {
	Vibration.vibrate(1000)
}

const Form = () => (
	<View>
		<TextInput
			style={styles.input}
			placeholder="USUÁRIO"
			autoCapitalize={'characters'}
		/>

		<TextInput
			style={styles.input}
			placeholder="SENHA"
			secureTextEntry={true}
		/>

		<TouchableOpacity 
			onPress={this.startVibration}
			style={styles.button}
		>
			<Text style={styles.buttonText}>LOGIN</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	input: {
		width: 250,
		height: 40,
		borderWidth: 1,
		borderColor: '#bdc3c7',
		backgroundColor: '#FFF',
		color: '#666',
		textAlign: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	button: {
		marginTop: 20,
		height: 40,
		backgroundColor: '#3498db',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#2980b9',
		borderBottomWidth: 5,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 16,
	},
	logo: {
		marginTop: 20,
		marginBottom: 30
	}
});

export default Form;