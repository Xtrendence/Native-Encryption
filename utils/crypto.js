import { NativeModules } from 'react-native';
import { decode as atob, encode as btoa } from 'base-64';

export class Utils {
	 static AES = NativeModules.Aes;

	 static base64ToHex(str) {
		const raw = atob(str);
		let result = "";
		for(let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += (hex.length === 2 ? hex : '0' + hex);
		}
		return result.toUpperCase();
	}

	static generateKey(password, salt, cost, length) {
		return this.AES.pbkdf2(password, salt, cost, length);
	}

	static generateSalt() {
	 	return this.AES.sha256(Utils.AES.randomKey(32).toString()).toString();
	}

	static encryptData(text, key) {
		return this.AES.randomKey(16).then(iv => {
			return this.AES.encrypt(text, key, iv).then(cipher => {
				cipher = this.base64ToHex(cipher).toString().toLowerCase();
				return { cipher, iv };
			});
		});
	}

	static decryptData(encryptedData, key) {
		return this.AES.decrypt(encryptedData.cipher, key, encryptedData.iv);
	}
}
