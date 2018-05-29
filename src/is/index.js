// JS判断函数，解决80%类型判断问题

function type(x) {
    return typeof x
}
export function isNumber(x) {
    return type(x) === 'number'
}

export function isBoolean(x) {
    return type(x) === 'boolean'
}

export function isString(x) {
    return type(x) === 'string'
}

export function isNull(x) {
    return x === null && type(x) === 'object'
}

export function isUndefined(x) {
    return type(x) === 'undefined'
}

export function isObject(x) {
    return type(x) === 'object'
}

export function isFunction(x) {
    return type(x) === 'function'
}
