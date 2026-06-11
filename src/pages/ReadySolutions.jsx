import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';
import { readySolutionsCatalog } from '../data/readySolutions';

export default function ReadySolutions() {
  const navigate = useNavigate();
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

  const openSolution = (solution) => {
    if (!solution.slug) return;
    navigate(`/ready-solutions/${solution.slug}`);
  };

  return (
    <main className="app-view cases-page-main ready-solutions-page-main">
      <section className="cases-hero ready-solutions-hero">
        <div className="cases-hero-eyebrow">{t('Готовые решения', 'Ready Solutions')}</div>
        <h1 className="cases-hero-title">{t('Каталог готовых решений для бизнеса', 'Catalog of packaged solutions for business')}</h1>
        <p className="cases-hero-sub">
          {t(
            'Собрали продукты, которые можно внедрить без долгой кастомной разработки: с понятной стоимостью, структурой запуска и поддержкой после запуска.',
            'We packaged solutions that can be launched without a long custom build: with clear pricing, rollout structure, and post-launch support.'
          )}
        </p>
      </section>

      <section className="ready-solutions-wrap">
        <div className="ready-solutions-grid">
          {readySolutionsCatalog.map((solution) => {
            const isInteractive = Boolean(solution.slug);

            return (
              <article
                key={solution.slug || solution.key}
                className={`card ready-solution-card${solution.isPlaceholder ? ' ready-solution-card--placeholder' : ''}${isInteractive ? ' ready-solution-card--interactive' : ''}`}
                onClick={isInteractive ? () => openSolution(solution) : undefined}
                onKeyDown={isInteractive ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openSolution(solution);
                  }
                } : undefined}
                role={isInteractive ? 'link' : undefined}
                tabIndex={isInteractive ? 0 : undefined}
                aria-label={isInteractive ? t(`Открыть страницу решения ${solution.title}`, `Open ${solution.title} page`) : undefined}
              >
                {solution.cardImage ? (
                  <div className="ready-solution-media">
                    <img
                      src={solution.cardImage}
                      alt={lang === 'en' ? solution.cardImageAltEn : solution.cardImageAltRu}
                      className="ready-solution-media-image"
                    />
                    {isInteractive ? (
                      <div className="ready-solution-media-overlay">
                        <span>{t('Открыть решение', 'Open solution')}</span>
                        <FiArrowRight size={16} />
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className="ready-solution-head">
                  <span className="badge active ready-solution-badge">
                    {solution.isPlaceholder ? t('Каталог', 'Catalog') : t('Готовое решение', 'Packaged solution')}
                  </span>
                  <h2 className="ready-solution-title">{solution.title || t(solution.titleRu, solution.titleEn)}</h2>
                  <p className="ready-solution-label">{t(solution.labelRu, solution.labelEn)}</p>
                  <p className="ready-solution-subtitle">{t(solution.subtitleRu, solution.subtitleEn)}</p>
                </div>

                {solution.isPlaceholder ? (
                  <div className="ready-solution-pricing ready-solution-pricing--placeholder">
                    <div className="ready-solution-price">{t('Слот свободен', 'Open slot')}</div>
                    <div className="ready-solution-subscription">{t('Добавим третье решение после утверждения контента', 'We will add the third solution after the content is approved')}</div>
                  </div>
                ) : (
                  <div className="ready-solution-pricing">
                    <div className="ready-solution-price">{solution.price}</div>
                    <div className="ready-solution-subscription">{t(solution.subscriptionRu, solution.subscriptionEn)}</div>
                  </div>
                )}

                <ul className="ready-solution-features" aria-label={t('Список возможностей', 'Feature list')}>
                  {(lang === 'en' ? solution.featuresEn : solution.featuresRu).map((feature) => (
                    <li key={feature} className="ready-solution-feature">
                      <span className="ready-solution-check" aria-hidden="true">
                        <FiCheck size={14} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="ready-solution-actions">
                  {solution.isPlaceholder ? (
                    <a
                      href="https://t.me/nexiumdm"
                      target="_blank"
                      rel="noreferrer"
                      className="cg-btn ready-solution-secondary"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span>{t('Обсудить третий слот', 'Discuss the third slot')}</span>
                      <FiArrowRight size={14} />
                    </a>
                  ) : (
                    <>
                      <a
                        href={`https://t.me/nexiumdm`}
                        target="_blank"
                        rel="noreferrer"
                        className="cg-btn ready-solution-secondary"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <span>{t('Тест-драйв бота', 'Bot test drive')}</span>
                        <FiArrowRight size={14} />
                      </a>
                      <a
                        href={`https://t.me/nexiumdm`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn ready-solution-primary"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <span>{t('Заказать решение', 'Order solution')}</span>
                      </a>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="cases-cta">
        <div className="cases-cta-text">
          <h3>{t('Нужно адаптировать решение под вашу нишу?', 'Need to adapt a solution to your niche?')}</h3>
          <p>
            {t(
              'Покажем, какие сценарии можно взять готовыми, а где нужна точечная доработка под ваши процессы.',
              'We will show which scenarios can be taken off the shelf and where targeted customization is worth adding for your workflow.'
            )}
          </p>
        </div>
        <a href="https://t.me/nexiumdm" className="btn cta-button" target="_blank" rel="noreferrer">
          <span>{t('Написать в Telegram', 'Message on Telegram')}</span>
        </a>
      </div>
    </main>
  );
}
