/**
 * Created by liufulin on 17-6-14.
 */
/**
 * 获取某一时间所在的周数
 * @param date
 */
function getYearWeek (date) {
  var date2 = new Date(date.getFullYear(), 0, 1);
  var d = Math.round((date.getTime() - date2.getTime()) / 86400000);
  return Math.ceil(d / 7);
}

/**
 * 获取某年的第几周包含的日期
 * @param year
 * @param index
 * @returns {Array}
 */
function getWeekDays (year, index) {
  var d = new Date(year, 0, 1);
  while (d.getDay() != 1) {
    d.setDate(d.getDate() + 1);
  }
  var to = new Date(year + 1, 0, 1);
  var i = 1;
  var arr = [];
  for (var from = d; from < to;) {
    if (i == index) {
      arr.push(from.getFullYear() + "/" + (from.getMonth() + 1) + "/" + from.getDate());
    }
    var j = 6;
    while (j > 0) {
      from.setDate(from.getDate() + 1);
      if (i == index) {
        arr.push(from.getFullYear() + "/" + (from.getMonth() + 1) + "/" + from.getDate());
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
 * 获得未来十周信息
 * @returns {Array}
 */
function getFurtureTenWeeksInfo () {
  var weeks = [];
  var date = new Date();
  var thisWeek = getYearWeek(date);

  var startYear = date.getFullYear();
  if (thisWeek == 0) {
    thisWeek = 52;
    startYear--;
  }
  for (var i = 1; i <= 10; i++) {
    var ds = [];
    var w = thisWeek + i;
    if (w > 52) {
      var tempWeek = w - 52;
      var year = startYear + 1;
      ds = getWeekDays(year, tempWeek);
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
      ds = getWeekDays(startYear, w);
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
  getFurtureTenWeeksInfo
}