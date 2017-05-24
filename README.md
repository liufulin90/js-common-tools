# js-common-tools

JS ES6 writing tools based on function

基于JS ES6 写法相关工具函数


## 安装

通过npm安装:

```bash
  $ npm install js-common-tools
```


## 所有函数及使用方式

> 引入工具包
```javascript
  import * as JSCT from 'js-common-tools'
```

### Array
> arrayUnique
  
  数组去重
```javascript
arr.arrayUnique()
JSCT.arrayUnique(arr)
```  
> arrayQuickSort

数组排序（快排）  
'asc': 升序(默认)  'desc': 降序
```javascript
arr.arrayQuickSort('desc') 
JSCT.arrayQuickSort(arr, 'desc')
```
  
> isNullOrEmpty

  判断是否为空，为空返回true，否则返回false。可以做递归检查  
```javascript
JSCT.isNullOrEmpty([]) // true
JSCT.isNullOrEmpty([""]) // false
JSCT.isNullOrEmpty([""], true) // true (Recursive check)
```   
> isArray 

  判断是否为数组  
```javascript
JSCT.isArray(value)
```

> inArray

  判断值是否在数组中 
```javascript
JSCT.inArray(1, ['1', 'ss'], true) // false
JSCT.inArray(1, [1, 'ss'], true) // true
```
     
     
### Number
> getRandomInt

  获得指定区间的随机整数,默认1至100.
```javascript
JSCT.getRandomInt(1, 20)
```
  
> toFixedDecimal
  
  返回指定小数位数的十进制，默认两位小数
```javascript
JSCT.toFixedDecimal(1.689442324, 2) // 1.68
```
  
### String
> trimAll 
  
  清除字符中所有空格  
```javascript
str.trimAll()
```
  
> trimL 
  
  清除字符中左边空格  
```javascript
str.trimL()
```  
> trimR 

  清除字符中右边空格  
```javascript
str.trimR()
```  
    
> getUUID
  
  返回给定长度的唯一标识符.  
```javascript
JSCT.getUUID(20, true)  // 长度20，true表示首字母为应为字母
JSCT.getUUID() // 默认长度32，首字母为英文字母
``` 
> sprintf
  
  把格式数据写成串  
```javascript
JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
// this values, num1: 1 , num2: 2 , num3: 3
```        
> isCreditCard
  
  判断是否为信用卡 
```javascript
JSCT.isCreditCard('5212345678901234') // true
````
> isEmail 
  
  判断是否为正确邮箱 
```javascript
JSCT.isEmail('liufulin90@163.com') // true
``` 
  
> isUrl 
  
  判断是否为url  
```javascript
JSCT.isUrl('http://www.linxins.com') // true
```   
 
> isPhone 
  
  判断是否为手机号
```javascript
JSCT.isPhone('18785465548') // true
JSCT.isPhone('12785465548') // false
```  

> isIdentityCard

  判断是否为身份证号码  
```javascript
JSCT.isIdentityCard('231421199406042025') // false
// ps: 输入自己的身份证号做测试，返回为true
```
  
### Other
> cookie

   获取cookie和设置cookie  
```javascript
// 设置 
JSCT.cookie('test', '123', 7*24*60*60) // 将(123)存入cookie，键为'test',有效期为7天
// 获取
JSCT.cookie('test') // 123
// 删除
JSCT.remove('test') // 将键为‘test’的cookie值删除掉
```

> store
   
   本地存储（localstorage , sessionStorage）
```javascript
JSCT.getLocalStorage(key)
JSCT.setLocalStorage(key, value)
JSCT.getSessionStorage(key)
JSCT.setSessionStorage(key, value)
```  

> Timer

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

> sleep

  利用async/await做睡眠延迟sleep后面的代码执行
```javascript
const testAsync = async () => {
  console.log(1)
  await JSCT.sleep(2000)
  console.log(2) // 两秒后显示 2
}
testAsync()
```

> getNowTimeFormat

  获取当前时间的格式化日期
```javascript
JSCT.getNowTimeFormat() // 2017-03-12 17:30:45
````

> timestampFormat
  将时间戳格式化
```javascript
JSCT.timestampFormat(1489142869000) // 2017-03-10 18:47:49
````

> dateStr2timestamp

  时间字符串转时间戳   
```javascript
JSCT.dateStr2timestamp('2016-06-16 16:15:59') // 1466064959000
````

> getImageWidthHeight

  获取图片的真是宽高，并做相应处理   
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

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
