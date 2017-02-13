/**
 * Created by linxins on 17-2-13.
 */

/**
 * 数组去重
 *
 * 1.创建一个新的数组存放结果
 * 2.创建一个空对象
 * 3.判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存
 * @returns {Array}
 */
Array.prototype.unique = function () {
  var o = {}, r = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].constructor === Object || this[i].constructor === Array) {
      if (!o[JSON.stringify(this[i]).toString()]) {
        o[JSON.stringify(this[i]).toString()] = true;
        r.push(this[i]);
      }
    } else {
      if (!o[this[i]]) {
        o[this[i]] = true;
        r.push(this[i]);
      }
    }
  }
  return r;
}
// var arr = [5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99];
// console.log(arr)
// console.log(arr.unique())

/**
 * 快排
 *（1）在数据集之中，选择一个元素作为”基准”（pivot）。
 *（2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
 *（3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 * @returns {*}
 */
Array.prototype.quickSort = function () {
  if (this.length <= 1) {
    return this;
  }
  var pivotIndex = Math.floor(this.length / 2);
  var pivot = this.splice(pivotIndex, 1)[0];
  var left = [], right = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }
  return left.quickSort().concat([pivot], right.quickSort());
}
var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
console.log(arr);
console.log(arr.quickSort())