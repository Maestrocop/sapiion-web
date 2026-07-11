import { Link } from 'react-router-dom';

const comparison = [
  ['Curriculum in Word and Excel', 'Curriculum in a live, connected system'],
  ['Teaching in one tool', 'Teaching connected to the curriculum'],
  ['Grading in another tool', 'Grading connected to outcomes and rubrics'],
  ['Attendance tracked separately', 'Attendance connected to risk signals'],
  ['Coordinator working without signals', 'Coordinator with full programme visibility'],
  ['Student receiving grades', 'Student understanding their own progress'],
  ['Annual quality review', 'Continuous programme intelligence'],
];

const implementationSteps = [
  { period: 'Week 1–2', text: 'Institution setup, user accounts, basic curriculum structure' },
  { period: 'Week 3–4', text: 'Teacher onboarding, first classes created' },
  { period: 'Month 2',  text: 'First assessments and grading workflows live' },
  { period: 'Month 3',  text: 'Coordinator dashboards active, student progress visible' },
  { period: 'Month 6',  text: 'Full continuous improvement cycle running' },
];

export default function WhySapiionPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
            Schools do not need more software.<br />
            They need fewer,{' '}
            <span className="text-brand-accent">better-connected</span> systems.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Sapiion is not built to add features to the pile. It is built to replace the pile.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">
            What most institutions have today — and what Sapiion provides.
          </h2>
          <div className="rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-100">
              <div className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Today</div>
              <div className="px-6 py-3 text-xs font-semibold text-brand-teal uppercase tracking-wider border-l border-slate-100">With Sapiion</div>
            </div>
            {comparison.map(([before, after], i) => (
              <div key={i} className={`grid grid-cols-2 ${i < comparison.length - 1 ? 'border-b border-slate-100' : ''}`}>
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Sapiion is not a learning management system.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Canvas, Moodle and Brightspace are content delivery platforms. They were designed to
            distribute materials and collect submissions. That is useful — but it is not enough.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Traditional LMS asks</p>
              <p className="text-slate-700 italic">"Did the student submit?"</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-brand-accent/30">
              <p className="text-brand-teal text-xs uppercase tracking-wider mb-3">Sapiion asks</p>
              <p className="text-navy-900 italic">"Did the student develop the intended competency — and how do we know?"</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            That question changes everything about how a platform is built. An LMS does{' '}
            <strong>Content → Assignment → Grade</strong>. Sapiion does{' '}
            <strong>Curriculum Intent → Teaching Design → Assessment Evidence → Mastery → Improvement</strong>.
          </p>
        </div>
      </section>

      {/* VS SIS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Sapiion is not a student administration system.</h2>
          <p className="text-slate-600 leading-relaxed">
            Osiris, Educator and similar SIS platforms manage student records — enrolments, credits, diplomas.
            They record what happened. Sapiion helps improve what happens.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            A SIS tells you a student failed. Sapiion tells you three weeks before the student fails —
            and gives the coordinator the tools to intervene.
          </p>
        </div>
      </section>

      {/* ACCREDITATION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            When accreditation comes, the evidence should already be there.
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Dutch HBO institutions must demonstrate educational quality to the NVAO.
            That process is stressful for one reason: the evidence is scattered.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              'Every learning outcome linked to curriculum intent',
              'Every assessment linked to rubric criteria',
              'Every rubric score linked to outcomes',
              "Every student's progress tracked against programme requirements",
              "Every programme's health visible in real time",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-100">
                <span className="text-brand-accent font-bold">✓</span>
                <p className="text-slate-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-500 text-sm italic">
            When accreditation comes, you review evidence — you do not collect it.
          </p>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            A structured 90-day onboarding — not a 2-year implementation project.
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Your programme does not stop while you implement Sapiion. It improves while you do.
          </p>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
            <div className="flex flex-col gap-6">
              {implementationSteps.map(({ period, text }) => (
                <div key={period} className="flex items-start gap-6">
                  <span className="text-xs font-semibold text-brand-teal w-20 shrink-0 pt-0.5 text-right">{period}</span>
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-1.5 shrink-0 hidden md:block" />
                  <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GDPR */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Your data belongs to your institution. Full stop.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              { title: 'EU hosted', body: 'Your data stays in Europe. Always.' },
              { title: 'Full isolation', body: "Each institution's data is completely separate — no data mixing." },
              { title: 'DPA ready', body: 'Data Processing Agreement available before any contract is signed.' },
              { title: 'No lock-in', body: 'Full data export at any time. Your data is yours.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-navy-800 rounded-xl p-5 border border-navy-700">
                <p className="text-brand-accent text-sm font-semibold mb-1">{title}</p>
                <p className="text-slate-300 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Ready to see what connected education looks like?
          </h2>
          <Link
            to="/demo"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Request a demo →
          </Link>
        </div>
      </section>
    </>
  );
}
