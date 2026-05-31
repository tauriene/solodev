import crmLanding from '../cases_assets/crm/landing.png';
import moonLanding from '../cases_assets/moon/moonlanding.png';

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
    slug: 'moon',
    layout: 'A1',
    slot: 'moon',
    categoryRu: 'Интернет-магазин · цветы',
    categoryEn: 'Online store · flowers',
    titleRu: 'Сайт интернет-магазина цветов',
    titleEn: 'Flower online store website',
    summaryRu: 'конверсии в оформление заказа',
    summaryEn: 'checkout conversion',
    detailsRu:
      'Что внутри: каталог букетов, карточки товаров, быстрый выбор композиций, оформление заказа и аккуратная подача ассортимента.',
    detailsEn:
      'Inside: a bouquet catalog, product cards, quick composition selection, checkout, and a neat presentation of the assortment.',
    tagsRu: ['E-commerce', 'Цветы', 'Онлайн-магазин'],
    tagsEn: ['E-commerce', 'Flowers', 'Online store'],
    metricRu: '+18%',
    metricEn: '+18%',
    image: moonLanding,
    imageAltRu: 'Главный экран сайта интернет-магазина цветов',
    imageAltEn: 'Main screen of the flower online store website',
  },
  {
    slug: 'case-03',
    layout: 'A2',
    slot: 'side',
    isPlaceholder: true,
    categoryRu: 'Следующий кейс',
    categoryEn: 'Next case',
    titleRu: 'Заготовка под кейс',
    titleEn: 'Case placeholder',
    summaryRu: 'Еще одна карточка для будущего проекта в этом же визуальном ряду.',
    summaryEn: 'Another card reserved for a future project in the same visual row.',
    detailsRu:
      'Оставили место заранее, чтобы страница выглядела собранно уже сейчас и спокойно наполнялась реальными работами дальше.',
    detailsEn:
      'We left space in advance so the page already feels structured while we gradually add real work.',
    tagsRu: ['Скоро'],
    tagsEn: ['Soon'],
  },
  {
    slug: 'case-04',
    layout: 'B1',
    slot: 'bottom-left',
    isPlaceholder: true,
    categoryRu: 'Следующий кейс',
    categoryEn: 'Next case',
    titleRu: 'Будущий проект',
    titleEn: 'Upcoming project',
    summaryRu: 'Карточка под следующий опубликованный кейс без лишних выдуманных деталей.',
    summaryEn: 'A reserved card for the next published case without made-up details.',
    detailsRu:
      'Когда будут готовы контент и визуал, заменим эту заготовку на полноценный кейс в один шаг.',
    detailsEn:
      'Once the content and visuals are ready, we will replace this placeholder with a full case in one step.',
    tagsRu: ['Скоро'],
    tagsEn: ['Soon'],
  },
  {
    slug: 'case-05',
    layout: 'B2',
    slot: 'bottom-right',
    isPlaceholder: true,
    categoryRu: 'Следующий кейс',
    categoryEn: 'Next case',
    titleRu: 'Еще один слот',
    titleEn: 'Another reserved slot',
    summaryRu: 'Последняя заготовка для сохранения воздуха и правильного ритма в сетке.',
    summaryEn: 'The last placeholder keeps breathing room and the right rhythm in the grid.',
    detailsRu:
      'Так портфолио уже выглядит объемнее, а новые кейсы можно будет подключать по мере готовности без переделки секции.',
    detailsEn:
      'This makes the portfolio feel fuller now, and new cases can be added later without rebuilding the section.',
    tagsRu: ['Скоро'],
    tagsEn: ['Soon'],
  },
];

export const featuredCase = casesCatalog[0];
