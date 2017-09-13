# js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## 安装

通过npm安装:

```bash
  $ npm install js-common-tools
```

## 引入工具包
```javascript
  import * as JSCT from 'js-common-tools'
```
## 目录索引
> Array
- [arrayUnique 数组去重](#arrayunique)
- [arrayQuickSort 对数组进行排序](#arrayquicksort)
- [isArray 判断是否为数组](#isarray)
- [inArray 判断值是否在数组中](#inarray)
> Number
- [getRandomInt 获得指定区间的随机整数](#getrandomint)
- [toFixedDecimal 返回指定小数位数的十进制](#tofixeddecimal)
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
 * @returns {boolean} ture: 有重复值  false: 没有重复值
 */
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5])); // false
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, 2])); // true
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

## License
(The MIT License)

Copyright (c) 2016 [linxins](http://www.linxins.com) <liufulin90@163.com>
