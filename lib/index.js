'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = require('./array/');

var _number = require('./number/');

var _string = require('./string/');

var JSCT = {
  arrayUnique: _array.arrayUnique, arrayQuickSort: _array.arrayQuickSort, isArray: _array.isArray, inArray: _array.inArray,
  getRandomInt: _number.getRandomInt, toFixedDecimal: _number.toFixedDecimal,
  getUUID: _string.getUUID, isNullOrEmpty: _string.isNullOrEmpty, isString: _string.isString, isCreditCard: _string.isCreditCard, isEmail: _string.isEmail, isUrl: _string.isUrl, sprintf: _string.sprintf
};

exports.default = JSCT;