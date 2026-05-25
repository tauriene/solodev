import React from 'react';
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
          <Link to="/" className="footer-logo">нексиум.дев</Link>
          <div className="footer-text-small">
            <a href="#">Политика конфиденциальности</a><br />
            <a href="#">Согласие на обработку персональных данных</a>
          </div>
          <div className="footer-text-small mt-4">
            © 2017—2026 «Nexium» —<br />
            студия автоматизации бизнеса
          </div>
          <div className="footer-text-small mt-4">
            ИП Некрасов Виктор Владимирович<br />
            ИНН 710407135800<br />
            ОГРНИП 317715400000700
          </div>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><Link to="/">О нас</Link></li>
            <li><Link to="/cases">Портфолио</Link></li>
            <li><Link to="/">Услуги</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-nav">
          <ul className="footer-nav">
            <li><Link to="/">Клиенты</Link></li>
            <li><Link to="/">Цены</Link></li>
            <li><Link to="/">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contacts">
          <a href="tel:84951097765" className="footer-phone">8 495 109 77 65</a>
          <a href="mailto:info@nexium.dev" className="footer-email">info@nexium.dev</a>

          <button className="footer-up-btn" onClick={scrollToTop} aria-label="Наверх">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            Вверх
          </button>
        </div>

      </div>
    </footer>
  );
}
