import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseDetails } from '../data/caseDetails';

export default function CasePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');

  const caseData = caseDetails[slug];

  useEffect(() => {
    if (!caseData) {
      navigate('/cases', { replace: true });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    // Load script.js for burger menu, lang switcher, etc.
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + 'script.js';
    document.body.appendChild(script);

    const handleLangChange = () => {
      setLang(localStorage.getItem('site-language') || 'ru');
    };
    window.addEventListener('storage', handleLangChange);
    window.addEventListener('languageChanged', handleLangChange);

    const observer = new MutationObserver(() => {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        if (!btn.dataset.langBound) {
          btn.dataset.langBound = 'true';
          btn.addEventListener('click', () => {
            setTimeout(() => {
              window.dispatchEvent(new Event('languageChanged'));
            }, 50);
          });
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener('languageChanged', handleLangChange);
      observer.disconnect();
    };
  }, [caseData, navigate]);

  if (!caseData) return null;

  const isRu = lang !== 'en';
  const t = (ru, en) => isRu ? ru : en;

  const results = isRu ? caseData.resultsRu : caseData.resultsEn;
  const features = isRu ? caseData.featuresRu : caseData.featuresEn;
  const tags = isRu ? caseData.tagsRu : caseData.tagsEn;
  const gallery = isRu ? caseData.galleryRu : caseData.galleryEn;

  return (
    <main className="cp-main">

      {/* ─── HERO ─── */}
      <section className="cp-hero">
        <div className="cp-hero-bg" style={{ backgroundImage: `url(${caseData.image})` }} aria-hidden="true" />
        <div className="cp-hero-overlay" aria-hidden="true" />
        <div className="cp-hero-content container">
          <Link to="/cases" className="cp-breadcrumb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t('Все кейсы', 'All cases')}
          </Link>
          <div className="cp-hero-eyebrow">{t(caseData.eyebrowRu, caseData.eyebrowEn)}</div>
          <h1 className="cp-hero-title">{t(caseData.titleRu, caseData.titleEn)}</h1>
          <p className="cp-hero-subtitle">{t(caseData.subtitleRu, caseData.subtitleEn)}</p>
          <div className="cp-hero-tags">
            {tags.map(tag => (
              <span key={tag} className="cp-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METRICS BAR ─── */}
      <div className="cp-metrics-bar">
        <div className="cp-metrics-inner">
          {results.map((r, i) => (
            <div key={i} className="cp-metric-item">
              <div className="cp-metric-value">{r.metric}</div>
              <div className="cp-metric-label">{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CHALLENGE + SOLUTION ─── */}
      <section className="cp-section">
        <div className="container cp-grid-2">
          <div className="cp-block">
            <div className="cp-block-eyebrow">
              {t(caseData.challengeTitleRu, caseData.challengeTitleEn)}
            </div>
            <p className="cp-block-text">{t(caseData.challengeRu, caseData.challengeEn)}</p>
          </div>
          <div className="cp-block">
            <div className="cp-block-eyebrow">
              {t(caseData.solutionTitleRu, caseData.solutionTitleEn)}
            </div>
            <p className="cp-block-text">{t(caseData.solutionRu, caseData.solutionEn)}</p>
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOT ─── */}
      <section className="cp-screenshot-section">
        <div className="container">
          <div className="cp-screenshot-wrap">
            <div className="cp-screenshot-glow" aria-hidden="true" />
            <img
              src={caseData.image}
              alt={t(caseData.imageAltRu, caseData.imageAltEn)}
              className="cp-screenshot"
            />
          </div>
        </div>
      </section>

      {gallery?.length ? (
        <section className="cp-section cp-gallery-section">
          <div className="container">
            <h2 className="cp-section-title">{t('Дополнительные экраны', 'Additional screens')}</h2>
            <div className="cp-gallery-grid">
              {gallery.map((screen, index) => (
                <div key={index} className="cp-gallery-card">
                  <div className="cp-gallery-image-wrap">
                    <img
                      src={screen.image}
                      alt={screen.alt}
                      className="cp-gallery-image"
                    />
                  </div>
                  <div className="cp-gallery-copy">
                    <h3 className="cp-gallery-title">{screen.title}</h3>
                    <p className="cp-gallery-caption">{screen.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ─── FEATURES ─── */}
      <section className="cp-section">
        <div className="container">
          <h2 className="cp-section-title">{t('Что внутри', "What's inside")}</h2>
          <div className="cp-features-grid">
            {features.map((f, i) => (
              <div key={i} className="cp-feature-card">
                <div className="cp-feature-icon">{f.icon}</div>
                <h3 className="cp-feature-title">{f.title}</h3>
                <p className="cp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cp-cta-section">
        <div className="cp-cta-glow" aria-hidden="true" />
        <div className="container cp-cta-content">
          <div className="cp-cta-badge">{t('Нексиум', 'Nexium')}</div>
          <h2 className="cp-cta-title">
            {t('Хотите такой же результат?', 'Want the same result?')}
          </h2>
          <p className="cp-cta-copy">
            {t(
              'Покажем демо-версию под вашу нишу до оплаты. Свяжитесь с нами в Telegram — ответим быстро.',
              'We will show a demo for your niche before payment. Reach us on Telegram — we respond fast.'
            )}
          </p>
          <div className="cp-cta-actions">
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              {t('Запросить демо', 'Request a demo')}
            </a>
            <Link to="/cases" className="cp-cta-back">
              {t('← Все кейсы', '← All cases')}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
