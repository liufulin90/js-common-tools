'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sprintf = exports.isIdentityCard = exports.isUrl = exports.isEmail = exports.isCreditCard = exports.isString = exports.isNullOrEmpty = exports.getUUID = undefined;

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
  if (v != 'undefined' && v !== null) {
    switch (typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) {
      case 'object':
        if (!recursive) return false;
        if ((0, _array.isArray)(v)) {
          return !(v.length > 0 && v[0] != 'undefined' && v[0] !== null);
        } else {
          for (var property in v) {
            if (v.hasOwnProperty(property)) {
              return isNullOrEmpty(v[property], recursive);
            }
          }
        }
        break;
      case 'string':
        if (v.length > 0 && v !== '') {
          return false;
        }
        break;
      case 'number':
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
  return typeof str === 'string';
};

var getUUID = function getUUID() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstAlphaNumeric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var buf = [],
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      charlen = chars.length;
  if (firstAlphaNumeric || false) {
    var alphaNumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        ancharlen = alphaNumericChars.length;
    buf.push(alphaNumericChars[(0, _number.getRandomInt)(0, ancharlen - 1)]);
    len -= 1;
  }
  for (var i = 0; i < len; ++i) {
    buf.push(chars[(0, _number.getRandomInt)(0, charlen - 1)]);
  }
  return buf.join('');
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
  var reg = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
};

var isUrl = function isUrl(value) {
  var reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return reg.test(value);
};

var isIdentityCard = function isIdentityCard(sId) {
  var aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  },
      iSum = 0;
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    return false;
  }
  sId = sId.replace(/x$/i, 'a');
  if (aCity[parseInt(sId.substr(0, 2), 10)] == null) {
    return false;
  }
  var sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2));
  var d = new Date(sBirthday.replace(/-/g, '/'));
  if (sBirthday != d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()) {
    return false;
  }
  for (var i = 17; i >= 0; i--) {
    iSum += Math.pow(2, i) % 11 * parseInt(sId.charAt(17 - i), 11);
  }
  if (iSum % 11 != 1) {
    return false;
  }

  return true;
};

exports.getUUID = getUUID;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isString = isString;
exports.isCreditCard = isCreditCard;
exports.isEmail = isEmail;
exports.isUrl = isUrl;
exports.isIdentityCard = isIdentityCard;
exports.sprintf = sprintf;