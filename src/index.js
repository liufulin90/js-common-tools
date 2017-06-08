/**
 * array all tool
 */
import {arrayUnique, arrayQuickSort, isArray, inArray} from './array/'

/** number all tools */
import {getRandomInt, toFixedDecimal} from './number/'

/**
 * string all tools
 */
import {getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf} from './string/'

import {cookie} from './cookie/'
import {getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage} from './store/'
import {Timer, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureTenWeeksInfo} from './date/'
import {sleep, getImageWidthHeight} from './other/'
/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, arrayQuickSort: arrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, isIdentityCard: isIdentityCard, sprintf: sprintf, cookie: cookie, getLocalStorage: getLocalStorage, setLocalStorage: setLocalStorage, getSessionStorage: getSessionStorage, setSessionStorage: setSessionStorage, Timer: Timer}}
 */
export {
  arrayUnique, arrayQuickSort, isArray, inArray,
  getRandomInt, toFixedDecimal,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf,
  cookie,
  getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
  Timer, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureTenWeeksInfo,
  sleep, getImageWidthHeight
}

(function() {
  var JSCT = {arrayUnique, arrayQuickSort, isArray, inArray,
    getRandomInt, toFixedDecimal,
    getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf,
    cookie,
    getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
    Timer, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureTenWeeksInfo,
    sleep, getImageWidthHeight}
  if (typeof window == 'undefined') {
    return
  }
  window.JSCT = JSCT
})()
