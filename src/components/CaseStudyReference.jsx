/* eslint-disable react/prop-types */
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
  features = [],
  tags = [],
  images = {},
  challenge,
  backHref = '/cases',
  backLabel = 'Портфолио',
  challengeLabel = 'Задача',
  solutionLabel = 'Решение',
}) {
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
        <div className="cp-metrics-inner">
          {stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="cp-metric-item">
              <div className="cp-metric-value">{stat.value}</div>
              <div className="cp-metric-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="case-ref-info-row">
        <div className="case-ref-info-cell">
          <div className="case-ref-info-label">Duration</div>
          <div className="case-ref-info-value">{duration}</div>
        </div>
        <div className="case-ref-info-cell">
          <div className="case-ref-info-label">Role</div>
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

      <div className="case-ref-screens-grid">
        <div className="case-ref-screen-cell">
          <div className="case-ref-frame case-ref-frame-screen case-ref-frame-natural">
            <CaseImage
              src={images.screen1}
              alt={images.screen1Alt || `${title} screen 1`}
              className="case-ref-image"
              placeholder="screen 1"
            />
          </div>
        </div>
        <div className="case-ref-screen-cell">
          <div className="case-ref-frame case-ref-frame-screen case-ref-frame-natural">
            <CaseImage
              src={images.screen2}
              alt={images.screen2Alt || `${title} screen 2`}
              className="case-ref-image"
              placeholder="screen 2"
            />
          </div>
        </div>
      </div>

      <div className="case-ref-full-screen">
        <div className="case-ref-frame case-ref-frame-full case-ref-frame-natural">
          <CaseImage
            src={images.fullwidth}
            alt={images.fullwidthAlt || `${title} fullwidth screen`}
            className="case-ref-image"
            placeholder="fullwidth screen"
          />
        </div>
      </div>
    </div>
  );
}
