import { Link } from 'react-router-dom';

// English-only for now — positioning is being validated before this gets
// translated into nl/fr/de/es like the rest of the site (agreed 2026-08-31).
const GITHUB_URL = 'https://github.com/Maestrocop/sapiion-workplace';

const FEATURES = [
  { icon: '🏢', title: 'Companies', body: 'A registry of every company that hosts students — partnership status, contacts, visit history.' },
  { icon: '🎓', title: 'Placements', body: 'The full lifecycle: searching, placed, on-site, evaluating, completed. One record per student, start to finish.' },
  { icon: '📋', title: 'Student applications', body: 'Students log every company they apply to and track outcomes — interviews, offers, rejections.' },
  { icon: '🤝', title: 'Supervisor communication', body: 'A token-based portal for the external company supervisor — no account needed. They confirm details and acknowledge activity logs directly.' },
  { icon: '📝', title: 'Activity logs', body: 'Students log hours and work weekly. Supervisors acknowledge them. Coordinators see it all in one place.' },
  { icon: '📊', title: 'Assessments', body: 'Bilateral scoring from both teacher and supervisor, plus a student self-reflection — kept separate, both feeding the final evaluation.' },
  { icon: '✅', title: 'Placement checklist', body: 'Every step of getting a placement set up — verified, assigned, signed — tracked in the right order, by the right party.' },
  { icon: '🔍', title: 'Monitoring & evidence', body: 'A live view of every student currently on-site, flagged by risk — missing logs, no supervisor, nothing signed.' },
];

export default function WorkplacePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-brand-accent text-xs font-medium px-3 py-1.5 rounded-full mb-8 border border-navy-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Sapiion Workplace
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Internship management shouldn't live in<br />
            <span className="text-brand-accent">spreadsheets, email, and scattered documents.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sapiion Workplace connects the whole internship journey — placement search, company management,
            supervisor communication, activity logs, assessments, and student progress — in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-navy-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors w-full sm:w-auto text-center"
            >
              View on GitHub →
            </a>
            {/* "Try the demo" CTA goes here once a public hosted instance exists. */}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">What's inside</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            One connected internship workflow.
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl leading-relaxed">
            Students, companies, supervisors, teachers, coordinators — everyone working from the same record,
            at every stage of the placement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-300 p-7 bg-white shadow-sm hover:border-brand-accent hover:shadow-md transition-all">
                <span className="text-2xl text-brand-accent mb-4 block">{icon}</span>
                <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPOSITION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy-900 mb-6">
            Free. Open source. Self-host it yourself.
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            No sales conversation required. Clone it, run it with Docker, and start managing internships today —
            licensed AGPL-3.0, so you can self-host and modify it freely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-navy-900 text-sm mb-1">Self-hosted</p>
              <p className="text-slate-500 text-xs">Your data, your server, your control.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-navy-900 text-sm mb-1">No lock-in</p>
              <p className="text-slate-500 text-xs">Open source, AGPL-3.0 licensed.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-navy-900 text-sm mb-1">Multi-language</p>
              <p className="text-slate-500 text-xs">English, Dutch, French, German, Spanish.</p>
            </div>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </section>

      {/* BRIDGE TO PLATFORM */}
      <section className="py-16 px-6 bg-navy-900">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">Where this leads</p>
          <h2 className="text-xl font-semibold text-white mb-4">
            Need it connected to your curriculum and learning outcomes?
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            Workplace is where you can start. When you're ready to connect workplace learning to the rest of
            your education — curriculum, teaching, assessment, and programme intelligence — that's Sapiion Platform.
          </p>
          <Link
            to="/demo"
            className="text-brand-accent hover:text-teal-300 transition-colors text-sm underline underline-offset-4 decoration-brand-accent/50 hover:decoration-teal-300"
          >
            Explore the Sapiion Platform →
          </Link>
        </div>
      </section>
    </>
  );
}
