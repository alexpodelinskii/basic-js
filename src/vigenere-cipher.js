const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(revers) {
    if (revers === false) {
      this.revers = true;
    } else { this.revers = false; }
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error(`Incorrect arguments!`);
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = "";

    if (this.revers) {
      str = str.split("").reverse().join("");
    }

    let j = 0;

    for (let i = 0; i < str.length; i++) {

      if (str[i] >= "A" && str[i] <= "Z") {
        res += String.fromCharCode(((str.charCodeAt(i) + key.charCodeAt(j % key.length)) % 26) + 65);
        j++;
      } else res += str[i];
    }

    return res

  }
  decrypt(str, key) {
    if (!str || !key) throw new Error(`Incorrect arguments!`);
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = "";

    if (this.revers) {
      str = str.split("").reverse().join("");
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {

      if (str[i] >= "A" && str[i] <= "Z") {

        res += String.fromCharCode((26 + str.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      } else res += str[i];
    }

    return res;


  }
}

module.exports = {
  VigenereCipheringMachine
};
