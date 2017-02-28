#js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## Functions
### Array
- arrayUnique
  
  数组去重<br>
  eg: arr.arrayUnique() or JSCT.arrayUnique(arr)
  
- arrayQuickSort

  数组排序（快排） <br>
  eg: arr.arrayQuickSort('desc') or JSCT.arrayQuickSort(arr, 'desc')<br>
  'asc': 升序(默认)  'desc': 降序
  
- isNullOrEmpty

  判断是否为空，为空返回true，否则返回false。可以做递归检查<br>
   * JSCT.isNullOrEmpty([]) => true
   * JSCT.isNullOrEmpty([""]) => false
   * JSCT.isNullOrEmpty([""], true) => true (Recursive check)
   
- isArray 

  判断是否为数组 <br>
  eg: isArray(value)

- inArray

  判断值是否在数组中<br>
  eg: <br>
     JSCT.inArray(1, ['1', 'ss'], true) // false<br>
     JSCT.inArray(1, [1, 'ss'], true) // true
     
### Number
- getRandomInt

  获得指定区间的随机整数,默认1至100. <br>
  eg: JSCT.getRandomInt(1, 20)
  
- toFixedDecimal
  
  返回指定小数位数的十进制，默认两位小数<br>
  Returns fixed decimal number
  eg: JSCT.toFixedDecimal(1.689442324, 2) => 1.68
  
### String
- trimAll 
  
  清除字符中所有空格 <br>
  eg: str.trimAll()
  
- trimL 
  
  清除字符中左边空格 <br>
  eg: str.trimL()
  
- trimR 

  清除字符中右边空格 <br>
  eg: str.trimR()
    
- getUUID
  
  Return a unique identifier with the given `len`.<br> 
  eg: JSCT.getUUID(20, true) or JSCT.getUUID()

- sprintf
  
  把格式数据写成串<br> 
  eg: JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
  <br>// this values, num1: 1 , num2: 2 , num3: 3
       
- isCreditCard
  
  判断是否为信用卡<br>
  eg: JSCT.isCreditCard('5212345678901234')

- isEmail 
  
  判断是否为正确邮箱<br>
  eg: JSCT.isEmail('liufulin90@163.com')
 
  
- isUrl 
  
  判断是否为url<br>
  eg: JSCT.isUrl('http://www.linxins.com')
  
- isIdentityCard

  判断是否为身份证号码<br>
  eg: JSCT.isIdentityCard('231421199406042025') // false<br>
  ps: 输入自己的身份证号做测试，返回为true

  
### Other
- cookie

   获取cookie和设置cookie<br>
   eg:<br>
   set: JSCT.cookie('test', '123')<br>
   get: JSCT.cookie('test')<br>

- store
   
   本地存储（localstorage , sessionStorage）
   <br>JSCT.getLocalStorage(key)
   <br>JSCT.setLocalStorage(key, value)
   <br>JSCT.getSessionStorage(key)
   <br>JSCT.setSessionStorage(key, value)
  
    
## Installation

via npm:

```bash
$ npm install js-common-tools
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
