import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../component/styles.js';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Encrypt.js</Text>
			<StatusBar style="light"/>
		</View>
	);
}