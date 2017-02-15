/**
 * Created by linxins
 */

/**
 * 数组去重
 *
 * 1.创建一个新的数组存放结果
 * 2.创建一个空对象
 * 3.判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存
 *
 * @param arr
 * @returns {Array}
 * @constructor
 * eg:
 * var arr = [5, 3, [8, 8, {b: 1}], 55, [8, 8, {b: 1}], {a: 1}, 3, {a: 1}, 77, 55, 99];
 * console.log(arr)
 * console.log(ArrayUnique(arr))
 */
const ArrayUnique = (arr) => {
  var o = {}, r = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].constructor === Object || arr[i].constructor === Array) {
      if (!o[JSON.stringify(arr[i]).toString()]) {
        o[JSON.stringify(arr[i]).toString()] = true;
        r.push(arr[i]);
      }
    } else {
      if (!o[arr[i]]) {
        o[arr[i]] = true;
        r.push(arr[i]);
      }
    }
  }
  return r;
}

/**
 * 对数组进行排序（排序）
 *
 *（1）在数据集之中，选择一个元素作为”基准”（pivot）。
 *（2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
 *（3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 *
 * @param arr
 * @returns {*}
 * @constructor
 * eg:
 * var arr = [5, 3, 55, 3,77, 55, 99, 2, 4];
 * console.log(arr);
 * console.log(ArrayQuickSort(arr))
 */
const ArrayQuickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [], right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return ArrayQuickSort(left).concat([pivot], ArrayQuickSort(right));
}

export {
  ArrayUnique,
  ArrayQuickSort
}
