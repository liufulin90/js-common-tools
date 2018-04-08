'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isString = isString;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.isFunction = isFunction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function type(x) {
    return typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x);
}
function isNumber(x) {
    return type(x) === 'number';
}

function isBoolean(x) {
    return type(x) === 'boolean';
}

function isString(x) {
    return type(x) === 'string';
}

function isNull(x) {
    return type(x) === 'null';
}

function isUndefined(x) {
    return type(x) === 'undefined';
}

function isObject(x) {
    return type(x) === 'object';
}

function isFunction(x) {
    return type(x) === 'function';
}