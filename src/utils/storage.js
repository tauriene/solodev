/**
 * Safe localStorage getter — returns null on the server (SSR/SSG)
 * where localStorage is not available.
 */
export function getStorage(key) {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setStorage(key, value) {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}
