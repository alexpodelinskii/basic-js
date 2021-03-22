const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let depth = arr.filter(el => Array.isArray(el));
    if (!depth.length) { return 1; }
    else {
      return 1 + Math.max(...depth.map(this.calculateDepth.bind(this)));
    }
  };
};