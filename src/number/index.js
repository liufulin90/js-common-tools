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

/**
 * 判断是否为正确金额
 * console.log(JSCT.isPrice('12.37')); // true
 * console.log(JSCT.isPrice('12&37')); // false
 * @param value
 * @returns {boolean}
 */
const isPrice = (value) => {
  let reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  return reg.test(value);
}

/**
 * 判断一个数是否为素数（质数）
 * console.log(JSCT.isPrimes(9)); // false
 * console.log(JSCT.isPrimes(97)); // true
 * @param number
 * @returns {boolean} true: 是素数 false: 不是素数
 */
const isPrimes = (number) => {
  if (typeof number !== 'number') {
    throw Error('isPrimes first argument is not a number');
  }
  if (number == 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * 获取两个数之间的所有素数（质数）
 *
 * 1到30的数中所有质数：console.log(JSCT.getPrimes(1, 30)) // 2,3,5,7,11,13,17,19,23,29
 * @param start 开始数
 * @param end 结束数
 * @returns {*}
 */
const getPrimes = (start = 1, end = 10) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw Error('getPrimes arguments must be number');
  }
  if (start > end) {
    throw Error('getPrimes first argument can\'t above second argument');
  }
  var
    x,
    arr = [];
  for (x = start; x < end; x++) {
    arr.push(x);
  }
  return filterPrimes(arr);
  function filterPrimes(arr) {
    var r = arr.filter(function (val) {
      return isPrimes(val);
    });
    return r;
  }
}

export {
  getRandomInt,
  toFixedDecimal,
  isPrice,
  isPrimes,
  getPrimes
}
