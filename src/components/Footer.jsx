import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';
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
          <div className="footer-text-small mt-4" data-i18n-html="footer_copyright">
            © 2025—2026 «Nexium» —<br />
            студия автоматизации бизнеса
          </div>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><a href="/#advantages" data-i18n="footer_nav_about">О нас</a></li>
            <li><Link to="/cases" data-i18n="footer_nav_portfolio">Портфолио</Link></li>
            <li><a href="/#solutions" data-i18n="footer_nav_services">Услуги</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><a href="/#testimonials" data-i18n="footer_nav_clients">Клиенты</a></li>
            <li><a href="/#cta" data-i18n="footer_nav_contacts">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contacts">
          <a href="mailto:nexiumdev@protonmail.com" className="footer-email">nexiumdev@protonmail.com</a>

          <button className="footer-up-btn" onClick={scrollToTop} aria-label="Наверх">
            <FiChevronUp size={18} />
            <span data-i18n="footer_up">Вверх</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
