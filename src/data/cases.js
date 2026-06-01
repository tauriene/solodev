import crmLanding from '../cases_assets/crm/landing.png';
import moonLanding from '../cases_assets/moon/moonlanding.png';
import zayavkaLanding from '../cases_assets/zayavka/zayavka.png';
import chistoLanding from '../cases_assets/chisto/landing.png';
import porscheLanding from '../cases_assets/porsche/landing.png';

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
    slug: 'zayavka',
    layout: 'A2',
    slot: 'side',
    categoryRu: 'Сайт услуг · малый бизнес',
    categoryEn: 'Service site · small business',
    titleRu: 'Платформа для онлайн-записи',
    titleEn: 'Platform for online booking',
    summaryRu: 'увеличение потока заявок через Telegram',
    summaryEn: 'increase in booking flow via Telegram',
    detailsRu:
      'Что внутри: панель администратора для создания и управления услугами, удобный интерфейс для клиентов и бесшовная интеграция записи прямо в Telegram. Клиентам больше не нужно звонить — пара кликов и готово.',
    detailsEn:
      'Inside: an admin panel for creating and managing services, a user-friendly interface for clients, and seamless booking integration directly into Telegram. No more phone calls—just a couple of clicks and it is done.',
    tagsRu: ['Telegram', 'Онлайн-запись', 'Малый бизнес'],
    tagsEn: ['Telegram', 'Online booking', 'Small business'],
    metricRu: '+45%',
    metricEn: '+45%',
    image: zayavkaLanding,
    imageAltRu: 'Главный экран платформы для онлайн-записи через Telegram',
    imageAltEn: 'Main screen of the platform for online booking via Telegram',
  },
  {
    slug: 'chisto',
    layout: 'B1',
    slot: 'bottom-left',
    categoryRu: 'Клининг · услуги',
    categoryEn: 'Cleaning · services',
    titleRu: 'Сайт для клининговой компании',
    titleEn: 'Website for a cleaning company',
    summaryRu: 'увеличение конверсии в звонок',
    summaryEn: 'increase in call conversion',
    detailsRu:
      'Что внутри: калькулятор стоимости уборки, онлайн-заказ, отзывы клиентов и интеграция с CRM.',
    detailsEn:
      'Inside: a cleaning cost calculator, online booking, client reviews, and CRM integration.',
    tagsRu: ['Услуги', 'Клининг', 'Калькулятор'],
    tagsEn: ['Services', 'Cleaning', 'Calculator'],
    metricRu: '+25%',
    metricEn: '+25%',
    image: chistoLanding,
    imageAltRu: 'Главный экран сайта для клининговой компании',
    imageAltEn: 'Main screen of the cleaning company website',
  },
  {
    slug: 'porsche',
    layout: 'B2',
    slot: 'bottom-right',
    categoryRu: 'Детейлинг · премиум',
    categoryEn: 'Detailing · premium',
    titleRu: 'Сайт детейлинг-центра',
    titleEn: 'Detailing center website',
    summaryRu: 'увеличение записей на премиум-услуги',
    summaryEn: 'increase in premium service bookings',
    detailsRu:
      'Что внутри: стильный темный дизайн, портфолио работ, удобная онлайн-запись на оклейку и керамику, а также интеграция с CRM.',
    detailsEn:
      'Inside: stylish dark design, portfolio of works, easy online booking for wrapping and ceramics, and CRM integration.',
    tagsRu: ['Авто', 'Детейлинг', 'Премиум'],
    tagsEn: ['Auto', 'Detailing', 'Premium'],
    metricRu: '+30%',
    metricEn: '+30%',
    image: porscheLanding,
    imageAltRu: 'Главный экран сайта детейлинг-центра',
    imageAltEn: 'Main screen of the detailing center website',
  },
];

export const featuredCase = casesCatalog[0];
