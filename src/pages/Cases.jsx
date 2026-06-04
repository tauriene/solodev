import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { casesCatalog } from '../data/cases';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';

export default function Cases() {
  const [lang, setLang] = useState(getSiteLanguage());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.classList.add('cases-page');
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + 'cases.js';
    document.body.appendChild(script);

    const handleLangChange = () => {
      setLang(getSiteLanguage());
    };

    window.addEventListener('storage', handleLangChange);
    window.addEventListener(SITE_LANGUAGE_EVENT, handleLangChange);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      document.body.classList.remove('cases-page');
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    };
  }, []);

  const t = (ruText, enText) => lang === 'en' ? enText : ruText;

  return (
    <main className="app-view cases-page-main">
      <section className="cases-hero">
        <div className="cases-hero-eyebrow">{t('Портфолио', 'Portfolio')}</div>
        <h1 className="cases-hero-title">{t('Кейсы и результаты', 'Cases and Results')}</h1>
        <p className="cases-hero-sub">
          {t(
            'Первый кейс уже в портфолио: CRM для малого бизнеса с новой логикой подачи и детальной страницей проекта.',
            'The first case is already in the portfolio: a CRM for small business with a new presentation logic and a detailed project page.'
          )}
        </p>
      </section>

      <div className="cases-count-bar">
        <span className="cases-count-num">{String(casesCatalog.length).padStart(2, '0')}</span>
        <span className="cases-count-label">{t('карточек в портфолио', 'portfolio cards')}</span>
      </div>

      <section className="cg-wrap">
        <div className="cg-grid cg-grid--portfolio">
          {casesCatalog.map((caseItem, index) => (
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
                    animationDelay: `${index * 0.08}s`
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
                  {(lang === 'en' ? caseItem.tagsEn : caseItem.tagsRu).map((tag) => (
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="cases-cta">
        <div className="cases-cta-text">
          <h3 data-i18n="cases_cta_title">{t('Готовы обсудить ваш проект?', 'Ready to discuss your project?')}</h3>
          <p data-i18n="cases_cta_copy">{t('Проанализируем текущую ситуацию и подберем оптимальное решение.', 'We will analyze your current situation and find the optimal solution.')}</p>
        </div>
        <a href="https://t.me/nexiumdm" className="btn cta-button" target="_blank" rel="noreferrer">
          <span data-i18n="cases_cta_btn">{t('Написать в Telegram', 'Message on Telegram')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </main>
  );
}
