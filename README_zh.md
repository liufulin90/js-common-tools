#js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## Functions
### Array
- ArrayUnique
  
  数组去重<br>
  eg: arr.ArrayUnique() or JSCT.ArrayUnique(arr)
  
- ArrayQuickSort

  数组排序（快排） <br>
  eg: arr.ArrayQuickSort() or JSCT.ArrayQuickSort(arr)
  
- isNullOrEmpty

  判断是否为空，为空返回true，否则返回false。可以做递归检查<br>
   * JSCT.isNullOrEmpty([]) => true
   * JSCT.isNullOrEmpty([""]) => false
   * JSCT.isNullOrEmpty([""], true) => true (Recursive check)
   
- isArray 

  判断是否为数组 <br>
  eg: isArray(value)

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
  
  Return a unique identifier with the given `len`.
  eg: JSCT.getUUID(20, true) or JSCT.getUUID()

- sprintf
  
  把格式数据写成串<br> 
  eg:<br> 
  JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
  <br>// this values, num1: 1 , num2: 2 , num3: 3
       
- isCreditCard
  
  判断是否为信用卡<br>
  eg: JSCT.isCreditCard('5212345678901234')

- isEmail 
  
  判断是否为正确邮箱<br>
  eg: JSCT.isEmail('liufulin90@163.com')
 
  
- isUrl 
  
  判断死否为url<br>
  eg: JSCT.isUrl('http://www.linxins.com')
## Installation

via npm:

```bash
$ npm install js-common-tools
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
