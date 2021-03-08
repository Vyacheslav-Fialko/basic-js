const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
    this.template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if(!(message && key)) {
      throw new Error('Error')
    }
    const upMessage = message.toUpperCase();
    const upKey = key.toUpperCase();
    const newKey = this.equalLength(upMessage, upKey);
    let res = ''
    
    for (let i = 0, c = 0; i < upMessage.length; i++, c = 0){
      if (this.template.includes(upMessage[i]) && this.template.includes(newKey[i])){
        c = this.template.indexOf(upMessage[i]) + this.template.indexOf(newKey[i]);
        res += c <= 25 ? this.template[c] : this.template[c-26];
      } else {
        res += upMessage[i];
      }
    }
    if (this.direct) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) {
      throw new Error('Error')
    }
    const upKey = key.toUpperCase();
    const newKey = this.equalLength(encryptedMessage, upKey);
    let res ='';
    for (let i = 0, c = 0; i < encryptedMessage.length; i++, c = 0) {
      if (this.template.includes(encryptedMessage[i]) && this.template.includes(newKey[i])) {
        c = this.template.indexOf(encryptedMessage[i]) > this.template.indexOf(newKey[i]) 
          ? this.template.indexOf(encryptedMessage[i]) - this.template.indexOf(newKey[i])
          : this.template.indexOf(encryptedMessage[i]) + 26 - this.template.indexOf(newKey[i]);
        res += c <= 25 ? this.template[c] : 'A';
      } else {
        res += encryptedMessage[i];
      }
    }

    if (this.direct) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }

  equalLength(message,key) {
    let newKey = '';
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (!(j < key.length)) {
        j = 0;
      }
      if (this.template.includes(message[i])) {
        newKey += key[j];
      } else {
        j--;
        newKey += message[i];
      }
    }
    return newKey;
  }
}

module.exports = VigenereCipheringMachine;
