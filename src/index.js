/**
 * array all tools
 */
import {
  ArrayUnique,
  ArrayQuickSort,
  isArray
} from './array/'
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
 * @type {{ArrayUnique: ArrayUnique, ArrayQuickSort: ArrayQuickSort, isArray: isArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, sprintf: sprintf}}
 */
const JSCT = {
  ArrayUnique, ArrayQuickSort, isArray,
  getRandomInt, toFixedDecimal,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, sprintf
}

export default JSCT


