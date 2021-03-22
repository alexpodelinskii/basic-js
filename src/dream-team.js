const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
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
