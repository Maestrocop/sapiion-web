import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SapiionLayerDiagram from '../components/SapiionLayerDiagram';

export default function WhySapiionPage() {
  const { t } = useTranslation('why');

  const patternSteps = t('pattern.steps', { returnObjects: true });
  const haveItems = t('realGap.haveItems', { returnObjects: true });
  const missingItems = t('realGap.missingItems', { returnObjects: true });
  const connectedItems = t('whatSapiionIs.items', { returnObjects: true });
  const comparisonRows = t('comparison.rows', { returnObjects: true });
  const accreditationPoints = t('accreditation.points', { returnObjects: true });
  const implementationSteps = t('implementation.steps', { returnObjects: true });
  const gdprItems = t('gdpr.items', { returnObjects: true });
  const roadmapItems = t('gdpr.roadmapItems', { returnObjects: true });
  const teacherItems = t('ai.teacherItems', { returnObjects: true });
  const studentItems = t('ai.studentItems', { returnObjects: true });
  const calloutItems = t('internshipCallout.items', { returnObjects: true });
  const livingSystemLines = t('livingSystem.lines', { returnObjects: true });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
            {t('hero.h1a')}<br />
            {t('hero.h1b')}{' '}
            <span className="text-brand-accent">{t('hero.h1c')}</span>{' '}
            {t('hero.h1d')}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t('hero.sub')}
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-16 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-navy-900 leading-snug mb-4">
            &ldquo;{t('manifesto.quoteA')} {t('manifesto.quoteB')}&rdquo;
          </p>
          <p className="text-brand-teal text-sm font-medium">
            {t('manifesto.sub')}
          </p>
        </div>
      </section>

      {/* WHY INITIATIVES FAIL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('pattern.label')}</p>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            {t('pattern.h2')}
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {t('pattern.body')}
          </p>
          <div className="relative">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-100" />
            <div className="flex flex-col gap-5">
              {patternSteps.map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 z-10">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 bg-navy-900 rounded-2xl p-8 text-white text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
              {t('pattern.quoteA')}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-brand-accent leading-snug mb-6">
              {t('pattern.quoteB')}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              {t('pattern.quoteSub')}
            </p>
          </div>
        </div>
      </section>

      {/* THE REAL GAP */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('realGap.label')}</p>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            {t('realGap.h2')}
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {t('realGap.body')}
          </p>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('realGap.haveLabel')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {haveItems.map((label) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-300 shadow-sm">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-3">{t('realGap.missingLabel')}</p>
          <div className="flex flex-col gap-3 mb-6">
            {missingItems.map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl px-5 py-5 border-2 border-amber-200">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">✗</span>
                  <p className="text-navy-900 font-semibold text-sm">{label}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pl-6">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-navy-900 font-semibold text-base mt-2">
            {t('realGap.conclusion')}
          </p>
        </div>
      </section>

      {/* IMPLEMENTATION PLATFORM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('whatSapiionIs.label')}</p>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            {t('whatSapiionIs.h2')}
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed max-w-2xl">
            {t('whatSapiionIs.body1')}
          </p>
          <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {t('whatSapiionIs.body2')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {connectedItems.map((item) => (
              <div key={item} className="bg-white rounded-xl px-4 py-3 text-center border border-slate-300 shadow-sm">
                <p className="text-navy-900 text-xs font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-brand-teal text-sm font-medium text-center">
            {t('whatSapiionIs.connectedBy')}
          </p>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed text-center max-w-xl mx-auto">
            {t('whatSapiionIs.connectedBy2')}
          </p>
          <p className="mt-2 text-slate-400 text-xs leading-relaxed text-center max-w-xl mx-auto">
            {t('whatSapiionIs.employersNote')}
          </p>
          <p className="mt-6 text-slate-500 text-sm italic leading-relaxed text-center max-w-xl mx-auto border-t border-slate-100 pt-5">
            {t('whatSapiionIs.teacherNote')}
          </p>
        </div>
      </section>

      {/* WHERE SAPIION FITS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('whereFits.label')}</p>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            {t('whereFits.h2')}
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            {t('whereFits.body')}
          </p>
          <SapiionLayerDiagram />
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">
            {t('comparison.h2')}
          </h2>
          <div className="rounded-2xl border border-slate-300 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-100">
              <div className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('comparison.todayCol')}</div>
              <div className="px-6 py-3 text-xs font-semibold text-brand-teal uppercase tracking-wider border-l border-slate-100">{t('comparison.sapiionCol')}</div>
            </div>
            {comparisonRows.map(([before, after], i) => (
              <div key={i} className={`grid grid-cols-2 ${i < comparisonRows.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="px-6 py-4 text-sm text-slate-500 flex items-start gap-2">
                  <span className="text-slate-300 mt-0.5 shrink-0">—</span>
                  {before}
                </div>
                <div className="px-6 py-4 text-sm text-navy-900 border-l border-slate-100 flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5 shrink-0">✓</span>
                  {after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS LMS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('vsLms.h2')}</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {t('vsLms.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-300 shadow-sm">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">{t('vsLms.lmsLabel')}</p>
              <p className="text-slate-700 italic">{t('vsLms.lmsQ')}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-brand-accent/30">
              <p className="text-brand-teal text-xs uppercase tracking-wider mb-3">{t('vsLms.sapiionLabel')}</p>
              <p className="text-navy-900 italic">{t('vsLms.sapiionQ')}</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('vsLms.footer') }}
          />
        </div>
      </section>

      {/* INTERNSHIP CALLOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-900 rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t('internshipCallout.h2')}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
              <p className="text-slate-400 italic text-sm">{t('internshipCallout.body1')}</p>
              <span className="text-slate-600 hidden md:block">·</span>
              <p className="text-brand-accent font-semibold text-sm">{t('internshipCallout.body2')}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {calloutItems.map(item => (
                <span key={item} className="bg-navy-800 text-slate-300 text-sm px-4 py-2 rounded-full border border-navy-700">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              {t('internshipCallout.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* VS SIS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('vsSis.h2')}</h2>
          <p className="text-slate-600 leading-relaxed">{t('vsSis.body1')}</p>
          <p className="text-slate-600 mt-4 leading-relaxed">{t('vsSis.body2')}</p>
          <p className="text-slate-600 mt-3 leading-relaxed">{t('vsSis.body3')}</p>
        </div>
      </section>

      {/* AI DIFFERENTIATOR */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{t('ai.h2')}</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">{t('ai.body1')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-navy-800 rounded-2xl p-6 border border-navy-700">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">{t('ai.mostAiLabel')}</p>
              <p className="text-slate-300 italic">{t('ai.mostAiQ')}</p>
            </div>
            <div className="bg-navy-800 rounded-2xl p-6 border border-brand-accent/30">
              <p className="text-brand-accent text-xs uppercase tracking-wider mb-3">{t('ai.sapiionLabel')}</p>
              <p className="text-white italic">{t('ai.sapiionQ')}</p>
            </div>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">{t('ai.body2')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-navy-800 rounded-xl p-5 border border-navy-700">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('ai.teachersLabel')}</p>
              <div className="flex flex-col gap-2">
                {teacherItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-brand-accent text-sm mt-0.5 shrink-0">✓</span>
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-800 rounded-xl p-5 border border-navy-700">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('ai.studentsLabel')}</p>
              <div className="flex flex-col gap-2">
                {studentItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-brand-accent text-sm mt-0.5 shrink-0">✓</span>
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-brand-accent/40 rounded-xl p-6">
            <p className="text-slate-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('ai.principle') }}
            />
          </div>
        </div>
      </section>

      {/* ACCREDITATION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('accreditation.h2')}</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">{t('accreditation.body')}</p>
          <div className="grid grid-cols-1 gap-3">
            {accreditationPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-300 shadow-sm">
                <span className="text-brand-accent font-bold">✓</span>
                <p className="text-slate-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-500 text-sm italic">{t('accreditation.footer')}</p>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('implementation.h2')}</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">{t('implementation.body')}</p>
          <div className="relative">
            <div className="absolute left-[6.5rem] top-0 bottom-0 w-px bg-slate-300 hidden md:block" />
            <div className="absolute left-[6.5rem] bottom-0 -translate-x-1/2 translate-y-full text-slate-400 text-xs hidden md:block leading-none">▼</div>
            <div className="flex flex-col gap-6">
              {implementationSteps.map(({ period, text }) => (
                <div key={period} className="flex items-start gap-0">
                  <span className="text-xs font-semibold text-brand-teal w-20 shrink-0 pt-0.5 text-right">{period}</span>
                  <div className="w-4 h-px bg-slate-400 mt-[10px] ml-2 shrink-0 hidden md:block" />
                  <div className="flex items-start gap-2 ml-4">
                    <div className="w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GDPR */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">{t('gdpr.h2')}</h2>
          <p className="text-slate-400 text-sm mb-8">{t('gdpr.sub')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gdprItems.map(({ title, body }) => (
              <div key={title} className="bg-navy-800 rounded-xl p-5 border border-navy-700">
                <p className="text-brand-accent text-sm font-semibold mb-1">✅ {title}</p>
                <p className="text-slate-300 text-sm">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-navy-700 rounded-xl p-6">
            <p className="text-white text-sm font-semibold mb-1">{t('gdpr.roadmapTitle')}</p>
            <p className="text-slate-400 text-xs mb-4">{t('gdpr.roadmapSub')}</p>
            <div className="flex flex-col gap-2">
              {roadmapItems.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-slate-500">🗺</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION IS A LIVING SYSTEM */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">
            {t('livingSystem.h2')}
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
            {livingSystemLines.map((line, i) => (
              <p key={i} className="text-slate-500 text-lg italic">{line}</p>
            ))}
          </div>
          <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto text-base">
            {t('livingSystem.body')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{t('cta.h2')}</h2>
          <Link
            to="/demo"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            {t('cta.btn')}
          </Link>
        </div>
      </section>
    </>
  );
}
