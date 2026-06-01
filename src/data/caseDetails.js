import crmLanding from '../cases_assets/crm/landing.png';
import moonLanding from '../cases_assets/moon/moonlanding.png';
import zayavkaLanding from '../cases_assets/zayavka/zayavka.png';
import chistoLanding from '../cases_assets/chisto/landing.png';
import porscheLanding from '../cases_assets/porsche/landing.png';
import sprayStoreLanding from '../cases_assets/spraystore/main_landing_spray.png';
import sprayStoreCatalog from '../cases_assets/spraystore/catalog_landing.png';
import sprayStoreRoulette from '../cases_assets/spraystore/roulette_page.png';
import arhDzagiLanding from '../cases_assets/arhdzagi/main_arh.png';
import arhDzagiBasket from '../cases_assets/arhdzagi/basket_arh.png';
import arhDzagiItem from '../cases_assets/arhdzagi/item_arh.png';

export const caseDetails = {
  crm: {
    slug: 'crm',
    image: crmLanding,
    imageAltRu: 'Главный экран CRM системы для малого бизнеса',
    imageAltEn: 'Main screen of the CRM system for small business',

    eyebrowRu: 'CRM система · Малый бизнес',
    eyebrowEn: 'CRM system · Small business',
    titleRu: 'CRM система для малого бизнеса',
    titleEn: 'CRM system for small business',
    subtitleRu: 'Клиентская база, воронка продаж и аналитика — в одном окне. Без таблиц, без хаоса, без потерянных заявок.',
    subtitleEn: 'Client base, sales pipeline and analytics — in one window. No spreadsheets, no chaos, no lost leads.',

    metricRu: '-13%',
    metricEn: '-13%',
    metricLabelRu: 'времени на работу с клиентской базой',
    metricLabelEn: 'time spent working with the client base',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Небольшой отдел продаж работал в Excel и мессенджерах. Менеджеры теряли задачи, не видели историю переговоров и не могли отследить на каком этапе находится каждая сделка. Собственник не видел картину целиком.',
    challengeEn: 'A small sales team was working in Excel and messengers. Managers lost tasks, had no view of negotiation history and could not track what stage each deal was at. The owner had no overall picture.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы разработали легковесную CRM под конкретный процесс команды: карточки клиентов, воронка сделок с настраиваемыми этапами, история переговоров и встроенный поиск. Интерфейс спроектирован так, чтобы менеджер тратил на внесение данных не более 2 минут после каждого контакта.',
    solutionEn: 'We developed a lightweight CRM tailored to the team\'s specific process: client cards, a deal pipeline with configurable stages, negotiation history, and built-in search. The interface is designed so that a manager spends no more than 2 minutes entering data after each contact.',

    tagsRu: ['CRM', 'Продажи', 'Малый бизнес', 'React'],
    tagsEn: ['CRM', 'Sales', 'Small business', 'React'],

    resultsRu: [
      { metric: '-13%', label: 'времени на клиентскую базу' },
      { metric: '2 мин', label: 'на внесение контакта' },
      { metric: '0', label: 'потерянных сделок после внедрения' },
    ],
    resultsEn: [
      { metric: '-13%', label: 'time on client base' },
      { metric: '2 min', label: 'to log a contact' },
      { metric: '0', label: 'lost deals after launch' },
    ],

    featuresRu: [
      { icon: '🗂', title: 'База клиентов', desc: 'Единый реестр с историей всех контактов и сделок. Никаких дублей.' },
      { icon: '🔄', title: 'Воронка продаж', desc: 'Настраиваемые этапы под ваш процесс. Статус сделки виден сразу.' },
      { icon: '🔍', title: 'Быстрый поиск', desc: 'Находим клиента по имени, телефону или тегу за секунду.' },
      { icon: '📊', title: 'Аналитика', desc: 'Конверсия по этапам, нагрузка на менеджеров и динамика продаж.' },
    ],
    featuresEn: [
      { icon: '🗂', title: 'Client base', desc: 'A unified registry with the full history of contacts and deals. No duplicates.' },
      { icon: '🔄', title: 'Sales pipeline', desc: 'Configurable stages for your process. Deal status is visible at a glance.' },
      { icon: '🔍', title: 'Quick search', desc: 'Find a client by name, phone, or tag in a second.' },
      { icon: '📊', title: 'Analytics', desc: 'Stage conversion, manager workload, and sales dynamics.' },
    ],
  },

  moon: {
    slug: 'moon',
    image: moonLanding,
    imageAltRu: 'Главный экран интернет-магазина цветов MoonStore',
    imageAltEn: 'Main screen of the MoonStore flower shop',

    eyebrowRu: 'Интернет-магазин · Цветы',
    eyebrowEn: 'Online store · Flowers',
    titleRu: 'Интернет-магазин MoonStore',
    titleEn: 'MoonStore online flower shop',
    subtitleRu: 'Красивый каталог, быстрый выбор и удобное оформление заказа. Больше продаж без лишнего звонка.',
    subtitleEn: 'A beautiful catalog, fast selection, and smooth checkout. More sales without an extra phone call.',

    metricRu: '+18%',
    metricEn: '+18%',
    metricLabelRu: 'конверсии в оформление заказа',
    metricLabelEn: 'checkout conversion',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Клиенты цветочного магазина заходили в Instagram, смотрели фото и... уходили. Чтобы заказать, нужно было писать в директ, ждать ответа и договариваться об оплате вручную. Половина потенциальных покупателей просто не возвращалась.',
    challengeEn: 'Flower shop clients would browse Instagram, look at photos, and leave. To order they had to DM the shop, wait for a reply, and arrange payment manually. Half of potential buyers simply never came back.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы создали полноценный интернет-магазин: каталог с фильтрацией по бюджету и поводу, карточки букетов с фотогалереей, корзина и онлайн-оплата. Дополнительно внедрили Telegram-бот для уведомлений о заказе — клиент видит статус без звонков.',
    solutionEn: 'We built a full e-commerce store: a catalog with filtering by budget and occasion, bouquet cards with photo gallery, cart, and online payment. We also integrated a Telegram bot for order notifications — the client sees the status without any calls.',

    tagsRu: ['E-commerce', 'Цветы', 'React', 'Telegram-бот'],
    tagsEn: ['E-commerce', 'Flowers', 'React', 'Telegram bot'],

    resultsRu: [
      { metric: '+18%', label: 'конверсия в заказ' },
      { metric: '-60%', label: 'время обработки заказа' },
      { metric: '24/7', label: 'магазин работает без администратора' },
    ],
    resultsEn: [
      { metric: '+18%', label: 'order conversion rate' },
      { metric: '-60%', label: 'order processing time' },
      { metric: '24/7', label: 'store works without admin' },
    ],

    featuresRu: [
      { icon: '💐', title: 'Каталог букетов', desc: 'Фильтрация по поводу, бюджету и составу. Клиент находит нужное быстро.' },
      { icon: '🛒', title: 'Корзина и оплата', desc: 'Онлайн-оплата без звонков и ожидания. Заказ оформляется за 3 шага.' },
      { icon: '📲', title: 'Telegram-уведомления', desc: 'Клиент получает статус заказа прямо в Telegram. Ноль тревожных звонков.' },
      { icon: '🖼', title: 'Фотогалерея', desc: 'Каждый букет — с несколькими фото и описанием состава.' },
    ],
    featuresEn: [
      { icon: '💐', title: 'Bouquet catalog', desc: 'Filter by occasion, budget, and composition. Clients find what they need fast.' },
      { icon: '🛒', title: 'Cart and payment', desc: 'Online payment without calls or waiting. Order placed in 3 steps.' },
      { icon: '📲', title: 'Telegram notifications', desc: 'Client gets order status right in Telegram. Zero anxious calls.' },
      { icon: '🖼', title: 'Photo gallery', desc: 'Each bouquet comes with multiple photos and composition details.' },
    ],
  },

  zayavka: {
    slug: 'zayavka',
    image: zayavkaLanding,
    imageAltRu: 'Главный экран платформы онлайн-записи ZayavkaScript',
    imageAltEn: 'Main screen of the ZayavkaScript online booking platform',

    eyebrowRu: 'Сайт услуг · Малый бизнес',
    eyebrowEn: 'Service site · Small business',
    titleRu: 'Платформа онлайн-записи ZayavkaScript',
    titleEn: 'ZayavkaScript online booking platform',
    subtitleRu: 'Адмнистратор создаёт услуги — клиенты записываются в Telegram. Ноль лишних звонков, ноль потерянных заявок.',
    subtitleEn: 'Admin creates services — clients book via Telegram. Zero unnecessary calls, zero lost bookings.',

    metricRu: '+45%',
    metricEn: '+45%',
    metricLabelRu: 'увеличение потока заявок через Telegram',
    metricLabelEn: 'increase in booking flow via Telegram',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Малый бизнес — мастера, репетиторы, консультанты — тратили часы на ответы в мессенджерах: «Когда вы свободны?», «А сколько стоит?», «Как записаться?». Каждая запись — это целая переписка. При этом половина клиентов просто не возвращалась, не дождавшись ответа.',
    challengeEn: 'Small businesses — craftsmen, tutors, consultants — spent hours answering messenger questions: "When are you free?", "How much does it cost?", "How do I book?". Every appointment was a conversation thread. Half of clients just never returned waiting for a reply.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы разработали платформу с двумя ролями. Администратор через удобную панель создаёт перечень услуг, указывает цены и доступное время. Клиент заходит на сайт, выбирает услугу и записывается — всё подтверждение и напоминания идут прямо в Telegram-бот. Интеграция настроена так, что сотруднику не нужно ничего делать вручную.',
    solutionEn: 'We built a two-role platform. The admin uses a convenient panel to create a service catalog, set prices and available time slots. The client visits the site, picks a service, and books — all confirmations and reminders go directly to a Telegram bot. The integration is configured so the staff member never has to do anything manually.',

    tagsRu: ['Telegram', 'Онлайн-запись', 'Малый бизнес', 'React', 'Node.js'],
    tagsEn: ['Telegram', 'Online booking', 'Small business', 'React', 'Node.js'],

    resultsRu: [
      { metric: '+45%', label: 'заявок через Telegram' },
      { metric: '0', label: 'ручных ответов на запись' },
      { metric: '3 мин', label: 'среднее время записи клиента' },
    ],
    resultsEn: [
      { metric: '+45%', label: 'bookings via Telegram' },
      { metric: '0', label: 'manual replies to booking requests' },
      { metric: '3 min', label: 'average client booking time' },
    ],

    featuresRu: [
      { icon: '⚙️', title: 'Панель администратора', desc: 'Добавляй, редактируй и архивируй услуги в пару кликов. Никакого кода.' },
      { icon: '📅', title: 'Онлайн-запись', desc: 'Клиент выбирает услугу, удобное время и мгновенно получает подтверждение.' },
      { icon: '🤖', title: 'Telegram-бот', desc: 'Автоматические уведомления о записи, напоминания за 2 часа и сбор отзывов.' },
      { icon: '📋', title: 'Журнал заявок', desc: 'Все записи в одном месте. Статусы, история и контакты клиентов.' },
    ],
    featuresEn: [
      { icon: '⚙️', title: 'Admin panel', desc: 'Add, edit, and archive services in a couple of clicks. No code needed.' },
      { icon: '📅', title: 'Online booking', desc: 'Client picks a service, a time slot, and instantly receives confirmation.' },
      { icon: '🤖', title: 'Telegram bot', desc: 'Automatic booking notifications, 2-hour reminders, and review collection.' },
      { icon: '📋', title: 'Booking journal', desc: 'All appointments in one place. Statuses, history, and client contacts.' },
    ],
  },

  chisto: {
    slug: 'chisto',
    image: chistoLanding,
    imageAltRu: 'Главный экран сайта для клининговой компании',
    imageAltEn: 'Main screen of the cleaning company website',

    eyebrowRu: 'Клининг · Услуги',
    eyebrowEn: 'Cleaning · Services',
    titleRu: 'Сайт для клининговой компании',
    titleEn: 'Website for a cleaning company',
    subtitleRu: 'Прозрачный расчет стоимости, удобная запись и больше доверия от клиентов. Никаких скрытых платежей.',
    subtitleEn: 'Transparent cost calculation, easy booking, and more trust from clients. No hidden fees.',

    metricRu: '+25%',
    metricEn: '+25%',
    metricLabelRu: 'конверсии в звонок',
    metricLabelEn: 'call conversion',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Клиенты не понимали, сколько будет стоить уборка их квартиры, и боялись оставлять заявку. Менеджеры тратили много времени на расчет стоимости по телефону.',
    challengeEn: 'Clients didn\'t understand how much cleaning their apartment would cost and were afraid to leave a request. Managers spent a lot of time calculating costs over the phone.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы разработали интерактивный калькулятор на сайте: клиент выбирает количество комнат, дополнительные услуги и сразу видит итоговую цену. Форма заказа интегрирована с CRM для быстрой обработки.',
    solutionEn: 'We developed an interactive calculator on the website: the client selects the number of rooms, additional services, and immediately sees the final price. The booking form is integrated with the CRM for fast processing.',

    tagsRu: ['Услуги', 'Клининг', 'Калькулятор', 'React'],
    tagsEn: ['Services', 'Cleaning', 'Calculator', 'React'],

    resultsRu: [
      { metric: '+25%', label: 'конверсия в заявку' },
      { metric: '-40%', label: 'время расчета стоимости' },
      { metric: '100%', label: 'автоматизация передачи в CRM' },
    ],
    resultsEn: [
      { metric: '+25%', label: 'booking conversion rate' },
      { metric: '-40%', label: 'time for cost calculation' },
      { metric: '100%', label: 'automation of CRM transfer' },
    ],

    featuresRu: [
      { icon: '🧮', title: 'Калькулятор стоимости', desc: 'Прозрачный расчет цены онлайн в зависимости от параметров.' },
      { icon: '📅', title: 'Онлайн-запись', desc: 'Удобный выбор даты и времени уборки прямо на сайте.' },
      { icon: '⭐️', title: 'Отзывы клиентов', desc: 'Блок с реальными отзывами для повышения доверия.' },
      { icon: '🔄', title: 'Интеграция с CRM', desc: 'Автоматическая передача заявок менеджерам.' },
    ],
    featuresEn: [
      { icon: '🧮', title: 'Cost calculator', desc: 'Transparent online price calculation based on parameters.' },
      { icon: '📅', title: 'Online booking', desc: 'Convenient selection of cleaning date and time right on the site.' },
      { icon: '⭐️', title: 'Client reviews', desc: 'A section with real reviews to increase trust.' },
      { icon: '🔄', title: 'CRM integration', desc: 'Automatic transfer of requests to managers.' },
    ],
  },

  spraystore: {
    slug: 'spraystore',
    image: sprayStoreLanding,
    imageAltRu: 'Главный экран Telegram Mini App SprayStore',
    imageAltEn: 'Main screen of the SprayStore Telegram Mini App',

    galleryRu: [
      {
        image: sprayStoreCatalog,
        alt: 'Экран каталога сервисных центров и внутренних разделов SprayStore',
        title: 'Дополнительный экран',
        caption: 'Каталог сервисных центров и внутренние утилиты для идей и проектов.',
      },
      {
        image: sprayStoreRoulette,
        alt: 'Экран бонусной рулетки в Telegram Mini App SprayStore',
        title: 'Экран рулетки',
        caption: 'Игровой сценарий с бонусом, который открывается после положительного отзыва.',
      },
    ],
    galleryEn: [
      {
        image: sprayStoreCatalog,
        alt: 'Catalog screen with service centers and internal sections in SprayStore',
        title: 'Additional screen',
        caption: 'A catalog of service centers and internal utilities for ideas and projects.',
      },
      {
        image: sprayStoreRoulette,
        alt: 'Bonus roulette screen in the SprayStore Telegram Mini App',
        title: 'Roulette screen',
        caption: 'A bonus-driven game flow that opens after a positive review.',
      },
    ],

    eyebrowRu: 'Telegram Mini App · Клиентский сервис',
    eyebrowEn: 'Telegram Mini App · Customer care',
    titleRu: 'SprayStore',
    titleEn: 'SprayStore',
    subtitleRu: 'Мини-приложение внутри Telegram, которое продолжает путь клиента уже после покупки и превращает отзыв в точку повторного касания.',
    subtitleEn: 'A Telegram Mini App that continues the client journey after purchase and turns feedback into a repeat-engagement touchpoint.',

    metricRu: '+22%',
    metricEn: '+22%',
    metricLabelRu: 'повторных касаний после покупки',
    metricLabelEn: 'post-purchase repeat engagement',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'После получения товара взаимодействие с клиентом обрывалось. Нужно было мягко вернуть покупателя в коммуникацию, собрать хорошие отзывы и дать полезный повод вернуться в бренд без навязчивых рассылок. Параллельно требовалось встроить полезные утилиты: каталог сервисных центров, а также разделы с идеями и проектами.',
    challengeEn: 'After delivery, interaction with the customer stopped. The team needed a soft way to bring buyers back into communication, collect positive reviews, and give them a useful reason to return to the brand without intrusive campaigns. At the same time, the app needed practical utilities: a catalog of service centers plus sections for ideas and projects.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы разработали Telegram Mini App, в который клиент попадает по QR-коду из заказа. Внутри можно оставить отзыв, и за положительную оценку пользователь получает бонус через механику рулетки. Дополнительно мини-приложение стало сервисной точкой входа: в нем собраны каталог сервисных центров и внутренние разделы, которые повышают полезность продукта уже после покупки.',
    solutionEn: 'We built a Telegram Mini App that opens through a QR code included in the order. Inside, the user can leave feedback and receive a bonus through a roulette mechanic after a positive review. In addition, the Mini App became a post-purchase service hub with a catalog of service centers and internal sections that increase product value after the sale.',

    tagsRu: ['Telegram Mini App', 'QR', 'Отзывы', 'Loyalty'],
    tagsEn: ['Telegram Mini App', 'QR', 'Reviews', 'Loyalty'],

    resultsRu: [
      { metric: '+22%', label: 'повторных касаний' },
      { metric: '+31%', label: 'положительных отзывов' },
      { metric: '1 QR', label: 'вход в сценарий после покупки' },
    ],
    resultsEn: [
      { metric: '+22%', label: 'repeat engagement' },
      { metric: '+31%', label: 'positive reviews' },
      { metric: '1 QR', label: 'entry into the post-purchase flow' },
    ],

    featuresRu: [
      { icon: '📦', title: 'QR в заказе', desc: 'Клиент попадает в мини-приложение сразу после покупки без ручного поиска ссылок.' },
      { icon: '🎰', title: 'Бонусная рулетка', desc: 'После хорошего отзыва запускается игровой сценарий с бонусом и мягким удержанием.' },
      { icon: '🛠', title: 'Каталог сервисных центров', desc: 'Полезный справочный раздел помогает быстро найти нужный сервис и не терять доверие.' },
      { icon: '💡', title: 'Идеи и проекты', desc: 'Внутренние утилиты расширяют ценность приложения и делают его полезным не на один визит.' },
    ],
    featuresEn: [
      { icon: '📦', title: 'QR inside the order', desc: 'The client enters the Mini App right after purchase without searching for links manually.' },
      { icon: '🎰', title: 'Bonus roulette', desc: 'After a positive review, a playful bonus flow starts and supports softer retention.' },
      { icon: '🛠', title: 'Service center catalog', desc: 'A practical reference section helps users quickly find the right service and preserve trust.' },
      { icon: '💡', title: 'Ideas and projects', desc: 'Internal utilities extend the app value and make it useful beyond a single visit.' },
    ],
  },

  porsche: {
    slug: 'porsche',
    image: porscheLanding,
    imageAltRu: 'Главный экран сайта детейлинг-центра',
    imageAltEn: 'Main screen of the detailing center website',

    eyebrowRu: 'Детейлинг · Премиум',
    eyebrowEn: 'Detailing · Premium',
    titleRu: 'Сайт премиального детейлинг-центра',
    titleEn: 'Premium detailing center website',
    subtitleRu: 'Стильный дизайн, передающий статус студии. Удобная запись на услуги оклейки и керамики.',
    subtitleEn: 'A stylish design that conveys the studio\'s status. Easy booking for wrapping and ceramics services.',

    metricRu: '+30%',
    metricEn: '+30%',
    metricLabelRu: 'записей на премиум-услуги',
    metricLabelEn: 'premium service bookings',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Студия детейлинга премиум-класса теряла клиентов из-за устаревшего сайта. Посетители не видели ценности услуг, а запись велась через долгие переписки в мессенджерах.',
    challengeEn: 'A premium detailing studio was losing clients due to an outdated website. Visitors didn\'t see the value of the services, and booking was done through long messenger chats.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы разработали современный сайт с темным премиальным дизайном, добавили подробное портфолио работ и внедрили удобный модуль онлайн-записи с интеграцией в CRM систему студии.',
    solutionEn: 'We developed a modern website with a dark premium design, added a detailed portfolio of works, and implemented an easy online booking module integrated with the studio\'s CRM system.',

    tagsRu: ['Авто', 'Детейлинг', 'React', 'Premium'],
    tagsEn: ['Auto', 'Detailing', 'React', 'Premium'],

    resultsRu: [
      { metric: '+30%', label: 'записей на услуги' },
      { metric: '-50%', label: 'время обработки заявки' },
      { metric: '100%', label: 'интеграция с CRM' },
    ],
    resultsEn: [
      { metric: '+30%', label: 'service bookings' },
      { metric: '-50%', label: 'booking processing time' },
      { metric: '100%', label: 'CRM integration' },
    ],

    featuresRu: [
      { icon: '✨', title: 'Премиум дизайн', desc: 'Стильный темный интерфейс, подчеркивающий статусность.' },
      { icon: '📸', title: 'Портфолио', desc: 'Галерея работ до/после для каждой услуги.' },
      { icon: '📅', title: 'Онлайн-запись', desc: 'Удобный выбор даты и времени визита.' },
      { icon: '🔄', title: 'Интеграция с CRM', desc: 'Автоматическая передача заявок менеджерам.' },
    ],
    featuresEn: [
      { icon: '✨', title: 'Premium design', desc: 'Stylish dark interface highlighting status.' },
      { icon: '📸', title: 'Portfolio', desc: 'Before/after work gallery for each service.' },
      { icon: '📅', title: 'Online booking', desc: 'Easy selection of visit date and time.' },
      { icon: '🔄', title: 'CRM integration', desc: 'Automatic transfer of requests to managers.' },
    ],
  },

  arhdzagi: {
    slug: 'arhdzagi',
    image: arhDzagiLanding,
    imageAltRu: 'Главный экран Telegram Mini App для вейп-шопа в Архангельске',
    imageAltEn: 'Main screen of the Telegram Mini App for a vape shop in Arkhangelsk',

    galleryRu: [
      {
        image: arhDzagiBasket,
        alt: 'Экран корзины в Telegram Mini App для вейп-шопа',
        title: 'Экран корзины',
        caption: 'Быстрое оформление заказа без выхода из Telegram и без лишних промежуточных шагов.',
      },
      {
        image: arhDzagiItem,
        alt: 'Экран карточки товара в Telegram Mini App для вейп-шопа',
        title: 'Страница товара',
        caption: 'Карточка товара с деталями, выбором позиции и прямым добавлением в корзину.',
      },
    ],
    galleryEn: [
      {
        image: arhDzagiBasket,
        alt: 'Cart screen inside the vape shop Telegram Mini App',
        title: 'Cart screen',
        caption: 'A fast checkout flow without leaving Telegram or adding unnecessary steps.',
      },
      {
        image: arhDzagiItem,
        alt: 'Product page screen inside the vape shop Telegram Mini App',
        title: 'Product page',
        caption: 'A product card with details, option selection, and direct add-to-cart flow.',
      },
    ],

    eyebrowRu: 'Telegram Mini App · Vape shop',
    eyebrowEn: 'Telegram Mini App · Vape shop',
    titleRu: 'Mini App для вейп-шопа в Архангельске',
    titleEn: 'Mini App for a vape shop in Arkhangelsk',
    subtitleRu: 'Витрина товаров, карточка позиции и корзина внутри Telegram. Быстрый путь к заказу для локального магазина без лишнего трения.',
    subtitleEn: 'A product storefront, item page, and cart inside Telegram. A fast order path for a local shop with less friction.',

    metricRu: '+19%',
    metricEn: '+19%',
    metricLabelRu: 'повторных заказов через Telegram',
    metricLabelEn: 'repeat orders through Telegram',

    challengeTitleRu: 'Задача',
    challengeTitleEn: 'Challenge',
    challengeRu: 'Локальному вейп-шопу в Архангельске нужен был быстрый мобильный сценарий заказа без отдельного приложения и без ухода пользователя в перегруженный сайт. Важно было показать ассортимент, упростить выбор товара и сократить путь до оформления заказа прямо внутри привычного Telegram.',
    challengeEn: 'A local vape shop in Arkhangelsk needed a fast mobile ordering flow without building a separate app and without sending users to an overloaded website. The goal was to show the assortment clearly, simplify product selection, and shorten the path to checkout right inside Telegram.',

    solutionTitleRu: 'Решение',
    solutionTitleEn: 'Solution',
    solutionRu: 'Мы собрали Telegram Mini App с основным каталогом, страницами товаров и встроенной корзиной. Пользователь может спокойно изучить позиции, открыть нужный товар, добавить его в корзину и перейти к оформлению без выпадения из Telegram-сценария. Это делает покупку быстрее и удобнее для повторных клиентов.',
    solutionEn: 'We built a Telegram Mini App with a main catalog, dedicated product pages, and a built-in cart. Users can browse products, open a specific item, add it to the cart, and move to checkout without dropping out of the Telegram flow. This makes purchasing faster and more convenient for repeat customers.',

    tagsRu: ['Telegram Mini App', 'Retail', 'E-commerce', 'Arkhangelsk'],
    tagsEn: ['Telegram Mini App', 'Retail', 'E-commerce', 'Arkhangelsk'],

    resultsRu: [
      { metric: '+19%', label: 'повторных заказов' },
      { metric: '-34%', label: 'шагов до оформления' },
      { metric: '1 чат', label: 'единая точка заказа' },
    ],
    resultsEn: [
      { metric: '+19%', label: 'repeat orders' },
      { metric: '-34%', label: 'steps to checkout' },
      { metric: '1 chat', label: 'single ordering touchpoint' },
    ],

    featuresRu: [
      { icon: '🛍', title: 'Каталог товаров', desc: 'Ассортимент удобно просматривается внутри Telegram без лишней навигации.' },
      { icon: '📄', title: 'Карточка товара', desc: 'Пользователь видит детали позиции и может быстро принять решение о покупке.' },
      { icon: '🧺', title: 'Корзина', desc: 'Товары собираются в заказ в одном месте, без скачков между окнами и ссылками.' },
      { icon: '⚡', title: 'Быстрый сценарий заказа', desc: 'Минимум трения на пути к покупке, особенно для повторных клиентов магазина.' },
    ],
    featuresEn: [
      { icon: '🛍', title: 'Product catalog', desc: 'The assortment is easy to browse inside Telegram without extra navigation.' },
      { icon: '📄', title: 'Product page', desc: 'Users see item details and can make a purchase decision quickly.' },
      { icon: '🧺', title: 'Cart', desc: 'Products are gathered in one order flow without jumping across windows or links.' },
      { icon: '⚡', title: 'Fast checkout path', desc: 'Minimal friction on the way to purchase, especially for returning customers.' },
    ],
  },
};
