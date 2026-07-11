import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: '◎',
    title: 'Curriculum Design',
    body: 'Design programmes that are alive — not locked in Word documents. Map learning outcomes to modules and rubric criteria. Ensure what you design is what gets taught.',
  },
  {
    icon: '◈',
    title: 'Teaching Delivery',
    body: 'Plan lessons, track attendance and manage classes from the same environment where the curriculum lives. Less administration. More time teaching.',
  },
  {
    icon: '◇',
    title: 'Assessment & Grading',
    body: 'Grade work using rubric criteria connected directly to learning outcomes. Every score becomes evidence of competency development — not just a number.',
  },
  {
    icon: '◉',
    title: 'Student Success',
    body: 'See which students need attention before it is too late. Coordinators get real-time programme intelligence. Students see exactly where they stand.',
  },
];

const audiences = [
  {
    role: 'Programme Manager',
    text: 'Real-time programme health. Accreditation evidence collected continuously. Know whether your programme delivers what it promises.',
  },
  {
    role: 'Coordinator',
    text: 'Early risk signals before students fail. A complete picture of every student — attendance, grades, outcomes, progression.',
  },
  {
    role: 'Teacher',
    text: 'Your curriculum, your lessons, your grades and your students — in one place. Rubrics already built. Students you actually know.',
  },
  {
    role: 'Student',
    text: 'Know what is due, where you stand and what you need to improve — before it becomes a problem.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-800 text-brand-accent text-xs font-medium px-3 py-1.5 rounded-full mb-8 border border-navy-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Built for Dutch HBO and MBO
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            One platform for modern<br />
            <span className="text-brand-accent">professional education.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Plan. Teach. Assess. Improve. Everything connected.
          </p>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Sapiion connects curriculum design, teaching, assessment and student success
            into one continuous improvement cycle — so educational quality becomes an
            institutional strength, not an individual effort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/demo"
              className="bg-brand-accent text-navy-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors w-full sm:w-auto text-center"
            >
              Request a demo →
            </Link>
            <Link
              to="/why-sapiion"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Why Sapiion? See how it's different
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            Education runs on disconnected tools.<br />That has a cost.
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl leading-relaxed">
            Most institutions use five or six separate systems — curriculum in one place,
            teaching in another, grades somewhere else, attendance in a third tool.
            None of them talk to each other.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Coordinators discover students are at risk only after grades have already failed',
              'Teachers grade assignments disconnected from curriculum outcomes',
              'Students receive marks but no insight into their own progress',
              'Accreditation preparation takes months instead of days',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100">
                <span className="text-slate-300 mt-0.5">—</span>
                <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            This is not a technology problem. It is a connection problem.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">The platform</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">
            Sapiion connects what should<br />never have been separated.
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl leading-relaxed">
            An Educational Intelligence Platform built for Dutch professional education.
            Everything that matters — in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-100 p-7 hover:border-brand-accent transition-colors group">
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
          <p className="text-brand-teal text-sm font-medium uppercase tracking-wider mb-3">Designed for every role</p>
          <h2 className="text-3xl font-semibold text-navy-900 mb-12">
            Built for everyone in the institution.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audiences.map(({ role, text }) => (
              <div key={role} className="bg-white rounded-2xl p-7 border border-slate-100">
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">{role}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/solutions" className="text-sm text-slate-500 hover:text-navy-900 transition-colors">
              See what Sapiion does for each role →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NOT LMS */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">This is not another LMS.</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
            Canvas, Moodle and Brightspace deliver content. Sapiion improves education.
            The difference is fundamental.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-navy-800 rounded-2xl p-6 border border-navy-700">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Traditional LMS</p>
              <p className="text-slate-300 font-mono text-sm">Content → Assignment → Grade</p>
            </div>
            <div className="bg-navy-800 rounded-2xl p-6 border border-brand-accent/30">
              <p className="text-brand-accent text-xs uppercase tracking-wider mb-3">Sapiion</p>
              <p className="text-white font-mono text-sm">Intent → Design → Evidence → Mastery → Improvement</p>
            </div>
          </div>
          <Link
            to="/why-sapiion"
            className="text-brand-accent hover:text-teal-300 transition-colors text-sm"
          >
            Read the full comparison →
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'EU hosted', sub: 'Your data stays in Europe' },
              { label: 'GDPR compliant', sub: 'DPA available before contract' },
              { label: '90-day onboarding', sub: 'Not a 2-year project' },
              { label: 'Per institution', sub: 'Not per user' },
            ].map(({ label, sub }) => (
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
            See Sapiion working with your own programme.
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            A demo takes 45 minutes. We set up a realistic example using your programme
            structure, your outcomes, your context. No slides. A real walkthrough.
          </p>
          <Link
            to="/demo"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Request a demo →
          </Link>
          <p className="mt-4 text-slate-400 text-sm">
            Or email us at{' '}
            <a href="mailto:hello@sapiion.ai" className="text-navy-900 hover:underline">
              hello@sapiion.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
