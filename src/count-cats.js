const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(element => {
    for (let el of element) {
      if (el == "^^") {
        count++;
      }
    }
  });
  return count;
};
