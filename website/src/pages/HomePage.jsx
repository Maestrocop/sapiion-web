import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ClosedLoopDiagram from '../components/ClosedLoopDiagram';

export default function HomePage() {
  const { t } = useTranslation('home');

  const pillars = t('solution.pillars', { returnObjects: true });
  const audiences = t('forWhom.audiences', { returnObjects: true });
  const contextItems = t('ai.contextItems', { returnObjects: true });
  const trustItems = t('trust.items', { returnObjects: true });
  const problemPoints = t('problem.points', { returnObjects: true });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-brand-accent text-xs font-medium px-3 py-1.5 rounded-full mb-8 border border-navy-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            {t('hero.h1a')}<br />
            <span className="text-brand-accent">{t('hero.h1b')}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            {t('hero.sub1')}
          </p>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('hero.sub2')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/demo"
              className="bg-brand-accent text-navy-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors w-full sm:w-auto text-center"
            >
              {t('hero.ctaPrimary')}
            </Link>
            <Link
              to="/why-sapiion"
              className="text-brand-accent hover:text-teal-300 transition-colors text-sm underline underline-offset-4 decoration-brand-accent/50 hover:decoration-teal-300"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            {t('problem.h2')}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl leading-relaxed">
            {t('problem.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problemPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-300 shadow-sm hover:border-brand-accent hover:shadow-md transition-all">
                <span className="text-slate-300 mt-0.5">—</span>
                <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            {t('problem.footer')}
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('solution.label')}</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            {t('solution.h2a')}<br />{t('solution.h2b')}
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl leading-relaxed">
            {t('solution.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-300 p-7 shadow-sm hover:border-brand-accent hover:shadow-md transition-all group">
                <span className="text-2xl text-brand-accent mb-4 block">{icon}</span>
                <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('forWhom.label')}</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-12">
            {t('forWhom.h2')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audiences.map(({ role, text }) => (
              <div key={role} className="bg-white rounded-2xl p-7 border border-slate-300 shadow-sm hover:border-brand-accent hover:shadow-md transition-all">
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">{role}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/solutions" className="text-sm text-slate-500 hover:text-navy-900 transition-colors">
              {t('forWhom.seeMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">{t('ai.label')}</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            {t('ai.h2a')}<br />
            {t('ai.h2b')}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl leading-relaxed">
            {t('ai.body')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {contextItems.map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 border border-slate-300 shadow-sm flex items-start gap-2">
                <span className="text-brand-accent text-sm shrink-0 mt-0.5">◆</span>
                <span className="text-navy-900 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-navy-900 rounded-2xl p-6 text-white max-w-2xl">
            <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">{t('ai.todayLabel')}</p>
            <p className="text-white font-medium text-sm mb-2">{t('ai.todayTitle')}</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('ai.todayBody')}
            </p>
          </div>
        </div>
      </section>

      {/* WHY NOT LMS */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">{t('notLms.h2')}</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
            {t('notLms.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-navy-800 rounded-2xl p-6 border border-slate-600 flex flex-col">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-6 text-center w-full">{t('notLms.lmsLabel')}</p>
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                {t('notLms.lmsFlow').split(' → ').map((item, i, arr) => (
                  <div key={item} className="flex flex-col items-center gap-3">
                    <span className="text-slate-200 font-mono text-base">{item}</span>
                    {i < arr.length - 1 && (
                      <span className="text-slate-500 text-lg leading-none">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-800 rounded-2xl p-6 border border-brand-accent/30 flex flex-col items-center">
              <p className="text-brand-accent text-sm uppercase tracking-wider mb-4 text-center w-full">{t('notLms.sapiionLabel')}</p>
              <ClosedLoopDiagram />
            </div>
          </div>
          <Link
            to="/why-sapiion"
            className="text-brand-accent hover:text-teal-300 transition-colors text-sm underline underline-offset-4 decoration-brand-accent/50 hover:decoration-teal-300"
          >
            {t('notLms.readMore')}
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustItems.map(({ label, sub }) => (
              <div key={label}>
                <p className="font-semibold text-navy-900 mb-1">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            {t('cta.h2')}
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {t('cta.body')}
          </p>
          <Link
            to="/demo"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            {t('cta.btn')}
          </Link>
          <p className="mt-4 text-slate-400 text-sm">
            {t('cta.emailLabel')}{' '}
            <a href="mailto:hello@sapiion.ai" className="text-navy-900 hover:underline">
              hello@sapiion.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
