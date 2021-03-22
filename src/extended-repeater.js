const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.separator) { options.separator = "+"; }
  if (!options.repeatTimes) { options.repeatTimes = 1; }
  if (!options.additionRepeatTimes) { options.additionRepeatTimes = 1; }
  if (!options.additionSeparator) { options.additionSeparator = "|"; }
  if (!options.separator) { options.separator = "|"; }

  str = String(str);
  if (options.addition || options.addition === null) options.addition = String(options.addition);
  if (options.separator) options.separator = String(options.separator);
  if (options.additionSeparator) options.additionSeparator = String(options.additionSeparator);

  let add = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    add.push(options.addition);
  }

  let addStr = add.join(options.additionSeparator)
  let res = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    let temp = str + addStr;
    res.push(temp);
  }

  return res.join(options.separator)


};
