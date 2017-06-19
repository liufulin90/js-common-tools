/**
 * Created by liufulin on 17-2-10.
 */
/**
 * 计时器,最终得到的时间字符串为 Timer.timeStr
 * @param split
 * @constructor
 */
const Timer = function (split = ':') {
  this.split = split
  this.timeInterval = null
  this.defautTimeStr = `00${split}00${split}00`
  this.timeStr = this.defautTimeStr
}
/**
 * 开始计时
 * @param cb
 */
Timer.prototype.start = function (cb) {
  let step = 0
  this.timeInterval = setInterval(() => {
    step++
    let hour = parseInt(step / 3600, 10)
    let minute = parseInt(step / 60, 10)
    minute = minute - (hour * 60)
    let seconds = parseInt(step % 60, 10)
    this.timeStr = `${this.toDub(hour)}${this.split}${this.toDub(minute)}${this.split}${this.toDub(seconds)}`
    cb(this.timeStr)
  }, 1000)
}
/**
 * 时间不满两位数的补零
 * @param num
 * @returns {string}
 */
Timer.prototype.toDub = (num) => {
  return num < 10 ? `0${num}` : num
}
/**
 * 停止计时
 */
Timer.prototype.stop = function () {
  if (this.timeInterval) {
    clearInterval(this.timeInterval)
    this.timeStr = this.defautTimeStr
  }
}

export {
  Timer
}

// ===============================
/**
 * 获取指定时间所在月份的第一天开始时刻和最后一天最后时刻的时间戳（秒）
 * eg: JSCT.getMonthStartEndtDayTimestamp(1500431715)
 *
 * @param time 时间戳 timestamp 默认当前时间(秒)
 * @returns {{start: number, end: number}}
 */
const getMonthStartEndtDayTimestamp = (time = new Date().getTime()) => {
  if (typeof time == 'number') {
    time = time.toString().length == 10 ? Number(time + '000') : time
  }
  let inputDate = new Date(time)
  let inputYear = inputDate.getFullYear()
  let imputMonth = inputDate.getMonth() + 1

  let date = new Date(`${inputYear}-${imputMonth}`)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let daycount = new Date(year, month, 0).getDate()
  return {
    start: Number((new Date(`${inputYear}-${imputMonth}`).getTime() / 1000).toFixed(0)),
    end: Number((date.getTime() / 1000).toFixed(0)) + daycount * 24 * 3600 - 1
  }
}

export {
  getMonthStartEndtDayTimestamp
}

