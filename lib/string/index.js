'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sprintf = exports.isUrl = exports.isEmail = exports.isCreditCard = exports.isString = exports.isNullOrEmpty = exports.getUUID = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _array = require('../array/');

var _number = require('../number/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!String.prototype.trimAll) {
  String.prototype.trimAll = function () {
    return this.replace(/^(\s)+|(\s)+|(\s)+$/g, '');
  };
}

if (!String.prototype.trimL) {
  String.prototype.trimL = function () {
    return this.replace(/^\s+/g, '');
  };
}

if (!String.prototype.trimR) {
  String.prototype.trimR = function () {
    return this.replace(/\s+$/g, '');
  };
}

var isNullOrEmpty = function isNullOrEmpty(v, recursive) {
  if (v != "undefined" && v !== null) {
    switch (typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) {
      case "object":
        if (!recursive) return false;
        if ((0, _array.isArray)(v)) {
          return !(v.length > 0 && v[0] != "undefined" && v[0] !== null);
        } else {
          for (var property in v) {
            if (v.hasOwnProperty(property)) {
              return isNullOrEmpty(v[property], recursive);
            }
          }
        }
        break;
      case "string":
        if (v.length > 0 && v !== "") {
          return false;
        }
        break;
      case "number":
        if (v > 0) {
          return false;
        }
        break;
    }
    return true;
  } else {
    return true;
  }
};

var isString = function isString(str) {
  return typeof str === 'string' ? true : false;
};

var getUUID = function getUUID() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstAlphaNumeric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var buf = [],
      chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      charlen = chars.length;
  if (firstAlphaNumeric || false) {
    var alphaNumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        ancharlen = alphaNumericChars.length;
    buf.push(alphaNumericChars[(0, _number.getRandomInt)(0, ancharlen - 1)]);
    len -= 1;
  }
  for (var i = 0; i < len; ++i) {
    buf.push(chars[(0, _number.getRandomInt)(0, charlen - 1)]);
  }
  return buf.join("");
};

var sprintf = function sprintf(str) {
  if (!isString(str)) {
    throw Error('the 1st argument should be string');
  }
  var parts = str.split('%s');
  if (parts.length != arguments.length) {
    throw Error('the number of %s in string is not equal to the number of variables');
  }
  var ret = parts[0];
  for (var i = 1; i < arguments.length; i++) {
    ret += arguments[i] + parts[i];
  }
  return ret;
};

var isCreditCard = function isCreditCard(value) {
  var reg = /^(5[1-5]\d{14})|(4\d{12}(\d{3})?)|(3[47]\d{13})|(6011\d{14})|((30[0-5]|36\d|38\d)\d{11})$/;
  return reg.test(value);
};

var isEmail = function isEmail(value) {
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
};

var isUrl = function isUrl(value) {
  var reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return reg.test(value);
};

exports.getUUID = getUUID;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isString = isString;
exports.isCreditCard = isCreditCard;
exports.isEmail = isEmail;
exports.isUrl = isUrl;
exports.sprintf = sprintf;