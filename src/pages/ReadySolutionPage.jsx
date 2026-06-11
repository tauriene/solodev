import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';
import { readySolutionBySlug } from '../data/readySolutions';

export default function ReadySolutionPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState(getSiteLanguage());
  const solution = readySolutionBySlug[slug];

  useEffect(() => {
    if (!solution) {
      navigate('/ready-solutions', { replace: true });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    const scriptSrc = import.meta.env.BASE_URL + 'script.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      document.body.appendChild(script);
    }

    const handleLangChange = () => {
      setLang(getSiteLanguage());
    };

    window.addEventListener('storage', handleLangChange);
    window.addEventListener(SITE_LANGUAGE_EVENT, handleLangChange);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    };
  }, [navigate, solution]);

  if (!solution) return null;

  const content = lang === 'en' ? solution.en : solution.ru;

  return (
    <main className="lab-main">
      <section className="lab-hero">
        <div className="lab-hero-bg" style={{ backgroundImage: `url(${content.images.hero})` }} />
        <div className="lab-hero-overlay" />
        <div className="container lab-hero-inner">
          <Link to="/ready-solutions" className="cp-breadcrumb">
            <FiArrowLeft size={16} />
            <span>{content.backLabel}</span>
          </Link>
          <div className="lab-hero-copy">
            <div className="lab-status">{lang === 'en' ? 'Packaged solution' : 'Готовое решение'}</div>
            <div className="lab-eyebrow">{content.eyebrow}</div>
            <h1 className="lab-title">{solution.title}</h1>
            <p className="lab-subtitle">{content.description}</p>
            <div className="lab-tags">
              {content.tags.map((tag) => (
                <span key={tag} className="lab-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lab-summary">
        <div className="container lab-summary-grid">
          <div>
            <h2 className="lab-section-title">{content.summaryTitle}</h2>
            <p className="lab-summary-text">{content.summary}</p>
            <div className="lab-highlights">
              {content.highlights.map((item) => (
                <div key={`${item.value}-${item.label}`} className="lab-highlight">
                  <div className="lab-highlight-value">{item.value}</div>
                  <div className="lab-highlight-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lab-panel lab-panel-image">
            <div className="lab-panel-label">{solution.title}</div>
            <img className="lab-panel-shot" src={content.images.hero} alt={content.images.heroAlt} />
          </div>
        </div>
      </section>

      <section className="lab-section">
        <div className="container lab-grid-2">
          <div>
            <div className="lab-section-head">
              <h2 className="lab-section-title">{content.featuresTitle}</h2>
              <p className="lab-section-lead">{content.featuresLead}</p>
            </div>
            <ul className="lab-list">
              {content.features.map((feature) => (
                <li key={feature} className="lab-list-item">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="lab-panel lab-panel-image">
            <div className="lab-panel-label">{lang === 'en' ? 'Operations flow' : 'Сценарий работы'}</div>
            <img className="lab-panel-shot" src={content.images.detail} alt={content.images.detailAlt} />
          </div>
        </div>
      </section>

      <section className="lab-section">
        <div className="container">
          <div className="lab-section-head">
            <h2 className="lab-section-title">{content.modulesTitle}</h2>
          </div>
          <div className="lab-modules-grid">
            {content.modules.map((module) => (
              <article key={module.title} className="lab-module-card">
                <div className="lab-module-title">{module.title}</div>
                <div className="lab-module-text">{module.description}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lab-section lab-roadmap-section">
        <div className="container lab-grid-2">
          <div className="lab-roadmap-card">
            <div className="lab-section-head">
              <h2 className="lab-section-title">{content.roadmapTitle}</h2>
            </div>
            <ol className="lab-roadmap">
              {content.roadmap.map((step) => (
                <li key={step} className="lab-roadmap-item">{step}</li>
              ))}
            </ol>
          </div>
          <div className="lab-panel lab-panel-image">
            <div className="lab-panel-label">{lang === 'en' ? 'Visual overview' : 'Визуальный обзор'}</div>
            <img className="lab-panel-shot" src={content.images.hero} alt={content.images.heroAlt} />
          </div>
        </div>
      </section>

      <section className="cp-cta-section">
        <div className="cp-cta-glow" aria-hidden="true"></div>
        <div className="container cp-cta-content">
          <div className="cp-cta-badge">{solution.title}</div>
          <h2 className="cp-cta-title">{content.ctaTitle}</h2>
          <p className="cp-cta-copy">{content.ctaCopy}</p>
          <div className="cp-cta-actions">
            <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="btn">
              <span>{content.ctaPrimary}</span>
            </a>
            <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="cg-btn">
              <span>{content.ctaSecondary}</span>
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
