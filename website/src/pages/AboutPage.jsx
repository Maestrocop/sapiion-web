import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about');

  const manifestoItems = t('manifesto.items', { returnObjects: true });
  const cycleSteps = t('learningCycle.steps', { returnObjects: true });
  const contextItems = t('ai.contextItems', { returnObjects: true });
  const successItems = t('success.items', { returnObjects: true });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
            {t('hero.h1a')}{' '}
            <span className="text-brand-accent">{t('hero.h1b')}</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">{t('story.p1')}</p>
            <p className="text-slate-600 leading-relaxed mb-5">{t('story.p2')}</p>
            <p className="text-slate-600 leading-relaxed mb-5">{t('story.p3')}</p>
            <p className="text-slate-600 leading-relaxed mb-5">{t('story.p4')}</p>
            <p className="text-slate-600 leading-relaxed">{t('story.p5')}</p>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">{t('belief.h2')}</h2>
          <blockquote className="border-l-4 border-brand-accent pl-6 mb-8">
            <p className="text-xl text-navy-900 leading-relaxed italic">
              {t('belief.quote')}
            </p>
          </blockquote>
          <p className="text-slate-600 leading-relaxed mb-4">{t('belief.sub')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-slate-100">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">{t('belief.traditionalLabel')}</p>
              <p className="text-slate-600 italic">{t('belief.traditionalQ')}</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-brand-accent/30">
              <p className="text-brand-teal text-xs uppercase tracking-wider mb-2">{t('belief.sapiionLabel')}</p>
              <p className="text-navy-900 italic">{t('belief.sapiionQ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">{t('manifesto.label')}</p>
          <div className="flex flex-col gap-6 mb-10">
            {manifestoItems.map(({ label, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="text-brand-accent text-lg mt-0.5 shrink-0">◆</span>
                <div>
                  <p className="text-white font-semibold mb-1">{label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-navy-700 rounded-xl p-6 bg-navy-800">
            <p className="text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('manifesto.box1') }}
            />
            <p className="text-slate-300 leading-relaxed mt-4">
              {t('manifesto.box2')}
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING CYCLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('learningCycle.h2')}</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">{t('learningCycle.body')}</p>
          <div className="flex flex-col gap-2">
            {cycleSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                    {i + 1}
                  </div>
                  {i < cycleSteps.length - 1 && <div className="w-px h-4 bg-slate-200" />}
                </div>
                <p className={`text-sm font-medium ${i === 0 || i === cycleSteps.length - 1 ? 'text-brand-accent' : 'text-navy-900'}`}>
                  {step}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-4 mt-1">
              <div className="w-8 flex justify-center">
                <span className="text-brand-accent text-lg">↺</span>
              </div>
              <p className="text-slate-400 text-xs italic">{t('learningCycle.repeat')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">{t('ai.label')}</p>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4 leading-snug">{t('ai.h2')}</h2>
          <p className="text-slate-600 leading-relaxed mb-4">{t('ai.body1')}</p>
          <p className="text-slate-600 leading-relaxed mb-8">{t('ai.body2')}</p>
          <div className="grid grid-cols-2 gap-3 mb-10">
            {contextItems.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-slate-100">
                <span className="text-brand-accent text-sm shrink-0">◆</span>
                <span className="text-navy-900 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('ai.teachersLabel')}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{t('ai.teachersBody')}</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('ai.studentsLabel')}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{t('ai.studentsBody')}</p>
            </div>
          </div>
          <div className="bg-navy-900 rounded-xl p-6 text-white mb-6">
            <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">{t('ai.exampleLabel')}</p>
            <p className="text-white font-medium text-sm mb-2">{t('ai.exampleTitle')}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{t('ai.exampleBody')}</p>
            <p className="text-brand-accent text-sm font-medium">{t('ai.exampleFooter')}</p>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">{t('ai.future')}</p>
          <p className="text-slate-600 leading-relaxed mb-1">{t('ai.principle1')}</p>
          <p className="font-semibold text-navy-900">{t('ai.principle2')}</p>
        </div>
      </section>

      {/* SUCCESS */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">{t('success.h2')}</h2>
          <p className="text-slate-400 mb-10">{t('success.sub')}</p>
          <div className="flex flex-col gap-4">
            {successItems.map(({ role, text }) => (
              <div key={role} className="flex items-start gap-3">
                <span className="text-brand-accent mt-0.5 shrink-0">✓</span>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-white">{role}</strong> {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-navy-800 rounded-xl border border-navy-700">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">{t('success.principleLabel')}</p>
            <p className="text-white italic leading-relaxed">{t('success.principle')}</p>
          </div>
        </div>
      </section>

      {/* BRAND NOTE */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <span className="text-2xl">◆</span>
            <div>
              <p className="font-semibold text-navy-900 mb-2">{t('brand.name')}</p>
              <p className="text-slate-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('brand.body') }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('cta.h2')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
            >
              {t('cta.demoBtn')}
            </Link>
            <a
              href="mailto:hello@sapiion.ai"
              className="inline-block border border-slate-200 text-navy-900 font-medium px-8 py-3 rounded-lg hover:border-slate-300 transition-colors"
            >
              {t('cta.emailBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
