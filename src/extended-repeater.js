const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }) {
  const rep = repit(addition, additionRepeatTimes, additionSeparator || '|');
  let string = str + rep;
  return repit(string, repeatTimes, separator || '+')
};

function repit(string = '', repTimes = 0, separator) {
  if (repTimes < 2) return string;
  const str = new Array(repTimes).fill(string).map(el => el + '').join(separator);
  console.log(str);
  console.log(typeof str);
  return str;
}

module.exports = {
  repeater
};
