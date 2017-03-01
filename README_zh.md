#js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## Functions

```javascript
import * as JSCT from 'js-common-tools'
```

### Array
- arrayUnique
  
  数组去重<br>
```javascript
  arr.arrayUnique()
  JSCT.arrayUnique(arr)
```  
- arrayQuickSort

  数组排序（快排） <br>
  'asc': 升序(默认)  'desc': 降序
```javascript
   arr.arrayQuickSort('desc') 
   JSCT.arrayQuickSort(arr, 'desc')
```
  
- isNullOrEmpty

  判断是否为空，为空返回true，否则返回false。可以做递归检查<br>
```javascript
   JSCT.isNullOrEmpty([]) // true
   JSCT.isNullOrEmpty([""]) // false
   JSCT.isNullOrEmpty([""], true) // true (Recursive check)
```   
- isArray 

  判断是否为数组 <br>
```javascript
   JSCT.isArray(value)
```

- inArray

  判断值是否在数组中<br>
```javascript
  JSCT.inArray(1, ['1', 'ss'], true) // false
  JSCT.inArray(1, [1, 'ss'], true) // true
```
     
     
### Number
- getRandomInt

  获得指定区间的随机整数,默认1至100. <br>
```javascript
   JSCT.getRandomInt(1, 20)
```
  
- toFixedDecimal
  
  返回指定小数位数的十进制，默认两位小数<br>
```javascript
  JSCT.toFixedDecimal(1.689442324, 2) // 1.68
```
  
### String
- trimAll 
  
  清除字符中所有空格 <br>
```javascript
  str.trimAll()
```
  
- trimL 
  
  清除字符中左边空格 <br>
```javascript
  str.trimL()
```  
- trimR 

  清除字符中右边空格 <br>
```javascript
  str.trimR()
```  
    
- getUUID
  
  Return a unique identifier with the given `len`.<br> 
```javascript
  JSCT.getUUID(20, true) or JSCT.getUUID()
``` 
- sprintf
  
  把格式数据写成串<br> 
```javascript
  JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
  // this values, num1: 1 , num2: 2 , num3: 3
```        
- isCreditCard
  
  判断是否为信用卡<br>
```javascript
  JSCT.isCreditCard('5212345678901234') // true
````
- isEmail 
  
  判断是否为正确邮箱<br>
```javascript
  JSCT.isEmail('liufulin90@163.com') // true
``` 
  
- isUrl 
  
  判断是否为url<br>
```javascript
  JSCT.isUrl('http://www.linxins.com') // true
```  
- isIdentityCard

  判断是否为身份证号码<br>
```javascript
  JSCT.isIdentityCard('231421199406042025') // false
  // ps: 输入自己的身份证号做测试，返回为true
```
  
### Other
- cookie

   获取cookie和设置cookie<br>
```javascript
  // set 
  JSCT.cookie('test', '123')
  // get
  JSCT.cookie('test') // 123
```

- store
   
   本地存储（localstorage , sessionStorage）
```javascript
   JSCT.getLocalStorage(key)
   JSCT.setLocalStorage(key, value)
   JSCT.getSessionStorage(key)
   JSCT.setSessionStorage(key, value)
```  

- Timer

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
    
## Installation

via npm:

```bash
$ npm install js-common-tools
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
