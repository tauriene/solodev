function switchTab(paneId, btnElement) {
    const buttons = document.querySelectorAll('.tabs-wrapper .badge');
    buttons.forEach((btn) => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const panes = document.querySelectorAll('.panel-pane');
    panes.forEach((pane) => pane.classList.remove('active'));

    const activePane = document.getElementById(paneId);
    if (activePane) {
        activePane.classList.add('active');
    }
}

const tabs = document.querySelectorAll('.tabs-wrapper .badge[data-pane]');
let autoSwitchInterval;
let currentTabIndex = 0;

function startAutoSwitch() {
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

// Typewriter effect
const textToType = "Начните их обрабатывать!";
const typewriterElement = document.querySelector('.typewriter');
let typeIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typewriterElement) return;

    if (!isDeleting) {
        typewriterElement.textContent = textToType.substring(0, typeIndex + 1);
        typeIndex++;
        if (typeIndex === textToType.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000); // Pause before deleting
            return;
        }
    } else {
        typewriterElement.textContent = textToType.substring(0, typeIndex - 1);
        typeIndex--;
        if (typeIndex === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500); // Pause before typing again
            return;
        }
    }

    const speed = isDeleting ? 40 : 100;
    setTimeout(typeWriter, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();

    // --- Анимации при скролле ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Анимируем только один раз
            }
        });
    }, observerOptions);

    // Текста: плавно появляются (затухание)
    const textElements = document.querySelectorAll('h1, h2, h3, p, .hero-lead, .section-lead, .cta-title, .cta-copy, .badge-static');
    textElements.forEach(el => {
        el.classList.add('animate-on-scroll', 'animate-fade');
        observer.observe(el);
    });

    // Карточки: выезжают
    const cardElements = document.querySelectorAll('.card, .hero-actions');
    cardElements.forEach(el => {
        el.classList.add('animate-on-scroll', 'animate-slide');
        observer.observe(el);
    });
});
