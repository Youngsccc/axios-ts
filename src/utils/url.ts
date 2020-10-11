import { isDate, isPlainObject } from './util'

function enCode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3a/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/gi, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || val === undefined) {
      return
    }
    let values = []
    if (Array.isArray(val)) {
      values = []
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${enCode(key)}=${enCode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  const markIndex = url.indexOf('#')

  if (markIndex !== -1) {
    url += url.slice(0, markIndex)
  }

  url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams

  return url
}
