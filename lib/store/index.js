'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSessionStorage = exports.getSessionStorage = exports.setLocalStorage = exports.getLocalStorage = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLocalStorage = function getLocalStorage(key) {
  return window.localStorage.getItem(key.toString());
};

var setLocalStorage = function setLocalStorage(key, obj) {
  var item = (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' ? (0, _stringify2.default)(obj) : obj;
  window.localStorage.setItem(key.toString(), item);
};

var getSessionStorage = function getSessionStorage(key) {
  return window.sessionStorage.getItem(key.toString());
};

var setSessionStorage = function setSessionStorage(key, obj) {
  var item = (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' ? (0, _stringify2.default)(obj) : obj;
  window.sessionStorage.setItem(key.toString(), item);
};

exports.getLocalStorage = getLocalStorage;
exports.setLocalStorage = setLocalStorage;
exports.getSessionStorage = getSessionStorage;
exports.setSessionStorage = setSessionStorage;