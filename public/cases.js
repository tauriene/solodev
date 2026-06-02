/* ==============================================
   cases.js — Portfolio page logic
   ============================================== */

/* ---- Burger menu (same as main script.js) ---- */
function initBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (!burgerBtn || !mobileMenu || !backdrop) return;

    const openMenu = () => {
        burgerBtn.classList.add('is-open');
        burgerBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        burgerBtn.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('.mobile-menu-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

/* ---- Lang switcher with translations ---- */
const casesTranslations = {
    ru: {
        logo: 'нексиум.дев',
        header_telegram: 'Telegram',
        header_nav_portfolio: 'Портфолио',
        header_nav_home: 'Главная',
        footer_privacy: 'Политика конфиденциальности',
        footer_agreement: 'Согласие на обработку персональных данных',
        footer_copyright: '© 2017—2026 «Nexium» —<br>студия автоматизации бизнеса',
        footer_nav_about: 'О нас',
        footer_nav_portfolio: 'Портфолио',
        footer_nav_services: 'Услуги',
        footer_nav_clients: 'Клиенты',
        footer_nav_contacts: 'Контакты',
        footer_up: 'Вверх',
    },
    en: {
        logo: 'nexium.dev',
        header_telegram: 'Telegram',
        header_nav_portfolio: 'Portfolio',
        header_nav_home: 'Home',
        footer_privacy: 'Privacy Policy',
        footer_agreement: 'Personal Data Processing Agreement',
        footer_copyright: '© 2017—2026 "Nexium" —<br>business automation studio',
        footer_nav_about: 'About Us',
        footer_nav_portfolio: 'Portfolio',
        footer_nav_services: 'Services',
        footer_nav_clients: 'Clients',
        footer_nav_contacts: 'Contacts',
        footer_up: 'Up',
    }
};

function applyTranslations(lang) {
    const dict = casesTranslations[lang] || casesTranslations.ru;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.dataset.i18nHtml;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('.lang-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    localStorage.setItem('site-language', lang);
    window.dispatchEvent(new Event('languageChanged'));
}

function initLangSwitcher() {
    const saved = localStorage.getItem('site-language') || 'ru';
    applyTranslations(saved);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            applyTranslations(btn.dataset.lang);
        });
    });
}


/* ---- Filter logic ---- */
function initFilters() {
    const pills = document.querySelectorAll('.cf-pill');
    const cards = document.querySelectorAll('.cg-card');
    const countEl = document.querySelector('.cases-count-num');

    function updateCount(visible) {
        if (countEl) countEl.textContent = String(visible).padStart(2, '0');
    }

    pills.forEach((pill) => {
        pill.addEventListener('click', () => {
            pills.forEach((p) => p.classList.remove('active'));
            pill.classList.add('active');

            const filter = pill.dataset.filter;
            let visible = 0;

            cards.forEach((card) => {
                const match = filter === 'all' || card.dataset.niche === filter;
                if (match) {
                    card.removeAttribute('hidden');
                    visible++;
                } else {
                    card.setAttribute('hidden', '');
                }
            });

            updateCount(visible);
        });
    });

    // Init count
    updateCount(cards.length);
}

/* ---- Scroll-reveal for hero elements ---- */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal-on-load');
    els.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${i * 0.1}s`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    });
}

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initLangSwitcher();
    initFilters();
    initScrollReveal();
});
if (document.readyState !== 'loading') { document.dispatchEvent(new Event('DOMContentLoaded')); }
