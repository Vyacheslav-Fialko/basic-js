const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'Error';
  }
  try {
    const control_sequences = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
    let res = [];
    let discard = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' && i === arr.length - 1) {
        continue;
      } else if (arr[i] === '--double-next' && i === arr.length - 1) {
        continue;
      } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
        discard = i + 1;
        continue
      } else if (arr[i] === '--double-next' && i < arr.length - 1) {
        res.push(arr[i + 1]);
      } else if (arr[i] === '--discard-prev' && i === 0) {
        continue;
      } else if (arr[i] === '--double-prev' && i === 0) {
        continue;
      } else if (arr[i] === '--discard-prev' && i > 0) {
        if (arr[i - 2] === '--discard-next') {
          continue;
        }
        res.splice(res.lastIndexOf(arr[i - 1]), 1);
      } else if (arr[i] === '--double-prev' && i > 0) {
        if (i - 1 !== discard) {

          res.push(arr[i - 1]);
        } else {
          continue;
        }

      } else if (i === discard) {
        continue;
      } else {
        res.push(arr[i])
      }
    }
    return res.filter(item => !control_sequences.includes(item));
  } catch (e) {
    return e;
  }

};
