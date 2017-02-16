/**
 * array all tools
 */
import { arrayUnique, arrayQuickSort, isArray, inArray } from './array/'
/**
 * number all tools
 */
import { getRandomInt, toFixedDecimal } from './number/'
/**
 * string all tools
 */
import { getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, sprintf } from './string/'

/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, ArrayQuickSort: ArrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, sprintf: sprintf}}
 */
const JSCT = {
  arrayUnique, arrayQuickSort, isArray, inArray,
  getRandomInt, toFixedDecimal,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, sprintf
}

export default JSCT


