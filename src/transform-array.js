const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!(Array.isArray(arr))) throw new Error;
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

};
