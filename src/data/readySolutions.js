import autoShowcase from '../ready_solution_assets/auto-showcase.svg';
import autoOperations from '../ready_solution_assets/auto-operations.svg';
import beautyShowcase from '../ready_solution_assets/beauty-showcase.svg';
import beautyOperations from '../ready_solution_assets/beauty-operations.svg';

export const readySolutionsCatalog = [
  {
    slug: 'auto',
    title: 'Nexium.Auto',
    labelRu: 'ИИ-приемщик для СТО',
    labelEn: 'AI Service Advisor for Auto Shops',
    subtitleRu: 'Автоматизация записи и обработки клиентов для автосервисов',
    subtitleEn: 'Booking and client intake automation for auto service shops',
    price: '14 000 ₽ / внедрение',
    subscriptionRu: '+ 3 999 ₽ / мес. поддержка',
    subscriptionEn: '+ 3,999 RUB / month support',
    featuresRu: [
      'Интеграция с Telegram',
      'Распознавание марок авто и типов ремонта',
      'Автоматический подбор слотов на подъемники',
      'Работа 24/7 без пропущенных'
    ],
    featuresEn: [
      'Telegram integration',
      'Car make and repair type recognition',
      'Automatic lift slot matching',
      '24/7 operation with no missed leads'
    ],
    cardImage: autoShowcase,
    cardImageAltRu: 'Превью решения Nexium.Auto',
    cardImageAltEn: 'Nexium.Auto solution preview',
    ru: {
      eyebrow: 'Автосервисы · готовое AI-решение',
      description:
        'Готовый AI-приемщик для СТО берет первичный диалог на себя: отвечает в Telegram, собирает данные по машине и проблеме, предлагает свободные окна и передает запись в работу без потерь и очередей.',
      tags: ['СТО', 'Telegram', 'Онлайн-запись', '24/7'],
      summaryTitle: 'Что получает автосервис',
      summary:
        'Nexium.Auto нужен там, где клиент пишет в нерабочее время, а мастер-приемщик не успевает держать все диалоги под контролем. Решение закрывает первый контакт, квалифицирует запрос и превращает переписку в подтвержденную запись.',
      highlights: [
        { value: '14 000 ₽', label: 'Внедрение под ключ' },
        { value: '3 999 ₽', label: 'Поддержка в месяц' },
        { value: '24/7', label: 'Принимает обращения' }
      ],
      featuresTitle: 'Что делает система каждый день',
      featuresLead:
        'Основной сценарий собран вокруг самого частого процесса в СТО: принять обращение, понять задачу, предложить слот и не потерять клиента между сообщениями.',
      features: [
        'Отвечает сразу, даже если клиент написал ночью или в пиковую загрузку сервиса.',
        'Уточняет марку авто, тип работ и желаемое время визита без ручной переписки.',
        'Подбирает ближайшие свободные слоты на подъемники и показывает только реальные окна.',
        'Формирует чистую запись для администратора или мастера-приемщика.',
        'Снижает количество пропущенных и забытых обращений до предсказуемого минимума.'
      ],
      modulesTitle: 'Что входит в пакет',
      modules: [
        {
          title: 'Telegram-воронка',
          description: 'Готовый сценарий первого ответа, квалификации запроса и перевода клиента к записи.'
        },
        {
          title: 'Логика записи',
          description: 'Привязка к рабочим слотам, подъемникам и правилам обработки разных типов ремонта.'
        },
        {
          title: 'Карточка обращения',
          description: 'Все данные о клиенте и автомобиле собираются в одном месте без ручного копирования.'
        },
        {
          title: 'Поддержка после запуска',
          description: 'Доработки сценариев, правки логики и контроль стабильной работы по подписке.'
        }
      ],
      roadmapTitle: 'Как проходит запуск',
      roadmap: [
        'Собираем ваш текущий процесс записи: каналы, типы работ, правила распределения по слотам.',
        'Настраиваем диалог, структуру данных и логику подбора времени под вашу реальную загрузку.',
        'Показываем тестовый сценарий и прогоняем его на типовых обращениях сервиса.',
        'Запускаем в рабочий контур и сопровождаем первые недели до стабильного режима.'
      ],
      ctaTitle: 'Нужен AI-приемщик для вашего СТО?',
      ctaCopy:
        'Покажем, как Nexium.Auto будет отвечать именно на ваши типовые обращения и подбирать запись под вашу зону сервиса.',
      backLabel: 'Назад к готовым решениям',
      ctaPrimary: 'Заказать решение',
      ctaSecondary: 'Тест-драйв бота',
      images: {
        hero: autoShowcase,
        detail: autoOperations,
        heroAlt: 'Визуал решения Nexium.Auto',
        detailAlt: 'Панель сценариев Nexium.Auto'
      }
    },
    en: {
      eyebrow: 'Auto services · packaged AI solution',
      description:
        'A packaged AI service advisor for auto shops that takes the first conversation: replies in Telegram, collects vehicle and issue details, offers real openings, and passes confirmed bookings into operations without lead loss.',
      tags: ['Auto Service', 'Telegram', 'Online Booking', '24/7'],
      summaryTitle: 'What the shop gets',
      summary:
        'Nexium.Auto is designed for shops where clients message after hours and service advisors cannot keep every dialog under control. The system closes the first contact, qualifies the request, and turns chat into a confirmed booking.',
      highlights: [
        { value: '14,000 RUB', label: 'One-time setup' },
        { value: '3,999 RUB', label: 'Monthly support' },
        { value: '24/7', label: 'Lead intake coverage' }
      ],
      featuresTitle: 'What the system handles daily',
      featuresLead:
        'The core flow is built around the most common shop process: receive the inquiry, understand the job, offer a slot, and keep the client from slipping out between messages.',
      features: [
        'Replies instantly even when the client writes at night or during peak service load.',
        'Clarifies vehicle make, job type, and desired visit time without manual back-and-forth.',
        'Matches the nearest available lift slots and shows only real openings.',
        'Creates a clean booking handoff for the admin or service advisor.',
        'Reduces missed and forgotten inquiries to a predictable minimum.'
      ],
      modulesTitle: 'What is included',
      modules: [
        {
          title: 'Telegram funnel',
          description: 'A ready-to-run first-response and qualification flow that moves the client into booking.'
        },
        {
          title: 'Booking logic',
          description: 'Rules tied to working slots, lifts, and different repair scenarios.'
        },
        {
          title: 'Request card',
          description: 'Client and vehicle data are collected in one place without manual copy-paste.'
        },
        {
          title: 'Post-launch support',
          description: 'Scenario tweaks, logic updates, and operational stability under the monthly plan.'
        }
      ],
      roadmapTitle: 'How launch works',
      roadmap: [
        'We map your current intake process: channels, job types, and slot allocation rules.',
        'We configure the dialog, data structure, and slot logic around your real workload.',
        'We show a live test flow and run it against your common inquiry patterns.',
        'We launch it into production and support the first weeks until the flow is stable.'
      ],
      ctaTitle: 'Need an AI service advisor for your shop?',
      ctaCopy:
        'We can show how Nexium.Auto will answer your most common inquiries and assign bookings to your real service schedule.',
      backLabel: 'Back to ready solutions',
      ctaPrimary: 'Order solution',
      ctaSecondary: 'Bot test drive',
      images: {
        hero: autoShowcase,
        detail: autoOperations,
        heroAlt: 'Nexium.Auto visual',
        detailAlt: 'Nexium.Auto operations panel'
      }
    }
  },
  {
    slug: 'beauty',
    title: 'Nexium.Beauty',
    labelRu: 'ИИ-администратор',
    labelEn: 'AI Front Desk',
    subtitleRu: 'Автоматическая запись и воронка для салонов красоты',
    subtitleEn: 'Automated booking and funnel for beauty salons',
    price: '12 000 ₽ / внедрение',
    subscriptionRu: '+ 3 999 ₽ / мес. поддержка',
    subscriptionEn: '+ 3,999 RUB / month support',
    featuresRu: [
      'Синхронизация с календарем мастера через панель управления',
      'Напоминания о записи за 2 часа (снижение неявок)',
      'Отработка возражений в чате',
      'Мягкий, вовлекающий Tone of Voice'
    ],
    featuresEn: [
      'Specialist calendar sync through the control panel',
      '2-hour reminders to reduce no-shows',
      'Objection handling in chat',
      'Soft, engaging tone of voice'
    ],
    cardImage: beautyShowcase,
    cardImageAltRu: 'Превью решения Nexium.Beauty',
    cardImageAltEn: 'Nexium.Beauty solution preview',
    ru: {
      eyebrow: 'Салоны красоты · готовое AI-решение',
      description:
        'Готовый AI-администратор для бьюти-студий берет переписку по записи, синхронизируется с графиком мастеров, напоминает о визите и мягко доводит клиента до подтвержденного посещения.',
      tags: ['Beauty', 'CRM', 'Напоминания', 'Запись'],
      summaryTitle: 'Что получает салон',
      summary:
        'Nexium.Beauty подходит салонам, где администратор тонет в повторяющихся вопросах и переносах. Система берет на себя рутину вокруг записи и освобождает команду для работы с гостями на месте, а не с бесконечными чатами.',
      highlights: [
        { value: '12 000 ₽', label: 'Внедрение под ключ' },
        { value: '3 999 ₽', label: 'Поддержка в месяц' },
        { value: '-68%', label: 'Неявки в типовом сценарии' }
      ],
      featuresTitle: 'Что делает система каждый день',
      featuresLead:
        'Сценарий построен под реальную работу администратора салона: быстро ответить, подобрать мастера, закрыть запись и не дать клиенту забыть о визите.',
      features: [
        'Подбирает свободное время по календарю мастеров и исключает ручные пересечения.',
        'Отвечает на типовые вопросы по услугам, длительности и формату визита.',
        'Напоминает о записи за 2 часа и помогает подтвердить посещение в один тап.',
        'Сохраняет мягкий и вовлекающий тон общения без сухих шаблонов.',
        'Возвращает клиента в диалог, если тот остановился на этапе выбора времени.'
      ],
      modulesTitle: 'Что входит в пакет',
      modules: [
        {
          title: 'Запись по мастерам',
          description: 'Логика распределения по специалистам, окнам и типам услуг без ручного перебора.'
        },
        {
          title: 'Напоминания',
          description: 'Автосценарии за 2 часа до визита и после остановки клиента на выборе слота.'
        },
        {
          title: 'Чат с возражениями',
          description: 'Сценарии для диалога с сомневающимся клиентом и мягкого возврата к записи.'
        },
        {
          title: 'Поддержка после запуска',
          description: 'Корректировки текстов, логики и контроль стабильной работы решения.'
        }
      ],
      roadmapTitle: 'Как проходит запуск',
      roadmap: [
        'Смотрим, как у вас устроены мастера, услуги, рабочие часы и текущие каналы записи.',
        'Настраиваем диалог, таблицу доступности и сценарии напоминаний под ваш салон.',
        'Проверяем логику на типовых кейсах: перенос, отмена, новый клиент, вопрос по услуге.',
        'Запускаем систему и донастраиваем ее по реальным диалогам первой недели.'
      ],
      ctaTitle: 'Нужен AI-администратор для салона?',
      ctaCopy:
        'Покажем, как Nexium.Beauty будет записывать гостей, напоминать о визите и разгружать вашего администратора уже на первых сценариях.',
      backLabel: 'Назад к готовым решениям',
      ctaPrimary: 'Заказать решение',
      ctaSecondary: 'Тест-драйв бота',
      images: {
        hero: beautyShowcase,
        detail: beautyOperations,
        heroAlt: 'Визуал решения Nexium.Beauty',
        detailAlt: 'Панель сценариев Nexium.Beauty'
      }
    },
    en: {
      eyebrow: 'Beauty salons · packaged AI solution',
      description:
        'A packaged AI front desk for beauty studios that handles booking conversations, syncs with specialist schedules, sends visit reminders, and gently moves clients toward confirmed appointments.',
      tags: ['Beauty', 'CRM', 'Reminders', 'Booking'],
      summaryTitle: 'What the salon gets',
      summary:
        'Nexium.Beauty is built for salons where the admin gets buried under repeated questions and reschedules. The system takes over routine booking work and frees the team to focus on guests in the salon instead of endless chat threads.',
      highlights: [
        { value: '12,000 RUB', label: 'One-time setup' },
        { value: '3,999 RUB', label: 'Monthly support' },
        { value: '-68%', label: 'No-show drop in a typical flow' }
      ],
      featuresTitle: 'What the system handles daily',
      featuresLead:
        'The flow is built for real front-desk work: answer fast, match the right specialist, close the booking, and make sure the client remembers the visit.',
      features: [
        'Matches open times against specialist calendars and prevents manual overlaps.',
        'Answers common questions about services, duration, and appointment format.',
        'Sends a two-hour reminder and helps confirm the visit in one tap.',
        'Keeps a soft, engaging tone instead of dry template responses.',
        'Brings the client back into the conversation if they paused during slot selection.'
      ],
      modulesTitle: 'What is included',
      modules: [
        {
          title: 'Specialist booking logic',
          description: 'Assignment rules by specialist, open time, and service type without manual searching.'
        },
        {
          title: 'Reminder flows',
          description: 'Automated reminders two hours before the visit and nudges after slot hesitation.'
        },
        {
          title: 'Objection chat flows',
          description: 'Reply scenarios for hesitant clients and a gentle path back to booking.'
        },
        {
          title: 'Post-launch support',
          description: 'Copy tweaks, logic updates, and operational monitoring after launch.'
        }
      ],
      roadmapTitle: 'How launch works',
      roadmap: [
        'We review your specialists, services, working hours, and current booking channels.',
        'We configure the dialog, availability model, and reminder flows around your salon.',
        'We test the logic on common cases: reschedule, cancellation, new client, service questions.',
        'We launch the system and refine it against real conversations from the first week.'
      ],
      ctaTitle: 'Need an AI front desk for your salon?',
      ctaCopy:
        'We can show how Nexium.Beauty will book guests, remind them before the visit, and take routine chat work off your front desk right away.',
      backLabel: 'Back to ready solutions',
      ctaPrimary: 'Order solution',
      ctaSecondary: 'Bot test drive',
      images: {
        hero: beautyShowcase,
        detail: beautyOperations,
        heroAlt: 'Nexium.Beauty visual',
        detailAlt: 'Nexium.Beauty operations panel'
      }
    }
  },
  {
    key: 'soon',
    titleRu: 'Следующее готовое решение',
    titleEn: 'Next packaged solution',
    labelRu: 'Скоро',
    labelEn: 'Soon',
    subtitleRu: 'Третий слот оставили в каталоге, чтобы быстро добавить следующее решение без переделки страницы.',
    subtitleEn: 'The third slot stays in the catalog so the next packaged solution can be added without redesign.',
    featuresRu: [
      'Сохранена структура на 3 карточки',
      'Карточка готова под следующий продукт',
      'Можно заменить контент без изменений верстки',
      'Навигация и адаптив уже подключены'
    ],
    featuresEn: [
      'Three-card structure preserved',
      'This card is ready for the next product',
      'Content can be swapped without layout changes',
      'Navigation and responsive behavior are already wired'
    ],
    isPlaceholder: true
  }
];

export const readySolutionBySlug = Object.fromEntries(
  readySolutionsCatalog.filter((item) => item.slug).map((item) => [item.slug, item])
);
