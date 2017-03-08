'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = exports.Timer = exports.setSessionStorage = exports.getSessionStorage = exports.setLocalStorage = exports.getLocalStorage = exports.cookie = exports.sprintf = exports.isIdentityCard = exports.isUrl = exports.isEmail = exports.isCreditCard = exports.isString = exports.isNullOrEmpty = exports.getUUID = exports.toFixedDecimal = exports.getRandomInt = exports.inArray = exports.isArray = exports.arrayQuickSort = exports.arrayUnique = undefined;

var _array = require('./array/');

var _number = require('./number/');

var _string = require('./string/');

var _cookie = require('./cookie/');

var _store = require('./store/');

var _date = require('./date/');

var _other = require('./other/');

exports.arrayUnique = _array.arrayUnique;
exports.arrayQuickSort = _array.arrayQuickSort;
exports.isArray = _array.isArray;
exports.inArray = _array.inArray;
exports.getRandomInt = _number.getRandomInt;
exports.toFixedDecimal = _number.toFixedDecimal;
exports.getUUID = _string.getUUID;
exports.isNullOrEmpty = _string.isNullOrEmpty;
exports.isString = _string.isString;
exports.isCreditCard = _string.isCreditCard;
exports.isEmail = _string.isEmail;
exports.isUrl = _string.isUrl;
exports.isIdentityCard = _string.isIdentityCard;
exports.sprintf = _string.sprintf;
exports.cookie = _cookie.cookie;
exports.getLocalStorage = _store.getLocalStorage;
exports.setLocalStorage = _store.setLocalStorage;
exports.getSessionStorage = _store.getSessionStorage;
exports.setSessionStorage = _store.setSessionStorage;
exports.Timer = _date.Timer;
exports.sleep = _other.sleep;