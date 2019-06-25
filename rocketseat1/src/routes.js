import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Routes = createStackNavigator({
	Main,
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