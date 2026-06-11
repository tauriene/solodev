import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { getSiteLanguage, setSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';

export default function Header() {
    const location = useLocation();
    const isCases = location.pathname.includes('cases');
    const isReadySolutions = location.pathname.includes('ready-solutions');
    const [lang, setLang] = useState(getSiteLanguage());

    useEffect(() => {
        const syncLang = (event) => {
            const nextLang = event?.detail?.lang || getSiteLanguage();
            setLang(nextLang);
        };

        window.addEventListener(SITE_LANGUAGE_EVENT, syncLang);
        window.addEventListener('storage', syncLang);

        return () => {
            window.removeEventListener(SITE_LANGUAGE_EVENT, syncLang);
            window.removeEventListener('storage', syncLang);
        };
    }, []);

    return (
        <>
            <header id="site-header">
                <div className="header-inner">
                    <Link to="/" className="logo" data-i18n="logo">нексиум.дев</Link>

                    <nav className="header-nav" aria-label="Main navigation">
                        <Link to="/cases" className={`nav-link unbounded ${isCases ? 'is-active' : ''}`} data-i18n="header_nav_portfolio">Портфолио</Link>
                        <Link to="/ready-solutions" className={`nav-link unbounded ${isReadySolutions ? 'is-active' : ''}`} data-i18n="header_nav_ready_solutions">Готовые решения</Link>
                        <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="nav-link nav-link--tg unbounded">
                            <FaTelegramPlane size={15} className="nav-link-icon" />
                            <span data-i18n="header_telegram">Telegram</span>
                            <FiArrowRight size={14} />
                        </a>
                    </nav>
                    <div className="header-controls">
                        <div className="lang-switcher" aria-label="Language switcher">
                            <button
                                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                                type="button"
                                data-lang="ru"
                                onClick={() => setSiteLanguage('ru')}
                            >
                                RU
                            </button>
                            <button
                                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                                type="button"
                                data-lang="en"
                                onClick={() => setSiteLanguage('en')}
                            >
                                EN
                            </button>
                        </div>

                        <button className="burger-btn" id="burger-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                            <span className="burger-bar"></span>
                            <span className="burger-bar"></span>
                            <span className="burger-bar"></span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
                <div className="mobile-menu-inner">
                    <nav className="mobile-menu-nav">
                        <Link to="/" className="mobile-menu-link" data-i18n="header_nav_home">Главная</Link>
                        <Link to="/cases" className="mobile-menu-link" data-i18n="header_nav_portfolio">Портфолио</Link>
                        <Link to="/ready-solutions" className="mobile-menu-link" data-i18n="header_nav_ready_solutions">Готовые решения</Link>
                        <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="mobile-menu-link mobile-menu-link--tg">
                            <span data-i18n="header_telegram">Telegram</span>
                            <FiArrowRight size={14} />
                        </a>
                    </nav>
                    <div className="mobile-menu-footer">
                        <span className="mobile-menu-logo" data-i18n="logo">нексиум.дев</span>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-backdrop" id="mobile-menu-backdrop"></div>
        </>
    );
}
