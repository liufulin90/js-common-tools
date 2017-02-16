'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = exports.ArrayQuickSort = exports.ArrayUnique = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayUnique = function ArrayUnique() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (arr.constructor !== Array) {
    throw Error('ArrayUnique argument is not a Array');
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
if (!Array.prototype.ArrayUnique) {
  Array.prototype.ArrayUnique = function () {
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

var ArrayQuickSort = function ArrayQuickSort() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (arr.constructor !== Array) {
    throw Error('ArrayQuickSort param is not a Array');
  }
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [],
      right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return ArrayQuickSort(left).concat([pivot], ArrayQuickSort(right));
};
if (!Array.prototype.ArrayQuickSort) {
  Array.prototype.ArrayQuickSort = function () {
    if (arr.constructor !== Array) {
      throw Error('this is not a Array');
    }
    if (this.length <= 1) {
      return this;
    }
    var pivotIndex = Math.floor(this.length / 2);
    var pivot = this.splice(pivotIndex, 1)[0];
    var left = [],
        right = [];
    for (var i = 0; i < this.length; i++) {
      if (this[i] < pivot) {
        left.push(this[i]);
      } else {
        right.push(this[i]);
      }
    }
    return left.ArrayQuickSort().concat([pivot], right.ArrayQuickSort());
  };
}

var isArray = function isArray(v) {
  return v instanceof Array || Object.prototype.toString.call(v) == '[object Array]';
};

exports.ArrayUnique = ArrayUnique;
exports.ArrayQuickSort = ArrayQuickSort;
exports.isArray = isArray;