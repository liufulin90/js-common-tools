/**
 * Created by liufulin on 17-3-10.
 */
import {isNullOrEmpty} from '../string/'
/**
 * 将时间戳格式化
 * @param number timestamp  eg:1465963958000 length:13
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
function timeFormat (timestamp, Fmt, hasZero) {
  var date = (typeof timestamp != 'undefined' && timestamp != '') ? new Date(timestamp) : new Date()
  hasZero = (typeof hasZero === 'boolean') ? hasZero : true
  var Y = date.getFullYear()
  var m = (hasZero && date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var d = (hasZero && date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
  var H = (hasZero && date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
  var i = (hasZero && date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
  var s = (hasZero && date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()
  var formatTime = ''
  switch (Fmt) {
    case 'YmdHis':
      formatTime = Y + m + d + H + i + s
      break
    case 'Y-m-d H:i:s':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
      break
    case 'Y/m/d H:i:s':
      formatTime = Y + '/' + m + '/' + d + ' ' + H + ':' + i + ':' + s
      break
    case 'Y-m-d H:i':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i
      break
    case 'Y-m-d H':
      formatTime = Y + '-' + m + '-' + d + ' ' + H
      break
    case 'Y-m-d':
      formatTime = Y + '-' + m + '-' + d
      break
    case 'Ymd':
      formatTime = Y + m + d
      break
    case 'H:i:s':
      formatTime = H + ':' + i + ':' + s
      break
    default:
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
      break
  }
  return formatTime
}

/**
 * 获取当前时间的格式化日期
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
const getNowTimeFormat = (Fmt = 'Y-m-d H:i:s', hasZero = true) => {
  return timeFormat('', Fmt, hasZero)
}
/**
 * 将时间戳格式化
 * @param number timestamp  eg:1465963958000 length:13
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
const timestampFormat = (timestamp, Fmt = 'Y-m-d H:i:s', hasZero = true) => {
  if (isNullOrEmpty(timestamp)) {
    throw new Error('timestampFormat 1st arguments is null or ""')
  }
  return timeFormat(timestamp, Fmt, hasZero)
}
/**
 * 时间字符串转时间戳
 * @param string dateStr  eg:2016-06-16 16:15:59
 * @returns {number}
 */
const dateStr2timestamp = (dateStr) => {
  return (typeof dateStr === 'string') ? Date.parse(new Date(dateStr)) : Date.parse(new Date())
}

export {
  getNowTimeFormat,
  timestampFormat,
  dateStr2timestamp
}
