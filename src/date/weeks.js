/**
 * Created by liufulin on 17-6-8.
 */
/**
 * 获取某一时间所在的周数
 *
 * @param date 日期，默认当前时间
 * eg: Date('2017-01-01')
 */
function getWeekByDate (date = new Date()) {
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

/**
 * 获取某年的第几周包含的日期
 *
 * @param year 哪一年，默认当前年
 * @param index 第几周，默认第一周
 * @returns {Array}
 */
function getWeekDaysByYearIndex(year = new Date().getFullYear(), index = 1) {
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

/**
 * 获得指定日期的未来十周信息
 *
 * @param date 指定开始日，默认当前时间
 * eg: new Date('2017-01-02')
 * @param num  指定得到未来多少个周，默认10周
 * @returns {Array}
 */
function getFurtureTenWeeksInfo (date = new Date(), num = 10) {
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
    if (w > 52) {
      var tempWeek = w - 52;
      var year = startYear + 1;
      ds = getWeekDaysByYearIndex(year, tempWeek);
      var dsStartArr = ds[0].split('/')
      var dsEndArr = ds[6].split('/')
      weeks.push({
        info: year.toString().substr(-2) + '-' + 'W' + tempWeek + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: year,
        month: Number(dsStartArr[1]),
        week: tempWeek,
        days: ds
      })
    } else {
      ds = getWeekDaysByYearIndex(startYear, w);
      var dsStartArr = ds[0].split('/')
      var dsEndArr = ds[6].split('/')
      weeks.push({
        info: startYear.toString().substr(-2) + '-' + 'W' + w + ' (' + dsStartArr[1] + '/' + dsStartArr[2] + '~' + dsEndArr[1] + '/' + dsEndArr[2] + ')',
        year: startYear,
        month: Number(dsStartArr[1]),
        week: w,
        days: ds
      })
    }
  }
  return weeks;
}

export {
  getWeekByDate,
  getWeekDaysByYearIndex,
  getFurtureTenWeeksInfo
}