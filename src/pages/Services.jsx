import { useEffect, useRef, useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiLayout,
  FiLayers,
  FiMessageCircle,
  FiMessageSquare,
  FiSmartphone,
} from 'react-icons/fi';
import { getSiteLanguage, SITE_LANGUAGE_EVENT } from '../utils/siteLanguage';

const getTgLink = (lang) => {
  const msg = lang === 'en'
    ? 'Hello! I want to discuss a service from nexiumdev.tech.'
    : 'Здравствуйте! Хочу обсудить услугу с сайта nexiumdev.tech.';
  return `https://t.me/nexiumdm?text=${encodeURIComponent(msg)}`;
};

const getServiceTgLink = (service, lang) => {
  const title = lang === 'en' ? service.titleEn : service.titleRu;
  const msg = lang === 'en'
    ? `Hello! I want to order: ${title}. I came from nexiumdev.tech/services.`
    : `Здравствуйте! Хочу заказать услугу: ${title}. Перешел со страницы nexiumdev.tech/services.`;
  return `https://t.me/nexiumdm?text=${encodeURIComponent(msg)}`;
};

const services = [
  {
    key: 'site',
    icon: FiGlobe,
    number: '01',
    titleRu: 'Создание сайта',
    titleEn: 'Website development',
    leadRu: 'Сайт, который не просто выглядит дорого, а ведет клиента к заявке: оффер, доверие, скорость, понятный сценарий.',
    leadEn: 'A website that does more than look expensive: offer, trust, speed, and a clear path to conversion.',
    tagsRu: ['лендинг', 'каталог', 'корпоративный'],
    tagsEn: ['landing', 'catalog', 'corporate'],
    featuresRu: ['Структура и тексты под продажу', 'Адаптив под мобильный трафик', 'Формы, аналитика, TG-уведомления'],
    featuresEn: ['Sales-focused structure and copy', 'Responsive mobile-first layout', 'Forms, analytics, Telegram alerts'],
    metric: '+18%',
    metricLabelRu: 'к конверсии после редизайна',
    metricLabelEn: 'conversion lift after redesign',
  },
  {
    key: 'agent',
    icon: FiCpu,
    number: '02',
    titleRu: 'Создание ИИ-агента',
    titleEn: 'AI agent development',
    leadRu: 'Ассистент, который отвечает клиентам, квалифицирует заявки, собирает данные и передает менеджеру уже подготовленный диалог.',
    leadEn: 'An assistant that replies to clients, qualifies leads, collects details, and hands managers a prepared conversation.',
    tagsRu: ['24/7 ответы', 'квалификация', 'интеграции'],
    tagsEn: ['24/7 replies', 'qualification', 'integrations'],
    featuresRu: ['Сценарии под вашу нишу', 'Память, база знаний, тон бренда', 'Передача заявок в CRM или Telegram'],
    featuresEn: ['Flows tailored to your niche', 'Memory, knowledge base, brand tone', 'Lead handoff to CRM or Telegram'],
    metric: '24/7',
    metricLabelRu: 'первый ответ без ожидания',
    metricLabelEn: 'instant first response',
  },
  {
    key: 'bot',
    icon: FiMessageCircle,
    number: '03',
    titleRu: 'Создание TG-бота',
    titleEn: 'Telegram bot development',
    leadRu: 'Бот для заявок, заказов, записей и поддержки: быстрый вход, понятные кнопки, автоматизация без лишнего интерфейса.',
    leadEn: 'A bot for leads, orders, bookings, and support: fast entry, clear buttons, and automation without UI clutter.',
    tagsRu: ['заявки', 'заказы', 'поддержка'],
    tagsEn: ['leads', 'orders', 'support'],
    featuresRu: ['Каталог, корзина, формы и оплаты', 'Админ-уведомления и статусы', 'Интеграция с таблицами, CRM, API'],
    featuresEn: ['Catalog, cart, forms, payments', 'Admin alerts and order statuses', 'Sheets, CRM, and API integration'],
    metric: '1 клик',
    metricLabelRu: 'до действия клиента',
    metricLabelEn: 'to the client action',
  },
  {
    key: 'miniapp',
    icon: FiSmartphone,
    number: '04',
    titleRu: 'Создание TG Mini App',
    titleEn: 'Telegram Mini App',
    leadRu: 'Мини-приложение внутри Telegram для каталога, личного кабинета, отзывов или сложного сценария, где обычного бота уже мало.',
    leadEn: 'A Telegram-native mini app for a catalog, account area, feedback, or complex flow where a regular bot is not enough.',
    tagsRu: ['mini app', 'e-commerce', 'личный кабинет'],
    tagsEn: ['mini app', 'e-commerce', 'account area'],
    featuresRu: ['Нативный UX внутри Telegram', 'Карточки, фильтры, корзина, профили', 'Готовность к масштабированию'],
    featuresEn: ['Native Telegram UX', 'Cards, filters, cart, profiles', 'Scalable architecture and analytics'],
    metric: '40%',
    metricLabelRu: 'конверсия в отзыв',
    metricLabelEn: 'feedback conversion',
  },
  {
    key: 'maxbot',
    icon: FiMessageSquare,
    number: '05',
    titleRu: 'Бот в Max',
    titleEn: 'Max bot development',
    leadRu: 'Бот для мессенджера Max: автоответы, кнопки, сценарии продаж и поддержки — там, где сидит ваша аудитория.',
    leadEn: 'A Max messenger bot with auto-replies, buttons, and sales or support flows — where your audience actually is.',
    tagsRu: ['Max', 'автоответы', 'сценарии'],
    tagsEn: ['Max', 'auto-reply', 'flows'],
    featuresRu: ['Кнопки, меню, квалификация лидов', 'Уведомления администратору', 'Интеграция с CRM и таблицами'],
    featuresEn: ['Buttons, menus, lead qualification', 'Admin notifications', 'CRM and spreadsheet integration'],
    metric: '×3',
    metricLabelRu: 'скорость ответа vs ручной режим',
    metricLabelEn: 'faster than manual replies',
  },
  {
    key: 'maxmini',
    icon: FiLayout,
    number: '06',
    titleRu: 'Mini App в Max',
    titleEn: 'Max Mini App development',
    leadRu: 'Полноценное мини-приложение внутри Max: каталог, корзина, личный кабинет и аналитика — без отдельного сайта.',
    leadEn: 'A full-featured mini app inside Max: catalog, cart, account area, and analytics — no standalone website needed.',
    tagsRu: ['mini app', 'Max', 'e-commerce'],
    tagsEn: ['mini app', 'Max', 'e-commerce'],
    featuresRu: ['Нативный UI внутри Max', 'Каталог, фильтры, корзина, профиль', 'Оплата и аналитика из коробки'],
    featuresEn: ['Native Max UI', 'Catalog, filters, cart, profile', 'Built-in payments and analytics'],
    metric: '—',
    metricLabelRu: 'без внешнего сайта',
    metricLabelEn: 'no external site needed',
  },
];

const processSteps = [
  {
    step: '01',
    titleRu: 'Разбираем задачу',
    titleEn: 'Map the task',
    copyRu: 'Фиксируем цель, аудиторию, текущий поток заявок и узкие места. Без этого красивый интерфейс не решает бизнес-задачу.',
    copyEn: 'We define the goal, audience, current lead flow, and bottlenecks. Without this, a polished interface does not solve the business task.',
  },
  {
    step: '02',
    titleRu: 'Собираем прототип',
    titleEn: 'Build the prototype',
    copyRu: 'Показываем структуру, механику и ключевые экраны до финальной разработки, чтобы решение было понятно заранее.',
    copyEn: 'We show the structure, mechanics, and key screens before final development, so the solution is clear upfront.',
  },
  {
    step: '03',
    titleRu: 'Запускаем и подключаем',
    titleEn: 'Launch and connect',
    copyRu: 'Доводим до продакшена, подключаем аналитику, уведомления, CRM/API и передаем понятную инструкцию.',
    copyEn: 'We ship to production, connect analytics, notifications, CRM/API, and hand over clear operating instructions.',
  },
];

export default function Services() {
  const [lang, setLang] = useState(getSiteLanguage());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleLangChange = () => setLang(getSiteLanguage());
    window.addEventListener('storage', handleLangChange);
    window.addEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    return () => {
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener(SITE_LANGUAGE_EVENT, handleLangChange);
    };
  }, []);

  // IntersectionObserver для animate-on-scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.services-page .animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const t = (ruText, enText) => lang === 'en' ? enText : ruText;
  const tgLink = getTgLink(lang);

  return (
    <main className="app-view services-page">
      {/* ── Карточки услуг ── */}
      <section className="services-cards-section">
        <div className="container">
          <div className="services-section-head animate-on-scroll animate-fade">
            <div className="services-section-head-copy">
              <div className="cases-hero-eyebrow">{t('Направления', 'Directions')}</div>
              <h2>{t('6 услуг под разные точки роста', '6 services for different growth points')}</h2>
            </div>
            <p className="services-section-desc">
              {t(
                'Каждая карточка закрывает конкретный сценарий: привлечь, ответить, обработать или дать клиенту полноценный интерфейс внутри Telegram или Max.',
                'Each card covers a specific scenario: attract, reply, process, or give the client a complete interface inside Telegram or Max.'
              )}
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              const tags = lang === 'en' ? service.tagsEn : service.tagsRu;
              const features = lang === 'en' ? service.featuresEn : service.featuresRu;
              const serviceTgLink = getServiceTgLink(service, lang);

              return (
                <article
                  key={service.key}
                  className={`service-card service-card--${service.key} animate-on-scroll animate-slide`}
                  style={{ transitionDelay: `${0.05 + i * 0.07}s` }}
                >
                  <div className="service-card-watermark">{service.number}</div>

                  <div className="service-card-top">
                    <div className="service-card-icon">
                      <Icon />
                    </div>
                    <div className="service-card-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">{t(service.titleRu, service.titleEn)}</h3>
                    <p className="service-card-lead">{t(service.leadRu, service.leadEn)}</p>
                  </div>

                  <ul className="service-card-list">
                    {features.map((feature) => (
                      <li key={feature}>
                        <FiCheck className="service-card-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <div className="service-card-metric">
                      <span className="pain-consequence-dot"></span>
                      <strong>{service.metric}</strong>
                      <span>{t(service.metricLabelRu, service.metricLabelEn)}</span>
                    </div>
                    <a href={serviceTgLink} target="_blank" rel="noreferrer" className="cg-btn service-order-btn">
                      <span>{t('Заказать', 'Order')}</span>
                      <FiArrowRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Как мы работаем ── */}
      <section className="services-process-section">
        <div className="container services-process-grid">
          <div className="services-process-intro animate-on-scroll animate-fade">
            <div className="cases-hero-eyebrow">{t('Подход', 'Approach')}</div>
            <h2>{t('Дизайн, логика и запуск идут вместе', 'Design, logic, and launch move together')}</h2>
            <p>
              {t(
                'Сначала собираем систему принятия решения, потом интерфейс. Поэтому результат выглядит цельно и не рассыпается после первого реального клиента.',
                'We first build the decision system, then the interface. That is why the result feels coherent and does not fall apart after the first real client.'
              )}
            </p>
          </div>

          <div className="services-process-list">
            {processSteps.map((item, i) => (
              <article
                key={item.step}
                className="services-process-item animate-on-scroll animate-slide"
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                <span className="services-process-num">{item.step}</span>
                <div className="services-process-text">
                  <h3>{t(item.titleRu, item.titleEn)}</h3>
                  <p>{t(item.copyRu, item.copyEn)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-card animate-on-scroll animate-slide">
            <div className="services-cta-glow"></div>
            <div className="services-cta-mark">
              <FiLayers />
            </div>
            <div className="services-cta-body">
              <div className="cases-hero-eyebrow">{t('Следующий шаг', 'Next step')}</div>
              <h2>{t('Выберите направление, а архитектуру я соберу под вашу задачу', 'Pick a direction, and I will shape the architecture around your task')}</h2>
              <p>
                {t(
                  'Напишите в Telegram, чем занимается бизнес и какой поток нужно улучшить. В ответ предложу понятный формат решения: сайт, агент, бот, Mini App или их связку.',
                  'Message me on Telegram with your business and the flow you want to improve. I will suggest a clear solution format: website, agent, bot, Mini App, or a connected system.'
                )}
              </p>
            </div>
            <a href={tgLink} target="_blank" rel="noreferrer" className="btn services-cta-button">
              <span>{t('Написать в Telegram', 'Message on Telegram')}</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
