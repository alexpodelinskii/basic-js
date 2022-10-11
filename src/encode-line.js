const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = "";
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr == str[i + 1]) {
      let countRepeats = 2;
      for (let j = 2; j < str.length; j++) {
        if (str[i + j] == curr) {
          countRepeats++;
        } else {
          resultString = resultString + countRepeats + curr;
          i = i + j - 1;
          break;
        }

      }
    } else resultString += curr
  }
  return resultString;
}


module.exports = {
  encodeLine
};
