import React from 'react';
import { TextInput, View, StyleSheet, Button, Vibration} from 'react-native';

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

		<Button
			style={styles.button}
			onPress={this.startVibration}
			title="Login"
			color="#3498db"
			accessibilityLabel="Login Elo"
		/>
	</View>
);

const styles = StyleSheet.create({
	input: {
		width: 200,
		height: 40,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#bdc3c7',
		backgroundColor: '#bdc3c7',
		color: '#FFF',
		textAlign: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	button: {
		marginTop: 10,
		borderRadius: 5,
	}
});

export default Form;