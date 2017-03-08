"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sleep = function sleep() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  return new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, timeout);
  });
};

exports.sleep = sleep;