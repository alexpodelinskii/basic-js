const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  const domainsReverse = domains.map(el => {
    const tempArr = el.split(".").reverse();
    tempArr[0] = "." + tempArr[0]
    return tempArr
  });
  const result = {}
  domainsReverse.forEach(el => {
    while (el.length) {
      const domain = el.join(".")
      if (domain in result) {
        result[domain]++;
      } else {
        result[domain] = 1
      }
      el.pop();
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
