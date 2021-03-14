const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let defaults = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  };

  if(typeof str !== 'string') {
    str = str + '';
  }

  options.repeatTimes = options.repeatTimes || defaults.repeatTimes;
  options.separator = options.separator || defaults.separator;

  if(options.hasOwnProperty('addition')) {
    if(typeof options.addition !== 'string') {
      options.addition = options.addition + '';
    }
    options.additionRepeatTimes = options.additionRepeatTimes || defaults.additionRepeatTimes;
    options.additionSeparator = options.additionSeparator || defaults.additionSeparator;

  } else {
    options.addition = defaults.addition;
  }

  const separator = options.addition !== '' ? new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator) : '';

  return new Array(options.repeatTimes).fill(str + separator).join(options.separator);
};
  