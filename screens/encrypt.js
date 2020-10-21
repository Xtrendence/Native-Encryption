import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, Clipboard } from 'react-native';
import { styles } from '../component/styles.js';
import { Crypto } from '../utils/crypto';

export const EncryptScreen = ({ navigation }) => {
	const [plaintext, setPlaintext] = React.useState();
	const [password, setPassword] = React.useState();
	const [output, setOutput] = React.useState("Encrypted Output...");

	const encrypt = React.useCallback(async () => {
		if(plaintext && password && plaintext.toString().trim() !== "" && password.toString().trim() !== "") {
			try {
				let salt = await Crypto.generateSalt(password);
				let key = await Crypto.generateKey(password, salt, 5000, 256);
				let encryptedData = await Crypto.encryptData(plaintext, key);
				setOutput(salt + "$$" + encryptedData.iv + "$$" + encryptedData.cipher);
			}
			catch(e) {
				setOutput("Error..." + e);
			}
		}
	}, [plaintext, password]);

	function copy() {
		if(output) {
			Clipboard.setString(output);
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar style="light"/>
			<View style={styles.bannerView}>
				<Text style={styles.bannerText}>Encrypt</Text>
			</View>
			<TextInput style={styles.textInput} placeholder="Text..." placeholderTextColor="#b3b3b3" onChangeText={(value) => setPlaintext(value)}/>
			<TextInput style={styles.textInput} placeholder="Password..." placeholderTextColor="#b3b3b3" onChangeText={(value) => setPassword(value)}/>
			<TouchableOpacity style={styles.actionButton} onPress={encrypt}>
				<Text style={styles.actionText}>Encrypt</Text>
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