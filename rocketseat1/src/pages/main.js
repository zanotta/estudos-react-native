import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {

	static navigationOptions = {
		title: 'JSHunty',
	};

	state = {
		docs: [],
	};

	//Padrão de funções default React
	componentDidMount(){
		this.loadProducts();
	}

	//Usamos arrow function para poder usar o contexto this dentro da função
	//Arrow function herda o escopo do objeto pai
	loadProducts = async () => {

		const response = await api.get('/products');
		const { docs } = response.data;

		this.setState({docs: docs});

	};


	//Parenteses = return direto
	renderItem = ({ item }) => (

		//TouchableOpacity = botão que recebe opacidade quando clicado
		<View style={styles.productContainer}>
			<Text style={styles.productTitle}>{item.title}</Text>
			<Text style={styles.productDescription}>{item.description}</Text>
			<TouchableOpacity style={styles.productButton} onPress={() => {}}>
				<Text style={styles.productButtonText}>Acessar</Text>
			</TouchableOpacity>
		</View>
	);

	render(){
		return(
			<View style={styles.container}>
				<StatusBar backgroundColor="#27ae60" barStyle="light-content" />
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={item => item._id}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA'
	},
	list: {
		padding: 20,
	},
	productContainer: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 5,
		padding: 20,
		marginBottom: 20,
	},
	productTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333'
	},
	productDescription: {
		fontSize: 16,
		color: '#999',
		marginTop: 5,
		lineHeight: 24
	},
	productButton: {
		height: 42,
		borderColor: '#2ecc71',
		backgroundColor: '#2ecc71',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginTop: 10
	},
	productButtonText: {
		fontSize: 16,
		color: '#FFF',
	}
});