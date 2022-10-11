const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!(Array.isArray(arr))) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]


    if (el == '--double-prev') {
      if (i > 0) {
        res.push(res[res.length - 1]);
      }
    } else if (el == '--double-next') {
      if (i < arr.length - 1) {
        res.push(arr[i + 1]);
      }
    } else if (el == '--discard-next') {
      if (i < arr.length) {
        res.push(undefined);
        i++;
      }
    } else if (el == '--discard-prev') {
      if (i > 0) {
        res.pop();
      }
    } else {
      res.push(el);
    }
  }
  let result = res.filter(el => { return (el !== undefined); })


  return result;

}

module.exports = {
  transform
};
