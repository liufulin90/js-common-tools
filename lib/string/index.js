'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNullOrEmpty = exports.getUUID = undefined;

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

exports.getUUID = getUUID;
exports.isNullOrEmpty = isNullOrEmpty;