import crmLanding from '../cases_assets/crm/landing.png';

export const caseLab = {
  ru: {
    title: 'CRM для воронки продаж',
    eyebrow: 'CRM система · малый бизнес',
    description:
      'Легкая CRM для малого и среднего бизнеса: управление сделками, воронка продаж, аналитика и экспорт без лишнего шума и перегруженных сценариев.',
    challenge:
      'Клиент вел продажи в таблицах Excel: сделки терялись, аналитики не было, а работа команды зависела от ручного контроля. Нужна была простая CRM без лишних кнопок, которую менеджер сможет освоить за день.',
    stats: [
      { value: '3', label: 'недели' },
      { value: '+34%', label: 'конверсия' },
      { value: '2к', label: 'пользователей' },
    ],
    role: 'Дизайн + разработка',
    duration: '3 недели',
    features: [
      {
        title: 'Дашборд с метриками',
        description: 'Воронка, выручка и конверсия считываются одним взглядом без дополнительных вкладок.',
      },
      {
        title: 'Этапы сделки',
        description: 'Перетаскивание карточек, сумма по каждому этапу и быстрый контроль состояния воронки.',
      },
      {
        title: 'База контактов',
        description: 'Поиск, фильтры и экспорт в CSV для менеджеров и собственника.',
      },
    ],
    tags: ['CRM', 'B2B', 'Аналитика', 'Продажи'],
    backLabel: 'Портфолио',
    challengeLabel: 'Задача',
    solutionLabel: 'Решение',
    images: {
      hero: crmLanding,
      screen1: crmLanding,
      screen2: crmLanding,
      fullwidth: crmLanding,
      heroAlt: 'Главный экран CRM',
      screen1Alt: 'Воронка продаж CRM',
      screen2Alt: 'Карточка сделки CRM',
      fullwidthAlt: 'Аналитика CRM',
    },
  },
  en: {
    title: 'Sales Pipeline CRM',
    eyebrow: 'CRM system · small business',
    description:
      'A lightweight CRM for small and medium businesses: deal management, sales pipeline, analytics, and export without visual clutter or overloaded workflows.',
    challenge:
      'The client managed sales in Excel spreadsheets: deals got lost, there was no analytics, and team performance depended on manual control. The goal was to create a simple CRM with no extra buttons that a manager could learn in a single day.',
    stats: [
      { value: '3', label: 'weeks' },
      { value: '+34%', label: 'conversion' },
      { value: '2k', label: 'users' },
    ],
    role: 'Design + development',
    duration: '3 weeks',
    features: [
      {
        title: 'Metrics dashboard',
        description: 'Pipeline, revenue, and conversion are readable at a glance without opening extra tabs.',
      },
      {
        title: 'Deal stages',
        description: 'Card drag-and-drop, totals for each stage, and quick visibility into pipeline health.',
      },
      {
        title: 'Contact base',
        description: 'Search, filters, and CSV export for both managers and the owner.',
      },
    ],
    tags: ['CRM', 'B2B', 'Analytics', 'Sales'],
    backLabel: 'Portfolio',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    images: {
      hero: crmLanding,
      screen1: crmLanding,
      screen2: crmLanding,
      fullwidth: crmLanding,
      heroAlt: 'CRM hero screen',
      screen1Alt: 'CRM pipeline view',
      screen2Alt: 'CRM deal card',
      fullwidthAlt: 'CRM analytics screen',
    },
  },
};
