import {sprintf} from '../string'
/**
 * const testAsync = async () => {
 *   console.log(1)
 *   await sleep(2000)
 *   console.log(2)
 * }
 * 利用async/await做睡眠延迟sleep后面的代码执行
 *
 * @param timeout
 * @returns {Promise}
 */
const sleep = (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

/**
 * 获取图片的真是宽高，并做相应处理
 * @param file （png/jpg/gif） eg: [document.getElementById('fileid')]  or $('#fileid')
 * @param callback
 */
function getImageWidthHeight (file, callback) {
  if (!file || !file[0] || !file[0].files || !file[0].files[0]) {
    throw new Error(sprintf('1st arguments must be file, 1st is %s', file))
  }
  var fileData = file[0].files[0];
  let {type} = fileData
  if (!/^image\/(jpg|jpeg|png|gif)/.test(type)) {
    throw new Error(sprintf('1st arguments must png/jpg/gif, this file type is %s', type))
  }
  //读取图片数据
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    //加载图片获取图片真实宽度和高度
    var image = new Image();
    image.onload = function () {
      var width = image.width;
      var height = image.height;
      callback(width, height, image);// 这里得到图片的真是高度
    };
    image.src = data;
  };
  reader.readAsDataURL(fileData);
}

export {
  sleep,
  getImageWidthHeight
}
