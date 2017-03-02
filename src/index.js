/**
 * array all tool
 */
import {arrayUnique, arrayQuickSort, isArray, inArray} from './array/'

/** number all tools */
import {getRandomInt, toFixedDecimal} from './number/'

/**
 * string all tools
 */
import {getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isIdentityCard, sprintf} from './string/'

import {cookie} from './cookie/'
import {getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage} from './store/'
import {Timer} from './date/'
/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, arrayQuickSort: arrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, isIdentityCard: isIdentityCard, sprintf: sprintf, cookie: cookie, getLocalStorage: getLocalStorage, setLocalStorage: setLocalStorage, getSessionStorage: getSessionStorage, setSessionStorage: setSessionStorage, Timer: Timer}}
 */
// const JSCT = {
//   arrayUnique, arrayQuickSort, isArray, inArray,
//   getRandomInt, toFixedDecimal,
//   getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isIdentityCard, sprintf,
//   cookie,
//   getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
//   Timer
// }

export {
  arrayUnique, arrayQuickSort, isArray, inArray,
  getRandomInt, toFixedDecimal,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isIdentityCard, sprintf,
  cookie,
  getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
  Timer
}
