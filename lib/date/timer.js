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