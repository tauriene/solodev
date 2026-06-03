import crmLanding from '../cases_assets/crm/landing.png';

export const casesCatalog = [
  {
    slug: 'crm',
    layout: 'A1',
    slot: 'crm',
    categoryRu: 'CRM система · малый бизнес',
    categoryEn: 'CRM system · small business',
    titleRu: 'CRM система для малого бизнеса',
    titleEn: 'CRM system for small business',
    summaryRu: 'времени на работу с клиентской базой',
    summaryEn: 'time spent working with the client base',
    detailsRu:
      'Что внутри: база клиентов, карточки контактов, воронка сделок, быстрый поиск и чистый интерфейс без лишнего шума.',
    detailsEn:
      'Inside: a client database, contact cards, a deal pipeline, quick search, and a clean interface without extra noise.',
    tagsRu: ['CRM', 'Продажи', 'Малый бизнес'],
    tagsEn: ['CRM', 'Sales', 'Small business'],
    metricRu: '-13%',
    metricEn: '-13%',
    image: crmLanding,
    imageAltRu: 'Главный экран CRM системы для малого бизнеса',
    imageAltEn: 'Main screen of the CRM system for small business',
  },
];

export const featuredCase = casesCatalog[0];
