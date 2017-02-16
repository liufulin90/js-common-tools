'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = require('./array/');

var _number = require('./number/');

var _string = require('./string/');

var JSCT = {
  ArrayUnique: _array.ArrayUnique, ArrayQuickSort: _array.ArrayQuickSort, isArray: _array.isArray,
  getRandomInt: _number.getRandomInt, toFixedDecimal: _number.toFixedDecimal,
  getUUID: _string.getUUID, isNullOrEmpty: _string.isNullOrEmpty
};

exports.default = JSCT;