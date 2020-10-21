import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../component/styles.js';
import { Crypto } from '../utils/crypto';

export const DecryptScreen = ({ navigation }) => {
	const [cipher, setCipher] = React.useState();
	const [password, setPassword] = React.useState();
	const [output, setOutput] = React.useState("Decrypted Output...");

	const decrypt = React.useCallback(async () => {
		if(cipher && password) {
			let salt = cipher.split("$$")[0];
			let iv = cipher.split("$$")[1];
			let ciphertext = Crypto.hexToBase64(cipher.split("$$")[2]);
			let key = await Crypto.generateKey(password, salt, 5000, 256);
			let encryptedData = { cipher:ciphertext, iv:iv };
			let decryptedData = await Crypto.decryptData(encryptedData, key);
			setOutput(decryptedData);
		}
	}, [cipher, password]);

	function copy() {
		if(output) {
			Clipboard.setString(output);
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar style="light"/>
			<View style={styles.bannerView}>
				<Text style={styles.bannerText}>Decrypt</Text>
			</View>
			<TextInput style={styles.textInput} placeholder="Cipher..." placeholderTextColor="#b3b3b3" onChangeText={(value) => setCipher(value)}/>
			<TextInput style={styles.textInput} placeholder="Password..." placeholderTextColor="#b3b3b3" onChangeText={(value) => setPassword(value)}/>
			<TouchableOpacity style={styles.actionButton} onPress={decrypt}>
				<Text style={styles.actionText}>Decrypt</Text>
			</TouchableOpacity>
			<TextInput multiline style={styles.textOutput} value={output} editable={false}/>
			<TouchableOpacity style={[styles.actionButton, { marginTop:20 }]} onPress={copy}>
				<Text style={styles.actionText}>Copy</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
				<Image style={styles.backImage} source={require('../assets/arrow-left.png')}/>
			</TouchableOpacity>
		</View>
	);
}