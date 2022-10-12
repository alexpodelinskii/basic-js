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
  const arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i]
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === letter) {
        count++;
        i = j;
      } else {
        i = j - 1;
        break;
      }
    }
    if (count > 1) {
      result += count;
    }
    result += letter;
  }
  return result;
}


module.exports = {
  encodeLine
};
