import { useState } from 'react';
import { Link } from 'react-router-dom';

const audiences = [
  {
    id: 'programme-manager',
    role: 'Programme Manager',
    tag: 'Buyer',
    tagColor: 'bg-amber-100 text-amber-700',
    persona: 'Sandra — HBO Business Administration, 800 students, 24 teachers',
    reality: 'Sandra discovers student problems too late. Accreditation preparation takes months of collecting evidence that should already exist. She cannot see whether learning outcomes are being assessed consistently.',
    headline: 'Know whether your programme is delivering what it promises — before accreditation, not during it.',
    features: [
      { title: 'Programme health dashboard', body: 'One view of the entire programme: student risk, outcome coverage, grade distribution, attendance trends.' },
      { title: 'Continuous accreditation readiness', body: 'Every outcome linked, every assessment evidenced. The evidence is always there.' },
      { title: 'Early warning system', body: 'Coordinators see at-risk students weeks before they fail — not after.' },
      { title: 'Curriculum consistency', body: 'Teachers work from shared rubrics and outcomes. No more every-teacher-does-it-differently.' },
    ],
    result: 'When accreditation comes, preparation takes days — not months. Student dropout decreases. Quality becomes institutional.',
  },
  {
    id: 'coordinator',
    role: 'Coordinator & Advisor',
    tag: 'User',
    tagColor: 'bg-blue-100 text-blue-700',
    persona: 'Fatima — SLB Advisor, 45 advisees across two cohorts',
    reality: 'Fatima discovers problems reactively — students come to her after things have gone wrong. Grades are in one system, attendance in another. Progression review preparation is manual and document-heavy.',
    headline: 'Intervene before students fail. Not after.',
    features: [
      { title: 'Complete student profile', body: 'Attendance, grades, outcome progress and risk signals in one view. No hunting across systems.' },
      { title: 'Risk signals', body: 'See which students need attention this week, ranked by urgency.' },
      { title: 'Progression review workflow', body: 'Structured, documented, defensible. Evidence collected automatically.' },
      { title: 'Intervention tracking', body: 'Log actions, set follow-up dates, track outcomes.' },
    ],
    result: 'Fatima arrives at every meeting already knowing the full picture. Progression review becomes a review process — not a collection exercise.',
  },
  {
    id: 'teacher',
    role: 'Teacher',
    tag: 'User',
    tagColor: 'bg-blue-100 text-blue-700',
    persona: 'Martijn — Lecturer, HRM, 3 active classes, 78 students',
    reality: 'Martijn spends hours each week on tasks that have nothing to do with teaching. His rubrics are rebuilt from scratch every semester. He loses track of which students are struggling until it is too late.',
    headline: 'Less administration. More teaching. Students you actually know.',
    features: [
      { title: 'One place for everything', body: 'Curriculum, classes, attendance, grading, student progress. One login.' },
      { title: 'Rubric library', body: 'Rubrics built once, connected to outcomes, reused across assignments. No rebuilding.' },
      { title: 'Attendance in one click', body: 'Register attendance directly from the class view. No separate system.' },
      { title: 'Connected grading', body: 'Grades tied to rubric criteria and outcomes. Every score means something.' },
    ],
    result: 'Martijn saves hours every week on administration. He knows his students before they have to come to him.',
  },
  {
    id: 'curriculum-designer',
    role: 'Curriculum Designer',
    tag: 'User',
    tagColor: 'bg-blue-100 text-blue-700',
    persona: 'Lena — Curriculum Developer, central educational design team',
    reality: "Lena's biggest frustration is that her work disappears into Word documents. She has no way to know whether her curriculum was implemented as designed, or whether learning outcomes were actually assessed.",
    headline: 'Design curriculum that stays connected — from intent to evidence.',
    features: [
      { title: 'Curriculum Composer', body: 'Design programmes in a live, connected system. Not a document.' },
      { title: 'Outcome mapping', body: 'Connect every assignment to outcomes. See coverage gaps immediately.' },
      { title: 'Shared rubric library', body: 'Rubrics built in the curriculum flow directly to teachers. No reinvention.' },
      { title: 'Curriculum effectiveness view', body: 'See whether your design actually produced the intended outcomes in practice.' },
    ],
    result: "Lena's curriculum work doesn't disappear. She can improve the curriculum based on real evidence — not assumptions.",
  },
  {
    id: 'student',
    role: 'Student',
    tag: 'User',
    tagColor: 'bg-blue-100 text-blue-700',
    persona: 'Amir — Year 2 student, HBO Business Administration',
    reality: 'Amir attends most lectures but loses track of deadlines. He receives grades but does not always understand what they mean. He is somewhere in the middle — not failing, not flourishing — invisible until something goes wrong.',
    headline: 'Know exactly where you stand. Before it becomes a problem.',
    features: [
      { title: 'One dashboard', body: 'All assignments, deadlines and grades in one place.' },
      { title: 'Outcome progress', body: 'See which competencies are developing — not just scores.' },
      { title: 'Rubric criteria before submission', body: 'He knows what "good" looks like before he submits, not after.' },
      { title: 'Early awareness', body: 'If he is at risk, he sees it — and so does his advisor.' },
    ],
    result: 'Amir stops flying blind. He knows what to do, what is due and how he is progressing.',
  },
  {
    id: 'ict-manager',
    role: 'ICT Manager',
    tag: 'Gatekeeper',
    tagColor: 'bg-slate-100 text-slate-600',
    persona: 'Peter — Manager ICT & Digital Infrastructure',
    reality: 'Peter has seen too many software projects that were launched with enthusiasm and abandoned within a year. He is not against Sapiion. He is cautious. He wants answers before he says yes.',
    headline: 'One platform that reduces complexity. Not one more system to manage.',
    features: [
      { title: 'Single platform', body: 'Sapiion replaces multiple disconnected tools. Fewer licences, less complexity.' },
      { title: 'EU hosted + GDPR', body: 'Data stored in the EU. DPA and security documentation ready before signing.' },
      { title: 'Full data isolation', body: "Each institution's data is completely separate." },
      { title: 'No lock-in', body: 'Full data export at any time. Always.' },
    ],
    result: 'Peter can sign the DPA with confidence. Adoption is high because every role gets genuine value from day one.',
  },
];

export default function SolutionsPage() {
  const [active, setActive] = useState('programme-manager');
  const audience = audiences.find(a => a.id === active);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            The right tools for every<br />
            <span className="text-brand-accent">role in the institution.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Sapiion serves everyone — but designed around the specific needs of each person who uses it.
          </p>
        </div>
      </section>

      {/* TAB SELECTOR */}
      <section className="bg-white border-b border-slate-100 px-6 sticky top-16 z-40">
        <div className="max-w-3xl mx-auto flex gap-1 overflow-x-auto py-3">
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
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${audience.tagColor}`}>
                {audience.tag}
              </span>
              <span className="text-slate-400 text-sm">{audience.persona}</span>
            </div>

            <h2 className="text-2xl font-semibold text-navy-900 mb-4 leading-snug">
              {audience.headline}
            </h2>

            <div className="bg-slate-50 rounded-xl p-5 mb-10 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Their reality</p>
              <p className="text-slate-600 text-sm leading-relaxed">{audience.reality}</p>
            </div>

            <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-4">What Sapiion provides</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {audience.features.map(({ title, body }) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-slate-100">
                  <p className="font-semibold text-navy-900 text-sm mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy-900 rounded-xl p-5 text-white">
              <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">The result</p>
              <p className="text-slate-200 text-sm leading-relaxed">{audience.result}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Which role describes you?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Tell us who will be in the room and we will structure the demo
            around what matters to you.
          </p>
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
