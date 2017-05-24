'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageWidthHeight = exports.sleep = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _string = require('../string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sleep = function sleep() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  return new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, timeout);
  });
};

function getImageWidthHeight(file, callback) {
  if (!file || !file[0] || !file[0].files || !file[0].files[0]) {
    throw new Error((0, _string.sprintf)('1st arguments must be file, 1st is %s', file));
  }
  var fileData = file[0].files[0];
  var type = fileData.type;

  if (!/^image\/(jpg|jpeg|png|gif)/.test(type)) {
    throw new Error((0, _string.sprintf)('1st arguments must png/jpg/gif, this file type is %s', type));
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;

    var image = new Image();
    image.onload = function () {
      var width = image.width;
      var height = image.height;
      callback(width, height, image);
    };
    image.src = data;
  };
  reader.readAsDataURL(fileData);
}

exports.sleep = sleep;
exports.getImageWidthHeight = getImageWidthHeight;