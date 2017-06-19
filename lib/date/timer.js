'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Timer = function Timer() {
  var split = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';

  this.split = split;
  this.timeInterval = null;
  this.defautTimeStr = '00' + split + '00' + split + '00';
  this.timeStr = this.defautTimeStr;
};

Timer.prototype.start = function (cb) {
  var _this = this;

  var step = 0;
  this.timeInterval = setInterval(function () {
    step++;
    var hour = parseInt(step / 3600, 10);
    var minute = parseInt(step / 60, 10);
    minute = minute - hour * 60;
    var seconds = parseInt(step % 60, 10);
    _this.timeStr = '' + _this.toDub(hour) + _this.split + _this.toDub(minute) + _this.split + _this.toDub(seconds);
    cb(_this.timeStr);
  }, 1000);
};

Timer.prototype.toDub = function (num) {
  return num < 10 ? '0' + num : num;
};

Timer.prototype.stop = function () {
  if (this.timeInterval) {
    clearInterval(this.timeInterval);
    this.timeStr = this.defautTimeStr;
  }
};

exports.Timer = Timer;

var getMonthStartEndtDayTimestamp = function getMonthStartEndtDayTimestamp() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

  if (typeof time == 'number') {
    time = time.toString().length == 10 ? Number(time + '000') : time;
  }
  var inputDate = new Date(time);
  var inputYear = inputDate.getFullYear();
  var imputMonth = inputDate.getMonth() + 1;

  var date = new Date(inputYear + '-' + imputMonth);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var daycount = new Date(year, month, 0).getDate();
  return {
    start: Number((new Date(inputYear + '-' + imputMonth).getTime() / 1000).toFixed(0)),
    end: Number((date.getTime() / 1000).toFixed(0)) + daycount * 24 * 3600 - 1
  };
};

exports.getMonthStartEndtDayTimestamp = getMonthStartEndtDayTimestamp;