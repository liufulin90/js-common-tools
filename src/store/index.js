/**
 *
 * @param key
 */
const getLocalStorage = key => {
  return window.localStorage.getItem(key.toString())
}

/**
 *
 * @param key
 * @param obj
 */
const setLocalStorage = (key, obj) => {
  let item = typeof obj === 'object' ? JSON.stringify(obj) : obj
  window.localStorage.setItem(key.toString(), item)
}

/**
 *
 * @param key
 */
const getSessionStorage = key => {
  return window.sessionStorage.getItem(key.toString())
}

/**
 *
 * @param key
 * @param obj
 */
const setSessionStorage = (key, obj) => {
  let item = typeof obj === 'object' ? JSON.stringify(obj) : obj
  window.sessionStorage.setItem(key.toString(), item)
}

export {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
}
