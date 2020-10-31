class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw 'ERROR';
        message = message.toUpperCase();
        key = key.toUpperCase();
        let counter = 0;
        let strSymbol = '';
        let encStr = '';
        for (let i = 0; i < message.length; i++) {
            if (key[counter] === undefined) {
                counter = 0;
            }
            if (message[i] === ' ') {
                encStr += ' ';
            } else if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) { // 65 - the character code "A"; 90 - the character code "Z"
                encStr += message[i];
                counter++
            } else {
                strSymbol = 65 + ((message.charCodeAt(i) + key.charCodeAt(counter)) % 26); // 26 - the length of the alphabet
                encStr += String.fromCharCode(strSymbol);
                counter++
            }
        }
        if (this.flag) {
            return encStr;
        } else {
            return encStr.split("").reverse().join("");
        }
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) throw 'ERROR';
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let counter = 0;
        let strSymbol = '';
        let decStr = '';
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (key[counter] === undefined) {
                counter = 0;
            }
            if (encryptedMessage[i] === ' ') {
                decStr += ' ';
            } else if (encryptedMessage.charCodeAt(i) < 65 || encryptedMessage.charCodeAt(i) > 90) { // 65 - the character code "A"; 90 - the character code "Z"
                decStr += encryptedMessage[i];
                counter++
            } else {
                strSymbol = 65 + ((encryptedMessage.charCodeAt(i) + 26 - key.charCodeAt(counter)) % 26); // 26 - the length of the alphabet
                decStr += String.fromCharCode(strSymbol);
                counter++
            }
        }
        if (this.flag) {
            return decStr;
        } else {
            return decStr.split("").reverse().join("");
        }
    }
}

module.exports = VigenereCipheringMachine;
