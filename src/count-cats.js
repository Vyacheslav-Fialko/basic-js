const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((count, item) => {
    count += item.filter(el => el === '^^').length;
    return count;
  }, 0)
};
