#js-common-tools

JS ES6 writing tools based on function


## Functions
### Array
- arrayUnique
  
  Array de emphasis<br>
  eg: arr.arrayUnique() or JSCT.arrayUnique(arr)
  
- arrayQuickSort

  Array sort (fast) <br>
  eg: arr.arrayQuickSort('desc') or JSCT.arrayQuickSort(arr, 'desc')<br>
  'asc': Ascending (default) <br>
  'desc': Descending
  
- isNullOrEmpty

  Checks value if it has value or not. Returns true if it is null or undefined You can do recursive check.<br>
   * JSCT.isNullOrEmpty([]) => true
   * JSCT.isNullOrEmpty([""]) => false
   * JSCT.isNullOrEmpty([""], true) => true (Recursive check)
   
- isArray 

  To determine whether the array <br>
  eg: JSCT.isArray(value)

- inArray

  check needle value in array<br>
  eg: <br>
     JSCT.inArray(1, ['1', 'ss'], true) // false<br>
     JSCT.inArray(1, [1, 'ss'], true) // true

### Number
- getRandomInt

  To obtain the specified interval of random integers, default 1 to 100 <br>
  eg: JSCT.getRandomInt(1, 20)
  
- toFixedDecimal
  
  Returns fixed decimal number<br>
  eg: JSCT.toFixedDecimal(1.689442324, 2) => 1.68

### String
- trimAll 
  
  Clear all spaces in character <br>
  eg: str.trimAll()
  
- trimL 
  
  Clear left space <br>
  eg: str.trimL()
  
- trimR 

  Clear right space in character <br>
  eg: str.trimR()
  
- getUUID
  
  Return a unique identifier with the given len.<br>
  eg: JSCT.getUUID(20, true) or JSCT.getUUID()

- sprintf
  
  eg:JSCT.sprintf('this values, num1: %s , num2: %s , num3: %s', 1, 2, 3)
  <br>// this values, num1: 1 , num2: 2 , num3: 3
  
- isCreditCard
  
  eg: JSCT.isCreditCard('5212345678901234')

- isEmail 
  
  eg: JSCT.isEmail('liufulin90@163.com')
 
  
- isUrl 
  
  eg: JSCT.isUrl('http://www.linxins.com')
  
 
- isIdentityCard

  To determine whether the Chinese identity card number<br>
  eg: JSCT.isIdentityCard('231421199406042028') // false<br>
  ps: Enter the Chinese identity card number to do the test, return to true

### Other
- cookie
   get and set cookie
   eg:<br>
   set: JSCT.cookie('test', '123')<br>
   get: JSCT.cookie('test')<br>
  
## Installation

via npm:

```bash
$ npm install js-common-tools
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
