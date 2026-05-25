import React, { useEffect, useState } from 'react';

const casesList = [
  {
    "layout": "A1",
    "niche": "auto",
    "nicheRu": "автосервис · казань",
    "nicheEn": "auto service · kazan",
    "company": "Мастер Плюс",
    "metric": "−92%",
    "metricLabelRu": "пропущенных заявок<br />40 заявок в месяц → 3",
    "metricLabelEn": "missed leads<br />40 leads per month → 3",
    "tagsRu": [
      "crm",
      "боты",
      "напоминания"
    ],
    "tagsEn": [
      "crm",
      "bots",
      "reminders"
    ],
    "taskRu": "<strong>Задача:</strong> Автоматизировать рутину и перестать терять клиентов, которые пишут в нерабочее время или когда администратор занят.",
    "taskEn": "<strong>Task:</strong> Automate routine and stop losing clients who message after hours or when the admin is busy.",
    "bgMetric": "−92%"
  },
  {
    "layout": "A2",
    "niche": "beauty",
    "nicheRu": "салон красоты · самара",
    "nicheEn": "beauty salon · samara",
    "company": "Облик",
    "metric": "−68%",
    "metricLabelRu": "отмен в день записи",
    "metricLabelEn": "same-day cancellations",
    "tagsRu": [
      "whatsapp-бот"
    ],
    "tagsEn": [
      "whatsapp bot"
    ],
    "taskRu": "<strong>Задача:</strong> Снизить процент отмен записей день в день с помощью WhatsApp-бота с напоминаниями.",
    "taskEn": "<strong>Task:</strong> Reduce same-day cancellation rate using a WhatsApp bot with reminders."
  },
  {
    "layout": "B1",
    "niche": "med",
    "nicheRu": "стоматология · пермь",
    "nicheEn": "dentistry · perm",
    "company": "Дентал",
    "metric": "−77%",
    "metricLabelRu": "ручной рутины",
    "metricLabelEn": "manual routine",
    "tagsRu": [
      "crm"
    ],
    "tagsEn": [
      "crm"
    ],
    "taskRu": "<strong>Задача:</strong> Внедрить единую CRM и авторазметку лидов.",
    "taskEn": "<strong>Task:</strong> Implement a unified CRM and auto-tagging of leads.",
    "isNew": true
  },
  {
    "layout": "B2",
    "niche": "fitness",
    "nicheRu": "фитнес · москва",
    "nicheEn": "fitness · moscow",
    "company": "FitLife Studio",
    "metric": "×3",
    "metricLabelRu": "онлайн-записей",
    "metricLabelEn": "online bookings",
    "tagsRu": [
      "лендинг"
    ],
    "tagsEn": [
      "landing page"
    ],
    "taskRu": "<strong>Задача:</strong> Запустить расписание с нуля в едином окне.",
    "taskEn": "<strong>Task:</strong> Launch a schedule from scratch in a single window."
  },
  {
    "layout": "B3",
    "niche": "online",
    "nicheRu": "онлайн-школа · спб",
    "nicheEn": "online school · spb",
    "company": "SkillUp",
    "metric": "+45%",
    "metricLabelRu": "конверсия в покупку",
    "metricLabelEn": "conversion to purchase",
    "tagsRu": [
      "автоворонка"
    ],
    "tagsEn": [
      "auto-funnel"
    ],
    "taskRu": "<strong>Задача:</strong> Настроить автоматическую воронку прогрева.",
    "taskEn": "<strong>Task:</strong> Set up an automated warm-up funnel."
  },
  {
    "layout": "C1",
    "niche": "food",
    "nicheRu": "доставка · екатеринбург",
    "nicheEn": "delivery · yekaterinburg",
    "company": "SushiMaster",
    "metric": "−30%",
    "metricLabelRu": "время на обработку заказа",
    "metricLabelEn": "order processing time",
    "tagsRu": [
      "telegram-бот"
    ],
    "tagsEn": [
      "telegram bot"
    ],
    "taskRu": "<strong>Задача:</strong> Разработать Telegram-бота для приема заказов напрямую в POS-систему.",
    "taskEn": "<strong>Task:</strong> Develop a Telegram bot to take orders directly into the POS system."
  },
  {
    "layout": "C2",
    "niche": "legal",
    "nicheRu": "юр. бюро · москва",
    "nicheEn": "legal bureau · moscow",
    "company": "Право и Порядок",
    "metric": "+120%",
    "metricLabelRu": "целевых лидов<br />с нового конверсионного лендинга",
    "metricLabelEn": "target leads<br />from a new conversion landing page",
    "tagsRu": [
      "сайты",
      "crm"
    ],
    "tagsEn": [
      "websites",
      "crm"
    ],
    "taskRu": "<strong>Задача:</strong> Увеличить количество обращений от целевых клиентов за счет создания сайта и внедрения CRM.",
    "taskEn": "<strong>Task:</strong> Increase inquiries from target clients by creating a website and implementing CRM.",
    "bgMetric": "+120%"
  },
  {
    "layout": "B1",
    "niche": "med",
    "nicheRu": "медцентр · екатеринбург",
    "nicheEn": "medical center · yekaterinburg",
    "company": "МЦ «Здоровье»",
    "metric": "−55%",
    "metricLabelRu": "нагрузки на ресепшн",
    "metricLabelEn": "reception workload",
    "tagsRu": [
      "crm",
      "telegram"
    ],
    "tagsEn": [
      "crm",
      "telegram"
    ],
    "taskRu": "<strong>Задача:</strong> Снять нагрузку с ресепшн и собрать обращения в CRM.",
    "taskEn": "<strong>Task:</strong> Relieve reception workload and collect inquiries in CRM."
  },
  {
    "layout": "B2",
    "niche": "beauty",
    "nicheRu": "барбершоп · казань",
    "nicheEn": "barbershop · kazan",
    "company": "BRUTAL",
    "metric": "80%",
    "metricLabelRu": "возвращаемость",
    "metricLabelEn": "retention rate",
    "tagsRu": [
      "напоминания"
    ],
    "tagsEn": [
      "reminders"
    ],
    "taskRu": "<strong>Задача:</strong> Увеличить LTV клиентов через систему автонапоминаний о повторном визите.",
    "taskEn": "<strong>Task:</strong> Increase client LTV through automated reminders for repeat visits.",
    "isNew": true
  },
  {
    "layout": "B3",
    "niche": "auto",
    "nicheRu": "детейлинг · спб",
    "nicheEn": "detailing · spb",
    "company": "ShinePro",
    "metric": "×2",
    "metricLabelRu": "средний чек",
    "metricLabelEn": "average check",
    "tagsRu": [
      "up-sell"
    ],
    "tagsEn": [
      "up-sell"
    ],
    "taskRu": "<strong>Задача:</strong> Настроить триггерные рассылки для продажи дополнительных услуг.",
    "taskEn": "<strong>Task:</strong> Set up trigger-based campaigns to upsell additional services."
  },
  {
    "layout": "A1",
    "niche": "online",
    "nicheRu": "онлайн-магазин · москва",
    "nicheEn": "online store · moscow",
    "company": "TrendStore",
    "metric": "30 часов",
    "metricLabelRu": "сэкономлено в неделю<br />благодаря ИИ-ассистенту",
    "metricLabelEn": "saved per week<br />thanks to AI assistant",
    "tagsRu": [
      "ИИ",
      "боты"
    ],
    "tagsEn": [
      "AI",
      "bots"
    ],
    "taskRu": "<strong>Задача:</strong> Заменить 2-х менеджеров поддержки на умного бота, способного отвечать на частые вопросы и собирать корзину.",
    "taskEn": "<strong>Task:</strong> Replace 2 support managers with a smart bot capable of answering FAQs and building carts.",
    "bgMetric": "30ч"
  },
  {
    "layout": "A2",
    "niche": "food",
    "nicheRu": "пекарня · сочи",
    "nicheEn": "bakery · sochi",
    "company": "Хлеб да Соль",
    "metric": "+40%",
    "metricLabelRu": "предзаказов",
    "metricLabelEn": "pre-orders",
    "tagsRu": [
      "сайт"
    ],
    "tagsEn": [
      "website"
    ],
    "taskRu": "<strong>Задача:</strong> Сделать удобный каталог для предзаказа выпечки на следующий день.",
    "taskEn": "<strong>Task:</strong> Create a convenient catalog for next-day pastry pre-orders."
  },
  {
    "layout": "B1",
    "niche": "fitness",
    "nicheRu": "йога-студия · новосибирск",
    "nicheEn": "yoga studio · novosibirsk",
    "company": "ZenSpace",
    "metric": "−15%",
    "metricLabelRu": "отток клиентов",
    "metricLabelEn": "client churn",
    "tagsRu": [
      "crm"
    ],
    "tagsEn": [
      "crm"
    ],
    "taskRu": "<strong>Задача:</strong> Настроить уведомления об окончании абонемента и автоматические скидки.",
    "taskEn": "<strong>Task:</strong> Set up notifications for expiring memberships and automated discounts."
  },
  {
    "layout": "B2",
    "niche": "legal",
    "nicheRu": "нотариус · москва",
    "nicheEn": "notary · moscow",
    "company": "Иванов и партнеры",
    "metric": "−50%",
    "metricLabelRu": "звонков-вопросов",
    "metricLabelEn": "inquiry calls",
    "tagsRu": [
      "telegram-бот"
    ],
    "tagsEn": [
      "telegram bot"
    ],
    "taskRu": "<strong>Задача:</strong> Сделать бота для предварительной записи и выдачи списка документов.",
    "taskEn": "<strong>Task:</strong> Create a bot for pre-booking and issuing document checklists."
  },
  {
    "layout": "B3",
    "niche": "auto",
    "nicheRu": "шиномонтаж · спб",
    "nicheEn": "tire service · spb",
    "company": "WheelGo",
    "metric": "100%",
    "metricLabelRu": "загрузка в сезон",
    "metricLabelEn": "utilization in season",
    "tagsRu": [
      "запись"
    ],
    "tagsEn": [
      "booking"
    ],
    "taskRu": "<strong>Задача:</strong> Сделать онлайн-запись на сезонную смену шин без участия оператора.",
    "taskEn": "<strong>Task:</strong> Implement online booking for seasonal tire changes without operator involvement.",
    "isNew": true
  }
];

export default function Cases() {
  const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');

  useEffect(() => {
    document.body.classList.add('cases-page');
    const script = document.createElement('script');
    script.src = '/cases.js';
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
          <div className="cases-hero-eyebrow reveal-on-load">{t('Портфолио', 'Portfolio')}</div>
          <h1 className="cases-hero-title reveal-on-load">{t('Кейсы и результаты', 'Cases and Results')}</h1>
          <p className="cases-hero-sub reveal-on-load">{t('Реальные бизнесы, реальные цифры. Считаем только измеримые изменения после внедрения.', 'Real businesses, real numbers. We only count measurable changes after implementation.')}</p>
      </section>

      <div className="cases-filters-wrap">
          <div className="cases-filters">
              <button className="cf-pill active" data-filter="all">{t('Все ниши', 'All Niches')}</button>
              <button className="cf-pill" data-filter="auto">{t('Автосервисы', 'Auto Services')}</button>
              <button className="cf-pill" data-filter="beauty">{t('Салоны красоты', 'Beauty Salons')}</button>
              <button className="cf-pill" data-filter="med">{t('Медицина', 'Medicine')}</button>
              <button className="cf-pill" data-filter="fitness">{t('Фитнес', 'Fitness')}</button>
              <button className="cf-pill" data-filter="online">{t('Онлайн-платформы', 'Online Platforms')}</button>
              <button className="cf-pill" data-filter="food">{t('Фудтех', 'FoodTech')}</button>
              <button className="cf-pill" data-filter="legal">{t('Юридические', 'Legal')}</button>
          </div>
      </div>

      <div className="cases-count-bar">
          <span className="cases-count-num">15</span>
          <span className="cases-count-label">{t('проектов', 'projects')}</span>
      </div>

      <section className="cg-wrap">
          <div className="cg-grid">
            {casesList.map((c, i) => (
              <article key={i} className="cg-card" data-layout={c.layout} data-niche={c.niche}>
                  {c.isNew && <div className="cg-badge-new">{t('Новый', 'New')}</div>}
                  <div className="cg-bg">{c.bgMetric && <div className="cg-bg-metric">{c.bgMetric}</div>}</div>
                  <div className="cg-overlay"></div>
                  <div className="cg-always">
                      <div className="cg-niche">{t(c.nicheRu, c.nicheEn)}</div>
                      <h3 className="cg-company">{c.company}</h3>
                      <div className="cg-metric">{c.metric}</div>
                      <div className="cg-metric-label" dangerouslySetInnerHTML={{__html: t(c.metricLabelRu, c.metricLabelEn)}}></div>
                  </div>
                  <div className="cg-hover">
                      <div className="cg-tags">
                          {(lang === 'en' ? c.tagsEn : c.tagsRu).map((tag, j) => (
                              <span key={j} className="cg-tag">{tag}</span>
                          ))}
                      </div>
                      <p className="cg-task" dangerouslySetInnerHTML={{__html: t(c.taskRu, c.taskEn)}}></p>
                      <a href="#" className="cg-btn">
                          <span>{t('Смотреть кейс', 'View Case')}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
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
          <a href="https://t.me/your_telegram" className="btn cta-button" target="_blank">
            <span data-i18n="cases_cta_btn">{t('Написать в Telegram', 'Message on Telegram')}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
      </div>
    </main>
  );
}
