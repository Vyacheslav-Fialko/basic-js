const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (let arr of backyard) {
    for (let item of arr) {
      if (item === '^^') {
        count++;
      }
    }
  }
  return count;
};
