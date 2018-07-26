<p align="center">
  <a href="https://npmcharts.com/compare/js-common-tools?minimal=true"><img src="https://img.shields.io/npm/dm/js-common-tools.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/js-common-tools"><img src="https://img.shields.io/npm/v/js-common-tools.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/js-common-tools"><img src="https://img.shields.io/npm/l/js-common-tools.svg" alt="License"></a>
</p>

# js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## 安装

通过npm安装:

```bash
  $ npm install js-common-tools
```

## 引入工具包
> 方式一
```javascript
  import * as JSCT from 'js-common-tools'
```
> 方式二:

如果直接引入的是 `lib/js-common-tools.xxx.js` 的话，所有的函数都已经全部注入到 `window` 对象中。
其中函数有一个前缀 `js_`，目的是避免跟其他框架函数有所冲突。 
```html
<script src="lib/js-common-tools.xxx.js"></script>
```
调用示例：
```javascript
  js_isEmail('liufulin90@163.com'); // true
  js_arrayIsRepeat([1, 2, 3, 4, 5, 2]); // true
```
#### PS： 以下所有示例均为方式一的调用

## 目录索引

> 自动化测试
- [测试报告](https://github.com/liufulin90/js-common-tools/blob/master/test/report/spec.md)
- [测试结果](#testresult)

> Is JS判断函数
- [isNumber 判断是否为数字](#isnumber)
- [isPrimes 判断一个数是否为素数（质数）](#isprimes)
- [isBoolean 判断是否为布尔](#isboolean)
- [isString 判断是否为字符串](#isstring)
- [isNull 判断是否是null](#isnull)
- [isUndefined 判断是否未定义](#isundefined)
- [isObject 判断是否为对象](#isobject)
- [isFunction 判断是否为函数](#isfunction)
- [isArray 判断是否为数组](#isarray)
- [isPrice 判断是否为正确金额](#isprice)
- [isCreditCard 判断是否为信用卡](#iscreditcard)
- [isEmail 判断是否为正确邮箱](#isemail)
- [isUrl 判断是否为url](#isurl)
- [isPhone 判断是否为手机号](#isphone)
- [isIdentityCard 判断是否为身份证号码](#isidentitycard)

> Array
- [arrayUnique 数组去重](#arrayunique)
- [arrayQuickSort 对数组进行排序](#arrayquicksort)
- [isArray 判断是否为数组](#isarray)
- [inArray 判断值是否在数组中](#inarray)
- [arrayIsRepeat 判断数组是否有重复值](#arrayisrepeat)
> Number
- [getRandomInt 获得指定区间的随机整数](#getrandomint)
- [toFixedDecimal 返回指定小数位数的十进制](#tofixeddecimal)
- [isPrice 判断是否为正确金额](#isprice)
- [getPrimes 获取两个数之间的所有素数（质数）](#getprimes)

> String
- [trimAll 清除字符中所有空格](#trimall)
- [trimL 清除字符中左边空格](#triml)
- [trimR 清除字符中右边空格](#trimr)
- [isNullOrEmpty 判断是否为空](#isnullorempty)
- [getUUID 返回给定长度的唯一标识符](#getuuid)
- [sprintf 把格式数据写成串](#sprintf)
- [isCreditCard 判断是否为信用卡](#iscreditcard)
- [isEmail 判断是否为正确邮箱](#isemail)
- [isUrl 判断是否为url](#isurl)
- [isPhone 判断是否为手机号](#isphone)
- [isIdentityCard 判断是否为身份证号码](#isidentitycard)
> Other
- [cookie](#cookie)
- [store localStorage,sessionStorage](#store)
- [Timer 计时器](#timer)
- [sleep 睡眠延迟](#sleep)
- [getNowTimeFormat 获取当前时间的格式化日期](#getnowtimeformat)
- [timestampFormat 将时间戳格式化](#timestampformat)
- [dateStr2timestamp 时间字符串转时间戳](#datestr2timestamp)
- [getImageWidthHeight 获取图片的长宽](#getimagewidthheight)
- [getWeekByDate 获取某一时间所在的周数](#getweekbydate)
- [getWeekDaysByYearIndex 获取某年的第几周包含的日期](#getweekdaysbyyearindex)
- [getFurtureWeeksInfo 获得指定日期的未来十周信息](#getfurtureweeksinfo)
- [getMonthStartEndtDayTimestamp 获取指定时间所在月份的第一天开始时刻和最后一天最后时刻的时间戳（秒）](#getmonthstartendtdaytimestamp)

## 详细函数及方法
###  Is JS判断函数
#### isNumber

  判断是否为数字
```javascript
/**
 * 判断是否为数字
 * console.log(JSCT.isNumber(1237)); // true
 * console.log(JSCT.isNumber('ss')); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isNumber(1237)  // true
```
#### isPrimes

  判断一个数是否为素数（质数）
```javascript
/**
 * 判断一个数是否为素数（质数）
 * console.log(JSCT.isPrimes(9)); // false
 * console.log(JSCT.isPrimes(97)); // true
 * @param number
 * @returns {boolean} true: 是素数 false: 不是素数
 */
JSCT.isPrimes(97)  // true
```

#### isBoolean

  判断是否为布尔
```javascript
/**
 * 判断是否为布尔
 * console.log(JSCT.isBoolean(true)); // true
 * console.log(JSCT.isBoolean('ss')); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isBoolean(true)  // true
```
#### isString

  判断是否为字符串
```javascript
/**
 * 判断是否为字符串
 * console.log(JSCT.isString(sss)); // true
 * console.log(JSCT.isString(234)); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isString('sss')  // true
```
#### isNull

  判断是否是null
```javascript
/**
 * 判断是否为字符串
 * console.log(JSCT.isNull(null)); // true
 * console.log(JSCT.isNull(234)); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isNull(null)  // true
```
#### isUndefined

  判断是否未定义
```javascript
/**
 * 判断是否未定义
 * @param value
 * @returns {boolean}
 */
var a = 1
JSCT.isUndefined(a)  // false
```
#### isObject

  判断是否为对象
```javascript
/**
 * 判断是否为对象
 * console.log(JSCT.isObject({})); // true
 * console.log(JSCT.isObject(234)); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isObject({})  // true
```
#### isFunction

  判断是否为函数
```javascript
/**
 * 判断是否为函数
 * @param value
 * @returns {boolean}
 */
JSCT.isFunction({})  // false
JSCT.isFunction(function() {
  // TODO
})  // true
```

### Array
#### arrayUnique
  
  数组去重
```javascript
/**
 * 数组去重
 *
 * 1.创建一个新的数组存放结果
 * 2.创建一个空对象
 * 3.判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存
 *
 * @param arr
 * @returns {Array}
 * @constructor
 * eg:
 * var arr = [5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99];
 * console.log(arr)
 * console.log(arrayUnique(arr))
 */
arr.arrayUnique()
JSCT.arrayUnique(arr)
```  
#### arrayQuickSort

数组排序（快排）  
'asc': 升序(默认)  'desc': 降序
```javascript
/**
 * 对数组进行排序（排序）
 *
 *（1）在数据集之中，选择一个元素作为”基准”（pivot）。
 *（2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
 *（3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 *
 * @param arr
 * @returns {*}
 * @constructor
 * eg:
 * var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 * console.log(arr);
 * console.log(arrayQuickSort(arr))
 */
arr.arrayQuickSort('desc') 
JSCT.arrayQuickSort(arr, 'desc')
```
  
#### isArray 

  判断是否为数组  
```javascript
/**
 * Checks if value is array or not
 * 判断是否为数组
 *
 * isArray([]) => true
 *
 * @param v
 * @return {Boolean}
 */
JSCT.isArray(value)
```

#### inArray

  判断值是否在数组中 
```javascript
/**
 * 判断值是否在数组中
 *
 * @param needle 被判断的值
 * @param haystack 数组
 * @param strict： 严格模式true，非严格false
 * @returns {boolean}
 */
JSCT.inArray(1, ['1', 'ss'], true) // false
JSCT.inArray(1, [1, 'ss'], true) // true
```

#### arrayIsRepeat

  判断数组是否有重复值 
```javascript
/**
 * 判断数组是否有重复值
 *
 * @param arr 需要判断的数组
 * @param strict： 严格模式true，非严格false
 * @returns {boolean} ture: 有重复值  false: 没有重复值
 */
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5])); // false
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, 2])); // true
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, "2"])); // true
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, "2"], true)); // false
``` 
     
### Number
#### getRandomInt

  获得指定区间的随机整数,默认1至100.
```javascript
/**
 * 获取指定区间随机数值
 * getRandomInt(1, 100) => 56
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
JSCT.getRandomInt(1, 20)
```
  
#### toFixedDecimal
  
  返回指定小数位数的十进制，默认两位小数
```javascript
/**
 * 返回指定小数位数的十进制，默认两位小数
 *
 * toFixedDecimal(1.689442324, 2) => 1.68
 *
 * @param number
 * @param precision
 * @returns {number}
 */
JSCT.toFixedDecimal(1.689442324, 2) // 1.68
```
  
#### isPrice
  
  判断是否为正确金额
```javascript
/**
 * 判断是否为正确金额
 * console.log(JSCT.isPrice('12.37')); // true
 * console.log(JSCT.isPrice('12&37')); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isPrice('12.37')  // true
```
  
#### getPrimes
  
  获取两个数之间的所有素数（质数）
```javascript
/**
 * 获取两个数之间的所有素数（质数）
 *
 * 1到30的数中所有质数：console.log(JSCT.getPrimes(1, 30)) // 2,3,5,7,11,13,17,19,23,29
 * @param start 开始数
 * @param end 结束数
 * @returns {*}
 */
JSCT.getPrimes(1, 30)  // 2,3,5,7,11,13,17,19,23,29
```

### String
#### trimAll 
  
  清除字符中所有空格  
```javascript
str.trimAll()
```
  
#### trimL 
  
  清除字符中左边空格  
```javascript
str.trimL()
```  
#### trimR 

  清除字符中右边空格  
```javascript
str.trimR()
```  
  
#### isNullOrEmpty

  判断是否为空，为空返回true，否则返回false。可以做递归检查  
```javascript
/**
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
JSCT.isNullOrEmpty([]) // true
JSCT.isNullOrEmpty([""]) // false
JSCT.isNullOrEmpty([""], true) // true (Recursive check)
``` 
    
#### getUUID
  
  返回给定长度的唯一标识符.  
```javascript
/**
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
JSCT.getUUID(20, true)  // 长度20，true表示首字母为应为字母
JSCT.getUUID() // 默认长度32，首字母为英文字母
``` 
#### sprintf
  
  把格式数据写成串  
```javascript
/**
 * sprintf 把格式数据写成串
 *
 * @param str
 * @returns {string}
 */
JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
// this values, num1: 1 , num2: 2 , num3: 3
```        
#### isCreditCard
  
  判断是否为信用卡 
```javascript
/**
 * 判断是否为信用卡
 *
 * @param value
 * @returns {boolean}
 */
JSCT.isCreditCard('5212345678901234') // true
````
#### isEmail 
  
  判断是否为正确邮箱 
```javascript
/**
 * 判断是否为正确邮箱
 *
 * @param value
 * @returns {boolean}
 */
JSCT.isEmail('liufulin90@163.com') // true
``` 
  
#### isUrl 
  
  判断是否为url  
```javascript
/**
 * 判断是否为url
 *
 * @param value
 * @returns {boolean}
 */
JSCT.isUrl('http://www.linxins.com') // true
```   
 
#### isPhone 
  
  判断是否为手机号
```javascript
/**
 * 判断是否为手机号
 *
 * JSCT.isPhone('18785465548') // true
 * JSCT.isPhone('12785465548') // false
 *
 * @param value
 * @returns {boolean}
 */
JSCT.isPhone('18785465548') // true
JSCT.isPhone('12785465548') // false
```  

#### isIdentityCard

  判断是否为身份证号码  
```javascript
/**
 * 判断是否为身份证号码
 * @param sId
 * @returns {boolean}
 */
JSCT.isIdentityCard('231421199406042025') // false
// ps: 输入自己的身份证号做测试，返回为true
```
  
### Other
#### cookie

   获取cookie和设置cookie  
```javascript
// 设置 
JSCT.cookie('test', '123', 7*24*60*60) // 将(123)存入cookie，键为'test',有效期为7天
// 获取
JSCT.cookie('test') // 123
// 删除
JSCT.remove('test') // 将键为‘test’的cookie值删除掉
```

#### store
   
   本地存储（localstorage , sessionStorage）
```javascript
JSCT.getLocalStorage(key)
JSCT.setLocalStorage(key, value)
JSCT.getSessionStorage(key)
JSCT.setSessionStorage(key, value)
```  

#### Timer

  这是一个计时器工具
```javascript
let tt = new JSCT.Timer()
tt.start(function (timeStr) {
  console.log(timeStr)// do something. ret: 00:03:35
})
setTimeout(()=>{
  tt.stop()
}, 3000)
```  

#### sleep

  利用async/await做睡眠延迟sleep后面的代码执行
```javascript
/**
 * const testAsync = async () => {
 *   console.log(1)
 *   await sleep(2000)
 *   console.log(2)
 * }
 * 利用async/await做睡眠延迟sleep后面的代码执行
 *
 * @param timeout
 * @returns {Promise}
 */
const testAsync = async () => {
  console.log(1)
  await JSCT.sleep(2000)
  console.log(2) // 两秒后显示 2
}
testAsync()
```

#### getNowTimeFormat

  获取当前时间的格式化日期
```javascript
/**
 * 获取当前时间的格式化日期
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
JSCT.getNowTimeFormat() // 2017-03-12 17:30:45
````

#### timestampFormat

  将时间戳格式化
```javascript
/**
 * 将时间戳格式化
 * @param number timestamp  eg:1465963958000 length:13   or  1465963958 length:10
 * @param string Fmt  eg:Y-m-d H:i:s
 * @param boolean hasZero  eg:true|false
 * @returns {string}
 */
JSCT.timestampFormat(1489142869000) // 2017-03-10 18:47:49
````

#### dateStr2timestamp

  时间字符串转时间戳   
```javascript
/**
 * 时间字符串转时间戳
 * @param string dateStr  eg:2016-06-16 16:15:59
 * @returns {number}
 */
JSCT.dateStr2timestamp('2016-06-16 16:15:59') // 1466064959000
````

#### getImageWidthHeight

  获取图片的真是宽高，并做相应处理   
```html
<input type="file" id="uploader"/>
<input type="submit" id="submit" onclick="check()"/>
```
```javascript
function check () {
    var fileEl = document.getElementById('uploader');
    /**
     * 获取图片的真是宽高，并做相应处理
     * @param file （png/jpg/gif） eg: [document.getElementById('fileid')]  or $('#fileid')
     * @param callback
     */
    JSCT.getImageWidthHeight([fileEl], function (width, height) {
        console.log(JSCT.sprintf('width: %s, height: %s', width, height))
    })
}
````

#### getWeekByDate

  获取某一时间所在的周数
```javascript
/**
 * 获取某一时间所在的周数
 *
 * @param date 日期，默认当前时间
 * eg: Date('2017-01-01')
 */
console.log(JSCT.getWeekByDate(new Date('2017-01-03')))
```

#### getWeekDaysByYearIndex

  获取某年的第几周包含的日期 
  
```javascript
/**
 * 获取某年的第几周包含的日期
 *
 * @param year 哪一年，默认当前年
 * @param index 第几周，默认第一周
 * @returns {Array}
 */
console.log(JSCT.getWeekDaysByYearIndex(new Date(), 10))
```

#### getFurtureWeeksInfo

  获得指定日期的未来十周信息
```javascript
/**
 * 获得指定日期的未来十周信息
 *
 * @param date 指定开始日，默认当前时间
 * eg: new Date('2017-01-02')
 * @param num  指定得到未来多少个周，默认10周
 * @returns {Array}
 */
console.log(JSCT.getFurtureWeeksInfo(new Date('2017-01-02'), 2))
```

#### getMonthStartEndtDayTimestamp

  获取指定时间所在月份的第一天开始时刻和最后一天最后时刻的时间戳（秒）
```javascript
/**
 * 获取指定时间所在月份的第一天开始时刻和最后一天最后时刻的时间戳（秒）
 * eg: JSCT.getMonthStartEndtDayTimestamp(1500431715)
 *
 * @param time 时间戳 timestamp 默认当前时间(秒)
 * @returns {{start: number, end: number}}
 */
console.log(JSCT.getMonthStartEndtDayTimestamp(1500431715)) // { start: 1498838400, end: 1501516799 }
console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).start, 'Y-m-d H:i:s')) // 2017-07-01 00:00:00
console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).end, 'Y-m-d H:i:s')) // 2017-07-31 23:59:59
```
#### testResult

自动化测试结果
<pre>
  Array相关函数测试
    数组去重, arrayUnique 函数
      ✓ JSCT.arrayUnique([3, 55, {a: 1}, 7, {a: 1}, {b: 2}, 55]) 结果为 [3, 55, { a: 1 }, 7, {b: 2}]
      ✓ JSCT.arrayUnique([5, 3, 55, {a: 1}, 77, 55]) 结果为 [5, 3, 55, { a: 1 }, 77]
      ✓ JSCT.arrayUnique([5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99]) 结果为 [5, 3, [ 8, 8, { b: 1 } ], 55, { a: 1 }, 77, 99]
    对数组进行排序（默认升序）, arrayQuickSort 函数
      ✓ JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4]) 升序结果为 [2, 3, 3, 4, 5, 55, 55, 77, 99]
      ✓ JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4], "desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2]
      ✓ [5, 3, 55, 3, 77, 55, 99, 2, 4].arrayQuickSort("desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2]
    isArray函数判断是否为数组
      ✓ JSCT.isArray([5]) 结果为 true
      ✓ JSCT.isArray([]) 结果为 true
      ✓ JSCT.isArray({}) 结果为 false
    inArray函数判断值是否在数组中
      ✓ JSCT.inArray(3, [3, 5]) 结果为 true
      ✓ JSCT.inArray("3", [3, 5]) 结果为 true   非严格模式
      ✓ JSCT.inArray("3", [3, 5], true) 结果为 false   严格模式
    arrayIsRepeat函数判断数组是否有重复值
      ✓ JSCT.arrayIsRepeat([3, 5]) 结果为 false
      ✓ JSCT.arrayIsRepeat([3, 3, 5]) 结果为 true   非严格模式
      ✓ JSCT.arrayIsRepeat([3, "3", 5]) 结果为 false   严格模式

  JS判断函数，解决80%类型判断问题
    isNumber 函数
      ✓ JSCT.isNumber(100) 结果为 true
      ✓ JSCT.isNumber("12") 结果为 false
    isBoolean 函数
      ✓ JSCT.isBoolean(true) 结果为 true
      ✓ JSCT.isBoolean("12") 结果为 false
    isString 函数
      ✓ JSCT.isString("sss") 结果为 true
      ✓ JSCT.isString(true) 结果为 false
    isNull 函数
      ✓ JSCT.isNull(null) 结果为 true
      ✓ JSCT.isNull("123") 结果为 false
      ✓ JSCT.isNull(true) 结果为 false
    isUndefined 函数
      ✓ JSCT.isUndefined() 结果为 true
      ✓ JSCT.isUndefined("") 结果为 false
      ✓ JSCT.isUndefined(null) 结果为 false
      ✓ JSCT.isUndefined(0) 结果为 false
    isObject 函数
      ✓ JSCT.isObject() 结果为 false
      ✓ JSCT.isObject("") 结果为 false
      ✓ JSCT.isObject(null) 结果为 true
      ✓ JSCT.isObject({}) 结果为 true
      ✓ JSCT.isObject([1]) 结果为 true
    isFunction 函数
      ✓ JSCT.isFunction() 结果为 false
      ✓ JSCT.isFunction(function () {}) 结果为 true

  Number相关函数测试
    getRandomInt函数获取指定区间随机数值
      ✓ JSCT.getRandomInt(1, 100) 结果小于100大于1
      ✓ JSCT.getRandomInt(500, 600) 结果小于600大于500
    toFixedDecimal函数返回指定小数位数的十进制，默认两位小数（四舍五入）
      ✓ JSCT.toFixedDecimal(1.689442324, 2) 结果为1.69
      ✓ JSCT.toFixedDecimal(1.681142324, 3) 结果为1.681
      ✓ JSCT.toFixedDecimal(1.681152324, 4) 结果为1.6812
    isPrice函数判断是否为正确金额
      ✓ JSCT.isPrice(11.35) 结果为 true
      ✓ JSCT.isPrice(9.3) 结果为 true
      ✓ JSCT.isPrice(1.689) 结果为 false
      ✓ JSCT.isPrice("123#d") 结果为 false

  String相关函数测试
    trim去除空格函数测试
      ✓ 清除字符中所有空格，"a b c d ".trimAll()结果为"abcd"
      ✓ 清除字符中中左边空格，"   a b c d".trimL()结果为"a b c d"
      ✓ 清除字符中中右边空格，"a b c d   ".trimR()结果为"a b c d"
    isNullOrEmpty函数判断是否为空
      ✓ JSCT.isNullOrEmpty(0) 结果为 true
      ✓ JSCT.isNullOrEmpty(1) 结果为 false
      ✓ JSCT.isNullOrEmpty("") 结果为 true
      ✓ JSCT.isNullOrEmpty([]) 结果为 false
      ✓ JSCT.isNullOrEmpty([], true) 结果为 true。 (ps: 递归检查，检查内部值)
      ✓ JSCT.isNullOrEmpty([""]) 结果为 false
      ✓ JSCT.isNullOrEmpty([""], true) 结果为 false。 (ps: 递归检查，检查内部值)
      ✓ JSCT.isNullOrEmpty([null]) 结果为 false
      ✓ JSCT.isNullOrEmpty([null], true) 结果为 true。 (ps: 递归检查，检查内部值)
      ✓ JSCT.isNullOrEmpty({}) 结果为 false 
      ✓ JSCT.isNullOrEmpty({}, true) 结果为 true。 (ps: 递归检查，检查内部值)
    isString函数判断是否为字符串
      ✓ JSCT.isString("") 结果为 true
      ✓ JSCT.isString(12) 结果为 false
      ✓ JSCT.isString("123") 结果为 true
      ✓ JSCT.isString(null) 结果为 false
    getUUID函数获得指定长度的唯一字符串
      ✓ JSCT.getUUID(32).length 结果为 32
    sprintf函数把格式数据写成串
      ✓ JSCT.sprintf('你好%s，你了解%s吗？', 'Jack', 'Mocha') 结果为： '你好Jack，你了解Mocha吗？'
    isCreditCard函数判断是否为信用卡
      ✓ JSCT.isCreditCard('5212345678901234') 结果为 true
      ✓ JSCT.isCreditCard('1212345678901234') 结果为 false
    isEmail函数判断是否为正确邮箱
      ✓ JSCT.isEmail('liufulin90@163.com') 结果为 true
      ✓ JSCT.isEmail('1212345678.901234') 结果为 false
      ✓ JSCT.isEmail('1212345678@9012.123') 结果为 false
    isUrl函数判断是否为url
      ✓ JSCT.isUrl('http://fen.linxins.com') 结果为 true
      ✓ JSCT.isUrl('http://fen.linxins.com/#wechatSubscriptionItem') 结果为 true
      ✓ JSCT.isUrl('liufulin90@163.com') 结果为 false
      ✓ JSCT.isUrl('fff://baidu.com') 结果为 false
    isPhone函数判断是否为手机号
      ✓ JSCT.isPhone(18782943043) 结果为 true
      ✓ JSCT.isPhone(19012546653) 结果为 false
      ✓ JSCT.isPhone(256448) 结果为 false
    isIdentityCard函数判断是否为身份证号码
      ✓ JSCT.isIdentityCard('411324199010153310') 结果为 false


  77 passing (19ms)
</pre>


## License
(The MIT License)

Copyright (c) 2016 [linxins](http://www.linxins.com)  [React电子书阅读器](http://myreader.linxins.com) <liufulin90@163.com>
