<p align="center">
  <a href="https://npmcharts.com/compare/js-common-tools?minimal=true"><img src="https://img.shields.io/npm/dm/js-common-tools.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/js-common-tools"><img src="https://img.shields.io/npm/v/js-common-tools.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/js-common-tools"><img src="https://img.shields.io/npm/l/js-common-tools.svg" alt="License"></a>
</p>

# js-common-tools

JS ES6 writing tools based on function

## Installation

via npm:

```bash
  $ npm install js-common-tools
```
## Introduction Toolkit

```javascript
  import * as JSCT from 'js-common-tools'
```
## Document Index
> Array
- [arrayUnique](#arrayunique)
- [arrayQuickSort](#arrayquicksort)
- [isNullOrEmpty](#isnullorempty)
- [isArray](#isarray)
- [inArray](#inarray)
- [arrayIsRepeat](#arrayisrepeat)
> Number
- [getRandomInt](#getrandomint)
- [toFixedDecimal](#tofixeddecimal)
- [isPrice](#isprice)
> String
- [trimAll](#trimall)
- [trimL](#triml)
- [trimR](#trimr)
- [getUUID](#getuuid)
- [sprintf](#sprintf)
- [isCreditCard](#iscreditcard)
- [isEmail](#isemail)
- [isUrl](#isurl)
- [isPhone](#isphone)
- [isIdentityCard](#isidentitycard)
> Other
- [cookie](#cookie)
- [store](#store)
- [Timer](#timer)
- [sleep](#sleep)
- [getNowTimeFormat](#getnowtimeformat)
- [timestampFormat](#timestampformat)
- [dateStr2timestamp](#datestr2timestamp)
- [getImageWidthHeight](#getimagewidthheight)
- [getWeekByDate](#getweekbydate)
- [getWeekDaysByYearIndex](#getweekdaysbyyearindex)
- [getFurtureWeeksInfo](#getfurtureweeksinfo)
- [getMonthStartEndtDayTimestamp](#getMonthStartEndtDayTimestamp)

##Detailed functions and methods

### Array
#### arrayUnique
  
  Array de emphasis<br>
```javascript
  arr.arrayUnique()
  JSCT.arrayUnique(arr)
```  
  
#### arrayQuickSort

  Array sort (fast) <br>
  'asc': Ascending (default) <br>
  'desc': Descending
```javascript
   arr.arrayQuickSort('desc') 
   JSCT.arrayQuickSort(arr, 'desc')
```
  
#### isNullOrEmpty

  Checks value if it has value or not. Returns true if it is null or undefined You can do recursive check.<br>
```javascript
   JSCT.isNullOrEmpty([]) // true
   JSCT.isNullOrEmpty([""]) // false
   JSCT.isNullOrEmpty([""], true) // true (Recursive check)
```    
#### isArray 

  To determine whether the array <br>
```javascript
   JSCT.isArray(value)
```

#### inArray

  check needle value in array<br>
```javascript
  JSCT.inArray(1, ['1', 'ss'], true) // false
  JSCT.inArray(1, [1, 'ss'], true) // true
```

#### arrayIsRepeat

  check array is repeat 
```javascript
/**
 * check array is repeat 
 *
 * @param arr 
 * @param strict
 * @returns {boolean}
 */
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5])); // false
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, 2])); // true
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, "2"])); // true
console.log(JSCT.arrayIsRepeat([1, 2, 3, 4, 5, "2"], true)); // false
``` 

### Number
#### getRandomInt

  To obtain the specified interval of random integers, default 1 to 100 <br>
```javascript
   JSCT.getRandomInt(1, 20)
```
  
#### toFixedDecimal
  
  Returns fixed decimal number<br>
```javascript
  JSCT.toFixedDecimal(1.689442324, 2) // 1.68
```
  
#### isPrice
  
  Determine whether the amount is correct
```javascript
/**
 * console.log(JSCT.isPrice('12.37')); // true
 * console.log(JSCT.isPrice('12&37')); // false
 * @param value
 * @returns {boolean}
 */
JSCT.isPrice('12.37')  // true
```

### String
#### trimAll 
  
  Clear all spaces in character <br>
```javascript
  str.trimAll()
```
  
#### trimL 
  
  Clear left space <br>
```javascript
  str.trimL()
``` 
#### trimR 

  Clear right space in character <br>
```javascript
  str.trimR()
``` 
#### getUUID
  
  Return a unique identifier with the given len.<br>
```javascript
  JSCT.getUUID(20, true) or JSCT.getUUID()
```

#### sprintf
  
```javascript
  JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
  // this values, num1: 1 , num2: 2 , num3: 3
```
#### isCreditCard
  
```javascript
  JSCT.isCreditCard('5212345678901234') // true
```

#### isEmail 
  
```javascript
  JSCT.isEmail('liufulin90@163.com') // true
``` 
 
  
#### isUrl 
  
```javascript
  JSCT.isUrl('http://www.linxins.com') // true
```  
 
#### isPhone 
  
  判断是否为手机号 
```javascript
   JSCT.isPhone('18785465548') // true
   JSCT.isPhone('12785465548') // false
```
 
#### isIdentityCard

  To determine whether the Chinese identity card number<br>
```javascript
  JSCT.isIdentityCard('231421199406042025') // false
  // ps: Enter the Chinese identity card number to do the test, return to true
```
### Other
#### cookie

   get and set cookie<br>
```javascript
  // set
  JSCT.cookie('test', '123', 7*24*60*60) //key: test, value:123, expires: 7*24*60*60
  // get
  JSCT.cookie('test') // 123
  // remove
    JSCT.remove('test') // key: test
```

#### store
   
```javascript
   JSCT.getLocalStorage(key)
   JSCT.setLocalStorage(key, value)
   JSCT.getSessionStorage(key)
   JSCT.setSessionStorage(key, value)
``` 
  
#### Timer

  This is a timer tool
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

  Use async/await to do the code behind the sleep delay sleep
```javascript
  const testAsync = async () => {
    console.log(1)
    await JSCT.sleep(2000)
    console.log(2) // 2 seconds after show 2
  }
  testAsync()
```


#### getNowTimeFormat

  Gets the formatted date of the current time
```javascript
  JSCT.getNowTimeFormat() // 2017-03-12 17:30:45
````

#### timestampFormat

  Format timestamp
```javascript
  JSCT.timestampFormat(1489142869000) // 2017-03-10 18:47:49
````

#### dateStr2timestamp

  Character channeling to timestamp   
```javascript
  JSCT.dateStr2timestamp('2016-06-16 16:15:59') // 1466064959000
````

#### getImageWidthHeight

  get images width and height   
```html
<input type="file" id="uploader"/>
<input type="submit" id="submit" onclick="check()"/>
```
```javascript
function check () {
    var fileEl = document.getElementById('uploader');
    JSCT.getImageWidthHeight([fileEl], function (width, height) {
        console.log(JSCT.sprintf('width: %s, height: %s', width, height))
    })
}
````

#### getWeekByDate

  Gets the number of weeks at a given time
```javascript
/**
 * Gets the number of weeks at a given time
 *
 * @param date
 * eg: Date('2017-01-01')
 */
console.log(JSCT.getWeekByDate(new Date('2017-01-03')))
```

#### getWeekDaysByYearIndex

  Gets the date that contains the first few weeks of the year 
  
```javascript
/**
 * Gets the date that contains the first few weeks of the year
 *
 * @param year 
 * @param index 
 * @returns {Array}
 */
console.log(JSCT.getWeekDaysByYearIndex(new Date(), 10))
```

#### getFurtureWeeksInfo

  Gets the next ten weeks of information for the specified date
```javascript
/**
 * Gets the next ten weeks of information for the specified date
 *
 * @param date 
 * eg: new Date('2017-01-02')
 * @param num  
 * @returns {Array}
 */
console.log(JSCT.getFurtureWeeksInfo(new Date('2017-01-02'), 2))
```

#### getMonthStartEndtDayTimestamp

  Gets the timestamp (seconds) of the first day, the start and the last day of the month in which the specified time is specified
```javascript
/**
 * Gets the timestamp (seconds) of the first day, the start and the last day of the month in which the specified time is specified
 * eg: JSCT.getMonthStartEndtDayTimestamp(1500431715)
 *
 * @param time 
 * @returns {{start: number, end: number}}
 */
console.log(JSCT.getMonthStartEndtDayTimestamp(1500431715)) // { start: 1498838400, end: 1501516799 }
console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).start, 'Y-m-d H:i:s')) // 2017-07-01 00:00:00
console.log(JSCT.timestampFormat(JSCT.getMonthStartEndtDayTimestamp(1500431715).end, 'Y-m-d H:i:s')) // 2017-07-31 23:59:59
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
