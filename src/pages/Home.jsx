
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = import.meta.env.BASE_URL + 'script.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main id="site-main" className="app-view">

        <section id="hero">
            <div className="glow-ambient glow-hero"></div>
            <div className="container hero-section">
                <div className="hero-badges">
                    <span className="badge active badge-static" data-i18n="hero_badge_1">Автоматизация для малого
                        бизнеса</span>
                    <span className="badge active badge-static" data-i18n="hero_badge_2">ИИ-ассистенты 24/7</span>
                    <span className="badge active badge-static" data-i18n="hero_badge_3">CRM и онлайн-запись</span>
                    <span className="badge active badge-static" data-i18n="hero_badge_4">Конверсионные сайты</span>
                </div>
                <h1 className="hero-main-title">
                    <span className="hero-title-prefix" data-i18n="hero_title_prefix">Хватит терять клиентов.</span>
                    <span className="typewriter text-accent"></span>
                </h1>
                <p className="hero-lead" data-i18n="hero_lead">
                    Помогаем салонам, сервисам и клиникам автоматизировать хаос. Настраиваем систему онлайн-записи и
                    умных ботов, которые удерживают клиентов, пока вы заняты операционкой.
                </p>
                <div className="hero-actions">
                    <a href="https://t.me/your_telegram" target="_blank" className="btn" data-i18n="hero_cta">Запросить
                        демо-версию</a>
                    <div className="hero-note" data-i18n-html="hero_note_html">
                        Покажем работающий прототип под вашу нишу <span className="text-accent">до оплаты</span>.
                    </div>
                </div>
            </div>
        </section>

        <section id="pain-points">
            <div className="container">
                <h2 data-i18n="pain_title">Знакомая ситуация?</h2>
                <div className="pain-quote-grid">
                    <article className="p3-cell">
                        <div className="p3-quote">"</div>
                        <h3 className="pain-title p3-title" data-i18n="pain_card_1_title">Никто не отвечает</h3>
                        <p className="p3-body" data-i18n="pain_card_1_copy">Клиенты пишут ночью или пока администратор занят
                            звонком. Каждый пропущенный контакт — готовый лид конкурента.</p>
                        <div className="p3-consequence">
                            <span className="p3-arrow">→</span>
                            <span data-i18n="pain_card_1_consequence">клиент уходит не дождавшись ответа</span>
                        </div>
                    </article>
                    <article className="p3-cell">
                        <div className="p3-quote">"</div>
                        <h3 className="pain-title p3-title" data-i18n="pain_card_2_title">Хаос в каналах</h3>
                        <p className="p3-body" data-i18n="pain_card_2_copy">Заявки в WhatsApp, Telegram, соцсетях и личных
                            номерах. База не ведётся, аналитики ноль.</p>
                        <div className="p3-consequence">
                            <span className="p3-arrow">→</span>
                            <span data-i18n="pain_card_2_consequence">теряется каждая третья заявка</span>
                        </div>
                    </article>
                    <article className="p3-cell">
                        <div className="p3-quote">"</div>
                        <h3 className="pain-title p3-title" data-i18n="pain_card_3_title">Нет контроля</h3>
                        <p className="p3-body" data-i18n="pain_card_3_copy">Не видно сколько обращений пришло, сколько
                            потеряно и чья это вина.</p>
                        <div className="p3-consequence">
                            <span className="p3-arrow">→</span>
                            <span data-i18n="pain_card_3_consequence">деньги утекают незаметно</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section id="cases">
            <div className="container">
                <h2 data-i18n="cases_title">Кейсы и результаты</h2>
                <p className="section-lead" data-i18n="cases_lead">Реальные бизнесы, реальные цифры. Считаем только
                    измеримые изменения после внедрения.</p>
                <div className="cases-grid">
                    <article className="card case-card">
                        <div className="case-meta" data-i18n="case_1_meta">Автосервис · Казань</div>
                        <h3 className="case-metric-title" data-i18n="case_1_metric_title">Пропущенные заявки</h3>
                        <div className="case-flow">
                            <span className="case-before" data-i18n="case_1_before">40</span>
                            <span className="case-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                            <span className="case-after" data-i18n="case_1_after">3</span>
                        </div>
                        <div className="case-delta">
                            <span className="case-delta-icon">↘</span>
                            <span data-i18n="case_1_delta">−92% заявок в мусор</span>
                        </div>
                        <p className="case-footnote" data-i18n="case_1_footnote">Автоподтверждения и напоминания за 2 ч.</p>
                    </article>

                    <article className="card case-card">
                        <div className="case-meta" data-i18n="case_2_meta">Салон красоты · Самара</div>
                        <h3 className="case-metric-title" data-i18n="case_2_metric_title">Отмены в день записи</h3>
                        <div className="case-flow">
                            <span className="case-before" data-i18n="case_2_before">28%</span>
                            <span className="case-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                            <span className="case-after" data-i18n="case_2_after">9%</span>
                        </div>
                        <div className="case-delta">
                            <span className="case-delta-icon">↘</span>
                            <span data-i18n="case_2_delta">−68% отмен</span>
                        </div>
                        <p className="case-footnote" data-i18n="case_2_footnote">WhatsApp-бот с депозитными напоминаниями.
                        </p>
                    </article>

                    <article className="card case-card">
                        <div className="case-meta" data-i18n="case_3_meta">Стоматология · Пермь</div>
                        <h3 className="case-metric-title" data-i18n="case_3_metric_title">Ручная обработка в день</h3>
                        <div className="case-flow">
                            <span className="case-before" data-i18n="case_3_before">2.5ч</span>
                            <span className="case-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                            <span className="case-after" data-i18n="case_3_after">35м</span>
                        </div>
                        <div className="case-delta">
                            <span className="case-delta-icon">↘</span>
                            <span data-i18n="case_3_delta">−77% ручной рутины</span>
                        </div>
                        <p className="case-footnote" data-i18n="case_3_footnote">Единая CRM и авторазметка лидов.</p>
                    </article>
                </div>
            </div>
        </section>

        <section id="solutions" className="interactive-section">
            <div className="glow-ambient glow-solutions"></div>
            <div className="container">
                <h2 data-i18n="solutions_title">Что мы внедряем</h2>
                <p className="section-lead" data-i18n="solutions_lead">Простые инструменты без лишней терминологии. Вы
                    выбираете ключевую задачу — мы разворачиваем готовое IT-решение.</p>

                <div className="grid-2">
                    <div>
                        <div className="tabs-wrapper">
                            <button className="badge active" data-pane="pane-1" data-i18n="tab_1">01 / Сайты под
                                задачу</button>
                            <button className="badge" data-pane="pane-2" data-i18n="tab_2">02 / Системы записи</button>
                            <button className="badge" data-pane="pane-3" data-i18n="tab_3">03 / Умные напоминания</button>
                            <button className="badge" data-pane="pane-4" data-i18n="tab_4">04 / Автоматизация с нуля + ИИ-системы</button>
                        </div>
                        <p className="solutions-note" data-i18n="solutions_note">Нажмите на шаг, чтобы увидеть интерфейс
                            решения изнутри.</p>
                    </div>

                    <div className="solution-showcase">
                        <div className="mobile-service-nav" aria-label="Mobile services switcher">
                            <button className="mobile-nav-btn" type="button" data-mobile-nav="prev" aria-label="Previous service">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <div className="mobile-service-label" data-mobile-service-label></div>
                            <button className="mobile-nav-btn" type="button" data-mobile-nav="next" aria-label="Next service">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div className="showcase-glow"></div>
                        <div className="iphone-stage" data-tilt-root>
                            <div className="iphone-shadow"></div>
                            <div className="iphone-device" data-tilt-target>
                                <div className="iphone-frame-reflect"></div>
                                <div className="iphone-notch"></div>
                                <div className="iphone-screen">
                                    <div className="panels-stack phone-panels">
                                        <div className="panel-pane phone-pane active" id="pane-1">
                                            <div className="phone-app phone-app-landing">
                                                <div className="phone-app-topline" data-i18n="phone_site_label">nexium.site</div>
                                                <h3 className="phone-title" data-i18n="phone_site_title">Лендинг под услугу за 1 экран</h3>
                                                <p className="phone-copy" data-i18n="phone_site_copy">Чистый оффер, доверие и понятное целевое действие без лишних шагов.</p>
                                                <button className="phone-cta" type="button" data-i18n="phone_site_cta">Записаться на консультацию</button>
                                                <div className="phone-kpis">
                                                    <span className="phone-kpi" data-i18n="phone_site_kpi_1">+32% заявок</span>
                                                    <span className="phone-kpi" data-i18n="phone_site_kpi_2">0.8с загрузка</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel-pane phone-pane" id="pane-2">
                                            <div className="phone-app phone-app-booking">
                                                <div className="phone-app-topline" data-i18n="phone_booking_label">Онлайн-запись</div>
                                                <h3 className="phone-title" data-i18n="phone_booking_title">Выберите слот</h3>
                                                <div className="phone-calendar">
                                                    <div className="phone-calendar-day active" data-i18n="phone_booking_day_1">Пн, 12</div>
                                                    <div className="phone-calendar-day" data-i18n="phone_booking_day_2">Вт, 13</div>
                                                    <div className="phone-calendar-day" data-i18n="phone_booking_day_3">Ср, 14</div>
                                                </div>
                                                <div className="phone-slots">
                                                    <div className="phone-slot">10:30</div>
                                                    <div className="phone-slot active">12:00</div>
                                                    <div className="phone-slot">14:30</div>
                                                </div>
                                                <div className="phone-confirm" data-i18n="phone_booking_confirm">Слот 12:00 подтвержден</div>
                                            </div>
                                        </div>

                                        <div className="panel-pane phone-pane" id="pane-3">
                                            <div className="phone-app phone-app-reminders">
                                                <div className="phone-app-topline" data-i18n="phone_remind_label">CRM · Напоминания</div>
                                                <h3 className="phone-title" data-i18n="phone_remind_title">Автоуведомления клиентам</h3>
                                                <div className="notify-list">
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_remind_item_1">WhatsApp: «Напоминание за 2 часа отправлено»</span>
                                                    </div>
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_remind_item_2">Telegram: «Клиент подтвердил визит»</span>
                                                    </div>
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_remind_item_3">CRM: «Отзыв запрошен автоматически»</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel-pane phone-pane" id="pane-4">
                                            <div className="phone-app phone-app-automation">
                                                <div className="phone-app-topline" data-i18n="phone_ai_label">Nexium OS · AI</div>
                                                <h3 className="phone-title" data-i18n="phone_ai_title">Система управления бизнесом</h3>
                                                <p className="phone-copy" data-i18n="phone_ai_copy">Операционные процессы, воронка и автоматизация в одной iOS-панели.</p>
                                                <div className="notify-list">
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_ai_item_1">AI-помощник: «План дня собран автоматически»</span>
                                                    </div>
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_ai_item_2">Управление: «12 автосценариев в работе»</span>
                                                    </div>
                                                    <div className="notify-item">
                                                        <span className="notify-dot"></span>
                                                        <span data-i18n="phone_ai_item_3">CRM: «Потери лидов снижены ниже 3%»</span>
                                                    </div>
                                                </div>
                                                <div className="phone-kpis">
                                                    <span className="phone-kpi" data-i18n="phone_ai_kpi_1">+18% загрузки</span>
                                                    <span className="phone-kpi" data-i18n="phone_ai_kpi_2">12 процессов</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="advantages">
            <div className="container">
                <div className="grid-2">
                    <div className="card">
                        <div className="metric" data-i18n="metric_1">1 день</div>
                        <h3 data-i18n="adv_1_title">На сборку демо-версии</h3>
                        <p data-i18n="adv_1_copy">Мы против «котов в мешке». Сначала разрабатываем архитектуру под ваши
                            задачи и показываем кликабельный прототип. Вы оцениваете удобство до проведения оплаты.</p>
                    </div>
                    <div className="card">
                        <div className="metric" data-i18n="metric_2">3–5 дней</div>
                        <h3 data-i18n="adv_2_title">До полного запуска</h3>
                        <p data-i18n="adv_2_copy">После утверждения концепта бесшовно подключаем CRM, настраиваем
                            уведомления и интегрируем каналы связи. Передаем систему под ключ с инструкциями.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <div className="container">
                <h2 data-i18n="testimonials_title">Отзывы клиентов</h2>
                <p className="section-lead" data-i18n="testimonials_lead">Отзывы можно показать скринами из
                    Telegram/WhatsApp или в формате карточек с результатом.</p>
                <div className="grid-3">
                    <div className="card testimonial-card">
                        <h3 data-i18n="testimonial_1_name">Илья, владелец автосервиса</h3>
                        <p data-i18n="testimonial_1_niche">Ниша: обслуживание авто</p>
                        <p data-i18n="testimonial_1_result">Результат: пропущенные обращения снизились с 40 до 3 в
                            месяц.</p>
                    </div>
                    <div className="card testimonial-card">
                        <h3 data-i18n="testimonial_2_name">Марина, управляющая салоном</h3>
                        <p data-i18n="testimonial_2_niche">Ниша: бьюти-услуги</p>
                        <p data-i18n="testimonial_2_result">Результат: доля отмен сократилась с 28% до 9% за 6 недель.
                        </p>
                    </div>
                    <div className="card testimonial-card">
                        <h3 data-i18n="testimonial_3_name">Олег, главный врач клиники</h3>
                        <p data-i18n="testimonial_3_niche">Ниша: медицинские услуги</p>
                        <p data-i18n="testimonial_3_result">Результат: администраторы освободили около 10 часов в
                            неделю.</p>
                    </div>
                </div>
                <div className="mobile-service-nav testimonials-nav" aria-label="Testimonials switcher">
                    <button className="mobile-nav-btn" type="button" data-testi-nav="prev" aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                    <button className="mobile-nav-btn" type="button" data-testi-nav="next" aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <section id="faq">
            <div className="container">
                <h2 data-i18n="faq_title">FAQ</h2>
                <div className="faq-list">
                    <details className="card faq-item" open>
                        <summary data-i18n="faq_q1">А если клиенты не пользуются Telegram?</summary>
                        <p data-i18n="faq_a1">Подключаем несколько каналов сразу: WhatsApp, Telegram, сайт-форму и
                            звонки. Клиент выбирает удобный канал, а вы получаете все обращения в одной системе.</p>
                    </details>
                    <details className="card faq-item">
                        <summary data-i18n="faq_q2">Нужен ли технический специалист в штате?</summary>
                        <p data-i18n="faq_a2">Нет. Мы внедряем систему под ключ, даем короткий регламент и шаблоны. Для
                            ежедневной работы достаточно администратора.</p>
                    </details>
                    <details className="card faq-item">
                        <summary data-i18n="faq_q3">Сколько стоит поддержка?</summary>
                        <p data-i18n="faq_a3">Поддержка рассчитывается по объему задач. Обычно это фиксированный
                            ежемесячный тариф с прозрачным списком работ и SLA по реакции.</p>
                    </details>
                </div>
            </div>
        </section>

        <section id="cta">
            <div className="glow-ambient glow-cta"></div>
            <div className="container cta-container">
                <h2 className="cta-title" data-i18n-html="cta_title_html">Готовы навести порядок<br />в бизнес-процессах?</h2>
                <p className="cta-copy" data-i18n="cta_copy">
                    Напишите мне в Telegram. Задам 3 коротких вопроса о вашей специфике, а через день наглядно
                    продемонстрирую архитектуру вашей будущей системы.
                </p>
                <a href="https://t.me/your_telegram" target="_blank" className="btn cta-button"
                    data-i18n="cta_button">Обсудить проект в Telegram</a>

                <div className="cta-badges-container">
                    <div className="cta-badges-track">
                        <div className="cta-badges-group">
                            <span className="badge badge-display" data-i18n="industry_1">Салоны красоты</span>
                            <span className="badge badge-display" data-i18n="industry_2">Автосервисы</span>
                            <span className="badge badge-display" data-i18n="industry_3">Медицинские центры</span>
                            <span className="badge badge-display" data-i18n="industry_4">Онлайн-платформы</span>
                            <span className="badge badge-display" data-i18n="industry_5">Фитнес-клубы</span>
                            <span className="badge badge-display" data-i18n="industry_6">Студии йоги</span>
                        </div>
                        <div className="cta-badges-group" aria-hidden="true">
                            <span className="badge badge-display" data-i18n="industry_1">Салоны красоты</span>
                            <span className="badge badge-display" data-i18n="industry_2">Автосервисы</span>
                            <span className="badge badge-display" data-i18n="industry_3">Медицинские центры</span>
                            <span className="badge badge-display" data-i18n="industry_4">Онлайн-платформы</span>
                            <span className="badge badge-display" data-i18n="industry_5">Фитнес-клубы</span>
                            <span className="badge badge-display" data-i18n="industry_6">Студии йоги</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
  );
}
