/**
 * Trim function for Strings
 */
import {isArray} from '../array/'
import {getRandomInt} from '../number/'

/**
 * 清除字符中所有空格
 */
if (!String.prototype.trimAll) {
  String.prototype.trimAll = function () {
    return this.replace(/^(\s)+|(\s)+|(\s)+$/g, '');
  }
}
/**
 * 清除字符中左边空格
 */
if (!String.prototype.trimL) {
  String.prototype.trimL = function () {
    return this.replace(/^\s+/g, '');
  }
}
/**
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
 * isNullOrEmpty(['']) => false
 * isNullOrEmpty([''], true) => true (Recursive check)
 *
 * @param v Value to be checked 被检查的值
 * @param recursive True for recursive check, False for only top item check 是否递归
 * @return {Boolean}
 */
const isNullOrEmpty = (v, recursive) => {
  if (v != 'undefined' && v !== null) {
    switch (typeof v) {
      case 'object':
        if (!recursive) return false;
        if (isArray(v)) {
          return !(v.length > 0 && v[0] != 'undefined' && v[0] !== null)
        } else {
          for (var property in v) {
            if (v.hasOwnProperty(property)) {
              return isNullOrEmpty(v[property], recursive);
            }
          }
        }
        break;
      case 'string':
        if (v.length > 0 && v !== '') {
          return false;
        }
        break;
      case 'number':
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
  return typeof str === 'string';
}
/**
 * Return a unique identifier with the given `len`.
 * 获得指定长度的唯一字符串
 *
 * getUUID(10);
 * // => '3DaS435D2z'
 * getUUID(10, false);
 * // => 'cDaS435D2z'
 *
 * @param {Number} len
 * @param {Boolean} first character must be alpha numeric char (for html id generation)
 * @return {String}
 * @api public
 */
const getUUID = function (len = 32, firstAlphaNumeric = true) {
  let buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length;
  if (firstAlphaNumeric || false) {
    let alphaNumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      ancharlen = alphaNumericChars.length;
    buf.push(alphaNumericChars[getRandomInt(0, ancharlen - 1)]);
    len -= 1;
  }
  for (let i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }
  return buf.join('');
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
  for (let i = 1; i < arguments.length; i++) {
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
  let reg = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
}

/**
 * 判断是否为url
 *
 * @param value
 * @returns {boolean}
 */
const isUrl = (value) => {
  let reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return reg.test(value);
}

/**
 * 判断是否为手机号
 *
 * JSCT.isPhone('18785465548') // true
 * JSCT.isPhone('12785465548') // false
 *
 * @param value
 * @returns {boolean}
 */
const isPhone = (value) => {
  let reg = /^1[34578]\d{9}$/;
  return reg.test(value);
}

/**
 * 判断是否为身份证号码
 * @param sId
 * @returns {boolean}
 */
const isIdentityCard = (sId) => {
  let aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }, iSum = 0;
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    // 你输入的身份证长度或格式错误
    return false;
  }
  sId = sId.replace(/x$/i, 'a');
  if (aCity[parseInt(sId.substr(0, 2), 10)] == null) {
    // 你的身份证地区非法
    return false;
  }
  let sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2));
  let d = new Date(sBirthday.replace(/-/g, '/'));
  if (sBirthday != (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
    // 身份证上的出生日期非法
    return false;
  }
  for (let i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  }
  if (iSum % 11 != 1) {
    // 你输入的身份证号非法
    return false;
  }
  // aCity[parseInt(sId.substr(0,2))]+','+sBirthday+','+(sId.substr(16,1)%2?'男':'女');//此次还可以判断出输入的身份证号的人性别
  return true;
}

export {
  getUUID,
  isNullOrEmpty,
  isString,
  isCreditCard,
  isEmail,
  isUrl,
  isPhone,
  isIdentityCard,
  sprintf
}
