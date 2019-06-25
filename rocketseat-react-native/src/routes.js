import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createStackNavigator({
	Main,
	Product
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#2ecc71'
		},
		headerTitleStyle: {
			textAlign: 'center'
		},
		headerTintColor: '#FFF'//texto
	},
});

export default createAppContainer(Routes);