import { useState } from 'react';

const roles = [
  'Programme Manager',
  'Education Manager / Dean',
  'Curriculum Designer',
  'Coordinator / Advisor',
  'ICT Manager / CIO',
  'Teacher',
  'Other',
];

const sizes = [
  'Under 100 students',
  '100 – 500 students',
  '500 – 2,000 students',
  'Over 2,000 students',
];

const sources = ['LinkedIn', 'Word of mouth', 'Google', 'Conference / Event', 'Other'];

const faq = [
  {
    q: 'How long does implementation take?',
    a: 'Sapiion is designed for a structured 90-day onboarding. Your programme does not stop while you implement — it improves while you do.',
  },
  {
    q: 'What does it cost?',
    a: 'Sapiion is priced per institution, not per user. We discuss pricing during or after the demo — once we understand your programme size and needs.',
  },
  {
    q: 'Is our data safe and GDPR-compliant?',
    a: 'Yes. Sapiion is hosted in the EU. Each institution\'s data is completely isolated. We provide a full Data Processing Agreement before any contract is signed.',
  },
  {
    q: 'Do you integrate with Canvas / Brightspace / Osiris?',
    a: 'Our integration roadmap includes Microsoft 365 and SSO as priorities. Speak with us about your specific integration requirements during the demo.',
  },
  {
    q: 'Can we export our data if we leave?',
    a: 'Yes. Full data export is always available. No lock-in.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', role: '', institution: '', email: '', phone: '', size: '', challenge: '', source: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: POST to a form handler (Formspree, EmailJS, or backend endpoint)
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            See Sapiion working with<br />
            <span className="text-brand-accent">your own programme.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A demo takes 45 minutes. No slides. A real walkthrough of the platform using a realistic programme structure.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: 'Before', text: 'We ask a few questions about your institution and who will be in the room. 5 minutes. This means we show you what is relevant.' },
            { step: 'During', text: 'We walk through one complete flow — curriculum to teaching to assessment to student dashboard to coordinator view.' },
            { step: 'After',  text: 'We answer your questions honestly. If Sapiion is not the right fit, we tell you. If it is, we discuss what a pilot looks like.' },
          ].map(({ step, text }) => (
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
              <h2 className="text-xl font-semibold text-navy-900 mb-2">Thank you, we will be in touch.</h2>
              <p className="text-slate-600 text-sm">We respond within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-navy-900">Request a demo</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Your name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Your role *</label>
                  <select
                    required
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                  >
                    <option value="">Select…</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">Institution name *</label>
                <input
                  required
                  value={form.institution}
                  onChange={e => setForm({ ...form, institution: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Email address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Phone (optional)</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">How many students in your programme?</label>
                <select
                  value={form.size}
                  onChange={e => setForm({ ...form, size: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                >
                  <option value="">Select…</option>
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  What is your primary challenge? <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.challenge}
                  onChange={e => setForm({ ...form, challenge: e.target.value })}
                  placeholder="e.g. we want to reduce student dropout / we have an accreditation coming up…"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">How did you hear about Sapiion?</label>
                <select
                  value={form.source}
                  onChange={e => setForm({ ...form, source: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-teal bg-white"
                >
                  <option value="">Select…</option>
                  {sources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <button
                type="submit"
                className="bg-navy-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors mt-1"
              >
                Request a demo →
              </button>
              <p className="text-xs text-slate-400 text-center">We respond within one business day.</p>
            </form>
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-10 px-6 bg-white border-t border-slate-100">
        <div className="max-w-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'EU hosted', sub: 'Data stays in Europe' },
            { label: 'GDPR compliant', sub: 'DPA before any commitment' },
            { label: '90-day onboarding', sub: 'Not a 2-year project' },
            { label: 'No lock-in', sub: 'Full data export always' },
          ].map(({ label, sub }) => (
            <div key={label}>
              <p className="font-semibold text-navy-900 text-sm mb-0.5">{label}</p>
              <p className="text-slate-400 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-semibold text-navy-900 mb-8">Frequently asked questions</h2>
          <div className="flex flex-col gap-6">
            {faq.map(({ q, a }) => (
              <div key={q}>
                <p className="font-medium text-navy-900 text-sm mb-1">{q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-xl p-5 border border-slate-100 text-center">
            <p className="text-slate-600 text-sm mb-1">Still have a question?</p>
            <a href="mailto:hello@sapiion.ai" className="text-navy-900 font-medium text-sm hover:underline">
              hello@sapiion.ai
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
