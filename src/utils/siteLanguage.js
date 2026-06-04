export const SITE_LANGUAGE_KEY = 'site-language';
export const SITE_LANGUAGE_EVENT = 'languageChanged';

export function getSiteLanguage() {
  if (typeof window === 'undefined') return 'ru';
  const value = window.localStorage.getItem(SITE_LANGUAGE_KEY);
  return value === 'en' ? 'en' : 'ru';
}

export function setSiteLanguage(lang) {
  if (typeof window === 'undefined') return;
  const nextLang = lang === 'en' ? 'en' : 'ru';
  window.localStorage.setItem(SITE_LANGUAGE_KEY, nextLang);
  window.dispatchEvent(new CustomEvent(SITE_LANGUAGE_EVENT, { detail: { lang: nextLang } }));
}
