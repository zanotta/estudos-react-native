import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
	<Image
		style={styles.logo}
		source={require('../assets/img/logo.png')}
	/>
);

const styles = StyleSheet.create({
	logo: {
		marginTop: 50,
		marginBottom: 30
	}
});

export default Logo;