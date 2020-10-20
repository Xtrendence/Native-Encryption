import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../component/styles.js';

export default function App() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={[styles.navigationButton, { marginBottom:10 }]}>
				<Text style={styles.navigationText}>Encrypt</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.navigationButton, { marginTop:10 }]}>
				<Text style={styles.navigationText}>Decrypt</Text>
			</TouchableOpacity>
			<StatusBar style="light"/>
		</View>
	);
}
