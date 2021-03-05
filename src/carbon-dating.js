
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const regExp = new RegExp("^\\d*(\\.\\d+)?$");
  if (!sampleActivity){
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (!regExp.test(sampleActivity)){
    return false;
  }
  if (+sampleActivity <= 0 || +sampleActivity > 15) {
    return false;
  }
  
  const NATURAL_LOGARITHM_OF_TWO = 0.693;
  const RATE_REACTION = NATURAL_LOGARITHM_OF_TWO / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / RATE_REACTION);
};
