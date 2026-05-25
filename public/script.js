function switchTab(paneId, btnElement) {
    const buttons = document.querySelectorAll('.tabs-wrapper .badge');
    buttons.forEach((btn) => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const panes = document.querySelectorAll('.panel-pane');
    const currentPane = document.querySelector('.panel-pane.active');
    if (currentPane && currentPane.id !== paneId) {
        currentPane.classList.remove('active');
        currentPane.classList.add('is-leaving');
        setTimeout(() => {
            currentPane.classList.remove('is-leaving');
        }, 520);
    }

    const activePane = document.getElementById(paneId);
    if (activePane) {
        panes.forEach((pane) => {
            if (pane !== activePane) {
                pane.classList.remove('active');
            }
        });
        activePane.classList.add('active');
        activePane.classList.remove('is-leaving');
    }

    const idx = tabs.findIndex((tab) => tab === btnElement);
    if (idx >= 0) {
        currentTabIndex = idx;
    }
    updateMobileServiceLabel();
}

const tabs = Array.from(document.querySelectorAll('.tabs-wrapper .badge[data-pane]'));
let autoSwitchInterval;
let currentTabIndex = 0;

function updateMobileServiceLabel() {
    const label = document.querySelector('[data-mobile-service-label]');
    if (!label || !tabs[currentTabIndex]) return;
    label.textContent = tabs[currentTabIndex].textContent.trim();
}

function startAutoSwitch() {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    autoSwitchInterval = setInterval(() => {
        currentTabIndex = (currentTabIndex + 1) % tabs.length;
        const btn = tabs[currentTabIndex];
        switchTab(btn.dataset.pane, btn);
    }, 3000);
}

function stopAutoSwitch() {
    clearInterval(autoSwitchInterval);
}

tabs.forEach((button, index) => {
    button.addEventListener('click', () => {
        stopAutoSwitch();
        switchTab(button.dataset.pane, button);
        currentTabIndex = index;
        updateMobileServiceLabel();
    });
});

if (tabs.length > 0) {
    const tabsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startAutoSwitch();
            tabsObserver.disconnect();
        }
    }, { threshold: 0.2 });

    const section = document.querySelector('.interactive-section');
    if (section) tabsObserver.observe(section);
}

const translations = {
    ru: {
        meta_title: 'Бизнес-решения под ключ | Не теряйте заявки',
        logo: 'нексиум.дев',
        header_telegram: 'Telegram',
        header_nav_portfolio: 'Портфолио',
        header_nav_home: 'Главная',
        hero_badge_1: 'Автоматизация для малого бизнеса',
        hero_badge_2: 'ИИ-ассистенты 24/7',
        hero_badge_3: 'CRM и онлайн-запись',
        hero_badge_4: 'Конверсионные сайты',
        hero_title_prefix: 'Хватит терять клиентов.',
        hero_lead: 'Помогаем салонам, сервисам и клиникам автоматизировать хаос. Настраиваем систему онлайн-записи и умных ботов, которые удерживают клиентов, пока вы заняты операционкой.',
        hero_cta: 'Запросить демо-версию',
        hero_note_html: 'Покажем работающий прототип под вашу нишу <span class="text-accent">до оплаты</span>.',
        pain_title: 'Знакомая ситуация?',
        pain_card_1_title: 'Никто не отвечает',
        pain_card_1_copy: 'Клиенты пишут ночью или пока администратор занят звонком. Каждый пропущенный контакт — готовый лид конкурента.',
        pain_card_1_consequence: 'клиент уходит не дождавшись ответа',
        pain_card_2_title: 'Хаос в каналах',
        pain_card_2_copy: 'Заявки в WhatsApp, Telegram, соцсетях и личных номерах. База не ведётся, аналитики ноль.',
        pain_card_2_consequence: 'теряется каждая третья заявка',
        pain_card_3_title: 'Нет контроля',
        pain_card_3_copy: 'Не видно сколько обращений пришло, сколько потеряно и чья это вина.',
        pain_card_3_consequence: 'деньги утекают незаметно',
        solutions_title: 'Что мы внедряем',
        solutions_lead: 'Простые инструменты без лишней терминологии. Вы выбираете ключевую задачу — мы разворачиваем готовое IT-решение.',
        tab_1: '01 / Сайты под задачу',
        tab_2: '02 / Системы записи',
        tab_3: '03 / Умные напоминания',
        tab_4: '04 / Автоматизация с нуля + ИИ-системы',
        solutions_note: 'Нажмите на шаг, чтобы увидеть интерфейс решения изнутри.',
        phone_site_label: 'nexium.site',
        phone_site_title: 'Лендинг под услугу за 1 экран',
        phone_site_copy: 'Чистый оффер, доверие и понятное целевое действие без лишних шагов.',
        phone_site_cta: 'Записаться на консультацию',
        phone_site_kpi_1: '+32% заявок',
        phone_site_kpi_2: '0.8с загрузка',
        phone_booking_label: 'Онлайн-запись',
        phone_booking_title: 'Выберите слот',
        phone_booking_day_1: 'Пн, 12',
        phone_booking_day_2: 'Вт, 13',
        phone_booking_day_3: 'Ср, 14',
        phone_booking_confirm: 'Слот 12:00 подтвержден',
        phone_remind_label: 'CRM · Напоминания',
        phone_remind_title: 'Автоуведомления клиентам',
        phone_remind_item_1: 'WhatsApp: «Напоминание за 2 часа отправлено»',
        phone_remind_item_2: 'Telegram: «Клиент подтвердил визит»',
        phone_remind_item_3: 'CRM: «Отзыв запрошен автоматически»',
        phone_ai_label: 'Nexium OS · AI',
        phone_ai_title: 'Система управления бизнесом',
        phone_ai_copy: 'Операционные процессы, воронка и автоматизация в одной iOS-панели.',
        phone_ai_item_1: 'AI-помощник: «План дня собран автоматически»',
        phone_ai_item_2: 'Управление: «12 автосценариев в работе»',
        phone_ai_item_3: 'CRM: «Потери лидов снижены ниже 3%»',
        phone_ai_kpi_1: '+18% загрузки',
        phone_ai_kpi_2: '12 процессов',
        pane_1_title: 'Конверсионные лендинги',
        pane_1_copy: 'Создаем лаконичные посадочные страницы, оптимизированные под мобильный трафик. Главная цель — заставить пользователя сделать целевое действие.',
        pane_1_mock_label: 'Интерактивный блок услуг',
        pane_1_mock_button: 'ВЫБРАТЬ ВРЕМЯ ВИЗИТА',
        pane_2_title: 'Единая CRM и онлайн-запись',
        pane_2_copy: 'Интегрируем календарь, где клиенты видят актуальные окна 24/7. Администратор получает уведомление и готовую карточку без рутины в чатах.',
        pane_2_row_1: 'Детейлинг / Мастер: Иван',
        pane_2_status_1: 'НОВАЯ ЗАЯВКА',
        pane_2_row_2: 'Стрижка / Мастер: Алекс',
        pane_2_status_2: 'ПОДТВЕРЖДЕНО',
        pane_3_title: 'Автоматизация мессенджеров',
        pane_3_copy: 'Настраиваем триггерных ботов (WhatsApp/Telegram). Они автоматически подтверждают запись, напоминают за 2 часа и соберут отзывы. Минимум отмен.',
        pane_3_chat_html: '⚡️ <strong>NexiumBot:</strong> Вы записаны на завтра в 15:00. Подтвердите, пожалуйста, свой визит кнопкой ниже.',
        pane_3_action_1: 'ПОДТВЕРДИТЬ',
        pane_3_action_2: 'ОТМЕНИТЬ',
        metric_1: '1 день',
        adv_1_title: 'На сборку демо-версии',
        adv_1_copy: 'Мы против «котов в мешке». Сначала разрабатываем архитектуру под ваши задачи и показываем кликабельный прототип. Вы оцениваете удобство до проведения оплаты.',
        metric_2: '3–5 дней',
        adv_2_title: 'До полного запуска',
        adv_2_copy: 'После утверждения концепта бесшовно подключаем CRM, настраиваем уведомления и интегрируем каналы связи. Передаем систему под ключ с инструкциями.',
        cases_title: 'Кейсы и результаты',
        cases_lead: 'Реальные бизнесы, реальные цифры. Считаем только измеримые изменения после внедрения.',
        case_1_meta: 'Автосервис · Казань',
        case_1_metric_title: 'Пропущенные заявки',
        case_1_before: '40',
        case_1_after: '3',
        case_1_delta: '−92% заявок в мусор',
        case_1_footnote: 'Автоподтверждения и напоминания за 2 ч.',
        case_2_meta: 'Салон красоты · Самара',
        case_2_metric_title: 'Отмены в день записи',
        case_2_before: '28%',
        case_2_after: '9%',
        case_2_delta: '−68% отмен',
        case_2_footnote: 'WhatsApp-бот с депозитными напоминаниями.',
        case_3_meta: 'Стоматология · Пермь',
        case_3_metric_title: 'Ручная обработка в день',
        case_3_before: '2.5ч',
        case_3_after: '35м',
        case_3_delta: '−77% ручной рутины',
        case_3_footnote: 'Единая CRM и авторазметка лидов.',
        testimonials_title: 'Отзывы клиентов',
        testimonials_lead: 'Отзывы можно показать скринами из Telegram/WhatsApp или в формате карточек с результатом.',
        testimonial_1_name: 'Илья, владелец автосервиса',
        testimonial_1_niche: 'Ниша: обслуживание авто',
        testimonial_1_result: 'Результат: пропущенные обращения снизились с 40 до 3 в месяц.',
        testimonial_2_name: 'Марина, управляющая салоном',
        testimonial_2_niche: 'Ниша: бьюти-услуги',
        testimonial_2_result: 'Результат: доля отмен сократилась с 28% до 9% за 6 недель.',
        testimonial_3_name: 'Олег, главный врач клиники',
        testimonial_3_niche: 'Ниша: медицинские услуги',
        testimonial_3_result: 'Результат: администраторы освободили около 10 часов в неделю.',
        faq_title: 'FAQ',
        faq_q1: 'А если клиенты не пользуются Telegram?',
        faq_a1: 'Подключаем несколько каналов сразу: WhatsApp, Telegram, сайт-форму и звонки. Клиент выбирает удобный канал, а вы получаете все обращения в одной системе.',
        faq_q2: 'Нужен ли технический специалист в штате?',
        faq_a2: 'Нет. Мы внедряем систему под ключ, даем короткий регламент и шаблоны. Для ежедневной работы достаточно администратора.',
        faq_q3: 'Сколько стоит поддержка?',
        faq_a3: 'Поддержка рассчитывается по объему задач. Обычно это фиксированный ежемесячный тариф с прозрачным списком работ и SLA по реакции.',
        cta_title_html: 'Готовы навести порядок<br>в бизнес-процессах?',
        cta_copy: 'Напишите мне в Telegram. Задам 3 коротких вопроса о вашей специфике, а через день наглядно продемонстрирую архитектуру вашей будущей системы.',
        cta_button: 'Обсудить проект в Telegram',
        industry_1: 'Салоны красоты',
        industry_2: 'Автосервисы',
        industry_3: 'Медицинские центры',
        industry_4: 'Онлайн-платформы',
        industry_5: 'Фитнес-клубы',
        industry_6: 'Студии йоги',
        typewriter_text: 'Начните их обрабатывать!',
        footer_privacy: 'Политика конфиденциальности',
        footer_agreement: 'Согласие на обработку персональных данных',
        footer_copyright: '© 2017—2026 «Nexium» —<br>студия автоматизации бизнеса',
        footer_legal: 'ИП Некрасов Виктор Владимирович<br>ИНН 710407135800<br>ОГРНИП 317715400000700',
        footer_nav_about: 'О нас',
        footer_nav_portfolio: 'Портфолио',
        footer_nav_services: 'Услуги',
        footer_nav_clients: 'Клиенты',
        footer_nav_prices: 'Цены',
        footer_nav_contacts: 'Контакты',
        footer_up: 'Вверх'
    },
    en: {
        meta_title: 'Turnkey Business Automation | Stop Losing Leads',
        logo: 'nexium.dev',
        header_telegram: 'Telegram',
        header_nav_portfolio: 'Portfolio',
        header_nav_home: 'Home',
        hero_badge_1: 'Small Business Automation',
        hero_badge_2: 'AI Assistants 24/7',
        hero_badge_3: 'CRM and Online Booking',
        hero_badge_4: 'Conversion Websites',
        hero_title_prefix: 'Stop losing clients.',
        hero_lead: 'We help salons, service teams, and clinics automate daily chaos. We set up online booking and smart bots that keep clients engaged while you run operations.',
        hero_cta: 'Request a Demo',
        hero_note_html: 'We will show a working prototype for your niche <span class="text-accent">before payment</span>.',
        pain_title: 'Sound familiar?',
        pain_card_1_title: 'No One Replies',
        pain_card_1_copy: 'Clients message at night or while your admin is stuck on a call. Every missed contact is a ready lead for your competitor.',
        pain_card_1_consequence: 'the client leaves before getting a reply',
        pain_card_2_title: 'Channel Chaos',
        pain_card_2_copy: 'Requests are spread across WhatsApp, Telegram, social media, and personal numbers. No proper base, zero analytics.',
        pain_card_2_consequence: 'every third request gets lost',
        pain_card_3_title: 'No Control',
        pain_card_3_copy: 'You cannot see how many requests came in, how many were lost, or who is responsible.',
        pain_card_3_consequence: 'money leaks out unnoticed',
        solutions_title: 'What We Implement',
        solutions_lead: 'Simple tools without jargon. You pick the core task, we deploy a ready-to-use IT solution.',
        tab_1: '01 / Task-Focused Websites',
        tab_2: '02 / Booking Systems',
        tab_3: '03 / Smart Reminders',
        tab_4: '04 / AI Business Systems',
        solutions_note: 'Click a step to preview the solution interface.',
        phone_site_label: 'nexium.site',
        phone_site_title: 'Landing page with one clear action',
        phone_site_copy: 'A clean offer, social proof, and a focused CTA with no extra steps.',
        phone_site_cta: 'Book a strategy call',
        phone_site_kpi_1: '+32% leads',
        phone_site_kpi_2: '0.8s load time',
        phone_booking_label: 'Online Booking',
        phone_booking_title: 'Choose a slot',
        phone_booking_day_1: 'Mon, 12',
        phone_booking_day_2: 'Tue, 13',
        phone_booking_day_3: 'Wed, 14',
        phone_booking_confirm: '12:00 slot confirmed',
        phone_remind_label: 'CRM · Reminders',
        phone_remind_title: 'Automated client notifications',
        phone_remind_item_1: 'WhatsApp: "Reminder sent 2 hours before"',
        phone_remind_item_2: 'Telegram: "Client confirmed the visit"',
        phone_remind_item_3: 'CRM: "Review request sent automatically"',
        phone_ai_label: 'Nexium OS · AI',
        phone_ai_title: 'AI Business Control System',
        phone_ai_copy: 'Operations, funnel, and automation in one iOS-style dashboard.',
        phone_ai_item_1: 'AI Assistant: "Daily plan generated automatically"',
        phone_ai_item_2: 'Control: "12 automation flows are active"',
        phone_ai_item_3: 'CRM: "Lead leakage reduced below 3%"',
        phone_ai_kpi_1: '+18% capacity',
        phone_ai_kpi_2: '12 live flows',
        pane_1_title: 'Conversion Landing Pages',
        pane_1_copy: 'We build clean landing pages optimized for mobile traffic. The main goal is to drive users to a target action.',
        pane_1_mock_label: 'Interactive services block',
        pane_1_mock_button: 'SELECT A VISIT TIME',
        pane_2_title: 'Unified CRM and Online Booking',
        pane_2_copy: 'We integrate a calendar where clients see real-time slots 24/7. Your admin gets instant alerts and ready client cards without chat routine.',
        pane_2_row_1: 'Detailing / Specialist: Ivan',
        pane_2_status_1: 'NEW LEAD',
        pane_2_row_2: 'Haircut / Specialist: Alex',
        pane_2_status_2: 'CONFIRMED',
        pane_3_title: 'Messenger Automation',
        pane_3_copy: 'We configure trigger-based bots (WhatsApp/Telegram). They auto-confirm bookings, remind clients 2 hours before, and collect reviews. Fewer cancellations.',
        pane_3_chat_html: '⚡️ <strong>NexiumBot:</strong> Your booking is set for tomorrow at 3:00 PM. Please confirm using the button below.',
        pane_3_action_1: 'CONFIRM',
        pane_3_action_2: 'CANCEL',
        metric_1: '1 day',
        adv_1_title: 'To Build a Demo Version',
        adv_1_copy: 'We do not sell blind promises. First, we design architecture for your tasks and show a clickable prototype. You validate convenience before payment.',
        metric_2: '3–5 days',
        adv_2_title: 'To Full Launch',
        adv_2_copy: 'After concept approval, we connect CRM, configure notifications, and integrate communication channels. You receive a turnkey system with instructions.',
        cases_title: 'Cases and Results',
        cases_lead: 'Real businesses, real numbers. We track only measurable outcomes after implementation.',
        case_1_meta: 'Auto Service · Kazan',
        case_1_metric_title: 'Missed Leads',
        case_1_before: '40',
        case_1_after: '3',
        case_1_delta: '−92% leads lost',
        case_1_footnote: 'Auto-confirmations and 2-hour reminders.',
        case_2_meta: 'Beauty Salon · Samara',
        case_2_metric_title: 'Same-Day Cancellations',
        case_2_before: '28%',
        case_2_after: '9%',
        case_2_delta: '−68% cancellations',
        case_2_footnote: 'WhatsApp bot with deposit reminders.',
        case_3_meta: 'Dentistry · Perm',
        case_3_metric_title: 'Manual Processing per Day',
        case_3_before: '2.5h',
        case_3_after: '35m',
        case_3_delta: '−77% manual routine',
        case_3_footnote: 'Unified CRM and auto-tagged leads.',
        testimonials_title: 'Client Feedback',
        testimonials_lead: 'You can show feedback as Telegram/WhatsApp screenshots or as structured result cards.',
        testimonial_1_name: 'Ilya, auto service owner',
        testimonial_1_niche: 'Niche: auto maintenance',
        testimonial_1_result: 'Result: missed inquiries dropped from 40 to 3 per month.',
        testimonial_2_name: 'Marina, salon manager',
        testimonial_2_niche: 'Niche: beauty services',
        testimonial_2_result: 'Result: cancellations reduced from 28% to 9% in 6 weeks.',
        testimonial_3_name: 'Oleg, chief physician',
        testimonial_3_niche: 'Niche: medical services',
        testimonial_3_result: 'Result: admins freed about 10 hours per week.',
        faq_title: 'FAQ',
        faq_q1: 'What if clients do not use Telegram?',
        faq_a1: 'We connect multiple channels at once: WhatsApp, Telegram, website forms, and calls. Clients choose their preferred channel, and you get everything in one system.',
        faq_q2: 'Do we need an in-house technical specialist?',
        faq_a2: 'No. We implement the system turnkey, provide a short playbook, and hand over templates. Daily operation is handled by a regular admin.',
        faq_q3: 'How much does support cost?',
        faq_a3: 'Support is based on workload. Usually it is a fixed monthly plan with a transparent task list and response-time SLA.',
        cta_title_html: 'Ready to bring order<br>to your business processes?',
        cta_copy: 'Message me on Telegram. I will ask 3 short questions about your niche, and in one day show the architecture of your future system.',
        cta_button: 'Discuss Your Project on Telegram',
        industry_1: 'Beauty Salons',
        industry_2: 'Auto Services',
        industry_3: 'Medical Centers',
        industry_4: 'Online Platforms',
        industry_5: 'Fitness Clubs',
        industry_6: 'Yoga Studios',
        typewriter_text: 'Start processing them now!',
        footer_privacy: 'Privacy Policy',
        footer_agreement: 'Personal Data Processing Agreement',
        footer_copyright: '© 2017—2026 "Nexium" —<br>business automation studio',
        footer_legal: 'Individual Entrepreneur Nekrasov Viktor Vladimirovich<br>TIN 710407135800<br>OGRNIP 317715400000700',
        footer_nav_about: 'About Us',
        footer_nav_portfolio: 'Portfolio',
        footer_nav_services: 'Services',
        footer_nav_clients: 'Clients',
        footer_nav_prices: 'Pricing',
        footer_nav_contacts: 'Contacts',
        footer_up: 'Up'
    }
};

const typewriterElement = document.querySelector('.typewriter');
let textToType = translations.ru.typewriter_text;
let typeIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeWriter() {
    if (!typewriterElement) return;

    if (!isDeleting) {
        typewriterElement.textContent = textToType.substring(0, typeIndex + 1);
        typeIndex++;
        if (typeIndex === textToType.length) {
            isDeleting = true;
            typewriterTimeout = setTimeout(typeWriter, 2000);
            return;
        }
    } else {
        typewriterElement.textContent = textToType.substring(0, typeIndex - 1);
        typeIndex--;
        if (typeIndex === 0) {
            isDeleting = false;
            typewriterTimeout = setTimeout(typeWriter, 500);
            return;
        }
    }

    const speed = isDeleting ? 40 : 100;
    typewriterTimeout = setTimeout(typeWriter, speed);
}

function restartTypewriter() {
    clearTimeout(typewriterTimeout);
    typeIndex = 0;
    isDeleting = false;
    if (typewriterElement) {
        typewriterElement.textContent = '';
    }
    typeWriter();
}

function applyTranslations(lang) {
    const dictionary = translations[lang] || translations.ru;

    document.documentElement.lang = lang;
    document.title = dictionary.meta_title;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    textToType = dictionary.typewriter_text;
    restartTypewriter();

    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });

    localStorage.setItem('site-language', lang);
    updateMobileServiceLabel();
}

function initShowcaseTilt() {
    const root = document.querySelector('[data-tilt-root]');
    const target = document.querySelector('[data-tilt-target]');
    if (!root || !target) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        target.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg) translateZ(0)`;
        rafId = requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
        const rect = root.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        targetX = px * 14;
        targetY = -py * 14;
    };

    root.addEventListener('mousemove', handleMove, { passive: true });
    root.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

    animate();

    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(rafId);
    });
}

function initBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (!burgerBtn || !mobileMenu || !backdrop) return;

    const openMenu = () => {
        burgerBtn.classList.add('is-open');
        burgerBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        burgerBtn.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    burgerBtn.addEventListener('click', () => {
        const isOpen = burgerBtn.classList.contains('is-open');
        isOpen ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-menu-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('site-language');
    const defaultLanguage = savedLanguage === 'en' || savedLanguage === 'ru' ? savedLanguage : 'ru';

    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.addEventListener('click', () => {
            applyTranslations(button.dataset.lang);
        });
    });

    applyTranslations(defaultLanguage);
    initShowcaseTilt();
    initBurgerMenu();
    updateMobileServiceLabel();

    document.querySelectorAll('[data-mobile-nav]').forEach((button) => {
        button.addEventListener('click', () => {
            stopAutoSwitch();
            const dir = button.dataset.mobileNav === 'next' ? 1 : -1;
            currentTabIndex = (currentTabIndex + dir + tabs.length) % tabs.length;
            const nextTab = tabs[currentTabIndex];
            switchTab(nextTab.dataset.pane, nextTab);
        });
    });

    document.querySelectorAll('[data-testi-nav]').forEach((button) => {
        button.addEventListener('click', () => {
            const grid = document.querySelector('#testimonials .grid-3');
            if (!grid) return;
            const card = grid.querySelector('.card');
            if (!card) return;
            const scrollAmount = card.offsetWidth + 16;
            const dir = button.dataset.testiNav === 'next' ? 1 : -1;
            grid.scrollBy({ left: scrollAmount * dir, behavior: 'smooth' });
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const textElements = document.querySelectorAll('#site-main h1, #site-main h2, #site-main h3, #site-main p, #site-main .hero-lead, #site-main .section-lead, #site-main .cta-title, #site-main .cta-copy, #site-main .badge-static');
    textElements.forEach((el) => {
        el.classList.add('animate-on-scroll', 'animate-fade');
        observer.observe(el);
    });

    const cardElements = document.querySelectorAll('#site-main .card, #site-main .hero-actions');
    cardElements.forEach((el) => {
        el.classList.add('animate-on-scroll', 'animate-slide');
        observer.observe(el);
    });

    const p3Cells = document.querySelectorAll('#site-main .p3-cell');
    p3Cells.forEach((el, index) => {
        el.classList.add('animate-on-scroll', 'animate-fade-right');
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    // Плавная анимация аккордеона FAQ
    document.querySelectorAll('details.faq-item').forEach((el) => {
        const summary = el.querySelector('summary');
        
        el.style.cursor = 'pointer';

        el.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            if (window.getSelection().toString().length > 0) return;

            e.preventDefault();
            
            el.style.overflow = 'hidden';
            
            if (el.open) {
                el.style.height = `${el.offsetHeight}px`;
                requestAnimationFrame(() => {
                    el.style.transition = 'height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
                    el.style.height = `${summary.offsetHeight}px`;
                    
                    setTimeout(() => {
                        el.open = false;
                        el.style.height = '';
                        el.style.transition = '';
                        el.style.overflow = '';
                    }, 300);
                });
            } else {
                el.style.height = `${el.offsetHeight}px`;
                el.open = true;
                requestAnimationFrame(() => {
                    const targetHeight = el.scrollHeight;
                    el.style.transition = 'height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
                    el.style.height = `${targetHeight}px`;
                    
                    setTimeout(() => {
                        el.style.height = '';
                        el.style.transition = '';
                        el.style.overflow = '';
                    }, 300);
                });
            }
        });
    });
});
if(document.readyState !== 'loading') { document.dispatchEvent(new Event('DOMContentLoaded')); }
