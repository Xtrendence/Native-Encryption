import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { styles } from '../component/styles.js';
import { EncryptScreen } from './encrypt';
import { DecryptScreen } from './decrypt';

const Stack = createStackNavigator();

function openSourceURL() {
	Linking.openURL('https://www.github.com/Xtrendence/Native-Encryption').catch(error => console.error("Couldn't load page.", error));
}

export const HomeScreen = ({ navigation }) => {	
	return (
		<View style={styles.container}>
			<StatusBar style="light"/>
			<View style={styles.bannerView}>
				<Text style={styles.bannerText}>AES-256 Encryption/Decryption</Text>
			</View>
			<TouchableOpacity style={[styles.navigationButton, { marginBottom:10 }]} onPress={() => navigation.navigate('Encrypt')}>
				<Text style={styles.navigationText}>Encrypt</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.navigationButton, { marginTop:10 }]} onPress={() => navigation.navigate('Decrypt')}>
				<Text style={styles.navigationText}>Decrypt</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.sourceButton} onPress={openSourceURL}>
				<Image style={styles.sourceImage} source={require('../assets/github.png')}/>
			</TouchableOpacity>
		</View>
	);
}

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