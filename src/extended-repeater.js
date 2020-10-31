module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  let add = options.addition;
  if (Array.isArray(add) || typeof add === 'boolean' || add === null) add = String(add);
  if (typeof add !== 'string' && add !== undefined) add = Object.prototype.toString.call(add);

  let sep = options.separator;
  if (sep === undefined) {
    sep = '+';
  }

  let repTime = options.repeatTimes;
  if (repTime === undefined) {
    repTime = 1;
  }

  if (add !== undefined) {
    let adSept = options.additionSeparator;
    if (adSept === undefined) {
      adSept = '|';
    }

    let repAdTime = options.additionRepeatTimes;
    if (repAdTime === undefined) {
      repAdTime = 1;
    }

    let repeatSubString = customRepeat(repAdTime, add, adSept);
    const midString = str + repeatSubString;
    return customRepeat(repTime, midString, sep);
  } else {
    return customRepeat(repTime, str, sep);
  }

  function customRepeat(count, str, separator) {
    let substr = '';
    for (let i = 0; i < count; i++) {
      if (i !== count - 1) {
        substr += str + separator
      } else {
        substr += str
      }
    }
    return substr;
  }

};
  