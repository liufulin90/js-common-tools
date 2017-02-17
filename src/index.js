/**
 * array all tool
 */
import { arrayUnique, arrayQuickSort, isArray, inArray } from './array/'

/** number all tools */
import { getRandomInt, toFixedDecimal } from './number/'

/**
 * string all tools
 */
import { getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isIdentityCard, sprintf } from './string/'

/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, arrayQuickSort: arrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, isIdentityCard: isIdentityCard, sprintf: sprintf}}
 */
const JSCT = {
  arrayUnique, arrayQuickSort, isArray, inArray,
  getRandomInt, toFixedDecimal,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isIdentityCard, sprintf
}

export default JSCT
