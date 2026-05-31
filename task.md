# Claude Code Prompt — Digital Lab Studio Style Overhaul

Вставь этот промпт в Claude Code и укажи путь к своему проекту.

---

## ПРОМПТ

```
Я хочу переработать визуальную часть и анимации моего существующего сайта в стиле студии Digital Lab (studio.digital-lab.ru). 
Контент, структура страниц и брендинг остаются моими — нужно только переписать CSS/JS анимационный слой.

Вот мой проект: [УКАЖИ ПУТЬ ИЛИ ОПИШИ СТЕК — например: Next.js, папка /src, главная страница index.tsx]

---

## ЦЕЛЬ

Внедрить анимационную систему в стиле premium russian digital studio:
— минималистичная типографика с кинетическими эффектами
— плавные scroll-driven анимации появления
— preloader с прогресс-каунтером
— marquee-полосы
— hover-эффекты на карточках и кнопках
— фоновое видео в hero

Все реализовать через CSS custom properties + Intersection Observer (без тяжёлых библиотек, разве что GSAP если уже есть в проекте).

---

## ЧТО НУЖНО СДЕЛАТЬ

### 1. PRELOADER

Создай оверлей preloader, который показывается при первой загрузке страницы:
- Фон: цвет фона сайта (не чёрный, взять из текущей палитры)
- По центру: счётчик от 0% до 100%, шрифт крупный (clamp(48px, 8vw, 120px)), тонкий weight (200–300), строчные буквы
- Логотип или название студии — позиция: верхний левый угол, появляется сразу
- Анимация: счётчик инкрементирует нелинейно (сначала быстро до ~60%, потом медленнее), общее время 1.8–2.2s
- По завершении: оверлей уезжает вверх (translateY(-100%)) с ease-in-out 0.6s, после чего удаляется из DOM
- После скрытия preloader'а — запускаются hero-анимации (добавить класс .page-loaded на <body>)
- Сохранить флаг в sessionStorage чтобы preloader не показывался при навигации между страницами

Код: отдельный файл /components/Preloader (или /src/preloader.js если vanilla), подключить в layout/_app

---

### 2. ТИПОГРАФИКА — КИНЕТИЧЕСКИЕ ЗАГОЛОВКИ

Для всех заголовков h1, h2 и элементов с классом .headline:
- Разбить текст на строки/слова через JS (SplitText вручную или через простой враппер)
- Каждая строка появляется снизу вверх: translateY(100%) → translateY(0) + opacity: 0→1
- Stagger между строками: 80ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — мягкий overshoot
- Trigger: Intersection Observer, порог 0.2
- Класс для управления: .text-reveal, атрибут data-delay для ручного сдвига

---

### 3. SCROLL REVEAL — ОБЩИЕ ЭЛЕМЕНТЫ

Система для всех блоков с классом .reveal (добавить на нужные секции):
- Начальное состояние: opacity: 0, translateY: 40px
- Финальное: opacity: 1, translateY: 0
- Duration: 0.7s, easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Stagger для дочерних элементов с .reveal-child: 60ms задержка между ними
- Реализовать через IntersectionObserver, один экземпляр на всю страницу
- once: true (анимация срабатывает один раз)

---

### 4. HERO SECTION — ФОНОВОЕ ВИДЕО

Если на странице есть .hero или первая секция без фона:
- Добавить <video> элемент: autoplay, muted, loop, playsinline, preload="auto"
- Позиция: absolute, 100%×100%, object-fit: cover, z-index: 0
- Поверх видео полупрозрачный оверлей: rgba(0,0,0, 0.35) или rgba(255,255,255,0.15) в зависимости от темы
- Fallback: poster-изображение пока видео не загрузится
- Добавить placeholder <div class="hero-video-placeholder"> с комментарием где подключить mp4
- Контент hero поверх видео: z-index: 1, позиционирование по текущей логике

---

### 5. ЧИСЛОВЫЕ СЧЁТЧИКИ

Для элементов с классом .counter или data-count="N":
- При входе в viewport — анимировать число от 0 до N
- Duration: 1.5s, easing: easeOutExpo (реализовать через requestAnimationFrame)
- Поддержка суффиксов: data-suffix="+" data-suffix="лет" data-suffix="%"
- Разделитель тысяч: toLocaleString()
- Файл: /utils/counter.js или встроить в главный скрипт

---

### 6. БЕСКОНЕЧНЫЙ MARQUEE

Для секций с партнёрами, тегами услуг, стеком технологий — добавить .marquee-track:
- Дублировать содержимое дважды (JS или CSS)
- Анимация: translateX(0) → translateX(-50%), linear, infinite
- Скорость: --marquee-speed: 30s (CSS переменная, легко менять)
- Пауза при hover: animation-play-state: paused
- Второй ряд (если нужен): движение в обратную сторону (animation-direction: reverse)
- Ширина элементов: auto, gap: clamp(24px, 4vw, 64px)

---

### 7. КАРТОЧКИ ПРОЕКТОВ — HOVER-ЭФФЕКТЫ

Для карточек с классом .card, .project-card или аналогов:
- Изображение внутри: transform scale(1) → scale(1.05) при hover, transition 0.6s ease
- Оверлей: opacity 0 → 1 при hover (цвет акцента с прозрачностью 0.7–0.85)
- Текст на оверлее: появляется translateY(12px) → translateY(0), delay 0.1s
- Сама карточка: тонкий border 1px → цвет акцента при hover
- Курсор: pointer
- Добавить data-category для фильтрации если карточек больше 4

---

### 8. КНОПКИ И CTA

Для всех .btn, button[type], a.cta:
- Primary кнопка: при hover — фон сдвигается через псевдоэлемент ::after (clip-path или translateX)
- Underline-кнопка (текстовая ссылка): линия под текстом — scaleX(0)→scaleX(1) при hover, transform-origin: left
- Стрелка в кнопке (если есть → или svg): translateX(0) → translateX(4px) при hover
- Все transitions: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)

---

### 9. НАВИГАЦИЯ

- При скролле вниз > 80px: добавить класс .nav--scrolled на <nav> или <header>
  — уменьшить padding: 20px → 12px, transition 0.3s
  — добавить backdrop-filter: blur(12px) + лёгкий фон с прозрачностью
- Мобильное меню: overlay на весь экран, ссылки появляются staggered (50ms)
- Активный пункт: подчёркивание через ::after scaleX(1)

---

### 10. ДЕКОРАТИВНЫЕ FLOATING ЭЛЕМЕНТЫ (опционально)

Если дизайн позволяет — добавить 2–4 декоративных SVG-иконки в hero или aside:
- Позиция: fixed или absolute, по краям экрана
- Лёгкое вращение/покачивание: @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(3deg)} }
- animation-duration: 4–6s, animation-timing-function: ease-in-out, infinite
- opacity: 0.15–0.3 (ненавязчиво)
- Добавить SVG-заглушки с комментарием для замены на реальные иконки

---

## ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ

**CSS:**
- Все анимационные переменные вынести в :root как CSS custom properties:
  --duration-fast: 0.3s
  --duration-base: 0.6s  
  --duration-slow: 1s
  --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1)
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
- Все анимации обернуть в @media (prefers-reduced-motion: no-preference) { }
  При prefers-reduced-motion: reduce — мгновенный переход без движения

**JS:**
- Vanilla JS или React хуки если проект на React — не тянуть лишние библиотеки
- Один IntersectionObserver для всех reveal-элементов
- Все анимации через CSS classes + JS toggle (не inline styles)
- Код разбить на модули: preloader.js, reveal.js, counter.js, marquee.js
- Если проект на Next.js — всё через useEffect + динамический импорт

**Производительность:**
- will-change: transform только на активно анимируемых элементах, убирать после завершения
- requestAnimationFrame для счётчиков
- Видео загружать через Intersection Observer (lazy)
- GPU-слои только через transform/opacity (не top/left/width)

---

## ЧТО НЕ ТРОГАТЬ

- Контент, тексты, изображения
- Цветовую палитру и брендинг (только анимировать существующие цвета)
- Семантику HTML и SEO-структуру
- Логику роутинга и компонентов
- Шрифты (если не просят)

---

## ПОРЯДОК РАБОТЫ

1. Сначала прочитай все файлы проекта и пойми текущую структуру
2. Создай файл ANIMATION_PLAN.md с планом изменений по файлам
3. Начни с CSS переменных и базовых стилей
4. Добавь Preloader
5. Добавь Reveal систему
6. Добавь компоненты по очереди (counter, marquee, hero-video)
7. Финально: hover-эффекты на карточках и кнопках
8. Проверь что ничего не сломано, запусти dev-сервер и опиши что получилось
```

---

## КАК ИСПОЛЬЗОВАТЬ

1. Открой Claude Code в своём проекте
2. Вставь промпт выше
3. В строке `[УКАЖИ ПУТЬ ИЛИ ОПИШИ СТЕК]` замени на реальное описание, например:
   - `Next.js 14, App Router, папка /app, TypeScript, Tailwind CSS`
   - `Vanilla HTML/CSS/JS, один файл index.html`
   - `Vue 3 + Vite, папка /src/views/Home.vue`
4. Если хочешь только часть — удали ненужные блоки из промпта

---

## ОПЦИОНАЛЬНЫЕ ДОПОЛНЕНИЯ (добавь к промпту если нужно)

**Если хочешь cursor-эффект:**
```
Добавь кастомный курсор: маленькая точка (8px) следует за мышью без задержки,
большой круг (40px) следует с задержкой через lerp (linear interpolation factor 0.12).
При hover на ссылках/кнопках — большой круг увеличивается до 60px и меняет mix-blend-mode: difference.
```

**Если хочешь page transitions:**
```
Добавь переходы между страницами: при клике на ссылку — оверлей выезжает снизу вверх (0.4s),
после смены страницы — уезжает вверх (0.4s). Цвет оверлея — акцентный цвет сайта.
```

**Если хочешь parallax:**
```
Для hero-изображения и декоративных элементов добавь parallax через scroll:
скорость 0.3–0.5 от скорости скролла, реализовать через transform: translateY() в scroll-event с throttle 16ms.
```
