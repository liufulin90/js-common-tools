'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayIsRepeat = exports.inArray = exports.isArray = exports.arrayQuickSort = exports.arrayUnique = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayUnique = function arrayUnique() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (arr.constructor !== Array) {
    throw Error('arrayUnique argument is not a Array');
  }
  var o = {},
      r = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].constructor === Object || arr[i].constructor === Array) {
      if (!o[(0, _stringify2.default)(arr[i]).toString()]) {
        o[(0, _stringify2.default)(arr[i]).toString()] = true;
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
};
if (!Array.prototype.arrayUnique) {
  Array.prototype.arrayUnique = function () {
    if (this.constructor !== Array) {
      throw Error('this is not a Array');
    }
    var o = {},
        r = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i].constructor === Object || this[i].constructor === Array) {
        if (!o[(0, _stringify2.default)(this[i]).toString()]) {
          o[(0, _stringify2.default)(this[i]).toString()] = true;
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
  };
}

var arrayQuickSort = function arrayQuickSort() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var orderBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

  if (!isArray(arr)) {
    throw Error('arrayQuickSort param is not a Array');
  }
  if (!inArray(orderBy, ['asc', 'desc'])) {
    throw Error('the second argument not in [asc, desc]');
  }
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [],
      right = [];
  for (var i = 0; i < arr.length; i++) {
    if (orderBy == 'asc') {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    } else {
      arr[i] > pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
  }
  return arrayQuickSort(left, orderBy).concat([pivot], arrayQuickSort(right, orderBy));
};
if (!Array.prototype.arrayQuickSort) {
  Array.prototype.arrayQuickSort = function () {
    var orderBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'asc';

    if (!isArray(this)) {
      throw Error('this is not a Array');
    }
    if (!inArray(orderBy, ['asc', 'desc'])) {
      throw Error('the second argument not in [asc, desc]');
    }
    if (this.length <= 1) {
      return this;
    }
    var pivotIndex = Math.floor(this.length / 2);
    var pivot = this.splice(pivotIndex, 1)[0];
    var left = [],
        right = [];
    for (var i = 0; i < this.length; i++) {
      if (orderBy == 'asc') {
        this[i] < pivot ? left.push(this[i]) : right.push(this[i]);
      } else {
        this[i] > pivot ? left.push(this[i]) : right.push(this[i]);
      }
    }
    return left.arrayQuickSort(orderBy).concat([pivot], right.arrayQuickSort(orderBy));
  };
}

var isArray = function isArray(v) {
  return v instanceof Array || v.constructor === Array || Object.prototype.toString.call(v) == '[object Array]';
};

var inArray = function inArray(needle, haystack) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isArray(haystack)) {
    throw Error('the second argument is not a Array');
  }
  var len = haystack.length;
  for (var i = 0; i < len; i++) {
    if (strict === true) {
      if (haystack[i] === needle) return true;
    } else {
      if (haystack[i] == needle) return true;
    }
  }
  return false;
};

var arrayIsRepeat = function arrayIsRepeat(arr) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var hash = {};
  for (var i in arr) {
    if (strict === true) {
      if (hash[arr[i]] && hash[arr[i]] === arr[i]) {
        return true;
      }
      hash[arr[i]] = arr[i];
    } else {
      if (hash[arr[i]]) {
        return true;
      }
      hash[arr[i]] = true;
    }
  }
  return false;
};

exports.arrayUnique = arrayUnique;
exports.arrayQuickSort = arrayQuickSort;
exports.isArray = isArray;
exports.inArray = inArray;
exports.arrayIsRepeat = arrayIsRepeat;