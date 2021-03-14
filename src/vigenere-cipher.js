const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(str1, str2) {
    const message = str1.toUpperCase().split('');
    const keys = str2.toUpperCase().split('');
    let position = 0;

    let result = message.map(item => {
      if (this.abc.includes(item)) {
        let index = (this.abc.indexOf(keys[position]) + this.abc.indexOf(item)) % this.abc.length;
        position = (position + 1) % keys.length;
        return this.abc[index];
      }
      return item;
    });
    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(str1, str2) {
    const message = str1.toString().toUpperCase().split('');
    const keys = str2.toString().toUpperCase().split('');
    let position = 0;

    let result = message.map(item => {
      if (this.abc.includes(item)) {
        let index = this.abc.indexOf(item) - this.abc.indexOf(keys[position]);
        if (index < 0) index += this.abc.length;
        position = (position + 1) % keys.length;
        return this.abc[index];
      }
      return item;
    });
    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
