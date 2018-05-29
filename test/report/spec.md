# TOC
   - [Array相关函数测试](#array)
     - [数组去重, arrayUnique 函数](#array--arrayunique-)
     - [对数组进行排序（默认升序）, arrayQuickSort 函数](#array--arrayquicksort-)
     - [isArray函数判断是否为数组](#array-isarray)
     - [inArray函数判断值是否在数组中](#array-inarray)
     - [arrayIsRepeat函数判断数组是否有重复值](#array-arrayisrepeat)
   - [JS判断函数，解决80%类型判断问题](#js80)
     - [isNumber 函数](#js80-isnumber-)
     - [isBoolean 函数](#js80-isboolean-)
     - [isString 函数](#js80-isstring-)
     - [isNull 函数](#js80-isnull-)
     - [isUndefined 函数](#js80-isundefined-)
     - [isObject 函数](#js80-isobject-)
     - [isFunction 函数](#js80-isfunction-)
   - [Number相关函数测试](#number)
     - [getRandomInt函数获取指定区间随机数值](#number-getrandomint)
     - [toFixedDecimal函数返回指定小数位数的十进制，默认两位小数（四舍五入）](#number-tofixeddecimal)
     - [isPrice函数判断是否为正确金额](#number-isprice)
   - [String相关函数测试](#string)
     - [trim去除空格函数测试](#string-trim)
     - [isNullOrEmpty函数判断是否为空](#string-isnullorempty)
     - [isString函数判断是否为字符串](#string-isstring)
     - [getUUID函数获得指定长度的唯一字符串](#string-getuuid)
     - [sprintf函数把格式数据写成串](#string-sprintf)
     - [isCreditCard函数判断是否为信用卡](#string-iscreditcard)
     - [isEmail函数判断是否为正确邮箱](#string-isemail)
     - [isUrl函数判断是否为url](#string-isurlurl)
     - [isPhone函数判断是否为手机号](#string-isphone)
     - [isIdentityCard函数判断是否为身份证号码](#string-isidentitycard)
<a name=""></a>
 
<a name="array"></a>
# Array相关函数测试
<a name="array--arrayunique-"></a>
## 数组去重, arrayUnique 函数
JSCT.arrayUnique([3, 55, {a: 1}, 7, {a: 1}, {b: 2}, 55]) 结果为 [3, 55, { a: 1 }, 7, {b: 2}].

```js
(0, _chai.expect)(JSCT.arrayUnique([3, 55, { a: 1 }, 7, { a: 1 }, { b: 2 }, 55])).to.deep.equal([3, 55, { a: 1 }, 7, { b: 2 }]);
```

JSCT.arrayUnique([5, 3, 55, {a: 1}, 77, 55]) 结果为 [5, 3, 55, { a: 1 }, 77].

```js
(0, _chai.expect)(JSCT.arrayUnique([5, 3, 55, { a: 1 }, 77, 55])).to.deep.equal([5, 3, 55, { a: 1 }, 77]);
```

JSCT.arrayUnique([5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99]) 结果为 [5, 3, [ 8, 8, { b: 1 } ], 55, { a: 1 }, 77, 99].

```js
(0, _chai.expect)(JSCT.arrayUnique([5, 3, [8, 8, { b: 1 }], 55, [8, 8, { b: 1 }], { a: 1 }, 3, { a: 1 }, 77, 55, 99])).to.deep.equal([5, 3, [8, 8, { b: 1 }], 55, { a: 1 }, 77, 99]);
```

<a name="array--arrayquicksort-"></a>
## 对数组进行排序（默认升序）, arrayQuickSort 函数
JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4]) 升序结果为 [2, 3, 3, 4, 5, 55, 55, 77, 99].

```js
(0, _chai.expect)(JSCT.arrayQuickSort([5, 3, 55, 3, 77, 55, 99, 2, 4])).to.deep.equal([2, 3, 3, 4, 5, 55, 55, 77, 99]);
```

JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4], "desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2].

```js
(0, _chai.expect)(JSCT.arrayQuickSort([5, 3, 55, 3, 77, 55, 99, 2, 4], 'desc')).to.deep.equal([99, 77, 55, 55, 5, 4, 3, 3, 2]);
```

[5, 3, 55, 3, 77, 55, 99, 2, 4].arrayQuickSort("desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2].

```js
(0, _chai.expect)([5, 3, 55, 3, 77, 55, 99, 2, 4].arrayQuickSort('desc')).to.deep.equal([99, 77, 55, 55, 5, 4, 3, 3, 2]);
```

<a name="array-isarray"></a>
## isArray函数判断是否为数组
JSCT.isArray([5]) 结果为 true.

```js
(0, _chai.expect)(JSCT.isArray([5])).to.be.ok;
```

JSCT.isArray([]) 结果为 true.

```js
(0, _chai.expect)(JSCT.isArray([])).to.be.ok;
```

JSCT.isArray({}) 结果为 false.

```js
(0, _chai.expect)(JSCT.isArray({})).to.be.false;
```

<a name="array-inarray"></a>
## inArray函数判断值是否在数组中
JSCT.inArray(3, [3, 5]) 结果为 true.

```js
(0, _chai.expect)(JSCT.inArray(3, [3, 5])).to.be.ok;
```

JSCT.inArray("3", [3, 5]) 结果为 true   非严格模式.

```js
(0, _chai.expect)(JSCT.inArray('3', [3, 5])).to.be.true;
```

JSCT.inArray("3", [3, 5], true) 结果为 false   严格模式.

```js
(0, _chai.expect)(JSCT.inArray('3', [3, 5], true)).to.be.false;
```

<a name="array-arrayisrepeat"></a>
## arrayIsRepeat函数判断数组是否有重复值
JSCT.arrayIsRepeat([3, 5]) 结果为 false.

```js
(0, _chai.expect)(JSCT.arrayIsRepeat([3, 5])).to.be.false;
```

JSCT.arrayIsRepeat([3, 3, 5]) 结果为 true   非严格模式.

```js
(0, _chai.expect)(JSCT.arrayIsRepeat([3, 3, 5])).to.be.ok;
```

JSCT.arrayIsRepeat([3, "3", 5]) 结果为 false   严格模式.

```js
(0, _chai.expect)(JSCT.arrayIsRepeat([3, '3', 5], true)).to.be.false;
```

<a name="js80"></a>
# JS判断函数，解决80%类型判断问题
<a name="js80-isnumber-"></a>
## isNumber 函数
JSCT.isNumber(100) 结果为 true.

```js
(0, _chai.expect)(JSCT.isNumber(100)).to.be.ok;
```

JSCT.isNumber("12") 结果为 false.

```js
(0, _chai.expect)(JSCT.isNumber('12')).to.be.false;
```

<a name="js80-isboolean-"></a>
## isBoolean 函数
JSCT.isBoolean(true) 结果为 true.

```js
(0, _chai.expect)(JSCT.isBoolean(true)).to.be.ok;
```

JSCT.isBoolean("12") 结果为 false.

```js
(0, _chai.expect)(JSCT.isBoolean('12')).to.be.false;
```

<a name="js80-isstring-"></a>
## isString 函数
JSCT.isString("sss") 结果为 true.

```js
(0, _chai.expect)(JSCT.isString('sss')).to.be.true;
```

JSCT.isString(true) 结果为 false.

```js
(0, _chai.expect)(JSCT.isString(true)).to.be.false;
```

<a name="js80-isnull-"></a>
## isNull 函数
JSCT.isNull(null) 结果为 true.

```js
(0, _chai.expect)(JSCT.isNull(null)).to.be.true;
```

JSCT.isNull("123") 结果为 false.

```js
(0, _chai.expect)(JSCT.isNull('123')).to.be.false;
```

JSCT.isNull(true) 结果为 false.

```js
(0, _chai.expect)(JSCT.isNull(true)).to.be.false;
```

<a name="js80-isundefined-"></a>
## isUndefined 函数
JSCT.isUndefined() 结果为 true.

```js
(0, _chai.expect)(JSCT.isUndefined()).to.be.true;
```

JSCT.isUndefined("") 结果为 false.

```js
(0, _chai.expect)(JSCT.isUndefined('')).to.be.false;
```

JSCT.isUndefined(null) 结果为 false.

```js
(0, _chai.expect)(JSCT.isUndefined(null)).to.be.false;
```

JSCT.isUndefined(0) 结果为 false.

```js
(0, _chai.expect)(JSCT.isUndefined(0)).to.be.false;
```

<a name="js80-isobject-"></a>
## isObject 函数
JSCT.isObject() 结果为 false.

```js
(0, _chai.expect)(JSCT.isObject()).to.be.false;
```

JSCT.isObject("") 结果为 false.

```js
(0, _chai.expect)(JSCT.isObject("")).to.be.false;
```

JSCT.isObject(null) 结果为 true.

```js
(0, _chai.expect)(JSCT.isObject(null)).to.be.ok;
```

JSCT.isObject({}) 结果为 true.

```js
(0, _chai.expect)(JSCT.isObject({})).to.be.ok;
```

JSCT.isObject([1]) 结果为 true.

```js
(0, _chai.expect)(JSCT.isObject([1])).to.be.ok;
```

<a name="js80-isfunction-"></a>
## isFunction 函数
JSCT.isFunction() 结果为 false.

```js
(0, _chai.expect)(JSCT.isFunction()).to.be.false;
```

JSCT.isFunction(function () {}) 结果为 true.

```js
(0, _chai.expect)(JSCT.isFunction(function () {})).to.be.true;
```

<a name="number"></a>
# Number相关函数测试
<a name="number-getrandomint"></a>
## getRandomInt函数获取指定区间随机数值
JSCT.getRandomInt(1, 100) 结果小于100大于1.

```js
(0, _chai.expect)(JSCT.getRandomInt(1, 100)).to.be.below(100).to.be.above(1);
```

JSCT.getRandomInt(500, 600) 结果小于600大于500.

```js
(0, _chai.expect)(JSCT.getRandomInt(500, 600)).to.be.below(600).to.be.above(500);
```

<a name="number-tofixeddecimal"></a>
## toFixedDecimal函数返回指定小数位数的十进制，默认两位小数（四舍五入）
JSCT.toFixedDecimal(1.689442324, 2) 结果为1.69.

```js
(0, _chai.expect)(JSCT.toFixedDecimal(1.689442324, 2)).to.be.equal(1.69);
```

JSCT.toFixedDecimal(1.681142324, 3) 结果为1.681.

```js
(0, _chai.expect)(JSCT.toFixedDecimal(1.681142324, 3)).to.be.equal(1.681);
```

JSCT.toFixedDecimal(1.681152324, 4) 结果为1.6812.

```js
(0, _chai.expect)(JSCT.toFixedDecimal(1.681152324, 4)).to.be.equal(1.6812);
```

<a name="number-isprice"></a>
## isPrice函数判断是否为正确金额
JSCT.isPrice(11.35) 结果为 true.

```js
(0, _chai.expect)(JSCT.isPrice(11.35)).to.be.ok;
```

JSCT.isPrice(9.3) 结果为 true.

```js
(0, _chai.expect)(JSCT.isPrice(9.3)).to.be.ok;
```

JSCT.isPrice(1.689) 结果为 false.

```js
(0, _chai.expect)(JSCT.isPrice(1.689)).to.be.false;
```

JSCT.isPrice("123#d") 结果为 false.

```js
(0, _chai.expect)(JSCT.isPrice('123#d')).to.be.false;
```

<a name="string"></a>
# String相关函数测试
<a name="string-trim"></a>
## trim去除空格函数测试
清除字符中所有空格，"a b c d ".trimAll()结果为"abcd".

```js
(0, _chai.expect)('a b c d '.trimAll()).to.be.equal('abcd');
```

清除字符中中左边空格，"   a b c d".trimL()结果为"a b c d".

```js
(0, _chai.expect)('   a b c d'.trimL()).to.be.equal('a b c d');
```

清除字符中中右边空格，"a b c d   ".trimR()结果为"a b c d".

```js
(0, _chai.expect)('a b c d   '.trimR()).to.be.equal('a b c d');
```

<a name="string-isnullorempty"></a>
## isNullOrEmpty函数判断是否为空
JSCT.isNullOrEmpty(0) 结果为 true.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty(0)).to.be.ok;
```

JSCT.isNullOrEmpty(1) 结果为 false.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty(1)).to.not.be.ok;
```

JSCT.isNullOrEmpty("") 结果为 true.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty("")).to.be.ok;
```

JSCT.isNullOrEmpty([]) 结果为 false.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([])).to.be.equal(false);
```

JSCT.isNullOrEmpty([], true) 结果为 true。 (ps: 递归检查，检查内部值).

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([], true)).to.be.equal(true);
```

JSCT.isNullOrEmpty([""]) 结果为 false.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([""], true)).to.be.equal(false);
```

JSCT.isNullOrEmpty([""], true) 结果为 false。 (ps: 递归检查，检查内部值).

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([""], true)).to.be.equal(false);
```

JSCT.isNullOrEmpty([null]) 结果为 false.

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([null])).to.be.equal(false);
```

JSCT.isNullOrEmpty([null], true) 结果为 true。 (ps: 递归检查，检查内部值).

```js
(0, _chai.expect)(JSCT.isNullOrEmpty([null], true)).to.be.equal(true);
```

JSCT.isNullOrEmpty({}) 结果为 false .

```js
(0, _chai.expect)(JSCT.isNullOrEmpty({})).to.be.equal(false);
```

JSCT.isNullOrEmpty({}, true) 结果为 true。 (ps: 递归检查，检查内部值).

```js
(0, _chai.expect)(JSCT.isNullOrEmpty({}, true)).to.be.equal(true);
```

<a name="string-isstring"></a>
## isString函数判断是否为字符串
JSCT.isString("") 结果为 true.

```js
(0, _chai.expect)(JSCT.isString('')).to.be.equal(true);
```

JSCT.isString(12) 结果为 false.

```js
(0, _chai.expect)(JSCT.isString(12)).to.be.equal(false);
```

JSCT.isString("123") 结果为 true.

```js
(0, _chai.expect)(JSCT.isString('123')).to.be.equal(true);
```

JSCT.isString(null) 结果为 false.

```js
(0, _chai.expect)(JSCT.isString(null)).to.be.equal(false);
```

<a name="string-getuuid"></a>
## getUUID函数获得指定长度的唯一字符串
JSCT.getUUID(32).length 结果为 32.

```js
(0, _chai.expect)(JSCT.getUUID(32).length).to.be.equal(32);
```

<a name="string-sprintf"></a>
## sprintf函数把格式数据写成串
JSCT.sprintf('你好%s，你了解%s吗？', 'Jack', 'Mocha') 结果为： '你好Jack，你了解Mocha吗？'.

```js
(0, _chai.expect)(JSCT.sprintf('你好%s，你了解%s吗？', 'Jack', 'Mocha')).to.be.equal('你好Jack，你了解Mocha吗？');
```

<a name="string-iscreditcard"></a>
## isCreditCard函数判断是否为信用卡
JSCT.isCreditCard('5212345678901234') 结果为 true.

```js
(0, _chai.expect)(JSCT.isCreditCard('5212345678901234')).to.be.equal(true);
```

JSCT.isCreditCard('1212345678901234') 结果为 false.

```js
(0, _chai.expect)(JSCT.isCreditCard('1212345678901234')).to.be.equal(false);
```

<a name="string-isemail"></a>
## isEmail函数判断是否为正确邮箱
JSCT.isEmail('liufulin90@163.com') 结果为 true.

```js
(0, _chai.expect)(JSCT.isEmail('liufulin90@163.com')).to.be.equal(true);
```

JSCT.isEmail('1212345678.901234') 结果为 false.

```js
(0, _chai.expect)(JSCT.isEmail('1212345678.901234')).to.be.equal(false);
```

JSCT.isEmail('1212345678@9012.123') 结果为 false.

```js
(0, _chai.expect)(JSCT.isEmail('1212345678@9012.123')).to.be.equal(false);
```

<a name="string-isurlurl"></a>
## isUrl函数判断是否为url
JSCT.isUrl('http://fen.linxins.com') 结果为 true.

```js
(0, _chai.expect)(JSCT.isUrl('http://fen.linxins.com')).to.be.equal(true);
```

JSCT.isUrl('http://fen.linxins.com/#wechatSubscriptionItem') 结果为 true.

```js
(0, _chai.expect)(JSCT.isUrl('http://fen.linxins.com/#wechatSubscriptionItem')).to.be.equal(true);
```

JSCT.isUrl('liufulin90@163.com') 结果为 false.

```js
(0, _chai.expect)(JSCT.isUrl('liufulin90@163.com')).to.be.equal(false);
```

JSCT.isUrl('fff://baidu.com') 结果为 false.

```js
(0, _chai.expect)(JSCT.isUrl('fff://baidu.com')).to.be.equal(false);
```

<a name="string-isphone"></a>
## isPhone函数判断是否为手机号
JSCT.isPhone(18782943043) 结果为 true.

```js
(0, _chai.expect)(JSCT.isPhone(18782943043)).to.be.equal(true);
```

JSCT.isPhone(19012546653) 结果为 false.

```js
(0, _chai.expect)(JSCT.isPhone(19012546653)).to.be.equal(false);
```

JSCT.isPhone(256448) 结果为 false.

```js
(0, _chai.expect)(JSCT.isPhone(256448)).to.be.equal(false);
```

<a name="string-isidentitycard"></a>
## isIdentityCard函数判断是否为身份证号码
JSCT.isIdentityCard('411324199010153310') 结果为 false.

```js
(0, _chai.expect)(JSCT.isIdentityCard('411324199010153310')).to.be.equal(false);
```

