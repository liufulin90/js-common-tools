import {expect} from 'chai'
import * as JSCT from '../../src/'

describe('JS判断函数，解决80%类型判断问题', function () {
  describe('isNumber 函数', function () {
    it('JSCT.isNumber(100) 结果为 true', function () {
      expect(JSCT.isNumber(100)).to.be.ok;
    });
    it('JSCT.isNumber("12") 结果为 false', function () {
      expect(JSCT.isNumber('12')).to.be.false;
    });
  });
  describe('isBoolean 函数', function () {
    it('JSCT.isBoolean(true) 结果为 true', function () {
      expect(JSCT.isBoolean(true)).to.be.ok;
    });
    it('JSCT.isBoolean("12") 结果为 false', function () {
      expect(JSCT.isBoolean('12')).to.be.false;
    });
  });
  describe('isString 函数', function () {
    it('JSCT.isString("sss") 结果为 true', function () {
      expect(JSCT.isString('sss')).to.be.true;
    });
    it('JSCT.isString(true) 结果为 false', function () {
      expect(JSCT.isString(true)).to.be.false;
    });
  });
  describe('isNull 函数', function () {
    it('JSCT.isNull(null) 结果为 true', function () {
      expect(JSCT.isNull(null)).to.be.true;
    });
    it('JSCT.isNull("123") 结果为 false', function () {
      expect(JSCT.isNull('123')).to.be.false;
    });
    it('JSCT.isNull(true) 结果为 false', function () {
      expect(JSCT.isNull(true)).to.be.false;
    });
  });
  describe('isUndefined 函数', function () {
    it('JSCT.isUndefined() 结果为 true', function () {
      expect(JSCT.isUndefined()).to.be.true;
    });
    it('JSCT.isUndefined("") 结果为 false', function () {
      expect(JSCT.isUndefined('')).to.be.false;
    });
    it('JSCT.isUndefined(null) 结果为 false', function () {
      expect(JSCT.isUndefined(null)).to.be.false;
    });
    it('JSCT.isUndefined(0) 结果为 false', function () {
      expect(JSCT.isUndefined(0)).to.be.false;
    });
  });
  describe('isObject 函数', function () {
    it('JSCT.isObject() 结果为 false', function () {
      expect(JSCT.isObject()).to.be.false;
    });
    it('JSCT.isObject("") 结果为 false', function () {
      expect(JSCT.isObject("")).to.be.false;
    });
    it('JSCT.isObject(null) 结果为 true', function () {
      expect(JSCT.isObject(null)).to.be.ok;
    });
    it('JSCT.isObject({}) 结果为 true', function () {
      expect(JSCT.isObject({})).to.be.ok;
    });
    it('JSCT.isObject([1]) 结果为 true', function () {
      expect(JSCT.isObject([1])).to.be.ok;
    });
  });
  describe('isFunction 函数', function () {
    it('JSCT.isFunction() 结果为 false', function () {
      expect(JSCT.isFunction()).to.be.false;
    });
    it('JSCT.isFunction(function () {}) 结果为 true', function () {
      expect(JSCT.isFunction(function () {})).to.be.true;
    });
  });
})
