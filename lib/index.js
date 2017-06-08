'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageWidthHeight = exports.sleep = exports.getFurtureTenWeeksInfo = exports.getWeekDaysByYearIndex = exports.getWeekByDate = exports.dateStr2timestamp = exports.timestampFormat = exports.getNowTimeFormat = exports.Timer = exports.setSessionStorage = exports.getSessionStorage = exports.setLocalStorage = exports.getLocalStorage = exports.cookie = exports.sprintf = exports.isIdentityCard = exports.isPhone = exports.isUrl = exports.isEmail = exports.isCreditCard = exports.isString = exports.isNullOrEmpty = exports.getUUID = exports.toFixedDecimal = exports.getRandomInt = exports.inArray = exports.isArray = exports.arrayQuickSort = exports.arrayUnique = undefined;

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
exports.isPhone = _string.isPhone;
exports.isIdentityCard = _string.isIdentityCard;
exports.sprintf = _string.sprintf;
exports.cookie = _cookie.cookie;
exports.getLocalStorage = _store.getLocalStorage;
exports.setLocalStorage = _store.setLocalStorage;
exports.getSessionStorage = _store.getSessionStorage;
exports.setSessionStorage = _store.setSessionStorage;
exports.Timer = _date.Timer;
exports.getNowTimeFormat = _date.getNowTimeFormat;
exports.timestampFormat = _date.timestampFormat;
exports.dateStr2timestamp = _date.dateStr2timestamp;
exports.getWeekByDate = _date.getWeekByDate;
exports.getWeekDaysByYearIndex = _date.getWeekDaysByYearIndex;
exports.getFurtureTenWeeksInfo = _date.getFurtureTenWeeksInfo;
exports.sleep = _other.sleep;
exports.getImageWidthHeight = _other.getImageWidthHeight;


(function () {
  var JSCT = { arrayUnique: _array.arrayUnique, arrayQuickSort: _array.arrayQuickSort, isArray: _array.isArray, inArray: _array.inArray,
    getRandomInt: _number.getRandomInt, toFixedDecimal: _number.toFixedDecimal,
    getUUID: _string.getUUID, isNullOrEmpty: _string.isNullOrEmpty, isString: _string.isString, isCreditCard: _string.isCreditCard, isEmail: _string.isEmail, isUrl: _string.isUrl, isPhone: _string.isPhone, isIdentityCard: _string.isIdentityCard, sprintf: _string.sprintf,
    cookie: _cookie.cookie,
    getLocalStorage: _store.getLocalStorage, setLocalStorage: _store.setLocalStorage, getSessionStorage: _store.getSessionStorage, setSessionStorage: _store.setSessionStorage,
    Timer: _date.Timer, getNowTimeFormat: _date.getNowTimeFormat, timestampFormat: _date.timestampFormat, dateStr2timestamp: _date.dateStr2timestamp, getWeekByDate: _date.getWeekByDate, getWeekDaysByYearIndex: _date.getWeekDaysByYearIndex, getFurtureTenWeeksInfo: _date.getFurtureTenWeeksInfo,
    sleep: _other.sleep, getImageWidthHeight: _other.getImageWidthHeight };
  if (typeof window == 'undefined') {
    return;
  }
  window.JSCT = JSCT;
})();