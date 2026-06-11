import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { casesCatalog } from '../data/cases';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';

// ─── Фильтры ────────────────────────────────────────────────────────────────
const FILTERS = [
  { key: 'all',       labelRu: 'Все',                labelEn: 'All' },
  { key: 'ecommerce', labelRu: 'Интернет-магазины',  labelEn: 'E-commerce' },
  { key: 'landing',   labelRu: 'Лендинги',           labelEn: 'Landings' },
  { key: 'tma',       labelRu: 'TG Mini App',        labelEn: 'TG Mini App' },
];

// Только видимые кейсы (не hidden)
const visibleCases = casesCatalog.filter(c => !c.hidden);

// ─── Telegram ссылка с приветственным текстом ────────────────────────────────
const getTgLink = (lang) => {
  const msg = lang === 'en'
    ? 'Hello! I came across your website nexiumdev.tech and would like to discuss a project.'
    : 'Здравствуйте! Перешёл с сайта nexiumdev.tech — хотел бы обсудить разработку проекта.';
  return `https://t.me/nexiumdm?text=${encodeURIComponent(msg)}`;
};

// ─── Компонент ───────────────────────────────────────────────────────────────
export default function Cases() {
  const [lang, setLang] = useState(getSiteLanguage());
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayFilter, setDisplayFilter] = useState('all');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.classList.add('cases-page');
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + 'cases.js';
    document.body.appendChild(script);

    const handleLangChange = () => setLang(getSiteLanguage());
    window.addEventListener('storage', handleLangChange);
    window.addEventListener(SITE_LANGUAGE_EVENT, handleLangChange);

    return () => {
      if (script?.parentNode) script.parentNode.removeChild(script);
      document.body.classList.remove('cases-page');
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    };
  }, []);

  // Анимированное переключение фильтра
  const handleFilter = useCallback((key) => {
    if (key === activeFilter) return;
    setIsFading(true);
    setTimeout(() => {
      setDisplayFilter(key);
      setActiveFilter(key);
      setIsFading(false);
    }, 220);
  }, [activeFilter]);

  const t = (ruText, enText) => lang === 'en' ? enText : ruText;

  const filteredCases = displayFilter === 'all'
    ? visibleCases
    : visibleCases.filter(c => c.filterKey === displayFilter);

  const tgLink = getTgLink(lang);

  return (
    <main className="app-view cases-page-main">
      {/* ── Hero ── */}
      <section className="cases-hero">
        <div className="cases-hero-eyebrow">{t('Портфолио', 'Portfolio')}</div>
        <h1 className="cases-hero-title">{t('Кейсы и результаты', 'Cases and Results')}</h1>
        <p className="cases-hero-sub">
          {t(
            'В портфолио — рабочие кейсы по e-commerce, сервисным сайтам и Telegram Mini Apps с детальной подачей каждого проекта.',
            'The portfolio brings together working cases across e-commerce, service websites, and Telegram Mini Apps with a detailed breakdown of each project.'
          )}
        </p>
      </section>

      {/* ── Счётчик + Фильтры ── */}
      <div className="cases-count-bar">
        <span className="cases-count-num">
          {String(filteredCases.length).padStart(2, '0')}
        </span>
        <span className="cases-count-label">
          {t(
            displayFilter === 'all' ? 'карточек в портфолио' : 'кейсов в категории',
            displayFilter === 'all' ? 'portfolio cards' : 'cases in category'
          )}
        </span>
      </div>

      <div className="cases-filter-bar">
        <div className="cases-filter-inner">
          {FILTERS.map(f => {
            const count = f.key === 'all'
              ? visibleCases.length
              : visibleCases.filter(c => c.filterKey === f.key).length;
            return (
              <button
                key={f.key}
                className={`badge${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => handleFilter(f.key)}
                aria-pressed={activeFilter === f.key}
                type="button"
              >
                {t(f.labelRu, f.labelEn)}
                <span className="cases-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Сетка кейсов ── */}
      <section className="cg-wrap">
        <div
          className="cg-grid cg-grid--portfolio"
          style={{
            opacity: isFading ? 0 : 1,
            transform: isFading ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          {filteredCases.map((caseItem, index) => (
            <article
              key={caseItem.slug}
              className={`cg-card${caseItem.isPlaceholder ? ' cg-card-placeholder' : ''}`}
              data-layout={caseItem.layout}
              data-slot={caseItem.slot}
            >
              {caseItem.isPlaceholder ? (
                <div className="cg-bg cg-bg-placeholder" aria-hidden="true"></div>
              ) : (
                <div
                  className="cg-bg cg-bg-photo"
                  style={{
                    backgroundImage: `url(${caseItem.image})`,
                    animationDelay: `${index * 0.08}s`,
                  }}
                  aria-hidden="true"
                ></div>
              )}
              {caseItem.isPlaceholder && (
                <span className="cg-badge-new">{t('Скоро', 'Soon')}</span>
              )}
              <div className="cg-overlay"></div>
              <div className="cg-always">
                <div className="cg-niche">{t(caseItem.categoryRu, caseItem.categoryEn)}</div>
                <h3 className="cg-company">{t(caseItem.titleRu, caseItem.titleEn)}</h3>
                <div className="cg-metric">
                  {caseItem.isPlaceholder ? t('Скоро', 'Soon') : t(caseItem.metricRu, caseItem.metricEn)}
                </div>
                <div className="cg-metric-label">{t(caseItem.summaryRu, caseItem.summaryEn)}</div>
              </div>
              <div className="cg-hover">
                <div className="cg-tags">
                  {(lang === 'en' ? caseItem.tagsEn : caseItem.tagsRu).map(tag => (
                    <span key={tag} className="cg-tag">{tag}</span>
                  ))}
                </div>
                <p className="cg-task">{t(caseItem.detailsRu, caseItem.detailsEn)}</p>
                {caseItem.isPlaceholder ? (
                  <span className="cg-btn cg-btn-disabled">
                    <span>{t('Кейс скоро', 'Coming soon')}</span>
                  </span>
                ) : (
                  <Link to={`/cases/${caseItem.slug}`} className="cg-btn">
                    <span>{t('Открыть кейс', 'Open case')}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cases-cta">
        <div className="cases-cta-text">
          <h3>{t('Готовы обсудить ваш проект?', 'Ready to discuss your project?')}</h3>
          <p>{t('Проанализируем текущую ситуацию и подберем оптимальное решение.', 'We will analyze your current situation and find the optimal solution.')}</p>
        </div>
        <a href={tgLink} className="btn cta-button" target="_blank" rel="noreferrer">
          <span>{t('Написать в Telegram', 'Message on Telegram')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </main>
  );
}
