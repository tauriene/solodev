import crmContacts from '../new_case_assets/crm/contacts_page.png';
import crmShowcase from '../new_case_assets/crm/showcase_crm.png';
import crmVoronka from '../new_case_assets/crm/voronka_page.png';
import arhBasket from '../new_case_assets/arhdzagi/basket_arh.png';
import arhItem from '../new_case_assets/arhdzagi/item_arh.png';
import arhShowcase from '../new_case_assets/arh/arh_showcase.png';
import chistoContactForm from '../new_case_assets/chisto/contact_form.png';
import chistoLanding from '../new_case_assets/chisto/landing.png';
import chistoServices from '../new_case_assets/chisto/uslugi.png';
import moonstoreCart from '../new_case_assets/moonstore/cart_page.png';
import moonstoreLanding from '../new_case_assets/moonstore/moonlanding.png';
import moonstoreLikedFlowers from '../new_case_assets/moonstore/liked_flowers.png';
import porscheChooser from '../new_case_assets/porsche/choosing_car.png';
import porscheLanding from '../new_case_assets/porsche/landing.png';
import sprayCatalog from '../new_case_assets/spraystore/catalog_landing.png';
import sprayRoulette from '../new_case_assets/spraystore/roulette_page.png';
import sprayShowcase from '../new_case_assets/spraystore/spray_showcase.png';
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
  spraystore: {
    ru: {
      title: 'SprayStore для постпокупочного опыта',
      eyebrow: 'Telegram Mini App · удержание и лояльность',
      description:
        'Telegram Mini App для бренда, который остается с клиентом после покупки: отзыв с бонусом, рулетка, каталог сервисных центров и полезные разделы внутри одного сценария.',
      challenge:
        'После покупки бренд почти терял контакт с клиентом: отзыв просили вручную, бонусный сценарий не был встроен в продукт, а полезные разделы вроде сервисных центров и идей жили отдельно. Нужен был единый Mini App, который возвращает пользователя обратно в экосистему бренда и делает постпокупочный путь живым, а не формальным.',
      stats: [
        { value: '3 нед', label: 'Срок разработки', width: 30 },
        { value: '+22%', label: 'Повторные касания', width: 22 },
        { value: '1 flow', label: 'После покупки', width: 68 },
      ],
      role: 'Дизайн + разработка',
      duration: '3 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Каталог и полезные разделы',
          description:
            'Пользователь может не только вернуться за бонусом, но и быстро перейти к сервисным центрам, идеям и проектам внутри единого интерфейса.',
        },
        {
          title: 'Рулетка за отзыв',
          description:
            'После положительного отзыва клиент получает понятный игровой сценарий с бонусом, который делает вовлечение ощутимым и не выглядит как сухая механика.',
        },
      ],
      features: [
        {
          title: 'QR-сценарий после заказа',
          description: 'Путь в Mini App начинается прямо из заказа и не требует от клиента лишних поисков или ручных переходов.',
        },
        {
          title: 'Бонус за хороший отзыв',
          description: 'Система связывает отзыв и награду в единый понятный опыт, который мотивирует клиента вернуться в бренд.',
        },
        {
          title: 'Полезные утилиты внутри',
          description: 'Каталог сервисных центров, идеи и проекты превращают Mini App в рабочую точку контакта, а не в одноразовую акцию.',
        },
      ],
      tags: ['Telegram', 'Mini App', 'Loyalty', 'Retention'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: sprayShowcase,
        screen1: sprayCatalog,
        screen2: sprayRoulette,
        heroAlt: 'Промо-экран SprayStore',
        screen1Alt: 'Каталог и полезные разделы SprayStore',
        screen2Alt: 'Рулетка за отзыв в SprayStore',
      },
    },
    en: {
      title: 'SprayStore post-purchase app',
      eyebrow: 'Telegram Mini App · retention and loyalty',
      description:
        'A Telegram Mini App that stays with the customer after purchase: review reward flow, roulette bonus, service center catalog, and utility sections inside one post-purchase journey.',
      challenge:
        'After purchase, the brand was losing contact with the customer: reviews were requested manually, the reward mechanic was disconnected from the product experience, and useful sections like service centers and ideas lived elsewhere. The goal was to build a single Mini App that brings the user back into the brand ecosystem and makes the post-purchase journey feel active rather than formal.',
      stats: [
        { value: '3 wk', label: 'Build time', width: 30 },
        { value: '+22%', label: 'Repeat touchpoints', width: 22 },
        { value: '1 flow', label: 'After purchase', width: 68 },
      ],
      role: 'Design + development',
      duration: '3 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Catalog and utility sections',
          description:
            'The user can come back not only for a reward, but also for service centers, ideas, and projects inside one consistent interface.',
        },
        {
          title: 'Review reward roulette',
          description:
            'After a positive review, the customer gets a simple game-like reward flow that feels tangible and engaging instead of looking like a dry mechanic.',
        },
      ],
      features: [
        {
          title: 'QR journey after order',
          description: 'The path into the Mini App starts directly from the order and does not require extra searching or manual navigation.',
        },
        {
          title: 'Reward for positive feedback',
          description: 'The system connects the review and the reward into one clear experience that encourages the customer to return to the brand.',
        },
        {
          title: 'Utility sections inside',
          description: 'The service center catalog, ideas, and projects make the Mini App a useful brand touchpoint instead of a one-time campaign.',
        },
      ],
      tags: ['Telegram', 'Mini App', 'Loyalty', 'Retention'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: sprayShowcase,
        screen1: sprayCatalog,
        screen2: sprayRoulette,
        heroAlt: 'SprayStore showcase screen',
        screen1Alt: 'SprayStore catalog and utilities',
        screen2Alt: 'SprayStore review roulette',
      },
    },
  },
  chisto: {
    ru: {
      title: 'Chisto для клининговой компании',
      eyebrow: 'Сайт услуг · клининг',
      description:
        'Сайт для клининговой компании с понятной структурой услуг, акцентом на доверие и быстрым сценарием обращения без перегруженного интерфейса.',
      challenge:
        'Клининговой компании нужен был аккуратный и убедительный сайт, который быстро объясняет услуги, отвечает на базовые возражения и переводит посетителя к заявке без лишних экранов и длинного выбора.',
      stats: [
        { value: '2 нед', label: 'Срок разработки', width: 22 },
        { value: '+17%', label: 'Конверсия в заявку', width: 17 },
        { value: '3 экрана', label: 'До формы обращения', width: 58 },
      ],
      role: 'Дизайн + разработка',
      duration: '2 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Блок услуг',
          description:
            'Экран с услугами помогает быстро понять формат работ, сравнить направления и выбрать подходящий сценарий обращения без лишних уточнений.',
        },
        {
          title: 'Форма обращения',
          description:
            'Форма собрана так, чтобы клиент оставил заявку без трения: только нужные поля, понятный CTA и ощущение простого следующего шага.',
        },
      ],
      features: [
        {
          title: 'Понятная подача услуг',
          description: 'Структура сайта быстро объясняет, что именно делает компания и в каком формате можно заказать уборку.',
        },
        {
          title: 'Доверительный визуальный тон',
          description: 'Чистая композиция и спокойная подача усиливают ощущение аккуратного сервиса и надежности.',
        },
        {
          title: 'Короткий путь к заявке',
          description: 'Пользователь не теряется в длинной навигации и быстро доходит до формы обращения.',
        },
      ],
      tags: ['Landing page', 'Cleaning', 'Services', 'Leadgen'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: chistoLanding,
        screen1: chistoServices,
        screen2: chistoContactForm,
        heroAlt: 'Промо-экран Chisto',
        screen1Alt: 'Экран услуг Chisto',
        screen2Alt: 'Форма обращения Chisto',
      },
    },
    en: {
      title: 'Chisto cleaning company website',
      eyebrow: 'Service website · cleaning',
      description:
        'A service website for a cleaning company with a clear service structure, trust-building presentation, and a fast contact flow without interface overload.',
      challenge:
        'The cleaning company needed a polished and persuasive website that explains the services quickly, resolves basic objections, and moves visitors to a lead form without extra screens or long decision paths.',
      stats: [
        { value: '2 wk', label: 'Build time', width: 22 },
        { value: '+17%', label: 'Lead conversion', width: 17 },
        { value: '3 screens', label: 'To contact form', width: 58 },
      ],
      role: 'Design + development',
      duration: '2 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Services section',
          description:
            'The services screen helps users quickly understand the work format, compare offerings, and choose the right inquiry path without extra clarification.',
        },
        {
          title: 'Contact form',
          description:
            'The form is trimmed to the essentials, with a clear CTA and a low-friction next step that makes sending a request feel easy.',
        },
      ],
      features: [
        {
          title: 'Clear service presentation',
          description: 'The structure explains what the company does and how a visitor can book a cleaning service in just a few seconds.',
        },
        {
          title: 'Trust-oriented visual tone',
          description: 'A clean composition and restrained presentation reinforce the feeling of precision and reliability.',
        },
        {
          title: 'Short path to inquiry',
          description: 'The user is not forced through long navigation and reaches the contact form quickly.',
        },
      ],
      tags: ['Landing page', 'Cleaning', 'Services', 'Leadgen'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: chistoLanding,
        screen1: chistoServices,
        screen2: chistoContactForm,
        heroAlt: 'Chisto showcase screen',
        screen1Alt: 'Chisto services screen',
        screen2Alt: 'Chisto contact form',
      },
    },
  },
  porsche: {
    ru: {
      title: 'Porsche для детейлинг-центра',
      eyebrow: 'Сайт услуг · детейлинг',
      description:
        'Премиальный сайт для детейлинг-центра с акцентом на качество сервиса, выбор автомобиля и короткий путь к записи.',
      challenge:
        'Для детейлинг-центра нужен был сайт с более дорогим ощущением бренда: важно было подчеркнуть уровень сервиса, собрать интерес по направлениям и помочь клиенту быстро перейти к записи без перегруженного многоступенчатого сценария.',
      stats: [
        { value: '10 дн', label: 'Срок разработки', width: 18 },
        { value: '+14%', label: 'Запросы на услугу', width: 14 },
        { value: '1 выбор', label: 'До подбора сценария', width: 54 },
      ],
      role: 'Дизайн + разработка',
      duration: '10 дней',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Выбор автомобиля',
          description:
            'Экран помогает быстро выбрать автомобиль и перейти к релевантному сценарию услуги, не перегружая пользователя лишними действиями.',
        },
      ],
      features: [
        {
          title: 'Премиальная подача',
          description: 'Интерфейс поддерживает ощущение детейлинг-сервиса высокого уровня и работает на восприятие бренда.',
        },
        {
          title: 'Быстрый вход в услугу',
          description: 'Клиент сразу понимает, куда идти дальше, и не теряется между типами работ и длинными описаниями.',
        },
        {
          title: 'Фокус на записи',
          description: 'Сайт выстроен так, чтобы интерес к сервису быстро переходил в контакт и запись.',
        },
      ],
      tags: ['Landing page', 'Auto', 'Detailing', 'Premium'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: porscheLanding,
        screen1: porscheChooser,
        heroAlt: 'Промо-экран Porsche',
        screen1Alt: 'Экран выбора автомобиля Porsche',
      },
    },
    en: {
      title: 'Porsche detailing center website',
      eyebrow: 'Service website · detailing',
      description:
        'A premium website for a detailing center with an emphasis on service quality, car selection, and a short path to booking.',
      challenge:
        'The detailing center needed a website with a more premium brand feel. It had to highlight the service level, collect intent around key offerings, and help users move to booking without a heavy multi-step flow.',
      stats: [
        { value: '10 d', label: 'Build time', width: 18 },
        { value: '+14%', label: 'Service inquiries', width: 14 },
        { value: '1 choice', label: 'To service path', width: 54 },
      ],
      role: 'Design + development',
      duration: '10 days',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Car selection',
          description:
            'This screen helps users choose a car quickly and move into the relevant service path without unnecessary friction.',
        },
      ],
      features: [
        {
          title: 'Premium presentation',
          description: 'The interface supports a high-end detailing service feel and reinforces the brand perception.',
        },
        {
          title: 'Fast service entry',
          description: 'Clients understand where to go next immediately instead of getting lost between service categories and long descriptions.',
        },
        {
          title: 'Booking-focused flow',
          description: 'The website is structured so interest in the service quickly turns into contact and booking.',
        },
      ],
      tags: ['Landing page', 'Auto', 'Detailing', 'Premium'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: porscheLanding,
        screen1: porscheChooser,
        heroAlt: 'Porsche showcase screen',
        screen1Alt: 'Porsche car selection screen',
      },
    },
  },
  moonstore: {
    ru: {
      title: 'Moonstore для интернет-магазина цветов',
      eyebrow: 'Интернет-магазин · цветы',
      description:
        'Интернет-магазин цветов с мягкой визуальной подачей, понятной корзиной и сценариями выбора, которые помогают быстрее довести пользователя до заказа.',
      challenge:
        'Цветочному магазину нужен был аккуратный e-commerce сайт, где клиенту легко выбирать букеты, сохранять понравившиеся позиции и переходить к покупке без ощущения перегруженного каталога.',
      stats: [
        { value: '3 нед', label: 'Срок разработки', width: 26 },
        { value: '-16%', label: 'Время до заказа', width: 16 },
        { value: '2 касания', label: 'До оформления', width: 52 },
      ],
      role: 'Дизайн + разработка',
      duration: '3 недели',
      roleLabel: 'Роль',
      durationLabel: 'Срок',
      screensLabel: 'Скриншоты',
      screenCaptions: [
        {
          title: 'Корзина',
          description:
            'Корзина собрана без лишнего шума: пользователь видит состав заказа, стоимость и следующий шаг к оформлению в одном спокойном экране.',
        },
        {
          title: 'Избранные букеты',
          description:
            'Сценарий избранного помогает вернуться к понравившимся композициям и не терять выбор между повторными визитами.',
        },
      ],
      features: [
        {
          title: 'Витрина букетов',
          description: 'Первый экран задает настроение и сразу подводит пользователя к просмотру ассортимента.',
        },
        {
          title: 'Мягкий e-commerce сценарий',
          description: 'Путь к заказу выстроен деликатно и не перегружает пользователя лишними шагами.',
        },
        {
          title: 'Избранное и корзина',
          description: 'Клиент может отложить понравившиеся позиции и вернуться к покупке в удобный момент.',
        },
      ],
      tags: ['E-commerce', 'Flowers', 'Storefront', 'Retail'],
      backLabel: 'Все кейсы',
      challengeLabel: 'Задача',
      solutionLabel: 'Решение',
      images: {
        hero: moonstoreLanding,
        screen1: moonstoreCart,
        screen2: moonstoreLikedFlowers,
        heroAlt: 'Промо-экран Moonstore',
        screen1Alt: 'Корзина Moonstore',
        screen2Alt: 'Избранные букеты Moonstore',
      },
    },
    en: {
      title: 'Moonstore flower shop website',
      eyebrow: 'Online store · flowers',
      description:
        'An online flower store with a soft visual tone, a clear cart, and selection flows that help users reach checkout faster.',
      challenge:
        'The flower shop needed a polished e-commerce website where customers could browse bouquets easily, save favorite items, and move to purchase without the feeling of an overloaded catalog.',
      stats: [
        { value: '3 wk', label: 'Build time', width: 26 },
        { value: '-16%', label: 'Time to order', width: 16 },
        { value: '2 touches', label: 'To checkout', width: 52 },
      ],
      role: 'Design + development',
      duration: '3 weeks',
      roleLabel: 'Role',
      durationLabel: 'Duration',
      screensLabel: 'Screenshots',
      screenCaptions: [
        {
          title: 'Cart',
          description:
            'The cart is intentionally quiet: users see their order, the price, and the next checkout step on one calm screen.',
        },
        {
          title: 'Favorite bouquets',
          description:
            'The favorites flow helps people come back to liked arrangements instead of losing their selection between visits.',
        },
      ],
      features: [
        {
          title: 'Bouquet storefront',
          description: 'The opening screen sets the mood and guides users into the assortment immediately.',
        },
        {
          title: 'Soft e-commerce flow',
          description: 'The path to checkout is designed to feel lightweight and free of unnecessary friction.',
        },
        {
          title: 'Favorites and cart',
          description: 'Customers can save appealing items and come back to purchase them at the right moment.',
        },
      ],
      tags: ['E-commerce', 'Flowers', 'Storefront', 'Retail'],
      backLabel: 'All cases',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      images: {
        hero: moonstoreLanding,
        screen1: moonstoreCart,
        screen2: moonstoreLikedFlowers,
        heroAlt: 'Moonstore showcase screen',
        screen1Alt: 'Moonstore cart',
        screen2Alt: 'Moonstore favorite bouquets',
      },
    },
  },
};
