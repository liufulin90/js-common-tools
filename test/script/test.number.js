import {expect} from 'chai'
import * as JSCT from '../../src/'

describe('Number相关函数测试', function () {
  describe('getRandomInt函数获取指定区间随机数值', function () {
    it('JSCT.getRandomInt(1, 100) 结果小于100大于1', function () {
      expect(JSCT.getRandomInt(1, 100)).to.be.below(100).to.be.above(1);
    });
    it('JSCT.getRandomInt(500, 600) 结果小于600大于500', function () {
      expect(JSCT.getRandomInt(500, 600)).to.be.below(600).to.be.above(500);
    });
  })

  describe('toFixedDecimal函数返回指定小数位数的十进制，默认两位小数（四舍五入）', function () {
    it('JSCT.toFixedDecimal(1.689442324, 2) 结果为1.69', function () {
      expect(JSCT.toFixedDecimal(1.689442324, 2)).to.be.equal(1.69);
    });
    it('JSCT.toFixedDecimal(1.681142324, 3) 结果为1.681', function () {
      expect(JSCT.toFixedDecimal(1.681142324, 3)).to.be.equal(1.681);
    });
    it('JSCT.toFixedDecimal(1.681152324, 4) 结果为1.6812', function () {
      expect(JSCT.toFixedDecimal(1.681152324, 4)).to.be.equal(1.6812);
    });
  })
  describe('isPrice函数判断是否为正确金额', function () {
    it('JSCT.isPrice(11.35) 结果为 true', function () {
      expect(JSCT.isPrice(11.35)).to.be.ok;
    });
    it('JSCT.isPrice(9.3) 结果为 true', function () {
      expect(JSCT.isPrice(9.3)).to.be.ok;
    });
    it('JSCT.isPrice(1.689) 结果为 false', function () {
      expect(JSCT.isPrice(1.689)).to.be.false;
    });
    it('JSCT.isPrice("123#d") 结果为 false', function () {
      expect(JSCT.isPrice('123#d')).to.be.false;
    });
  })

  describe('isPrimes函数判断一个数是否为素数（质数）', function () {
    setTimeout(()=> {
      function testPrimes(start = 1, end = 100) {
        var
          x,
          arr = [];
        for (x = start; x < end; x++) {
          arr.push(x);
        }
        return get_primes(arr);
      }
      function get_primes(arr) {
        var r = arr.filter(function (val) {
          return JSCT.isPrimes(val);
        });
        return r;
      }
      console.log('100 ~ 110 所有质数: ' + testPrimes(100, 110).toString());
    }, 100);

    it('JSCT.isPrimes(1) 结果为 false', function () {
      expect(JSCT.isPrimes(1)).to.be.false;
    });
    it('JSCT.isPrimes(9) 结果为 false', function () {
      expect(JSCT.isPrimes(9)).to.be.false;
    });
    it('JSCT.isPrimes(5) 结果为 true', function () {
      expect(JSCT.isPrimes(5)).to.be.ok;
    });
    it('JSCT.isPrimes(97) 结果为 true', function () {
      expect(JSCT.isPrimes(97)).to.be.ok;
    });
    it('JSCT.isPrimes(109) 结果为 true', function () {
      expect(JSCT.isPrimes(109)).to.be.ok;
    });
  })

  describe('getPrimes函数获取两个数之间的所有素数（质数）', function () {
    it('JSCT.getPrimes(1, 30) 1到30的数中所有质数： 2,3,5,7,11,13,17,19,23,29', function () {
      expect(JSCT.getPrimes(1, 30).toString()).to.be.equal('2,3,5,7,11,13,17,19,23,29');
    });
  })
  describe('accAdd 函数得到正确的两个浮点数的和', function () {
    it('JSCT.accAdd(0.1, 0.2) 之和等于 0.3', function () {
      expect(JSCT.accAdd(0.1, 0.2)).to.be.equal(0.3);
    });
  })
})

