'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateStr2timestamp = exports.timestampFormat = exports.getNowTimeFormat = undefined;

var _string = require('../string/');

function timeFormat(timestamp, Fmt, hasZero) {
  var date = typeof timestamp != 'undefined' && timestamp != '' ? new Date(timestamp) : new Date();
  hasZero = typeof hasZero === 'boolean' ? hasZero : true;
  var Y = date.getFullYear();
  var m = hasZero && date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var d = hasZero && date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var H = hasZero && date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var i = hasZero && date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = hasZero && date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var formatTime = '';
  switch (Fmt) {
    case 'YmdHis':
      formatTime = Y + m + d + H + i + s;
      break;
    case 'Y-m-d H:i:s':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
      break;
    case 'Y/m/d H:i:s':
      formatTime = Y + '/' + m + '/' + d + ' ' + H + ':' + i + ':' + s;
      break;
    case 'Y-m-d H:i':
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i;
      break;
    case 'Y-m-d H':
      formatTime = Y + '-' + m + '-' + d + ' ' + H;
      break;
    case 'Y-m-d':
      formatTime = Y + '-' + m + '-' + d;
      break;
    case 'Ymd':
      formatTime = Y + m + d;
      break;
    case 'H:i:s':
      formatTime = H + ':' + i + ':' + s;
      break;
    default:
      formatTime = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
      break;
  }
  return formatTime;
}

var getNowTimeFormat = function getNowTimeFormat() {
  var Fmt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Y-m-d H:i:s';
  var hasZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return timeFormat('', Fmt, hasZero);
};

var timestampFormat = function timestampFormat(timestamp) {
  var Fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-m-d H:i:s';
  var hasZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _string.isNullOrEmpty)(timestamp)) {
    throw new Error('timestampFormat 1st arguments is null or ""');
  }
  return timeFormat(timestamp, Fmt, hasZero);
};

var dateStr2timestamp = function dateStr2timestamp(dateStr) {
  return typeof dateStr === 'string' ? Date.parse(new Date(dateStr)) : Date.parse(new Date());
};

exports.getNowTimeFormat = getNowTimeFormat;
exports.timestampFormat = timestampFormat;
exports.dateStr2timestamp = dateStr2timestamp;