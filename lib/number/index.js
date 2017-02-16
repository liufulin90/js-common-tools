"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getRandomInt = function getRandomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.getRandomInt = getRandomInt;