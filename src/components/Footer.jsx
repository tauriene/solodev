import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';
import './Footer.css';

export default function Footer() {
  const [lang, setLang] = useState(getSiteLanguage());

  useEffect(() => {
    const handleLangChange = () => {
      setLang(getSiteLanguage());
    };

    window.addEventListener('storage', handleLangChange);
    window.addEventListener(SITE_LANGUAGE_EVENT, handleLangChange);

    return () => {
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    };
  }, []);

  const t = (ruText, enText) => lang === 'en' ? enText : ruText;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">

        <div className="footer-col footer-col-info">
          <Link to="/" className="footer-logo" data-i18n="logo">нексиум.дев</Link>
          <div className="footer-text-small mt-4">
            {t('© 2025—2026 «Nexium» —', '© 2025—2026 "Nexium" —')}<br />
            {t('студия автоматизации бизнеса', 'business automation studio')}
          </div>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><a href="/#advantages">{t('О нас', 'About Us')}</a></li>
            <li><Link to="/cases">{t('Портфолио', 'Portfolio')}</Link></li>
            <li><Link to="/services">{t('Услуги', 'Services')}</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><a href="/#testimonials">{t('Клиенты', 'Clients')}</a></li>
            <li><a href="/#cta">{t('Контакты', 'Contacts')}</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contacts">
          <a href="mailto:nexiumdev@protonmail.com" className="footer-email">nexiumdev@protonmail.com</a>

          <button className="footer-up-btn" onClick={scrollToTop} aria-label={t('Наверх', 'Back to top')}>
            <FiChevronUp size={18} />
            <span>{t('Вверх', 'Up')}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
