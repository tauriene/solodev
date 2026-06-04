import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaseStudyReference from '../components/CaseStudyReference';
import { caseStudyBySlug } from '../data/caseStudy';

export default function CasePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState(localStorage.getItem('site-language') || 'ru');
  const caseData = caseStudyBySlug[slug];

  useEffect(() => {
    if (!caseData) {
      navigate('/cases', { replace: true });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

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
  }, [caseData, navigate]);

  if (!caseData) return null;

  const content = lang === 'en' ? caseData.en : caseData.ru;

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
        screensLabel={content.screensLabel}
        features={content.features}
        screenCaptions={content.screenCaptions}
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
