import { useEffect, useState } from 'react';
import CaseStudyReference from '../components/CaseStudyReference';
import { caseLab } from '../data/caseLab';

export default function CaseLabPage() {
  const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');

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
      document.querySelectorAll('.lang-btn').forEach((btn) => {
        if (!btn.dataset.langBound) {
          btn.dataset.langBound = 'true';
          btn.addEventListener('click', () => {
            setTimeout(() => {
              window.dispatchEvent(new Event('languageChanged'));
            }, 50);
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

  const content = lang === 'en' ? caseLab.en : caseLab.ru;

  return (
    <main className="lab-main">
      <CaseStudyReference
        title={content.title}
        eyebrow={content.eyebrow}
        description={content.description}
        stats={content.stats}
        role={content.role}
        duration={content.duration}
        roleLabel={content.roleLabel}
        durationLabel={content.durationLabel}
        features={content.features}
        tags={content.tags}
        images={content.images}
        challenge={content.challenge}
        backLabel={content.backLabel}
        challengeLabel={content.challengeLabel}
        solutionLabel={content.solutionLabel}
      />
    </main>
  );
}
