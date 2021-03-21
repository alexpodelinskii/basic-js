const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(revers) {
    if (revers === false) {
      this.revers = true;
    } else { this.revers = false; }
  }
  encrypt(str, key) {
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

module.exports = VigenereCipheringMachine;
