import { NativeModules } from 'react-native';
import { decode, encode } from 'base-64';

export class Crypto {
	 static AES = NativeModules.Aes;

	 static base64ToHex(str) {
		const raw = decode(str);
		let result = "";
		for(let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += (hex.length === 2 ? hex : '0' + hex);
		}
		return result.toUpperCase();
	}

	static hexToBase64(hex) {
		return encode(hex.match(/\w{2}/g).map(function(a) {
			return String.fromCharCode(parseInt(a, 16));
		}).join(""));
	}

	static generateKey(password, salt, cost, length) {
		return this.AES.pbkdf2(password, salt, cost, length);
	}

	static generateSalt(password) {
		return this.AES.sha256(password.shuffle());
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

String.prototype.shuffle = function () {
    let a = this.split(""), n = a.length;
    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
