/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isIdentityCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sprintf; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number___ = __webpack_require__(2);
/**
 * Trim function for Strings
 */



/**
 * 清除字符中所有空格
 */
if (!String.prototype.trimAll) {
  String.prototype.trimAll = function () {
    return this.replace(/^(\s)+|(\s)+|(\s)+$/g, '');
  }
}
/**
 * 清除字符中左边空格
 */
if (!String.prototype.trimL) {
  String.prototype.trimL = function () {
    return this.replace(/^\s+/g, '');
  }
}
/**
 * 清除字符中右边空格
 */
if (!String.prototype.trimR) {
  String.prototype.trimR = function () {
    return this.replace(/\s+$/g, '');
  }
}

/**
 * Checks value if it has value or not. Returns true if it is null or undefined You can do recursive check.
 * 判断是否为空，为空返回true，否则返回false。可以做递归检查
 *
 * isNullOrEmpty([]) => true
 * isNullOrEmpty(['']) => false
 * isNullOrEmpty([''], true) => true (Recursive check)
 *
 * @param v Value to be checked 被检查的值
 * @param recursive True for recursive check, False for only top item check 是否递归
 * @return {Boolean}
 */
const isNullOrEmpty = (v, recursive) => {
  if (v != 'undefined' && v !== null) {
    switch (typeof v) {
      case 'object':
        if (!recursive) return false;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__array___["c" /* isArray */])(v)) {
          return !(v.length > 0 && v[0] != 'undefined' && v[0] !== null)
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
}

/**
 * 判断是否为字符窜
 *
 * @param str
 * @returns {boolean}
 */
const isString = (str) => {
  return typeof str === 'string';
}
/**
 * Return a unique identifier with the given `len`.
 * 获得指定长度的唯一字符串
 *
 * getUUID(10);
 * // => '3DaS435D2z'
 * getUUID(10, false);
 * // => 'cDaS435D2z'
 *
 * @param {Number} len
 * @param {Boolean} first character must be alpha numeric char (for html id generation)
 * @return {String}
 * @api public
 */
const getUUID = function (len = 32, firstAlphaNumeric = true) {
  let buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length;
  if (firstAlphaNumeric || false) {
    let alphaNumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      ancharlen = alphaNumericChars.length;
    buf.push(alphaNumericChars[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number___["a" /* getRandomInt */])(0, ancharlen - 1)]);
    len -= 1;
  }
  for (let i = 0; i < len; ++i) {
    buf.push(chars[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number___["a" /* getRandomInt */])(0, charlen - 1)]);
  }
  return buf.join('');
}

/**
 * sprintf 把格式数据写成串
 *
 * @param str
 * @returns {string}
 */
const sprintf = function (str) {
  if (!isString(str)) {
    throw Error('the 1st argument should be string');
  }
  let parts = str.split('%s');
  if (parts.length != arguments.length) {
    throw Error('the number of %s in string is not equal to the number of variables');
  }
  let ret = parts[0];
  for (let i = 1; i < arguments.length; i++) {
    ret += arguments[i] + parts[i];
  }
  return ret
}

/**
 * 判断是否为信用卡
 *
 * @param value
 * @returns {boolean}
 */
const isCreditCard = (value) => {
  // This magic string is coming from http://www.informit.com/articles/article.aspx?p=1223879&seqNum=12
  let reg = /^(5[1-5]\d{14})|(4\d{12}(\d{3})?)|(3[47]\d{13})|(6011\d{14})|((30[0-5]|36\d|38\d)\d{11})$/;
  return reg.test(value);
}

/**
 * 判断是否为正确邮箱
 *
 * @param value
 * @returns {boolean}
 */
const isEmail = (value) => {
  // This magic string is coming from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  let reg = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
}

/**
 * 判断是否为url
 *
 * @param value
 * @returns {boolean}
 */
const isUrl = (value) => {
  let reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return reg.test(value);
}

/**
 * 判断是否为手机号
 *
 * JSCT.isPhone('18785465548') // true
 * JSCT.isPhone('12785465548') // false
 *
 * @param value
 * @returns {boolean}
 */
const isPhone = (value) => {
  let reg = /^1[34578]\d{9}$/;
  return reg.test(value);
}

/**
 * 判断是否为身份证号码
 * @param sId
 * @returns {boolean}
 */
const isIdentityCard = (sId) => {
  let aCity = {
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
  }, iSum = 0;
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    // 你输入的身份证长度或格式错误
    return false;
  }
  sId = sId.replace(/x$/i, 'a');
  if (aCity[parseInt(sId.substr(0, 2), 10)] == null) {
    // 你的身份证地区非法
    return false;
  }
  let sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2));
  let d = new Date(sBirthday.replace(/-/g, '/'));
  if (sBirthday != (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
    // 身份证上的出生日期非法
    return false;
  }
  for (let i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  }
  if (iSum % 11 != 1) {
    // 你输入的身份证号非法
    return false;
  }
  // aCity[parseInt(sId.substr(0,2))]+','+sBirthday+','+(sId.substr(16,1)%2?'男':'女');//此次还可以判断出输入的身份证号的人性别
  return true;
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arrayQuickSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return inArray; });
/**
 * Created by liufulin
 * array all tools
 */
/**
 * 数组去重
 *
 * 1.创建一个新的数组存放结果
 * 2.创建一个空对象
 * 3.判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存
 *
 * @param arr
 * @returns {Array}
 * @constructor
 * eg:
 * var arr = [5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99];
 * console.log(arr)
 * console.log(arrayUnique(arr))
 */
const arrayUnique = (arr = []) => {
  if (arr.constructor !== Array) {
    throw Error('arrayUnique argument is not a Array');
  }
  let o = {}, r = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].constructor === Object || arr[i].constructor === Array) {
      if (!o[JSON.stringify(arr[i]).toString()]) {
        o[JSON.stringify(arr[i]).toString()] = true;
        r.push(arr[i]);
      }
    } else {
      if (!o[arr[i]]) {
        o[arr[i]] = true;
        r.push(arr[i]);
      }
    }
  }
  return r;
}
if (!Array.prototype.arrayUnique) {
  Array.prototype.arrayUnique = function () {
    if (this.constructor !== Array) {
      throw Error('this is not a Array');
    }
    let o = {}, r = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i].constructor === Object || this[i].constructor === Array) {
        if (!o[JSON.stringify(this[i]).toString()]) {
          o[JSON.stringify(this[i]).toString()] = true;
          r.push(this[i]);
        }
      } else {
        if (!o[this[i]]) {
          o[this[i]] = true;
          r.push(this[i]);
        }
      }
    }
    return r;
  }
}
/**
 * 对数组进行排序（排序）
 *
 *（1）在数据集之中，选择一个元素作为”基准”（pivot）。
 *（2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
 *（3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 *
 * @param arr
 * @returns {*}
 * @constructor
 * eg:
 * var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 * console.log(arr);
 * console.log(arrayQuickSort(arr))
 */
const arrayQuickSort = (arr = [], orderBy = 'asc') => {
  if (!isArray(arr)) {
    throw Error('arrayQuickSort param is not a Array');
  }
  if (!inArray(orderBy, ['asc', 'desc'])) {
    throw Error('the second argument not in [asc, desc]');
  }
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (orderBy == 'asc') {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    } else {
      arr[i] > pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
  }
  return arrayQuickSort(left, orderBy).concat([pivot], arrayQuickSort(right, orderBy));
}
if (!Array.prototype.arrayQuickSort) {
  Array.prototype.arrayQuickSort = function (orderBy = 'asc') {
    if (!isArray(this)) {
      throw Error('this is not a Array');
    }
    if (!inArray(orderBy, ['asc', 'desc'])) {
      throw Error('the second argument not in [asc, desc]');
    }
    if (this.length <= 1) {
      return this;
    }
    let pivotIndex = Math.floor(this.length / 2);
    let pivot = this.splice(pivotIndex, 1)[0];
    let left = [], right = [];
    for (let i = 0; i < this.length; i++) {
      if (orderBy == 'asc') {
        this[i] < pivot ? left.push(this[i]) : right.push(this[i]);
      } else {
        this[i] > pivot ? left.push(this[i]) : right.push(this[i]);
      }
    }
    return left.arrayQuickSort(orderBy).concat([pivot], right.arrayQuickSort(orderBy));
  }
}
/**
 * Checks if value is array or not
 * 判断是否为数组
 *
 * isArray([]) => true
 *
 * @param v
 * @return {Boolean}
 */
const isArray = (v) => {
  return v instanceof Array || v.constructor === Array || Object.prototype.toString.call(v) == '[object Array]';
}

/**
 * 判断值是否在数组中
 *
 * @param needle 被判断的值
 * @param haystack 数组
 * @param strict： 严格模式true，非严格false
 * @returns {boolean}
 */
const inArray = (needle, haystack, strict = false) => {
  if (!isArray(haystack)) {
    throw Error('the second argument is not a Array');
  }
  let len = haystack.length;
  for (let i = 0; i < len; i++) {
    if (strict === true) {
      if (haystack[i] === needle) return true;
    } else {
      if (haystack[i] == needle) return true;
    }
  }
  return false;
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toFixedDecimal; });
/**
 * Created by liufulin.
 */

/**
 * Returns a random int
 * 获取指定区间随机数值
 * getRandomInt(1, 100) => 56
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRandomInt = (min = 1, max = 100) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw Error('getRandomInt arguments is not a number');
  }
  if (min > max) {
    throw Error('getRandomInt first argument must less than second param');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns fixed decimal number
 * 返回指定小数位数的十进制，默认两位小数
 *
 * toFixedDecimal(1.689442324, 2) => 1.68
 *
 * @param number
 * @param precision
 * @returns {number}
 */
const toFixedDecimal = (number, precision = 2) => {
  if (typeof number !== 'number') {
    throw Error('toFixedDecimal first argument is not a number');
  }
  let power = Math.pow(10, precision);
  return Math.round(number * power) / power;
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cookie; });
/**
 * Created by linxins on 17-2-19.
 */
const cookie = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
  if (sValue) {
    cookie.set(sKey, sValue, vEnd, sPath, sDomain, bSecure);
  } else {
    return cookie.get(sKey);
  }
}

cookie.get = function (sKey) {
  if (!sKey) {
    return null;
  }
  return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
};

/**
 * 设置cookie
 * @param sKey 存储唯一键
 * @param sValue 存储的值
 * @param vExpires 有效期
 * @param sPath 路径
 * @param sDomain 域名
 * @param bSecure
 * @returns {boolean}
 */
cookie.set = function (sKey, sValue, vExpires, sPath, sDomain, bSecure) {
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }
  var sExpires = '';
  if (vExpires) {
    switch (vExpires.constructor) {
      case Number:
        sExpires = vExpires === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vExpires;
        break;
      case String:
        sExpires = '; expires=' + vExpires;
        break;
      case Date:
        sExpires = '; expires=' + vExpires.toUTCString();
        break;
    }
  }
  document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
  return true;
};

cookie.remove = function (sKey, sPath, sDomain) {
  if (!cookie.hasKey(sKey)) {
    return false;
  }
  document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
  return true;
};

cookie.hasKey = function (sKey) {
  if (!sKey) {
    return false;
  }
  return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
};

cookie.keys = function () {
  var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
  for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }
  return aKeys;
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weeks__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__format__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__format__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__format__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__weeks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__weeks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__weeks__["c"]; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getImageWidthHeight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(0);

/**
 * const testAsync = async () => {
 *   console.log(1)
 *   await sleep(2000)
 *   console.log(2)
 * }
 * 利用async/await做睡眠延迟sleep后面的代码执行
 *
 * @param timeout
 * @returns {Promise}
 */
const sleep = (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

/**
 * 获取图片的真是宽高，并做相应处理
 * @param file （png/jpg/gif） eg: [document.getElementById('fileid')]  or $('#fileid')
 * @param callback
 */
function getImageWidthHeight (file, callback) {
  if (!file || !file[0] || !file[0].files || !file[0].files[0]) {
    throw new Error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__string__["i" /* sprintf */])('1st arguments must be file, 1st is %s', file))
  }
  var fileData = file[0].files[0];
  let {type} = fileData
  if (!/^image\/(jpg|jpeg|png|gif)/.test(type)) {
    throw new Error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__string__["i" /* sprintf */])('1st arguments must png/jpg/gif, this file type is %s', type))
  }
  //读取图片数据
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    //加载图片获取图片真实宽度和高度
    var image = new Image();
    image.onload = function () {
      var width = image.width;
      var height = image.height;
      callback(width, height, image);// 这里得到图片的真是高度
    };
    image.src = data;
  };
  reader.readAsDataURL(fileData);
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setSessionStorage; });
/**
 *
 * @param key
 */
const getLocalStorage = key => {
  return window.localStorage.getItem(key.toString())
}

/**
 *
 * @param key
 * @param obj
 */
const setLocalStorage = (key, obj) => {
  let item = typeof obj === 'object' ? JSON.stringify(obj) : obj
  window.localStorage.setItem(key.toString(), item)
}

/**
 *
 * @param key
 */
const getSessionStorage = key => {
  return window.sessionStorage.getItem(key.toString())
}

/**
 *
 * @param key
 * @param obj
 */
const setSessionStorage = (key, obj) => {
  let item = typeof obj === 'object' ? JSON.stringify(obj) : obj
  window.sessionStorage.setItem(key.toString(), item)
}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNowTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timestampFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dateStr2timestamp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string___ = __webpack_require__(0);
/**
 * Created by liufulin on 17-3-10.
 */

/**
 * 将时间戳格式化
 * @param number timestamp  eg:1465963958000 length:13
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
function timeFormat (timestamp, Fmt, hasZero) {
  var date = (typeof timestamp != 'undefined' && timestamp != '') ? new Date(timestamp.toString().length == 10 ? Number(timestamp + '000') : timestamp) : new Date()
  hasZero = (typeof hasZero === 'boolean') ? hasZero : true
  var Y = date.getFullYear()
  var m = (hasZero && date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var d = (hasZero && date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
  var H = (hasZero && date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
  var i = (hasZero && date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
  var s = (hasZero && date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()
  var formatTime = ''
  switch (Fmt) {
    case 'YmdHis':
      formatTime = Y + m + d + H + i + s
      break
    case 'Y-m-d H:i:s':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
      break
    case 'Y/m/d H:i:s':
      formatTime = Y + '/' + m + '/' + d + ' ' + H + ':' + i + ':' + s
      break
    case 'Y-m-d H:i':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i
      break
    case 'Y-m-d H':
      formatTime = Y + '-' + m + '-' + d + ' ' + H
      break
    case 'Y-m-d':
      formatTime = Y + '-' + m + '-' + d
      break
    case 'Ymd':
      formatTime = Y + m + d
      break
    case 'H:i:s':
      formatTime = H + ':' + i + ':' + s
      break
    default:
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
      break
  }
  return formatTime
}

/**
 * 获取当前时间的格式化日期
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
const getNowTimeFormat = (Fmt = 'Y-m-d H:i:s', hasZero = true) => {
  return timeFormat(new Date().getTime(), Fmt, hasZero)
}
/**
 * 将时间戳格式化
 * @param number timestamp  eg:1465963958000 length:13   or  1465963958 length:10
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
const timestampFormat = (timestamp, Fmt = 'Y-m-d H:i:s', hasZero = true) => {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__string___["b" /* isNullOrEmpty */])(timestamp)) {
    throw new Error('timestampFormat 1st arguments is null or ""')
  }
  return timeFormat(timestamp, Fmt, hasZero)
}
/**
 * 时间字符串转时间戳
 * @param string dateStr  eg:2016-06-16 16:15:59
 * @returns {number}
 */
const dateStr2timestamp = (dateStr) => {
  return (typeof dateStr === 'string') ? Date.parse(new Date(dateStr)) : Date.parse(new Date())
}




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMonthStartEndtDayTimestamp; });
/**
 * Created by liufulin on 17-2-10.
 */
/**
 * 计时器,最终得到的时间字符串为 Timer.timeStr
 * @param split
 * @constructor
 */
const Timer = function (split = ':') {
  this.split = split
  this.timeInterval = null
  this.defautTimeStr = `00${split}00${split}00`
  this.timeStr = this.defautTimeStr
}
/**
 * 开始计时
 * @param cb
 */
Timer.prototype.start = function (cb) {
  let step = 0
  this.timeInterval = setInterval(() => {
    step++
    let hour = parseInt(step / 3600, 10)
    let minute = parseInt(step / 60, 10)
    minute = minute - (hour * 60)
    let seconds = parseInt(step % 60, 10)
    this.timeStr = `${this.toDub(hour)}${this.split}${this.toDub(minute)}${this.split}${this.toDub(seconds)}`
    cb(this.timeStr)
  }, 1000)
}
/**
 * 时间不满两位数的补零
 * @param num
 * @returns {string}
 */
Timer.prototype.toDub = (num) => {
  return num < 10 ? `0${num}` : num
}
/**
 * 停止计时
 */
Timer.prototype.stop = function () {
  if (this.timeInterval) {
    clearInterval(this.timeInterval)
    this.timeStr = this.defautTimeStr
  }
}



// ===============================
/**
 * 获取指定时间所在月份的第一天开始时刻和最后一天最后时刻的时间戳（秒）
 * eg: JSCT.getMonthStartEndtDayTimestamp(1500431715)
 *
 * @param time 时间戳 timestamp 默认当前时间(秒)
 * @returns {{start: number, end: number}}
 */
const getMonthStartEndtDayTimestamp = (time = new Date().getTime()) => {
  if (typeof time == 'number') {
    time = time.toString().length == 10 ? Number(time + '000') : time
  }
  let inputDate = new Date(time)
  let inputYear = inputDate.getFullYear()
  let imputMonth = inputDate.getMonth() + 1

  let date = new Date(`${inputYear}-${imputMonth}`)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let daycount = new Date(year, month, 0).getDate()
  return {
    start: Number((new Date(`${inputYear}-${imputMonth}`).getTime() / 1000).toFixed(0)),
    end: Number((date.getTime() / 1000).toFixed(0)) + daycount * 24 * 3600 - 1
  }
}





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWeekByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getWeekDaysByYearIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFurtureWeeksInfo; });
/**
 * Created by liufulin on 17-6-8.
 */
/**
 * 获取某一时间所在的周数
 *
 * @param date 日期，默认当前时间
 * eg: Date('2017-01-01')
 */
function getWeekByDate (date = new Date()) {
  var date2 = new Date(date.getFullYear(), 0, 1);
  var day1 = date.getDay();
  if (day1 == 0) {
    day1 = 7;
  }
  var day2 = date2.getDay();
  if (day2 == 0) {
    day2 = 7;
  }
  var d = Math.round((date.getTime() - date2.getTime()) / 86400000);
  return Math.ceil(d / 7);
}

/**
 * 获取某年的第几周包含的日期
 *
 * @param year 哪一年，默认当前年
 * @param index 第几周，默认第一周
 * @returns {Array}
 */
function getWeekDaysByYearIndex(year = new Date().getFullYear(), index = 1) {
  var d = new Date(year, 0, 1);
  while (d.getDay() != 1) {
    d.setDate(d.getDate() + 1);
  }
  var to = new Date(year + 1, 0, 1);
  var i = 1;
  var arr = [];
  for (var from = d; from < to;) {
    if (i == index) {
      arr.push(from.getFullYear() + '/' + (from.getMonth() + 1) + '/' + from.getDate());
    }
    var j = 6;
    while (j > 0) {
      from.setDate(from.getDate() + 1);
      if (i == index) {
        arr.push(from.getFullYear() + '/' + (from.getMonth() + 1) + '/' + from.getDate());
      }
      j--;
    }
    if (i == index) {
      return arr;
    }
    from.setDate(from.getDate() + 1);
    i++;
  }
}

/**
 * 获得指定日期的未来十周信息
 *
 * @param date 指定开始日，默认当前时间
 * eg: new Date('2017-01-02')
 * @param num  指定得到未来多少个周，默认10周
 * @returns {Array}
 */
function getFurtureWeeksInfo (date = new Date(), num = 10) {
  var weeks = [];
  var thisWeek = getWeekByDate(date);

  var startYear = date.getFullYear();
  if (thisWeek == 0) {
    thisWeek = 52;
    startYear--;
  }
  for (var i = 1; i <= num; i++) {
    var ds = [];
    var w = thisWeek + i;
    var dsStartArr = [];
    var dsEndArr = [];
    if (w > 52) {
      var tempWeek = w - 52;
      var year = startYear + 1;
      ds = getWeekDaysByYearIndex(year, tempWeek);
      dsStartArr = ds[0].split('/')
      dsEndArr = ds[6].split('/')
      weeks.push({
        info: year.toString().substr(-2) + '-' + 'W' + tempWeek + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: year,
        month: Number(dsStartArr[1]),
        week: tempWeek,
        days: ds
      })
    } else {
      ds = getWeekDaysByYearIndex(startYear, w);
      dsStartArr = ds[0].split('/')
      dsEndArr = ds[6].split('/')
      weeks.push({
        info: startYear.toString().substr(-2) + '-' + 'W' + w + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: startYear,
        month: Number(dsStartArr[1]),
        week: w,
        days: ds
      })
    }
  }
  return weeks;
}




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cookie___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date___ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other___ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrayUnique", function() { return __WEBPACK_IMPORTED_MODULE_0__array___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrayQuickSort", function() { return __WEBPACK_IMPORTED_MODULE_0__array___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_0__array___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return __WEBPACK_IMPORTED_MODULE_0__array___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return __WEBPACK_IMPORTED_MODULE_1__number___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toFixedDecimal", function() { return __WEBPACK_IMPORTED_MODULE_1__number___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isCreditCard", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPhone", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isIdentityCard", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return __WEBPACK_IMPORTED_MODULE_2__string___["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return __WEBPACK_IMPORTED_MODULE_3__cookie___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return __WEBPACK_IMPORTED_MODULE_4__store___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return __WEBPACK_IMPORTED_MODULE_4__store___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionStorage", function() { return __WEBPACK_IMPORTED_MODULE_4__store___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionStorage", function() { return __WEBPACK_IMPORTED_MODULE_4__store___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStartEndtDayTimestamp", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getNowTimeFormat", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timestampFormat", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dateStr2timestamp", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekByDate", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekDaysByYearIndex", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getFurtureWeeksInfo", function() { return __WEBPACK_IMPORTED_MODULE_5__date___["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return __WEBPACK_IMPORTED_MODULE_6__other___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getImageWidthHeight", function() { return __WEBPACK_IMPORTED_MODULE_6__other___["b"]; });
/**
 * array all tool
 */


/** number all tools */


/**
 * string all tools
 */








/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, arrayQuickSort: arrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, isIdentityCard: isIdentityCard, sprintf: sprintf, cookie: cookie, getLocalStorage: getLocalStorage, setLocalStorage: setLocalStorage, getSessionStorage: getSessionStorage, setSessionStorage: setSessionStorage, Timer: Timer}}
 */


(function() {
  var JSCT = {arrayUnique: __WEBPACK_IMPORTED_MODULE_0__array___["a" /* arrayUnique */], arrayQuickSort: __WEBPACK_IMPORTED_MODULE_0__array___["b" /* arrayQuickSort */], isArray: __WEBPACK_IMPORTED_MODULE_0__array___["c" /* isArray */], inArray: __WEBPACK_IMPORTED_MODULE_0__array___["d" /* inArray */],
    getRandomInt: __WEBPACK_IMPORTED_MODULE_1__number___["a" /* getRandomInt */], toFixedDecimal: __WEBPACK_IMPORTED_MODULE_1__number___["b" /* toFixedDecimal */],
    getUUID: __WEBPACK_IMPORTED_MODULE_2__string___["a" /* getUUID */], isNullOrEmpty: __WEBPACK_IMPORTED_MODULE_2__string___["b" /* isNullOrEmpty */], isString: __WEBPACK_IMPORTED_MODULE_2__string___["c" /* isString */], isCreditCard: __WEBPACK_IMPORTED_MODULE_2__string___["d" /* isCreditCard */], isEmail: __WEBPACK_IMPORTED_MODULE_2__string___["e" /* isEmail */], isUrl: __WEBPACK_IMPORTED_MODULE_2__string___["f" /* isUrl */], isPhone: __WEBPACK_IMPORTED_MODULE_2__string___["g" /* isPhone */], isIdentityCard: __WEBPACK_IMPORTED_MODULE_2__string___["h" /* isIdentityCard */], sprintf: __WEBPACK_IMPORTED_MODULE_2__string___["i" /* sprintf */],
    cookie: __WEBPACK_IMPORTED_MODULE_3__cookie___["a" /* cookie */],
    getLocalStorage: __WEBPACK_IMPORTED_MODULE_4__store___["a" /* getLocalStorage */], setLocalStorage: __WEBPACK_IMPORTED_MODULE_4__store___["b" /* setLocalStorage */], getSessionStorage: __WEBPACK_IMPORTED_MODULE_4__store___["c" /* getSessionStorage */], setSessionStorage: __WEBPACK_IMPORTED_MODULE_4__store___["d" /* setSessionStorage */],
    Timer: __WEBPACK_IMPORTED_MODULE_5__date___["a" /* Timer */], getMonthStartEndtDayTimestamp: __WEBPACK_IMPORTED_MODULE_5__date___["b" /* getMonthStartEndtDayTimestamp */], getNowTimeFormat: __WEBPACK_IMPORTED_MODULE_5__date___["c" /* getNowTimeFormat */], timestampFormat: __WEBPACK_IMPORTED_MODULE_5__date___["d" /* timestampFormat */], dateStr2timestamp: __WEBPACK_IMPORTED_MODULE_5__date___["e" /* dateStr2timestamp */], getWeekByDate: __WEBPACK_IMPORTED_MODULE_5__date___["f" /* getWeekByDate */], getWeekDaysByYearIndex: __WEBPACK_IMPORTED_MODULE_5__date___["g" /* getWeekDaysByYearIndex */], getFurtureWeeksInfo: __WEBPACK_IMPORTED_MODULE_5__date___["h" /* getFurtureWeeksInfo */],
    sleep: __WEBPACK_IMPORTED_MODULE_6__other___["a" /* sleep */], getImageWidthHeight: __WEBPACK_IMPORTED_MODULE_6__other___["b" /* getImageWidthHeight */]}
  if (typeof window == 'undefined') {
    return
  }
  window.JSCT = JSCT
})()


/***/ })
/******/ ]);