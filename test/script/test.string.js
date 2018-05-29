import {expect} from 'chai'
import * as JSCT from '../../src/'

describe('String相关函数测试', function () {
  describe('trim去除空格函数测试', function () {
    it('清除字符中所有空格，"a b c d ".trimAll()结果为"abcd"', function () {
      expect('a b c d '.trimAll()).to.be.equal('abcd');
    });
    it('清除字符中中左边空格，"   a b c d".trimL()结果为"a b c d"', function () {
      expect('   a b c d'.trimL()).to.be.equal('a b c d');
    });
    it('清除字符中中右边空格，"a b c d   ".trimR()结果为"a b c d"', function () {
      expect('a b c d   '.trimR()).to.be.equal('a b c d');
    });
  })

  describe('isNullOrEmpty函数判断是否为空', function () {
    it('JSCT.isNullOrEmpty(0) 结果为 true', function () {
      expect(JSCT.isNullOrEmpty(0)).to.be.ok;
    });
    it('JSCT.isNullOrEmpty(1) 结果为 false', function () {
      expect(JSCT.isNullOrEmpty(1)).to.not.be.ok;
    });
    it('JSCT.isNullOrEmpty("") 结果为 true', function () {
      expect(JSCT.isNullOrEmpty("")).to.be.ok;
    });
    it('JSCT.isNullOrEmpty([]) 结果为 false', function () {
      expect(JSCT.isNullOrEmpty([])).to.be.equal(false);
    });
    it('JSCT.isNullOrEmpty([], true) 结果为 true。 (ps: 递归检查，检查内部值)', function () {
      expect(JSCT.isNullOrEmpty([], true)).to.be.equal(true);
    });
    it('JSCT.isNullOrEmpty([""]) 结果为 false', function () {
      expect(JSCT.isNullOrEmpty([""], true)).to.be.equal(false);
    });
    it('JSCT.isNullOrEmpty([""], true) 结果为 false。 (ps: 递归检查，检查内部值)', function () {
      expect(JSCT.isNullOrEmpty([""], true)).to.be.equal(false);
    });
    it('JSCT.isNullOrEmpty([null]) 结果为 false', function () {
      expect(JSCT.isNullOrEmpty([null])).to.be.equal(false);
    });
    it('JSCT.isNullOrEmpty([null], true) 结果为 true。 (ps: 递归检查，检查内部值)', function () {
      expect(JSCT.isNullOrEmpty([null], true)).to.be.equal(true);
    });
    it('JSCT.isNullOrEmpty({}) 结果为 false ', function () {
      expect(JSCT.isNullOrEmpty({})).to.be.equal(false);
    });
    it('JSCT.isNullOrEmpty({}, true) 结果为 true。 (ps: 递归检查，检查内部值)', function () {
      expect(JSCT.isNullOrEmpty({}, true)).to.be.equal(true);
    });
  })

  describe('isString函数判断是否为字符串', function () {
    it('JSCT.isString("") 结果为 true', function () {
      expect(JSCT.isString('')).to.be.equal(true);
    });
    it('JSCT.isString(12) 结果为 false', function () {
      expect(JSCT.isString(12)).to.be.equal(false);
    });
    it('JSCT.isString("123") 结果为 true', function () {
      expect(JSCT.isString('123')).to.be.equal(true);
    });
    it('JSCT.isString(null) 结果为 false', function () {
      expect(JSCT.isString(null)).to.be.equal(false);
    });
  })

  describe('getUUID函数获得指定长度的唯一字符串', function () {
    it('JSCT.getUUID(32).length 结果为 32', function () {
      expect(JSCT.getUUID(32).length).to.be.equal(32);
    });
  })

  describe('sprintf函数把格式数据写成串', function () {
    it("JSCT.sprintf('你好%s，你了解%s吗？', 'Jack', 'Mocha') 结果为： '你好Jack，你了解Mocha吗？'", function () {
      expect(JSCT.sprintf('你好%s，你了解%s吗？', 'Jack', 'Mocha')).to.be.equal('你好Jack，你了解Mocha吗？')
    })
  })

  describe('isCreditCard函数判断是否为信用卡', function () {
    it("JSCT.isCreditCard('5212345678901234') 结果为 true", function () {
      expect(JSCT.isCreditCard('5212345678901234')).to.be.equal(true);
    });
    it("JSCT.isCreditCard('1212345678901234') 结果为 false", function () {
      expect(JSCT.isCreditCard('1212345678901234')).to.be.equal(false);
    });
  })

  describe('isEmail函数判断是否为正确邮箱', function () {
    it("JSCT.isEmail('liufulin90@163.com') 结果为 true", function () {
      expect(JSCT.isEmail('liufulin90@163.com')).to.be.equal(true);
    });
    it("JSCT.isEmail('1212345678.901234') 结果为 false", function () {
      expect(JSCT.isEmail('1212345678.901234')).to.be.equal(false);
    });
    it("JSCT.isEmail('1212345678@9012.123') 结果为 false", function () {
      expect(JSCT.isEmail('1212345678@9012.123')).to.be.equal(false);
    });
  })

  describe('isUrl函数判断是否为url', function () {
    it("JSCT.isUrl('http://fen.linxins.com') 结果为 true", function () {
      expect(JSCT.isUrl('http://fen.linxins.com')).to.be.equal(true);
    });
    it("JSCT.isUrl('http://fen.linxins.com/#wechatSubscriptionItem') 结果为 true", function () {
      expect(JSCT.isUrl('http://fen.linxins.com/#wechatSubscriptionItem')).to.be.equal(true);
    });
    it("JSCT.isUrl('liufulin90@163.com') 结果为 false", function () {
      expect(JSCT.isUrl('liufulin90@163.com')).to.be.equal(false);
    });
    it("JSCT.isUrl('fff://baidu.com') 结果为 false", function () {
      expect(JSCT.isUrl('fff://baidu.com')).to.be.equal(false);
    });
  })

  describe('isPhone函数判断是否为手机号', function () {
    it("JSCT.isPhone(18782943043) 结果为 true", function () {
      expect(JSCT.isPhone(18782943043)).to.be.equal(true);
    });
    it("JSCT.isPhone(19012546653) 结果为 false", function () {
      expect(JSCT.isPhone(19012546653)).to.be.equal(false);
    });
    it("JSCT.isPhone(256448) 结果为 false", function () {
      expect(JSCT.isPhone(256448)).to.be.equal(false);
    });
  })

  describe('isIdentityCard函数判断是否为身份证号码', function () {
    it("JSCT.isIdentityCard('411324199010153310') 结果为 false", function () {
      expect(JSCT.isIdentityCard('411324199010153310')).to.be.equal(false);
    });
  })
})