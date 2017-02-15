/**
 * Created by liufulin.
 */

/**
 * Returns a random int
 *
 * getRandomInt(1, 100) => 56
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomInt
}
