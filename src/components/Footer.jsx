import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">

        <div className="footer-col footer-col-info">
          <Link to="/" className="footer-logo" data-i18n="logo">нексиум.дев</Link>
          <div className="footer-text-small">
            <a href="#" data-i18n="footer_privacy">Политика конфиденциальности</a><br />
            <a href="#" data-i18n="footer_agreement">Согласие на обработку персональных данных</a>
          </div>
          <div className="footer-text-small mt-4" data-i18n-html="footer_copyright">
            © 2017—2026 «Nexium» —<br />
            студия автоматизации бизнеса
          </div>
          <div className="footer-text-small mt-4" data-i18n-html="footer_legal">
            ИП Некрасов Виктор Владимирович<br />
            ИНН 710407135800<br />
            ОГРНИП 317715400000700
          </div>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><Link to="/" data-i18n="footer_nav_about">О нас</Link></li>
            <li><Link to="/cases" data-i18n="footer_nav_portfolio">Портфолио</Link></li>
            <li><Link to="/" data-i18n="footer_nav_services">Услуги</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><Link to="/" data-i18n="footer_nav_clients">Клиенты</Link></li>
            <li><Link to="/" data-i18n="footer_nav_prices">Цены</Link></li>
            <li><Link to="/" data-i18n="footer_nav_contacts">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contacts">
          <a href="tel:84951097765" className="footer-phone">8 495 109 77 65</a>
          <a href="mailto:info@nexium.dev" className="footer-email">info@nexium.dev</a>

          <button className="footer-up-btn" onClick={scrollToTop} aria-label="Наверх">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span data-i18n="footer_up">Вверх</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
