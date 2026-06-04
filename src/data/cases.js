import crmLanding from '../cases_assets/crm/landing.png';
import arhLanding from '../cases_assets/arhdzagi/main_arh.png';

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
  {
    slug: 'arhdzagi',
    layout: 'A1',
    slot: 'arh',
    categoryRu: 'Telegram Mini App · shop',
    categoryEn: 'Telegram Mini App · shop',
    titleRu: 'Приложение для шопа ArhDzagi',
    titleEn: 'ArhDzagi shop app',
    summaryRu: 'повторных заказов через Telegram',
    summaryEn: 'repeat orders through Telegram',
    detailsRu:
      'Что внутри: каталог товаров, корзина, карточка позиции и быстрый сценарий оформления заказа прямо внутри Telegram Mini App.',
    detailsEn:
      'Inside: a product catalog, cart, item page, and a fast checkout flow directly inside the Telegram Mini App.',
    tagsRu: ['Telegram', 'Mini App', 'Shop'],
    tagsEn: ['Telegram', 'Mini App', 'Shop'],
    metricRu: '+19%',
    metricEn: '+19%',
    image: arhLanding,
    imageAltRu: 'Главный экран приложения ArhDzagi для шопа',
    imageAltEn: 'Main screen of the ArhDzagi shop app',
  },
];

export const featuredCase = casesCatalog[0];
