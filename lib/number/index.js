'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.getRandomInt = getRandomInt;
exports.toFixedDecimal = toFixedDecimal;