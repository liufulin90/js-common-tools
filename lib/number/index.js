'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accDiv = exports.accMul = exports.accSub = exports.accAdd = exports.getPrimes = exports.isPrimes = exports.isPrice = exports.toFixedDecimal = exports.getRandomInt = undefined;

var _floatParse = require('./floatParse');

var getRandomInt = function getRandomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw Error('getRandomInt arguments is not a number');
  }
  if (min > max) {
    throw Error('getRandomInt first argument must less than second param');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var toFixedDecimal = function toFixedDecimal(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (typeof number !== 'number') {
    throw Error('toFixedDecimal first argument is not a number');
  }
  var power = Math.pow(10, precision);
  return Math.round(number * power) / power;
};

var isPrice = function isPrice(value) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  return reg.test(value);
};

var isPrimes = function isPrimes(number) {
  if (typeof number !== 'number') {
    throw Error('isPrimes first argument is not a number');
  }
  if (number == 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

var getPrimes = function getPrimes() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (typeof start !== 'number' || typeof end !== 'number') {
    throw Error('getPrimes arguments must be number');
  }
  if (start > end) {
    throw Error('getPrimes first argument can\'t above second argument');
  }
  var x,
      arr = [];
  for (x = start; x < end; x++) {
    arr.push(x);
  }
  return filterPrimes(arr);
  function filterPrimes(arr) {
    var r = arr.filter(function (val) {
      return isPrimes(val);
    });
    return r;
  }
};

exports.getRandomInt = getRandomInt;
exports.toFixedDecimal = toFixedDecimal;
exports.isPrice = isPrice;
exports.isPrimes = isPrimes;
exports.getPrimes = getPrimes;
exports.accAdd = _floatParse.accAdd;
exports.accSub = _floatParse.accSub;
exports.accMul = _floatParse.accMul;
exports.accDiv = _floatParse.accDiv;