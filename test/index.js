/**
 * Created by liufulin on 17-2-15.
 */
import * as JSCT from '../src/'


/*var arr = [5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99];
 console.log(arr)
 console.log(ArrayUnique(arr))*/

/*var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 console.log(arr);
 console.log(ArrayQuickSort(arr))*/

/*
 var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 console.log(arr);
 console.log(ArrayTools.ArrayQuickSort(arr))
 */
/* var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 console.log(JSCT.ArrayUnique([5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99]))
 console.log(JSCT.ArrayQuickSort([5, 3, 55, 3,77, 55, 99, 2, 4]))*/

// console.log(isNullOrEmpty([' '], true))
// console.log(JSCT.getRandomInt(9, 15))
/*
 var str = '  asdf   jjj  ';
 console.log(str)
 console.log(str.trimL())*/

// console.log(JSCT.getUUID())
// console.log(JSCT.toFixedDecimal(12.4545, 3))
// console.log(JSCT.toFixedDecimal(12.253452))


// console.log(JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3))

// console.log(JSCT.isCreditCard('5212345678901234'))
// console.log(JSCT.isEmail('liufulin90@163.com'))
// console.log(JSCT.isUrl('http://www.linxins.com'))

// console.log(JSCT.inArray(1, [2,3]))

// console.log(JSCT.isIdentityCard('511324199010154310'))
// console.log(JSCT.isIdentityCard('231421199406042028'))

// var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
// console.log(JSCT.arrayQuickSort(arr, 'desc'))

// console.log(JSCT.cookie('test', '123'))
// console.log(Array.from(Array(100).keys()) )
// console.log([...Array(100).keys()])

// let tt = new JSCT.Timer()
// tt.start(function (timeStr) {
//   console.log(timeStr)
// })
// setTimeout(()=>{
//   tt.stop()
// }, 3000)

// const testAsync = async () => {
//   console.log(1)
//   await JSCT.sleep(2000)
//   console.log(2)
// }
// testAsync()

// console.log(JSCT.getNowTimeFormat())
// console.log(JSCT.dateStr2timestamp('2016-06-16 16:15:59'))
// console.log(new Date().getTime())
// console.log(JSCT.timestampFormat(1489142869000))
// console.log(JSCT.dateStr2timestamp('2016-06-16 16:15:59'))

// 判断手机号
// console.log(JSCT.isPhone('18785465548'))
// console.log(JSCT.isPhone('12785465548'))

//获取未来十周信息
// console.log(JSCT.getWeekByDate(new Date('2017-01-03')))
// console.log(JSCT.getWeekDaysByYearIndex())
// console.log(JSCT.getFurtureTenWeeksInfo(new Date('2017-01-02'), 2))
// console.log(JSCT.getMonthStartEndtDayTimestamp(1500431715))
// console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).start, 'Y-m-d H:i:s'))
// console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).end, 'Y-m-d H:i:s'))

// 数组值重复
// console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5]));
// console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, 2]));

// 判断金额
console.log(JSCT.isPrice('12.37')); // true
console.log(JSCT.isPrice('12&37')); // false