import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';

const solutions = [
  {
    key: 'auto',
    title: 'Nexium.Auto',
    labelRu: 'ИИ-приемщик для СТО',
    labelEn: 'AI Service Advisor for Auto Shops',
    subtitleRu: 'Автоматизация записи и обработки клиентов для автосервисов',
    subtitleEn: 'Booking and client intake automation for auto service shops',
    price: '14 000 ₽ / внедрение',
    subscriptionRu: '+ 3 999 ₽ / мес. поддержка',
    subscriptionEn: '+ 3,999 RUB / month support',
    featuresRu: [
      'Интеграция с Telegram',
      'Распознавание марок авто и типов ремонта',
      'Автоматический подбор слотов на подъемники',
      'Работа 24/7 без пропущенных'
    ],
    featuresEn: [
      'Telegram integration',
      'Car make and repair type recognition',
      'Automatic lift slot matching',
      '24/7 operation with no missed leads'
    ]
  },
  {
    key: 'beauty',
    title: 'Nexium.Beauty',
    labelRu: 'ИИ-администратор',
    labelEn: 'AI Front Desk',
    subtitleRu: 'Автоматическая запись и воронка для салонов красоты',
    subtitleEn: 'Automated booking and funnel for beauty salons',
    price: '12 000 ₽ / внедрение',
    subscriptionRu: '+ 3 999 ₽ / мес. поддержка',
    subscriptionEn: '+ 3,999 RUB / month support',
    featuresRu: [
      'Синхронизация с календарем мастера через панель управления',
      'Напоминания о записи за 2 часа (снижение неявок)',
      'Отработка возражений в чате',
      'Мягкий, вовлекающий Tone of Voice'
    ],
    featuresEn: [
      'Specialist calendar sync through the control panel',
      '2-hour reminders to reduce no-shows',
      'Objection handling in chat',
      'Soft, engaging tone of voice'
    ]
  },
  {
    key: 'soon',
    titleRu: 'Следующее готовое решение',
    titleEn: 'Next packaged solution',
    labelRu: 'Скоро',
    labelEn: 'Soon',
    subtitleRu: 'Третий слот оставили в каталоге, чтобы быстро добавить следующее решение без переделки страницы.',
    subtitleEn: 'The third slot stays in the catalog so the next packaged solution can be added without redesign.',
    featuresRu: [
      'Сохранена структура на 3 карточки',
      'Карточка готова под следующий продукт',
      'Можно заменить контент без изменений верстки',
      'Навигация и адаптив уже подключены'
    ],
    featuresEn: [
      'Three-card structure preserved',
      'This card is ready for the next product',
      'Content can be swapped without layout changes',
      'Navigation and responsive behavior are already wired'
    ],
    isPlaceholder: true
  }
];

export default function ReadySolutions() {
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
          {solutions.map((solution) => (
            <article
              key={solution.key}
              className={`card ready-solution-card${solution.isPlaceholder ? ' ready-solution-card--placeholder' : ''}`}
            >
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
                  <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="cg-btn ready-solution-secondary">
                    <span>{t('Обсудить третий слот', 'Discuss the third slot')}</span>
                    <FiArrowRight size={14} />
                  </a>
                ) : (
                  <>
                    <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="cg-btn ready-solution-secondary">
                      <span>{t('Тест-драйв бота', 'Bot test drive')}</span>
                      <FiArrowRight size={14} />
                    </a>
                    <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="btn ready-solution-primary">
                      <span>{t('Заказать решение', 'Order solution')}</span>
                    </a>
                  </>
                )}
              </div>
            </article>
          ))}
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
