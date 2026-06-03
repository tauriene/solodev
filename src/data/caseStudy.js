import crmContacts from '../new_case_assets/crm/contacts_page.png';
import crmShowcase from '../new_case_assets/crm/showcase_crm.png';
import crmVoronka from '../new_case_assets/crm/voronka_page.png';

export const caseStudyBySlug = {
  crm: {
    ru: {
      title: 'CRM для воронки продаж',
      eyebrow: 'CRM система · малый бизнес',
      description:
        'Легкая CRM для малого и среднего бизнеса: управление сделками, воронка продаж, аналитика и экспорт без лишнего шума и перегруженных сценариев.',
      challenge:
        'Клиент вел продажи в таблицах Excel: сделки терялись, аналитики не было, а работа команды зависела от ручного контроля. Нужна была простая CRM без лишних кнопок, которую менеджер сможет освоить за день.',
      stats: [
        { value: '3 нед', label: 'Срок разработки', width: 25 },
        { value: '+34%', label: 'Рост конверсии', width: 34 },
        { value: '2 000', label: 'Пользователей', width: 80 },
      ],
      role: 'Дизайн + разработка',
      duration: '3 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Воронка продаж',
          description: 'Все этапы сделки собраны в одном экране: менеджер видит движение лидов, суммы по этапам и узкие места без переключения между разделами.',
        },
        {
          title: 'Контактная база',
          description: 'Карточки клиентов, быстрый поиск и история взаимодействий помогают не терять контекст и возвращаться к каждому контакту без хаоса.',
        },
      ],
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
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: crmShowcase,
        screen1: crmVoronka,
        screen2: crmContacts,
        heroAlt: 'Промо-экран CRM',
        screen1Alt: 'Воронка продаж CRM',
        screen2Alt: 'Контакты CRM',
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
        { value: '3 wk', label: 'Build time', width: 25 },
        { value: '+34%', label: 'Conversion growth', width: 34 },
        { value: '2 000', label: 'Users', width: 80 },
      ],
      role: 'Design + development',
      duration: '3 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Sales pipeline',
          description: 'Every deal stage lives on one screen, so managers can track lead movement, stage totals, and bottlenecks without jumping between views.',
        },
        {
          title: 'Contact base',
          description: 'Client cards, fast search, and interaction history keep the full context visible and make every follow-up easier to manage.',
        },
      ],
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
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: crmShowcase,
        screen1: crmVoronka,
        screen2: crmContacts,
        heroAlt: 'CRM showcase screen',
        screen1Alt: 'CRM pipeline view',
        screen2Alt: 'CRM contacts view',
      },
    },
  },
};
