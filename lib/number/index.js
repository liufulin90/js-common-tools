"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getRandomInt = function getRandomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var toFixedDecimal = function toFixedDecimal(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var power = Math.pow(10, precision);
  return Math.round(number * power) / power;
};

exports.getRandomInt = getRandomInt;
exports.toFixedDecimal = toFixedDecimal;