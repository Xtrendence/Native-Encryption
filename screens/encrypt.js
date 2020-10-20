import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../component/styles.js';
import { Crypto } from '../utils/crypto';

export const EncryptScreen = ({ navigation }) => {
	const [plaintext, setPlaintext] = React.useState();

	return (
		<View style={styles.container}>
			<StatusBar style="light"/>
			<View style={styles.bannerView}>
				<Text style={styles.bannerText}>Encrypt</Text>
			</View>
			<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
				<Image style={styles.backImage} source={require('../assets/arrow-left.png')}/>
			</TouchableOpacity>
		</View>
	);
}