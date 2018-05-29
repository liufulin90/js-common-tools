import {expect} from 'chai'
import * as JSCT from '../../src/'

describe('Array相关函数测试', function () {
  describe('数组去重, arrayUnique 函数', function () {
    it('JSCT.arrayUnique([3, 55, {a: 1}, 7, {a: 1}, {b: 2}, 55]) 结果为 [3, 55, { a: 1 }, 7, {b: 2}]', function () {
      expect(JSCT.arrayUnique([3, 55, {a: 1}, 7, {a: 1}, {b: 2}, 55]))
        .to.deep.equal([3, 55, { a: 1 }, 7, {b: 2}]);
    });
    it('JSCT.arrayUnique([5, 3, 55, {a: 1}, 77, 55]) 结果为 [5, 3, 55, { a: 1 }, 77]', function () {
      expect(JSCT.arrayUnique([5, 3, 55, {a: 1}, 77, 55]))
        .to.deep.equal([5, 3, 55, { a: 1 }, 77]);
    });
    it('JSCT.arrayUnique([5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99]) 结果为 [5, 3, [ 8, 8, { b: 1 } ], 55, { a: 1 }, 77, 99]', function () {
      expect(JSCT.arrayUnique([5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99]))
        .to.deep.equal([5, 3, [ 8, 8, { b: 1 } ], 55, { a: 1 }, 77, 99]);
    });
  })
  describe('对数组进行排序（默认升序）, arrayQuickSort 函数', function () {
    it('JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4]) 升序结果为 [2, 3, 3, 4, 5, 55, 55, 77, 99]', function () {
      expect(JSCT.arrayQuickSort([5, 3, 55, 3, 77, 55, 99, 2, 4]))
        .to.deep.equal([2, 3, 3, 4, 5, 55, 55, 77, 99]);
    });
    it('JSCT.arrayUnique([5, 3, 55, 3, 77, 55, 99, 2, 4], "desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2]', function () {
      expect(JSCT.arrayQuickSort([5, 3, 55, 3, 77, 55, 99, 2, 4], 'desc'))
        .to.deep.equal([99, 77, 55, 55, 5, 4, 3, 3, 2]);
    });
    it('[5, 3, 55, 3, 77, 55, 99, 2, 4].arrayQuickSort("desc") 将序结果为 [99, 77, 55, 55, 5, 4, 3, 3, 2]', function () {
      expect([5, 3, 55, 3, 77, 55, 99, 2, 4].arrayQuickSort('desc'))
        .to.deep.equal([99, 77, 55, 55, 5, 4, 3, 3, 2]);
    });
  })

  describe('isArray函数判断是否为数组', function () {
    it('JSCT.isArray([5]) 结果为 true', function () {
      expect(JSCT.isArray([5])).to.be.ok;
    });
    it('JSCT.isArray([]) 结果为 true', function () {
      expect(JSCT.isArray([])).to.be.ok;
    });
    it('JSCT.isArray({}) 结果为 false', function () {
      expect(JSCT.isArray({})).to.be.false;
    });
  })
  describe('inArray函数判断值是否在数组中', function () {
    it('JSCT.inArray(3, [3, 5]) 结果为 true', function () {
      expect(JSCT.inArray(3, [3, 5])).to.be.ok;
    });
    it('JSCT.inArray("3", [3, 5]) 结果为 true   非严格模式', function () {
      expect(JSCT.inArray('3', [3, 5])).to.be.true;
    });
    it('JSCT.inArray("3", [3, 5], true) 结果为 false   严格模式', function () {
      expect(JSCT.inArray('3', [3, 5], true)).to.be.false;
    });
  })

  describe('arrayIsRepeat函数判断数组是否有重复值', function () {
    it('JSCT.arrayIsRepeat([3, 5]) 结果为 false', function () {
      expect(JSCT.arrayIsRepeat([3, 5])).to.be.false;
    });
    it('JSCT.arrayIsRepeat([3, 3, 5]) 结果为 true   非严格模式', function () {
      expect(JSCT.arrayIsRepeat([3, 3, 5])).to.be.ok;
    });

    it('JSCT.arrayIsRepeat([3, "3", 5]) 结果为 false   严格模式', function () {
      expect(JSCT.arrayIsRepeat([3, '3', 5], true)).to.be.false;
    });
  })
})
