#js-common-tools

JS ES6 writing tools based on function


## Functions
### Array
- ArrayUnique
  
  Array de emphasis<br>
  eg: arr.ArrayUnique() or JSCT.ArrayUnique(arr)
  
- ArrayQuickSort

  Array sort (fast) <br>
  eg: arr.ArrayQuickSort() or JSCT.ArrayQuickSort(arr)
  
- isNullOrEmpty

  Checks value if it has value or not. Returns true if it is null or undefined You can do recursive check.<br>
   * JSCT.isNullOrEmpty([]) => true
   * JSCT.isNullOrEmpty([""]) => false
   * JSCT.isNullOrEmpty([""], true) => true (Recursive check)
   
- isArray 

  To determine whether the array <br>
  eg: JSCT.isArray(value)


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
  
  Return a unique identifier with the given `len`.
  eg: JSCT.getUUID(20, true) or JSCT.getUUID()

## Installation

via npm:

```bash
$ npm install js-common-tools
```

## License
(The MIT License)

Copyright (c) 2016 linxins <liufulin90@163.com>
