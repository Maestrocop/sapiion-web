import { Link } from 'react-router-dom';

const cycle = [
  'Curriculum Intent',
  'Learning Design',
  'Teaching & Delivery',
  'Assessment & Evidence',
  'Mastery Measurement',
  'Student Success Signals',
  'Intervention & Support',
  'Curriculum Improvement',
];

const successStates = [
  { role: 'A coordinator', text: 'can see, at any moment, which students need attention — and act before it is too late' },
  { role: 'A teacher', text: 'spends less time on administration and more time on teaching' },
  { role: 'A student', text: 'always knows what to do, what is due and how they are progressing' },
  { role: 'A curriculum designer', text: 'can see whether their design actually produces the intended learning outcomes' },
  { role: 'A school director', text: 'can demonstrate educational quality with confidence and evidence' },
  { role: 'An institution', text: 'can say: "Sapiion helped us improve our graduation rate"' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-20 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
            We built Sapiion because educational quality should not depend on{' '}
            <span className="text-brand-accent">individual effort.</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Education produces the most important output in society: human potential.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Yet most educational institutions still operate with disconnected tools, fragmented data
              and reactive decision-making. Teachers work in isolation. Coordinators discover problems
              too late. Students do not know where they stand.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              The result is that educational quality depends almost entirely on the individual effort
              of dedicated teachers — not on the strength of the institution.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              That is not good enough.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We built Sapiion to change that. Not by adding more software to an already fragmented
              landscape. But by connecting curriculum, teaching, assessment and student success into
              one coherent system — so that educational quality becomes an institutional capability,
              not a personal one.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-6">Our belief</h2>
          <blockquote className="border-l-4 border-brand-accent pl-6 mb-8">
            <p className="text-xl text-navy-900 leading-relaxed italic">
              Learning is not the transfer of content. Learning is the development of competencies
              through structured experience, feedback and reflection.
            </p>
          </blockquote>
          <p className="text-slate-600 leading-relaxed mb-4">
            This belief shapes every feature we build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-slate-100">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Traditional systems ask</p>
              <p className="text-slate-600 italic">"Did the student submit the assignment?"</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-brand-accent/30">
              <p className="text-brand-teal text-xs uppercase tracking-wider mb-2">Sapiion asks</p>
              <p className="text-navy-900 italic">"Did the student develop the intended competency — and how do we know?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING CYCLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Our learning cycle</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            We designed Sapiion around a continuous improvement cycle — not a one-way content delivery pipeline.
          </p>
          <div className="flex flex-col gap-2">
            {cycle.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                    {i + 1}
                  </div>
                  {i < cycle.length - 1 && <div className="w-px h-4 bg-slate-200" />}
                </div>
                <p className={`text-sm font-medium ${i === 0 || i === cycle.length - 1 ? 'text-brand-accent' : 'text-navy-900'}`}>
                  {step}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-4 mt-1">
              <div className="w-8 flex justify-center">
                <span className="text-brand-accent text-lg">↺</span>
              </div>
              <p className="text-slate-400 text-xs italic">repeat — continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">What success looks like</h2>
          <p className="text-slate-400 mb-10">Sapiion is successful when:</p>
          <div className="flex flex-col gap-4">
            {successStates.map(({ role, text }) => (
              <div key={role} className="flex items-start gap-3">
                <span className="text-brand-accent mt-0.5 shrink-0">✓</span>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-white">{role}</strong> {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-navy-800 rounded-xl border border-navy-700">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">The single guiding principle</p>
            <p className="text-white italic leading-relaxed">
              "Every feature in Sapiion should contribute to improving educational quality,
              not just digitizing educational administration."
            </p>
          </div>
        </div>
      </section>

      {/* BRAND NOTE */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <span className="text-2xl">◆</span>
            <div>
              <p className="font-semibold text-navy-900 mb-2">Noor B.V. · Sapiion</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our company is named <strong>Noor</strong> — meaning <em>light</em> in Arabic.
                Our platform is named <strong>Sapiion</strong> — from <em>sapientia</em>, wisdom in Latin.
                We bring light to educational data, and turn it into institutional wisdom. That is not a
                marketing story. It is why we exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            If this resonates with how you think about education — we would like to talk.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors"
            >
              Request a demo →
            </Link>
            <a
              href="mailto:hello@sapiion.ai"
              className="inline-block border border-slate-200 text-navy-900 font-medium px-8 py-3 rounded-lg hover:border-slate-300 transition-colors"
            >
              Send us a message
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
