/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function CaseImage({ src, alt, className, placeholder }) {
  if (!src) {
    return (
      <div className={className}>
        <div className="case-ref-placeholder">{placeholder}</div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} />;
}

export default function CaseStudyReference({
  title,
  eyebrow,
  description,
  stats = [],
  role,
  duration,
  roleLabel = 'Role',
  durationLabel = 'Duration',
  features = [],
  screenCaptions = [],
  tags = [],
  images = {},
  challenge,
  backHref = '/cases',
  backLabel = 'Портфолио',
  challengeLabel = 'Задача',
  solutionLabel = 'Решение',
}) {
  const metricsRef = useRef(null);

  useEffect(() => {
    const root = metricsRef.current;
    if (!root) return;

    const bars = Array.from(root.querySelectorAll('.case-ref-metric-bar'));
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = `${bar.dataset.width || 0}%`;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));

    return () => {
      observer.disconnect();
    };
  }, [stats]);

  return (
    <div className="case-ref">
      <section className="case-ref-hero">
        <div className="cp-hero-content container">
          <Link to={backHref} className="cp-breadcrumb">
            <FiArrowLeft size={14} />
            {backLabel}
          </Link>
          {eyebrow ? <div className="cp-hero-eyebrow">{eyebrow}</div> : null}
          <h1 className="cp-hero-title">{title}</h1>
          <p className="cp-hero-subtitle">{description}</p>
          {tags.length ? (
            <div className="cp-hero-tags">
              {tags.map((tag) => (
                <span key={tag} className="cp-tag">{tag}</span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="case-ref-hero-screen">
          <div className="container case-ref-hero-media">
            <div className="case-ref-frame case-ref-frame-hero case-ref-frame-natural">
              <CaseImage
                src={images.hero}
                alt={images.heroAlt || title}
                className="case-ref-image"
                placeholder="hero screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="cp-metrics-bar case-ref-metrics-bar">
        <div className="cp-metrics-inner" ref={metricsRef}>
          {stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="case-ref-metric-item">
              <div className="case-ref-metric-label">{stat.label}</div>
              <div className="case-ref-metric-bar-wrap">
                <div className="case-ref-metric-bar" data-width={stat.width ?? 0}></div>
              </div>
              <div className="case-ref-metric-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="case-ref-info-row">
        <div className="case-ref-info-cell">
          <div className="case-ref-info-label">{durationLabel}</div>
          <div className="case-ref-info-value">{duration}</div>
        </div>
        <div className="case-ref-info-cell">
          <div className="case-ref-info-label">{roleLabel}</div>
          <div className="case-ref-info-value">{role}</div>
        </div>
      </div>

      <div className="case-ref-split">
        <div className="case-ref-split-cell">
          <div className="case-ref-section-head">
            <span className="case-ref-section-num">01</span>
            <span className="case-ref-section-title">{challengeLabel}</span>
          </div>
          <p className="case-ref-prose">{challenge || description}</p>
        </div>
        <div className="case-ref-split-cell">
          <div className="case-ref-section-head">
            <span className="case-ref-section-num">02</span>
            <span className="case-ref-section-title">{solutionLabel}</span>
          </div>
          <div className="case-ref-feature-list">
            {features.map((feature, index) => (
              <div key={`${feature.title}-${index}`} className="case-ref-feature">
                <span className="case-ref-feature-num">—</span>
                <div className="case-ref-feature-copy">
                  <b>{feature.title}</b>
                  <span>{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-ref-bottom-screens">
        <div className="case-ref-full-screen case-ref-screen-block">
          {screenCaptions[0] ? (
            <div className="case-ref-screen-meta">
              <div className="case-ref-screen-meta-num">03</div>
              <div className="case-ref-screen-meta-copy">
                <b>{screenCaptions[0].title}</b>
                <span>{screenCaptions[0].description}</span>
              </div>
            </div>
          ) : null}
          <div className="case-ref-frame case-ref-frame-full case-ref-frame-natural">
            <CaseImage
              src={images.screen1}
              alt={images.screen1Alt || `${title} screen 1`}
              className="case-ref-image"
              placeholder="screen 1"
            />
          </div>
        </div>

        <div className="case-ref-full-screen case-ref-screen-block">
          {screenCaptions[1] ? (
            <div className="case-ref-screen-meta">
              <div className="case-ref-screen-meta-num">04</div>
              <div className="case-ref-screen-meta-copy">
                <b>{screenCaptions[1].title}</b>
                <span>{screenCaptions[1].description}</span>
              </div>
            </div>
          ) : null}
          <div className="case-ref-frame case-ref-frame-full case-ref-frame-natural">
            <CaseImage
              src={images.screen2}
              alt={images.screen2Alt || `${title} screen 2`}
              className="case-ref-image"
              placeholder="screen 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
