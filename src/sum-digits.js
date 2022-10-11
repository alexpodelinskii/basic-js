const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  do {
    const arr = createArr(n)
    res = arr.reduce((a, b) => { return a + b }, 0);
    n = res;
  } while (res > 9)
  return res

}

function createArr(num) {
  let arr = [];
  while (num > 9) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  arr.push(num);
  return arr;
}

module.exports = {
  getSumOfDigits
};
