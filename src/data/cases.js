import crmLanding from '../cases_assets/crm/landing.png';
import arhShowcase from '../new_case_assets/arh/arh_showcase.png';
import sprayShowcase from '../new_case_assets/spraystore/spray_showcase.png';
import zayavkiShowcase from '../new_case_assets/zayavki/zayavki_showcase.png';

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
    image: arhShowcase,
    imageAltRu: 'Главный экран приложения ArhDzagi для шопа',
    imageAltEn: 'Main screen of the ArhDzagi shop app',
  },
  {
    slug: 'zayavki',
    layout: 'A1',
    slot: 'zayavki',
    categoryRu: 'Заявочная система · бизнес',
    categoryEn: 'Request system · business',
    titleRu: 'Заявочная система для бизнеса',
    titleEn: 'Business request system',
    summaryRu: 'времени на обработку новых заявок',
    summaryEn: 'time spent processing new requests',
    detailsRu:
      'Что внутри: единая форма заявки, статусы обращений, распределение по ответственным и наглядный сценарий обработки без потери контекста.',
    detailsEn:
      'Inside: a unified request form, request statuses, assignment by owner, and a clear processing flow without losing context.',
    tagsRu: ['Автоматизация', 'Заявки', 'Бизнес'],
    tagsEn: ['Automation', 'Requests', 'Business'],
    metricRu: '-21%',
    metricEn: '-21%',
    image: zayavkiShowcase,
    imageAltRu: 'Главный экран заявочной системы для бизнеса',
    imageAltEn: 'Main screen of the business request system',
  },
  {
    slug: 'spraystore',
    layout: 'A1',
    slot: 'spraystore',
    categoryRu: 'Telegram Mini App · лояльность',
    categoryEn: 'Telegram Mini App · loyalty',
    titleRu: 'SprayStore для постпокупочного опыта',
    titleEn: 'SprayStore post-purchase app',
    summaryRu: 'повторных касаний после покупки',
    summaryEn: 'repeat touchpoints after purchase',
    detailsRu:
      'Что внутри: бонусная рулетка за отзыв, каталог сервисных центров, идеи и проекты, а также сценарий возврата клиента в бренд после оформления заказа.',
    detailsEn:
      'Inside: a bonus roulette for reviews, a service center catalog, ideas and projects, and a post-purchase flow that brings the customer back into the brand.',
    tagsRu: ['Telegram', 'Mini App', 'Retention'],
    tagsEn: ['Telegram', 'Mini App', 'Retention'],
    metricRu: '+22%',
    metricEn: '+22%',
    image: sprayShowcase,
    imageAltRu: 'Главный экран кейса SprayStore',
    imageAltEn: 'Main screen of the SprayStore case',
  },
];

export const featuredCase = casesCatalog[0];
