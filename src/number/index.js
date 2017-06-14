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

export {
  getRandomInt,
  toFixedDecimal
}
