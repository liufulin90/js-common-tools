/**
 * Created by liufulin on 17-2-15.
 */
/**
 * Trim function for Strings
 */
/***
 * 清除字符中所有空格
 */
if (!String.prototype.trimAll) {
  String.prototype.trimAll = function () {
    return this.replace(/^(\s)+|(\s)+|(\s)+$/g, '');
  }
}
/***
 * 清除字符中左边空格
 */
if (!String.prototype.trimL) {
  String.prototype.trimL = function () {
    return this.replace(/^\s+/g, '');
  }
}
/***
 * 清除字符中右边空格
 */
if (!String.prototype.trimR) {
  String.prototype.trimR = function () {
    return this.replace(/\s+$/g, '');
  }
}

const test = () => {

}
export {
  test
}
