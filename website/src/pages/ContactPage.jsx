import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation('contact');
  const [form, setForm] = useState({
    name: '', role: '', institution: '', email: '', phone: '', size: '', challenge: '', source: '',
  });
  const [sent, setSent] = useState(false);

  const roles = t('form.roles', { returnObjects: true });
  const sizes = t('form.sizes', { returnObjects: true });
  const sources = t('form.sources', { returnObjects: true });
  const trustItems = t('trust.items', { returnObjects: true });
  const promiseItems = t('promise.items', { returnObjects: true });
  const faqItems = t('faq.items', { returnObjects: true });
  const expectSteps = t('expect.steps', { returnObjects: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
            {t('hero.h1a')}<br />
            <span className="text-brand-accent">{t('hero.h1b')}</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            {t('hero.body')}
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span>{t('hero.stat1')}</span>
            <span className="text-slate-600">·</span>
            <span>{t('hero.stat2')}</span>
            <span className="text-slate-600">·</span>
            <span>{t('hero.stat3')}</span>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {expectSteps.map(({ step, text }) => (
            <div key={step}>
              <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">{step}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto">
          {sent ? (
            <div className="bg-white rounded-2xl p-10 border border-slate-100 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-semibold text-navy-900 mb-2">{t('form.successTitle')}</h2>
              <p className="text-slate-600 text-sm">{t('form.successBody')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-navy-900">{t('form.title')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.nameLabel')}</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.roleLabel')}</label>
                  <select
                    required
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                  >
                    <option value="">{t('form.rolePlaceholder')}</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.institutionLabel')}</label>
                <input
                  required
                  value={form.institution}
                  onChange={e => setForm({ ...form, institution: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.emailLabel')}</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.phoneLabel')}</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.sizeLabel')}</label>
                <select
                  value={form.size}
                  onChange={e => setForm({ ...form, size: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                >
                  <option value="">{t('form.sizePlaceholder')}</option>
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  {t('form.challengeLabel')} <span className="text-slate-400">{t('form.challengeOptional')}</span>
                </label>
                <textarea
                  rows={3}
                  value={form.challenge}
                  onChange={e => setForm({ ...form, challenge: e.target.value })}
                  placeholder={t('form.challengePlaceholder')}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">{t('form.sourceLabel')}</label>
                <select
                  value={form.source}
                  onChange={e => setForm({ ...form, source: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                >
                  <option value="">{t('form.sourcePlaceholder')}</option>
                  {sources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <button
                type="submit"
                className="bg-navy-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors mt-1"
              >
                {t('form.submitBtn')}
              </button>
              <p className="text-xs text-slate-400 text-center">
                {t('form.disclaimer')}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-10 px-6 bg-white border-t border-slate-100">
        <div className="max-w-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustItems.map(({ label, sub }) => (
            <div key={label}>
              <p className="font-semibold text-navy-900 text-sm mb-0.5">{label}</p>
              <p className="text-slate-400 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAPIION PROMISE */}
      <section className="py-16 px-6 bg-navy-900">
        <div className="max-w-xl mx-auto">
          <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">{t('promise.label')}</p>
          <h2 className="text-xl font-semibold text-white mb-6">{t('promise.h2')}</h2>
          <div className="flex flex-col gap-3">
            {promiseItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-brand-accent mt-0.5 shrink-0">◆</span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-semibold text-navy-900 mb-8">{t('faq.h2')}</h2>
          <div className="flex flex-col gap-6">
            {faqItems.map(({ q, a }) => (
              <div key={q}>
                <p className="font-medium text-navy-900 text-sm mb-1">{q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-xl p-5 border border-slate-100 text-center">
            <p className="text-slate-600 text-sm mb-1">{t('faq.stillQuestion')}</p>
            <a href="mailto:hello@sapiion.ai" className="text-navy-900 font-medium text-sm hover:underline">
              hello@sapiion.ai
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
