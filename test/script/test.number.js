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
})

