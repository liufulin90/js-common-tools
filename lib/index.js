'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = exports.isObject = exports.isUndefined = exports.isNull = exports.isBoolean = exports.isNumber = exports.getImageWidthHeight = exports.sleep = exports.getFurtureWeeksInfo = exports.getWeekDaysByYearIndex = exports.getWeekByDate = exports.dateStr2timestamp = exports.timestampFormat = exports.getNowTimeFormat = exports.getMonthStartEndtDayTimestamp = exports.Timer = exports.setSessionStorage = exports.getSessionStorage = exports.setLocalStorage = exports.getLocalStorage = exports.cookie = exports.sprintf = exports.isIdentityCard = exports.isPhone = exports.isUrl = exports.isEmail = exports.isCreditCard = exports.isString = exports.isNullOrEmpty = exports.getUUID = exports.accDiv = exports.accMul = exports.accSub = exports.accAdd = exports.getPrimes = exports.isPrimes = exports.isPrice = exports.toFixedDecimal = exports.getRandomInt = exports.arrayIsRepeat = exports.inArray = exports.isArray = exports.arrayQuickSort = exports.arrayUnique = undefined;

var _array = require('./array/');

var _number = require('./number/');

var _string = require('./string/');

var _cookie = require('./cookie/');

var _store = require('./store/');

var _date = require('./date/');

var _other = require('./other/');

var _is = require('./is/');

exports.arrayUnique = _array.arrayUnique;
exports.arrayQuickSort = _array.arrayQuickSort;
exports.isArray = _array.isArray;
exports.inArray = _array.inArray;
exports.arrayIsRepeat = _array.arrayIsRepeat;
exports.getRandomInt = _number.getRandomInt;
exports.toFixedDecimal = _number.toFixedDecimal;
exports.isPrice = _number.isPrice;
exports.isPrimes = _number.isPrimes;
exports.getPrimes = _number.getPrimes;
exports.accAdd = _number.accAdd;
exports.accSub = _number.accSub;
exports.accMul = _number.accMul;
exports.accDiv = _number.accDiv;
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
exports.getMonthStartEndtDayTimestamp = _date.getMonthStartEndtDayTimestamp;
exports.getNowTimeFormat = _date.getNowTimeFormat;
exports.timestampFormat = _date.timestampFormat;
exports.dateStr2timestamp = _date.dateStr2timestamp;
exports.getWeekByDate = _date.getWeekByDate;
exports.getWeekDaysByYearIndex = _date.getWeekDaysByYearIndex;
exports.getFurtureWeeksInfo = _date.getFurtureWeeksInfo;
exports.sleep = _other.sleep;
exports.getImageWidthHeight = _other.getImageWidthHeight;
exports.isNumber = _is.isNumber;
exports.isBoolean = _is.isBoolean;
exports.isNull = _is.isNull;
exports.isUndefined = _is.isUndefined;
exports.isObject = _is.isObject;
exports.isFunction = _is.isFunction;


(function () {
  var JSCT = { arrayUnique: _array.arrayUnique, arrayQuickSort: _array.arrayQuickSort, isArray: _array.isArray, inArray: _array.inArray, arrayIsRepeat: _array.arrayIsRepeat,
    getRandomInt: _number.getRandomInt, toFixedDecimal: _number.toFixedDecimal, isPrice: _number.isPrice, isPrimes: _number.isPrimes, getPrimes: _number.getPrimes, accAdd: _number.accAdd, accSub: _number.accSub, accMul: _number.accMul, accDiv: _number.accDiv,
    getUUID: _string.getUUID, isNullOrEmpty: _string.isNullOrEmpty, isString: _string.isString, isCreditCard: _string.isCreditCard, isEmail: _string.isEmail, isUrl: _string.isUrl, isPhone: _string.isPhone, isIdentityCard: _string.isIdentityCard, sprintf: _string.sprintf,
    cookie: _cookie.cookie,
    getLocalStorage: _store.getLocalStorage, setLocalStorage: _store.setLocalStorage, getSessionStorage: _store.getSessionStorage, setSessionStorage: _store.setSessionStorage,
    Timer: _date.Timer, getMonthStartEndtDayTimestamp: _date.getMonthStartEndtDayTimestamp, getNowTimeFormat: _date.getNowTimeFormat, timestampFormat: _date.timestampFormat, dateStr2timestamp: _date.dateStr2timestamp, getWeekByDate: _date.getWeekByDate, getWeekDaysByYearIndex: _date.getWeekDaysByYearIndex, getFurtureWeeksInfo: _date.getFurtureWeeksInfo,
    sleep: _other.sleep, getImageWidthHeight: _other.getImageWidthHeight,
    isNumber: _is.isNumber, isBoolean: _is.isBoolean, isNull: _is.isNull, isUndefined: _is.isUndefined, isObject: _is.isObject, isFunction: _is.isFunction };
  if (typeof window == 'undefined') {
    return;
  }
  for (var i in JSCT) {
    window['js_' + i] = JSCT[i];
  }
  window.JSCT = JSCT;
})();