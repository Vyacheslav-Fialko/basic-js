const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  const repeatStr = updateStr(str) || 'STRING_OR_DEFAULT';
  const repeatOptions = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: updateStr(options.addition) || '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|',
  }
  let newRepeatStr = repeatStr + repeatString(repeatOptions.addition, repeatOptions.additionSeparator, repeatOptions.additionRepeatTimes)
  return repeatString(newRepeatStr, repeatOptions.separator, repeatOptions.repeatTimes)
};

function repeatString(str, separator, count) {
  let newString = (str + separator).repeat(count);
  return newString.slice(0, newString.lastIndexOf(separator));
}

function updateStr(str) {
  let updateStr;
  if (typeof str == 'boolean') {
    updateStr = str.toString();
  } else if(str === null) {
    updateStr = 'null';
  } else {
    updateStr = str
  }
  return updateStr;
}
