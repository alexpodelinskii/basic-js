const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let arr = members.filter(el => {
    return typeof (el) == "string";
  })
  arr = arr.map(el => {
    el = el.trim().toUpperCase();
    return el[0]
  });
  return arr.sort().join("");
};

module.exports = {
  createDreamTeam
};
