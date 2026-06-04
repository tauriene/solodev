import crmContacts from '../new_case_assets/crm/contacts_page.png';
import crmShowcase from '../new_case_assets/crm/showcase_crm.png';
import crmVoronka from '../new_case_assets/crm/voronka_page.png';
import arhBasket from '../cases_assets/arhdzagi/basket_arh.png';
import arhItem from '../cases_assets/arhdzagi/item_arh.png';
import arhShowcase from '../new_case_assets/arh/arh_showcase.png';
import zayavkiLanding from '../new_case_assets/zayavki/zayavka_landing.png';
import zayavkiShowcase from '../new_case_assets/zayavki/zayavki_showcase.png';

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
          description:
            'Все этапы сделки собраны в одном экране: менеджер видит движение лидов, суммы по этапам и узкие места без переключения между разделами.',
        },
        {
          title: 'Контактная база',
          description:
            'Карточки клиентов, быстрый поиск и история взаимодействий помогают не терять контекст и возвращаться к каждому контакту без хаоса.',
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
          description:
            'Every deal stage lives on one screen, so managers can track lead movement, stage totals, and bottlenecks without jumping between views.',
        },
        {
          title: 'Contact base',
          description:
            'Client cards, fast search, and interaction history keep the full context visible and make every follow-up easier to manage.',
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
  arhdzagi: {
    ru: {
      title: 'Telegram Mini App для шопа ArhDzagi',
      eyebrow: 'Telegram Mini App · shop',
      description:
        'Мини-приложение для шопа внутри Telegram: каталог, корзина и быстрый сценарий оформления заказа без лишних переходов и перегруженных экранов.',
      challenge:
        'Клиенты терялись между каталогом, перепиской и уточнениями по наличию. Заказ приходилось собирать вручную в сообщениях, из-за чего часть покупателей не доходила до оплаты. Нужен был простой мобильный сценарий, где можно быстро выбрать товар и оформить заказ внутри Telegram.',
      stats: [
        { value: '2 нед', label: 'Срок разработки', width: 22 },
        { value: '+19%', label: 'Повторные заказы', width: 19 },
        { value: '3 шага', label: 'До оформления заказа', width: 60 },
      ],
      role: 'Дизайн + разработка',
      duration: '2 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Корзина',
          description:
            'Пользователь сразу видит выбранные позиции, сумму и следующий шаг, поэтому путь до оформления заказа не разваливается на лишние действия.',
        },
        {
          title: 'Карточка товара',
          description:
            'Экран товара помогает быстро посмотреть детали позиции, выбрать вариант и перейти к покупке без дополнительной переписки.',
        },
      ],
      features: [
        {
          title: 'Каталог внутри Telegram',
          description: 'Клиент открывает ассортимент прямо в мини-приложении без перехода на внешний сайт.',
        },
        {
          title: 'Быстрая корзина',
          description: 'Путь от выбора позиции до заказа сокращен до понятного мобильного сценария в пару шагов.',
        },
        {
          title: 'Карточки товаров',
          description: 'Каждая позиция содержит детали, варианты и понятное действие для добавления в корзину.',
        },
      ],
      tags: ['Telegram', 'Mini App', 'Retail', 'Shop'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: arhShowcase,
        screen1: arhBasket,
        screen2: arhItem,
        heroAlt: 'Промо-экран ArhDzagi',
        screen1Alt: 'Экран корзины ArhDzagi',
        screen2Alt: 'Карточка товара ArhDzagi',
      },
    },
    en: {
      title: 'Telegram Mini App for ArhDzagi shop',
      eyebrow: 'Telegram Mini App · shop',
      description:
        'A shop-focused Telegram Mini App with a catalog, cart, and a fast checkout flow that avoids extra transitions and overloaded screens.',
      challenge:
        'Customers got lost between the catalog, chat replies, and stock clarifications. Orders had to be assembled manually in messages, so part of the audience never reached payment. The goal was to create a simple mobile flow where users could choose products and place an order entirely inside Telegram.',
      stats: [
        { value: '2 wk', label: 'Build time', width: 22 },
        { value: '+19%', label: 'Repeat orders', width: 19 },
        { value: '3 steps', label: 'To checkout', width: 60 },
      ],
      role: 'Design + development',
      duration: '2 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Cart',
          description:
            'The user immediately sees selected items, totals, and the next action, so the path to checkout stays compact and focused.',
        },
        {
          title: 'Product page',
          description:
            'The product screen makes it easy to review item details, choose a variant, and move to purchase without extra chat back-and-forth.',
        },
      ],
      features: [
        {
          title: 'Catalog inside Telegram',
          description: 'The customer browses the assortment right inside the Mini App without going to an external website.',
        },
        {
          title: 'Fast cart flow',
          description: 'The path from choosing a product to placing an order is reduced to a simple mobile flow in just a few steps.',
        },
        {
          title: 'Product cards',
          description: 'Each item includes details, variants, and a clear add-to-cart action.', 
        },
      ],
      tags: ['Telegram', 'Mini App', 'Retail', 'Shop'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: arhShowcase,
        screen1: arhBasket,
        screen2: arhItem,
        heroAlt: 'ArhDzagi showcase screen',
        screen1Alt: 'ArhDzagi cart screen',
        screen2Alt: 'ArhDzagi product page',
      },
    },
  },
  zayavki: {
    ru: {
      title: 'Заявочная система для бизнеса',
      eyebrow: 'Заявочная система · автоматизация процессов',
      description:
        'Внутренняя система для сбора и обработки заявок: единая точка входа, понятные статусы, распределение по ответственным и быстрый контроль каждого обращения.',
      challenge:
        'До внедрения заявки приходили в разные каналы и фиксировались вручную: часть обращений терялась, статус по задаче приходилось уточнять в переписке, а руководитель не видел общей картины. Нужен был единый интерфейс, где заявка сразу создается, назначается и проходит по понятному сценарию обработки.',
      stats: [
        { value: '2.5 нед', label: 'Срок разработки', width: 28 },
        { value: '-21%', label: 'Время обработки', width: 21 },
        { value: '1 окно', label: 'Для всех заявок', width: 72 },
      ],
      role: 'Дизайн + разработка',
      duration: '2,5 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Главный сценарий обработки',
          description:
            'Оператор видит заявку, ее статус и следующий шаг в одном интерфейсе, поэтому обработка не распадается на чаты, таблицы и ручные напоминания.',
        },
        {
          title: 'Структура обращений',
          description:
            'Карточка заявки помогает быстро считать контекст, назначить ответственного и вернуть задачу в работу без лишних уточнений.',
        },
      ],
      features: [
        {
          title: 'Единая точка входа',
          description: 'Все новые обращения собираются в одну систему без ручного копирования из разных каналов.',
        },
        {
          title: 'Прозрачные статусы',
          description: 'На каждом этапе видно, кто отвечает за заявку и в каком она состоянии прямо сейчас.',
        },
        {
          title: 'Контроль для бизнеса',
          description: 'Руководитель быстрее видит загрузку команды, зависшие обращения и динамику обработки.',
        },
      ],
      tags: ['Автоматизация', 'Заявки', 'B2B', 'Процессы'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: zayavkiShowcase,
        screen1: zayavkiLanding,
        screen2: zayavkiShowcase,
        heroAlt: 'Промо-экран заявочной системы',
        screen1Alt: 'Основной экран заявочной системы',
        screen2Alt: 'Обзор интерфейса заявочной системы',
      },
    },
    en: {
      title: 'Business request system',
      eyebrow: 'Request system · process automation',
      description:
        'An internal system for collecting and processing requests: one entry point, clear statuses, owner assignment, and fast visibility into every incoming task.',
      challenge:
        'Before the launch, requests arrived through multiple channels and were tracked manually: some inquiries were lost, status updates had to be clarified in chats, and the manager had no unified overview. The goal was to build a single interface where every request is created, assigned, and moved through a clear processing flow.',
      stats: [
        { value: '2.5 wk', label: 'Build time', width: 28 },
        { value: '-21%', label: 'Processing time', width: 21 },
        { value: '1 view', label: 'For all requests', width: 72 },
      ],
      role: 'Design + development',
      duration: '2.5 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Main processing flow',
          description:
            'The operator sees the request, its status, and the next action in one interface, so the workflow no longer falls apart across chats, spreadsheets, and manual reminders.',
        },
        {
          title: 'Request structure',
          description:
            'The request card makes it easy to read context, assign an owner, and bring a task back into progress without extra back-and-forth.',
        },
      ],
      features: [
        {
          title: 'Single entry point',
          description: 'All incoming requests are collected in one system without manual copying from different channels.',
        },
        {
          title: 'Transparent statuses',
          description: 'At every stage, the team can see who owns the request and what state it is currently in.',
        },
        {
          title: 'Business oversight',
          description: 'Managers get faster visibility into team workload, stalled requests, and processing dynamics.',
        },
      ],
      tags: ['Automation', 'Requests', 'B2B', 'Operations'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: zayavkiShowcase,
        screen1: zayavkiLanding,
        screen2: zayavkiShowcase,
        heroAlt: 'Request system showcase screen',
        screen1Alt: 'Main request system screen',
        screen2Alt: 'Request system interface overview',
      },
    },
  },
};
