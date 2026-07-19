import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation('contact');
  const [form, setForm] = useState({
    name: '', role: '', institution: '', email: '', phone: '', size: '', challenge: '', source: '',
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const roles = t('form.roles', { returnObjects: true });
  const sizes = t('form.sizes', { returnObjects: true });
  const sources = t('form.sources', { returnObjects: true });
  const trustItems = t('trust.items', { returnObjects: true });
  const promiseItems = t('promise.items', { returnObjects: true });
  const faqItems = t('faq.items', { returnObjects: true });
  const expectSteps = t('expect.steps', { returnObjects: true });
  const publicDemo = t('options.publicDemo', { returnObjects: true });
  const guidedPilot = t('options.guidedPilot', { returnObjects: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      const r = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error('failed');
      setSent(true);
    } catch {
      setSubmitError(t('form.errorMsg'));
    } finally {
      setSubmitting(false);
    }
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

      {/* TWO OPTIONS */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Public Demo */}
          <div className="rounded-2xl border border-slate-200 p-7 flex flex-col gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{publicDemo.badge}</span>
            <h2 className="text-lg font-semibold text-navy-900 leading-snug">{publicDemo.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed flex-1">{publicDemo.body}</p>
            <a
              href="https://demo.sapiion.ai"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 border border-navy-900 rounded-lg px-4 py-2.5 hover:bg-navy-900 hover:text-white transition-colors"
            >
              {publicDemo.cta} →
            </a>
          </div>

          {/* Guided Pilot */}
          <div className="rounded-2xl border-2 border-navy-900 bg-navy-900 p-7 flex flex-col gap-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest">{guidedPilot.badge}</span>
            <h2 className="text-lg font-semibold text-white leading-snug">{guidedPilot.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed flex-1">{guidedPilot.body}</p>
            <a
              href="#pilot-form"
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white text-navy-900 rounded-lg px-4 py-2.5 hover:bg-slate-100 transition-colors"
            >
              {guidedPilot.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* DEMO CREDENTIALS */}
      <section className="py-10 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Demo accounts</p>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-xs text-slate-400 uppercase tracking-wide">
                  <th className="px-5 py-3 text-left">Role</th>
                  <th className="px-5 py-3 text-left">Email</th>
                  <th className="px-5 py-3 text-left">Password</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { role: 'Admin',             email: 'admin@sapiion.ai',       password: 'demo-admin' },
                  { role: 'Coordinator',      email: 'coordinator@sapiion.ai', password: 'demo-coordinator' },
                  { role: 'Teacher',          email: 'teacher@sapiion.ai',     password: 'demo-teacher' },
                  { role: 'Designer',         email: 'designer@sapiion.ai',    password: 'demo-designer' },
                  { role: 'Mentor / Advisor', email: 'mentor@sapiion.ai',      password: 'demo-mentor' },
                  { role: 'Student',          email: 'student@sapiion.ai',     password: 'demo-student' },
                ].map(({ role, email, password }) => (
                  <tr key={role} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-navy-900">{role}</td>
                    <td className="px-5 py-3 text-slate-600 font-mono text-xs">{email}</td>
                    <td className="px-5 py-3 text-slate-600 font-mono text-xs">{password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-400">All accounts use pre-loaded HRD Bedrijfskunde programme data.</p>
              <a
                href="https://demo.sapiion.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold bg-navy-900 text-white rounded-lg px-4 py-2 hover:bg-navy-800 transition-colors"
              >
                Open demo.sapiion.ai →
              </a>
            </div>
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
      <section id="pilot-form" className="py-16 px-6 bg-slate-50">
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
                disabled={submitting}
                className="bg-navy-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? t('form.submitting') : t('form.submitBtn')}
              </button>
              {submitError && (
                <p className="text-sm text-red-600 text-center">{submitError}</p>
              )}
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
