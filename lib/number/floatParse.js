'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accDiv = exports.accMul = exports.accSub = exports.accAdd = undefined;

var _parseInt = require('babel-runtime/core-js/number/parse-int');

var _parseInt2 = _interopRequireDefault(_parseInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accAdd = function accAdd(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var dec1, dec2, times;
  try {
    dec1 = countDecimals(num1) + 1;
  } catch (e) {
    dec1 = 0;
  }
  try {
    dec2 = countDecimals(num2) + 1;
  } catch (e) {
    dec2 = 0;
  }
  times = Math.pow(10, Math.max(dec1, dec2));
  var result = (accMul(num1, times) + accMul(num2, times)) / times;
  return getCorrectResult('add', num1, num2, result);
};

var accSub = function accSub(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var dec1, dec2, times;
  try {
    dec1 = countDecimals(num1) + 1;
  } catch (e) {
    dec1 = 0;
  }
  try {
    dec2 = countDecimals(num2) + 1;
  } catch (e) {
    dec2 = 0;
  }
  times = Math.pow(10, Math.max(dec1, dec2));
  var result = Number((accMul(num1, times) - accMul(num2, times)) / times);
  return getCorrectResult('sub', num1, num2, result);
};

var accMul = function accMul(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var times = 0;
  var s1 = num1.toString();
  var s2 = num2.toString();
  try {
    times += countDecimals(s1);
  } catch (e) {}
  try {
    times += countDecimals(s2);
  } catch (e) {}
  var result = convertToInt(s1) * convertToInt(s2) / Math.pow(10, times);
  return getCorrectResult('mul', num1, num2, result);
};

var accDiv = function accDiv(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var t1 = 0;
  var t2 = 0;
  var dec1 = void 0,
      dec2 = void 0;
  try {
    t1 = countDecimals(num1);
  } catch (e) {}
  try {
    t2 = countDecimals(num2);
  } catch (e) {}
  dec1 = convertToInt(num1);
  dec2 = convertToInt(num2);
  var result = accMul(dec1 / dec2, Math.pow(10, t2 - t1));
  return getCorrectResult('div', num1, num2, result);
};

var countDecimals = function countDecimals(num) {
  var len = 0;
  try {
    num = Number(num);
    var str = num.toString().toUpperCase();
    if (str.split('E').length === 2) {
      var isDecimal = false;
      if (str.split('.').length === 2) {
        str = str.split('.')[1];
        if ((0, _parseInt2.default)(str.split('E')[0], 10) !== 0) {
          isDecimal = true;
        }
      }
      var x = str.split('E');
      if (isDecimal) {
        len = x[0].length;
      }
      len -= (0, _parseInt2.default)(x[1], 10);
    } else if (str.split('.').length === 2) {
      if ((0, _parseInt2.default)(str.split('.')[1], 10) !== 0) {
        len = str.split('.')[1].length;
      }
    }
  } catch (e) {
    throw e;
  } finally {
    if (isNaN(len) || len < 0) {
      len = 0;
    }
  }
  return len;
};

var convertToInt = function convertToInt(num) {
  num = Number(num);
  var newNum = num;
  var times = countDecimals(num);
  var tempNum = num.toString().toUpperCase();
  if (tempNum.split('E').length === 2) {
    newNum = Math.round(num * Math.pow(10, times));
  } else {
    newNum = Number(tempNum.replace('.', ''));
  }
  return newNum;
};

var getCorrectResult = function getCorrectResult(type, num1, num2, result) {
  var tempResult = 0;
  switch (type) {
    case 'add':
      tempResult = num1 + num2;
      break;
    case 'sub':
      tempResult = num1 - num2;
      break;
    case 'div':
      tempResult = num1 / num2;
      break;
    case 'mul':
      tempResult = num1 * num2;
      break;
  }
  if (Math.abs(result - tempResult) > 1) {
    return tempResult;
  }
  return result;
};

exports.accAdd = accAdd;
exports.accSub = accSub;
exports.accMul = accMul;
exports.accDiv = accDiv;