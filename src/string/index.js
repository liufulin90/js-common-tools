import {isArray} from '../array/'
import {getRandomInt} from '../number/'
/**
 * Trim function for Strings
 */
/***
 * 清除字符中所有空格
 */
if (!String.prototype.trimAll) {
  String.prototype.trimAll = function () {
    return this.replace(/^(\s)+|(\s)+|(\s)+$/g, '');
  }
}
/***
 * 清除字符中左边空格
 */
if (!String.prototype.trimL) {
  String.prototype.trimL = function () {
    return this.replace(/^\s+/g, '');
  }
}
/***
 * 清除字符中右边空格
 */
if (!String.prototype.trimR) {
  String.prototype.trimR = function () {
    return this.replace(/\s+$/g, '');
  }
}

/**
 * Checks value if it has value or not. Returns true if it is null or undefined You can do recursive check.
 * 判断是否为空，为空返回true，否则返回false。可以做递归检查
 *
 * isNullOrEmpty([]) => true
 * isNullOrEmpty([""]) => false
 * isNullOrEmpty([""], true) => true (Recursive check)
 *
 * @param v Value to be checked 被检查的值
 * @param recursive True for recursive check, False for only top item check 是否递归
 * @return {Boolean}
 */
const isNullOrEmpty = (v, recursive) => {
  if (v != "undefined" && v !== null) {
    switch (typeof v) {
      case "object":
        if (!recursive) return false;
        if (isArray(v)) {
          return !(v.length > 0 && v[0] != "undefined" && v[0] !== null)
        } else {
          for (var property in v) {
            if (v.hasOwnProperty(property)) {
              return isNullOrEmpty(v[property], recursive);
            }
          }
        }
        break;
      case "string":
        if (v.length > 0 && v !== "") {
          return false;
        }
        break;
      case "number":
        if (v > 0) {
          return false;
        }
        break;
    }
    return true;
  } else {
    return true;
  }
}

/**
 * 判断是否为字符窜
 *
 * @param str
 * @returns {boolean}
 */
const isString = (str) => {
  return (typeof str === 'string') ? true : false;
}
/**
 * Return a unique identifier with the given `len`.
 * 获得指定长度的唯一字符串
 *
 * getUUID(10);
 * // => "3DaS435D2z"
 * getUUID(10, false);
 * // => "cDaS435D2z"
 *
 * @param {Number} len
 * @param {Boolean} first character must be alpha numeric char (for html id generation)
 * @return {String}
 * @api public
 */
const getUUID = function (len = 32, firstAlphaNumeric = true) {
  let buf = [],
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    charlen = chars.length;
  if (firstAlphaNumeric || false) {
    let alphaNumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      ancharlen = alphaNumericChars.length;
    buf.push(alphaNumericChars[getRandomInt(0, ancharlen - 1)]);
    len -= 1;
  }
  for (let i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }
  return buf.join("");
}

/**
 * sprintf 把格式数据写成串
 *
 * @param str
 * @returns {string}
 */
const sprintf = function (str) {
  if (!isString(str)) {
    throw Error('the 1st argument should be string');
  }
  let parts = str.split('%s');
  if (parts.length != arguments.length) {
    throw Error('the number of %s in string is not equal to the number of variables');
  }
  let ret = parts[0];
  for (let i = 1; i < arguments.length; i ++) {
    ret += arguments[i] + parts[i];
  }
  return ret
}

/**
 * 判断是否为信用卡
 *
 * @param value
 * @returns {boolean}
 */
const isCreditCard = (value) => {
  // This magic string is coming from http://www.informit.com/articles/article.aspx?p=1223879&seqNum=12
  let reg = /^(5[1-5]\d{14})|(4\d{12}(\d{3})?)|(3[47]\d{13})|(6011\d{14})|((30[0-5]|36\d|38\d)\d{11})$/;
  return reg.test(value);
}

/**
 * 判断是否为正确邮箱
 *
 * @param value
 * @returns {boolean}
 */
const isEmail = (value) => {
  // This magic string is coming from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
}

/**
 * 判断死否为url
 *
 * @param value
 * @returns {boolean}
 */
const isUrl = (value) => {
  let reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return reg.test(value);
}

export {
  getUUID,
  isNullOrEmpty,
  isString,
  isCreditCard,
  isEmail,
  isUrl,
  sprintf
}
