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

/**
 * 判断数组是否有重复值
 *
 * @param arr 需要判断的数组
 * @returns {boolean} ture: 有重复值  false: 没有重复值
 */
const arrayIsRepeat = (arr) => {
  var hash = {};
  for (var i in arr) {
    if (hash[arr[i]]) {
      return true;
    }
    hash[arr[i]] = true;
  }
  return false;
}

export {
  arrayUnique,
  arrayQuickSort,
  isArray,
  inArray,
  arrayIsRepeat
}
