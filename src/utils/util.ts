const customToSting = Object.prototype.toString

// 谓词保护
export function isDate(val: any): val is Date {
  return customToSting.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return customToSting.call(val) === '[object Object]'
}
