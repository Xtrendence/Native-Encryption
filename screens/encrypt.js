import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../component/styles.js';

export const EncryptScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Encrypt.js</Text>
			<StatusBar style="light"/>
		</View>
	);
}