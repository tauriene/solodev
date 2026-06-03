import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { featuredCase } from '../data/cases';

export default function Home() {
    const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const scriptSrc = import.meta.env.BASE_URL + 'script.js';
        let script = document.querySelector(`script[src="${scriptSrc}"]`);
        if (!script) {
            script = document.createElement('script');
            script.src = scriptSrc;
            document.body.appendChild(script);
        }

        const handleLangChange = () => {
            setLang(localStorage.getItem('site-language') || 'ru');
        };
        window.addEventListener('storage', handleLangChange);
        window.addEventListener('languageChanged', handleLangChange);

        const observer = new MutationObserver(() => {
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (!btn.dataset.langBound) {
                    btn.dataset.langBound = 'true';
                    btn.addEventListener('click', () => {
                        setTimeout(() => window.dispatchEvent(new Event('languageChanged')), 50);
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            window.removeEventListener('storage', handleLangChange);
            window.removeEventListener('languageChanged', handleLangChange);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const fullText = lang === 'en' ? 'Start processing them now!' : 'Начните их обрабатывать!';
        let index = 0;
        let deleting = false;
        let timeoutId;

        const tick = () => {
            if (!deleting) {
                const next = fullText.slice(0, index + 1);
                setTypedText(next);
                index += 1;

                if (index === fullText.length) {
                    deleting = true;
                    timeoutId = setTimeout(tick, 2000);
                    return;
                }
            } else {
                const next = fullText.slice(0, Math.max(index - 1, 0));
                setTypedText(next);
                index -= 1;

                if (index <= 0) {
                    deleting = false;
                    index = 0;
                    timeoutId = setTimeout(tick, 500);
                    return;
                }
            }

            timeoutId = setTimeout(tick, deleting ? 40 : 100);
        };

        setTypedText('');
        timeoutId = setTimeout(tick, 200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [lang]);

    const t = (ru, en) => lang === 'en' ? en : ru;

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
                        <span className="typewriter text-accent" data-managed-by-react="true">{typedText}</span>
                    </h1>
                    <p className="hero-lead" data-i18n="hero_lead">
                        Помогаем салонам, сервисам и клиникам автоматизировать хаос. Настраиваем систему онлайн-записи и
                        умных ботов, которые удерживают клиентов, пока вы заняты операционкой.
                    </p>
                    <div className="hero-actions">
                        <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="btn" data-i18n="hero_cta">Запросить
                            демо-версию</a>
                        <div className="hero-note" data-i18n-html="hero_note_html">
                            Покажем работающий прототип под вашу нишу <span className="text-accent">до оплаты</span>.
                        </div>
                    </div>
                </div>
            </section>

            <section id="pain-points">
                <div className="container">
                    <h2 className="pain-section-label" data-i18n="pain_title">Знакомая ситуация?</h2>
                    <div className="pain-list" role="list">
                        <article className="pain-row" role="listitem">
                            <span className="pain-num">01</span>
                            <div className="pain-copy">
                                <h3 className="pain-row-title" data-i18n="pain_card_1_title">Никто не отвечает</h3>
                                <p className="pain-row-desc" data-i18n="pain_card_1_copy">Клиенты пишут ночью или пока администратор занят
                                    звонком. Каждый пропущенный контакт — готовый лид конкурента.</p>
                            </div>
                            <span className="pain-row-consequence" data-i18n="pain_card_1_consequence">клиент уходит не дождавшись ответа</span>
                        </article>
                        <article className="pain-row" role="listitem">
                            <span className="pain-num">02</span>
                            <div className="pain-copy">
                                <h3 className="pain-row-title" data-i18n="pain_card_2_title">Хаос в каналах</h3>
                                <p className="pain-row-desc" data-i18n="pain_card_2_copy">Заявки в WhatsApp, Telegram, соцсетях и личных
                                    номерах. База не ведётся, аналитики ноль.</p>
                            </div>
                            <span className="pain-row-consequence" data-i18n="pain_card_2_consequence">теряется каждая третья заявка</span>
                        </article>
                        <article className="pain-row" role="listitem">
                            <span className="pain-num">03</span>
                            <div className="pain-copy">
                                <h3 className="pain-row-title" data-i18n="pain_card_3_title">Нет контроля</h3>
                                <p className="pain-row-desc" data-i18n="pain_card_3_copy">Не видно сколько обращений пришло, сколько
                                    потеряно и чья это вина.</p>
                            </div>
                            <span className="pain-row-consequence" data-i18n="pain_card_3_consequence">деньги утекают незаметно</span>
                        </article>
                        <article className="pain-row" role="listitem">
                            <span className="pain-num">04</span>
                            <div className="pain-copy">
                                <h3 className="pain-row-title" data-i18n="pain_card_4_title">Рутина съедает время</h3>
                                <p className="pain-row-desc" data-i18n="pain_card_4_copy">Менеджеры вручную отвечают на одни и те же вопросы, подтверждают записи и пересылают контакты между чатами.</p>
                            </div>
                            <span className="pain-row-consequence" data-i18n="pain_card_4_consequence">команда занята не продажей, а перепиской</span>
                        </article>
                        <article className="pain-row" role="listitem">
                            <span className="pain-num">05</span>
                            <div className="pain-copy">
                                <h3 className="pain-row-title" data-i18n="pain_card_5_title">После заявки тишина</h3>
                                <p className="pain-row-desc" data-i18n="pain_card_5_copy">Клиент оставил контакт, но дальше нет ни напоминаний, ни догрева, ни понятного сценария возврата в диалог.</p>
                            </div>
                            <span className="pain-row-consequence" data-i18n="pain_card_5_consequence">теплые лиды остывают сами по себе</span>
                        </article>
                    </div>
                </div>
            </section>

            <section id="cases">
                <div className="container">
                    <h2 data-i18n="cases_title">Кейсы и результаты</h2>
                    <p className="section-lead" data-i18n="cases_lead">Реальные бизнесы, реальные цифры. Считаем только
                        измеримые изменения после внедрения.</p>
                    <div className="cases-grid cases-grid-single">
                        <article className="card case-card case-card-featured">
                            <div className="case-card-media">
                                <img
                                    src={featuredCase.image}
                                    alt={featuredCase.imageAltRu}
                                    className="case-card-image"
                                />
                            </div>
                            <div className="case-card-copy">
                                <div className="case-meta">{t(featuredCase.categoryRu, featuredCase.categoryEn)}</div>
                                <h3 className="case-metric-title">{t(featuredCase.titleRu, featuredCase.titleEn)}</h3>
                                <p className="case-feature-copy">{t(featuredCase.summaryRu, featuredCase.summaryEn)}</p>
                                <div className="case-card-tags">
                                    {(lang === 'en' ? featuredCase.tagsEn : featuredCase.tagsRu).map((tag) => (
                                        <span key={tag} className="case-card-tag">{tag}</span>
                                    ))}
                                </div>
                                <p className="case-footnote">{t(featuredCase.detailsRu, featuredCase.detailsEn)}</p>
                                <Link to={`/cases/${featuredCase.slug}`} className="cg-btn" data-i18n="case_open">
                                    <span>{t('Открыть кейс', 'Open case')}</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </article>
                    </div>
                    <div className="cases-actions">
                        <Link to="/cases" className="btn" data-i18n="cases_more_cta">Смотреть еще</Link>
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
                                    <FiArrowLeft size={24} />
                                </button>
                                <div className="mobile-service-label" data-mobile-service-label></div>
                                <button className="mobile-nav-btn" type="button" data-mobile-nav="next" aria-label="Next service">
                                    <FiArrowRight size={24} />
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
                    <h2 data-i18n="testimonials_title">{t('Отзывы клиентов', 'Client Reviews')}</h2>
                    <p className="section-lead" data-i18n="testimonials_lead">{t('Реальные слова владельцев бизнеса — без правок и прикрас.', 'Real words from business owners — unedited and unfiltered.')}</p>

                    <div className="testi-grid" id="testi-grid">
                        <div className="testi-card card">
                            <div className="testi-quote-mark">&ldquo;</div>
                            <p className="testi-text">{t(
                                'Раньше теряли по 30–40 заявок в месяц — люди писали ночью, а утром уже уходили к конкурентам. После внедрения CRM-системы пропущенные обращения упали до трёх. Это просто другой уровень.',
                                'We used to lose 30–40 leads per month — people wrote at night and by morning they\'d gone to competitors. After implementing the CRM system, missed contacts dropped to three. It\'s just a different level.'
                            )}</p>
                            <div className="testi-footer">
                                <div className="testi-author">
                                    <img className="testi-avatar" src="/avatar_ilya.png" alt="Илья" />
                                    <div className="testi-author-info">
                                        <span className="testi-name">{t('Илья Романов', 'Ilya Romanov')}</span>
                                        <span className="testi-role">{t('Владелец автосервиса', 'Auto Service Owner')}</span>
                                    </div>
                                </div>
                                <Link to="/cases/crm" className="cg-btn testi-btn">
                                    <span>{t('Кейс', 'Case study')}</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>

                        <div className="testi-card card">
                            <div className="testi-quote-mark">&ldquo;</div>
                            <p className="testi-text">{t(
                                'Мы работаем в очень конкурентной нише бьюти. Ключевая боль — отмены. Было 28%, стало 9% за шесть недель. Telegram-бот буквально сам напоминает клиентам и переносит записи. Мои администраторы наконец-то занимаются гостями, а не телефоном.',
                                'We work in a very competitive beauty niche. The key pain was cancellations — 28%, down to 9% in six weeks. The Telegram bot literally reminds clients and reschedules on its own. My admins finally focus on guests, not the phone.'
                            )}</p>
                            <div className="testi-footer">
                                <div className="testi-author">
                                    <img className="testi-avatar" src="/avatar_marina.png" alt="Марина" />
                                    <div className="testi-author-info">
                                        <span className="testi-name">{t('Марина Соколова', 'Marina Sokolova')}</span>
                                        <span className="testi-role">{t('Управляющая салоном', 'Salon Manager')}</span>
                                    </div>
                                </div>
                                <Link to="/cases/crm" className="cg-btn testi-btn">
                                    <span>{t('Кейс', 'Case study')}</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>

                        <div className="testi-card card">
                            <div className="testi-quote-mark">&ldquo;</div>
                            <p className="testi-text">{t(
                                'До запуска нового сайта половина клиентов уходила прямо из каталога — неудобная корзина, непонятное оформление. После редизайна конверсия выросла на 18%. Люди стали заказывать больше и возвращаться повторно. Для нас это ощутимо в деньгах.',
                                'Before the new site, half of our customers dropped off right in the catalog — a clunky cart, confusing checkout. After the redesign, conversion jumped 18%. People started ordering more and coming back. For us, that is real money.'
                            )}</p>
                            <div className="testi-footer">
                                <div className="testi-author">
                                    <img className="testi-avatar" src="/avatar_oleg.png" alt="Олег" />
                                    <div className="testi-author-info">
                                        <span className="testi-name">{t('Олег Павлов', 'Oleg Pavlov')}</span>
                                        <span className="testi-role">{t('Владелец магазина', 'Flower Shop Owner')}</span>
                                    </div>
                                </div>
                                <Link to="/cases/crm" className="cg-btn testi-btn">
                                    <span>{t('Кейс', 'Case study')}</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="testi-mobile-nav" aria-label="Testimonials navigation">
                        <button className="mobile-nav-btn" id="testi-prev" type="button" aria-label="Previous testimonial">
                            <FiArrowLeft size={20} />
                        </button>
                        <div className="testi-dots" id="testi-dots">
                            <span className="testi-dot active"></span>
                            <span className="testi-dot"></span>
                            <span className="testi-dot"></span>
                        </div>
                        <button className="mobile-nav-btn" id="testi-next" type="button" aria-label="Next testimonial">
                            <FiArrowRight size={20} />
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
                    <a href="https://t.me/nexiumdm" target="_blank" rel="noreferrer" className="btn cta-button"
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
