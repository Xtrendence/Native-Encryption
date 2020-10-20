import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen	 } from './home';
import { EncryptScreen } from './encrypt';
import { DecryptScreen } from './decrypt';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{title:'Home', headerShown:false}}></Stack.Screen>
				<Stack.Screen name="Encrypt" component={EncryptScreen} options={{title:'Encrypt', headerShown:false}}></Stack.Screen>
				<Stack.Screen name="Decrypt" component={DecryptScreen} options={{title:'Decrypt', headerShown:false}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}