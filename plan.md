# Редизайн страницы /services

## Контекст и проблемы

Страница `/services` написана другим исполнителем и имеет ряд критических несоответствий с остальным сайтом:

- **Нет своих CSS-стилей** — все классы вроде `services-cards-section`, `services-grid`, `service-card`, `services-process-section` и т.д. не определены в `index.css`. Страница висит на стилях от `pain-card` и `card`, что создаёт визуальный разрыв с остальными страницами.
- **Нет анимаций при ховере на карточках** — классы `service-card--site`, `service-card--agent` и т.п. тоже не определены, а ховер эффекты как на главной (`::before`, `::after`, watermark brighten) отсутствуют.
- **Нет двух карточек**: «Бот в Max» и «Mini app в Max».
- **Структура JSX использует `is-visible` сразу** — анимации scroll-in не работают корректно, элементы не появляются анимированно при входе в экран.
- **Секция process** — карточки с шагами (`services-process-item`) нет в CSS, `card`-стиль частично работает, но без уникальных акцентов.
- **CTA-секция** — `services-cta-section`, `services-cta-card`, `services-cta-mark` — не определены в CSS, выглядит как «голый» текст.

---

## Предлагаемые изменения

### 1. Новые карточки услуг: «Бот в Max» и «Mini app в Max»

Добавить 2 новые карточки в массив `services` в [Services.jsx](file:///c:/Users/Andrej/development/projects/nexiumdev/src/pages/Services.jsx):

- **Бот в Max** (`key: 'maxbot'`) — бот для мессенджера Max (экс-ICQ/ВКонтакте), кнопки, сценарии, автоответы, аналитика
- **Mini App в Max** (`key: 'maxmini'`) — полноценное мини-приложение внутри Max с каталогом, корзиной и личным кабинетом

Иконки — `FiMessageSquare` и `FiLayout` из `react-icons/fi`.

Это сделает сетку из **6 карточек**.

### 2. Полный рефактор CSS для страницы Services

Добавить в [index.css](file:///c:/Users/Andrej/development/projects/nexiumdev/src/index.css) полноценный блок стилей `/* === SERVICES PAGE === */`:

#### Общая структура страницы
```css
.services-page { padding-top: var(--header-height); }
.services-cards-section { display: block; min-height: auto; padding: ... }
```

#### Сетка карточек — 3 колонки на десктопе, 2 на планшете, 1 на мобильном
```css
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
```

#### Карточки услуг с полноценным ховером как на главной
Карточки наследуют `pain-card`-подход, но с расширениями:
- **Верхняя полоса accent** — `::after` с `height: 2px`, gradient, появляется на hover
- **Внутреннее свечение** — `::before` radial-gradient, `opacity: 0 → 1` на hover
- **`translateY(-8px)` + `box-shadow`** — тот же паттерн что и `.pain-card:hover`
- **Иконка** — при ховере: `color: var(--accent)`, небольшой `scale(1.1)` + glow filter
- **Watermark цифра** — при ховере светлеет до `rgba(200, 241, 53, 0.06)` (как pain-card)
- **Теги** — pill-стиль, как `.case-card-tag`, чуть компактнее
- **Feature list** — иконки `FiCheck` окрашиваются в accent при ховере
- **Metric badge** — `.pain-card-consequence` стиль, уже используется, работает
- **Кнопка «Заказать»** — стиль `cg-btn` (как кнопки кейсов), со стрелкой

#### Секция Process — 3 шага
```css
.services-process-section { ... }
.services-process-grid { display: grid; grid-template-columns: 1fr 1fr; ... }
.services-process-intro { ... }
.services-process-list { display: flex; flex-direction: column; gap: 16px; }
.services-process-item { display: flex; gap: 20px; align-items: flex-start; ... }
```
Шаги — горизонтальные карточки с большой номерной меткой слева (`font: Unbounded, accent-color`), текстом справа. Ховер поднимает карточку на -4px.

#### CTA-блок
```css
.services-cta-section { display: block; min-height: auto; ... }
.services-cta-card { 
  background: var(--bg-card);
  border: 1px solid var(--border-color); 
  border-radius: 24px;
  /* gradient border-top accent */
}
.services-cta-mark { /* иконка FiLayers в accent-кольце */ }
```
Стиль — как `.cta-container` на главной, но в карточке.

### 3. Рефактор JSX — анимации scroll-in

Убрать `is-visible` с карточек жёстко — пусть работают через IntersectionObserver (уже настроен в `script.js`). Добавить `animate-on-scroll animate-slide` **без** `is-visible`. Проверить, что `script.js` обрабатывает `.services-page .animate-on-scroll`.

Добавить `transition-delay` на карточки через CSS:
```css
.services-grid .service-card:nth-child(1) { transition-delay: 0.05s; }
.services-grid .service-card:nth-child(2) { transition-delay: 0.12s; }
/* ... до 6 */
```

### 4. Заголовочная секция — соответствие дизайну Cases

Текущий заголовок копирует структуру `.cases-hero`. Добавить стиль:
```css
.services-section-head { 
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start; 
  gap: 24px; 
  margin-bottom: 48px; 
}
```
Правый текст (описание) — `max-width: 440px`, цвет `var(--text-sec)`.

---

## Файлы к изменению

### [MODIFY] [Services.jsx](file:///c:/Users/Andrej/development/projects/nexiumdev/src/pages/Services.jsx)
- Добавить 2 новые карточки (`maxbot`, `maxmini`) в массив `services`
- Добавить импорты `FiMessageSquare`, `FiLayout`
- Убрать `is-visible` с `animate-on-scroll` элементов (пусть IntersectionObserver добавляет)
- Кнопку `service-order-btn` перевести на класс `cg-btn` для единообразия

### [MODIFY] [index.css](file:///c:/Users/Andrej/development/projects/nexiumdev/src/index.css)
- Добавить новый блок `/* === SERVICES PAGE === */` (~250–300 строк)
- Все классы, которые используются в Services.jsx и ранее не были определены:
  - `.services-page`, `.services-cards-section`, `.services-section-head`
  - `.services-grid`, `.service-card`, `.service-card-top`, `.service-card-icon`
  - `.service-card-body`, `.service-card-lead`, `.service-card-tags`, `.service-card-list`
  - `.service-card-footer`, `.service-card-metric`, `.service-order-btn`
  - `.services-process-section`, `.services-process-grid`, `.services-process-intro`
  - `.services-process-list`, `.services-process-item`
  - `.services-cta-section`, `.services-cta-card`, `.services-cta-mark`, `.services-cta-button`
- Responsive: на планшете (≤992px) сетка 2 колонки, на мобильном (≤768px) 1 колонка

---

## Верификация

1. Запустить `npm run dev`, открыть `/services`
2. Проверить: все 6 карточек отображаются, ховер работает (подъём + свечение + accent-полоса)
3. Проверить анимации scroll-in — карточки появляются по одной с задержкой
4. Проверить CTA-блок — выглядит как карточка со свечением
5. Проверить адаптив — 3 → 2 → 1 колонка

---

## Открытые вопросы

> [!IMPORTANT]
> Нужно ли добавить ссылки на кейсы для новых карточек «Бот в Max» и «Mini app в Max», или пока без них?

> [!NOTE]
> Иконки для Max — в дизайне сайта нет логотипа Max. Предлагаю использовать `FiMessageSquare` для бота и `FiLayout` для Mini App. Если есть другие предпочтения — скажите.
