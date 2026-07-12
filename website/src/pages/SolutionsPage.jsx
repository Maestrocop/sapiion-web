import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SolutionsPage() {
  const { t } = useTranslation('solutions');
  const audiences = t('audiences', { returnObjects: true });
  const [active, setActive] = useState('programme-manager');
  const audience = audiences.find(a => a.id === active);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            {t('hero.h1a')}<br />
            <span className="text-brand-accent">{t('hero.h1b')}</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t('hero.sub')}
          </p>
        </div>
      </section>

      {/* TAB SELECTOR */}
      <section className="bg-white border-b border-slate-100 px-6 sticky top-16 z-40">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-1 py-3">
          {audiences.map(a => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === a.id
                  ? 'bg-navy-900 text-white'
                  : 'text-slate-500 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              {a.role}
            </button>
          ))}
        </div>
      </section>

      {/* AUDIENCE DETAIL */}
      {audience && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              {audience.tag && (
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  audience.id === 'programme-manager' ? 'bg-amber-100 text-amber-700' :
                  audience.id === 'ict-manager' ? 'bg-slate-100 text-slate-600' : ''
                }`}>
                  {audience.tag}
                </span>
              )}
              <span className="text-slate-400 text-sm">{audience.persona}</span>
            </div>

            <h2 className="text-2xl font-semibold text-navy-900 mb-4 leading-snug">
              {audience.headline}
            </h2>

            <div className="bg-slate-50 rounded-xl p-5 mb-10 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('theirReality')}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{audience.reality}</p>
            </div>

            <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-4">{t('whatSapiionProvides')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {audience.features.map(({ title, body }) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-slate-300">
                  <p className="font-semibold text-navy-900 text-sm mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy-900 rounded-xl p-5 text-white">
              <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">{t('theResult')}</p>
              <p className="text-slate-200 text-sm leading-relaxed">{audience.result}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
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
        </div>
      </section>
    </>
  );
}
