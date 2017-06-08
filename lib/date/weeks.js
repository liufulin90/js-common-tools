'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getWeekByDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  var date2 = new Date(date.getFullYear(), 0, 1);
  var day1 = date.getDay();
  if (day1 == 0) {
    day1 = 7;
  }
  var day2 = date2.getDay();
  if (day2 == 0) {
    day2 = 7;
  }
  var d = Math.round((date.getTime() - date2.getTime()) / 86400000);
  return Math.ceil(d / 7);
}

function getWeekDaysByYearIndex() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var d = new Date(year, 0, 1);
  while (d.getDay() != 1) {
    d.setDate(d.getDate() + 1);
  }
  var to = new Date(year + 1, 0, 1);
  var i = 1;
  var arr = [];
  for (var from = d; from < to;) {
    if (i == index) {
      arr.push(from.getFullYear() + '/' + (from.getMonth() + 1) + '/' + from.getDate());
    }
    var j = 6;
    while (j > 0) {
      from.setDate(from.getDate() + 1);
      if (i == index) {
        arr.push(from.getFullYear() + '/' + (from.getMonth() + 1) + '/' + from.getDate());
      }
      j--;
    }
    if (i == index) {
      return arr;
    }
    from.setDate(from.getDate() + 1);
    i++;
  }
}

function getFurtureTenWeeksInfo() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var weeks = [];
  var thisWeek = getWeekByDate(date);

  var startYear = date.getFullYear();
  if (thisWeek == 0) {
    thisWeek = 52;
    startYear--;
  }
  for (var i = 1; i <= num; i++) {
    var ds = [];
    var w = thisWeek + i;
    var dsStartArr = [];
    var dsEndArr = [];
    if (w > 52) {
      var tempWeek = w - 52;
      var year = startYear + 1;
      ds = getWeekDaysByYearIndex(year, tempWeek);
      dsStartArr = ds[0].split('/');
      dsEndArr = ds[6].split('/');
      weeks.push({
        info: year.toString().substr(-2) + '-' + 'W' + tempWeek + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: year,
        month: Number(dsStartArr[1]),
        week: tempWeek,
        days: ds
      });
    } else {
      ds = getWeekDaysByYearIndex(startYear, w);
      dsStartArr = ds[0].split('/');
      dsEndArr = ds[6].split('/');
      weeks.push({
        info: startYear.toString().substr(-2) + '-' + 'W' + w + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: startYear,
        month: Number(dsStartArr[1]),
        week: w,
        days: ds
      });
    }
  }
  return weeks;
}

exports.getWeekByDate = getWeekByDate;
exports.getWeekDaysByYearIndex = getWeekDaysByYearIndex;
exports.getFurtureTenWeeksInfo = getFurtureTenWeeksInfo;