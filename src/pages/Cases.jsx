import { useEffect, useState } from 'react';
import { casesCatalog } from '../data/cases';

export default function Cases() {
  const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');

  useEffect(() => {
    document.body.classList.add('cases-page');
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + 'cases.js';
    document.body.appendChild(script);
    
    const handleLangChange = () => {
      setLang(localStorage.getItem('site-language') || 'ru');
    };
    window.addEventListener('storage', handleLangChange);
    window.addEventListener('languageChanged', handleLangChange);
    
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if(!btn.dataset.langBound) {
                btn.dataset.langBound = 'true';
                btn.addEventListener('click', () => {
                    setTimeout(() => {
                        window.dispatchEvent(new Event('languageChanged'));
                    }, 50);
                });
            }
        });
    });
    observer.observe(document.body, {childList: true, subtree: true});

    return () => {
      document.body.removeChild(script);
      document.body.classList.remove('cases-page');
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener('languageChanged', handleLangChange);
      observer.disconnect();
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
              'Начинаем наполнять портфолио реальными проектами. Сейчас уже добавили CRM систему для малого бизнеса и сайт интернет-магазина цветов.',
              'We are starting to populate the portfolio with real projects. So far we have added a CRM system for small business and a flower online store website.'
            )}
          </p>
      </section>

      <div className="cases-count-bar">
          <span className="cases-count-num">{String(casesCatalog.length).padStart(2, '0')}</span>
          <span className="cases-count-label">{t('карточек в портфолио', 'portfolio cards')}</span>
      </div>

      <section className="cg-wrap">
          <div className="cg-grid cg-grid--portfolio">
              {casesCatalog.map((caseItem) => (
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
                          style={{ backgroundImage: `url(${caseItem.image})` }}
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
                            <a href={caseItem.image} className="cg-btn" target="_blank" rel="noreferrer">
                                <span>{t('Открыть кейс', 'Open case')}</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
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
          <a href="https://t.me/your_telegram" className="btn cta-button" target="_blank" rel="noreferrer">
            <span data-i18n="cases_cta_btn">{t('Написать в Telegram', 'Message on Telegram')}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
      </div>
    </main>
  );
}
