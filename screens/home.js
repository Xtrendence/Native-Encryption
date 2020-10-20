import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { styles } from '../component/styles.js';

export default class App extends React.Component {
	openSourceURL = () => {
		Linking.openURL('https://www.github.com/Xtrendence/Native-Encryption').catch(err => console.error("Couldn't load page.", err));
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar style="light"/>
				<View style={styles.bannerView}>
					<Text style={styles.bannerText}>AES-256 Encryption/Decryption</Text>
				</View>
				<TouchableOpacity style={[styles.navigationButton, { marginBottom:10 }]} onPress={() => {  }}>
					<Text style={styles.navigationText}>Encrypt</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.navigationButton, { marginTop:10 }]} onPress={() => {  }}>
					<Text style={styles.navigationText}>Decrypt</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sourceButton} onPress={this.openSourceURL}>
					<Image style={styles.sourceImage} source={require('../assets/github.png')}/>
				</TouchableOpacity>
			</View>
		);
	}
}