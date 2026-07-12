const layers = [
  {
    num: 1,
    label: 'Curriculum Design',
    sub: 'What we intend to teach and why',
    bg: 'bg-[#0F172A]',
    text: 'text-white',
    sub_color: 'text-slate-400',
  },
  {
    num: 2,
    label: 'Teaching Delivery',
    sub: 'How and when we teach it',
    bg: 'bg-[#1E293B]',
    text: 'text-white',
    sub_color: 'text-slate-400',
  },
  {
    num: 3,
    label: 'Assessment & Evidence',
    sub: 'How we measure whether learning happened',
    bg: 'bg-[#164E63]',
    text: 'text-white',
    sub_color: 'text-cyan-200/70',
  },
  {
    num: 4,
    label: 'Student Success',
    sub: 'Who is progressing, struggling or at risk',
    bg: 'bg-[#155E75]',
    text: 'text-white',
    sub_color: 'text-cyan-200/70',
  },
  {
    num: 5,
    label: 'Programme Intelligence',
    sub: 'Whether the programme is working at scale',
    bg: 'bg-[#0E7490]',
    text: 'text-white',
    sub_color: 'text-cyan-100/70',
  },
  {
    num: 6,
    label: 'Quality Assurance',
    sub: 'Continuous evidence for inspections, audits and accreditation',
    bg: 'bg-[#14B8A6]',
    text: 'text-navy-900',
    sub_color: 'text-teal-900/70',
  },
];

export default function SapiionLayerDiagram() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      {layers.map(({ num, label, sub, bg, text, sub_color }, i) => (
        <div
          key={label}
          className={`${bg} flex items-center gap-5 px-6 py-4 ${i < layers.length - 1 ? 'border-b border-white/10' : ''}`}
        >
          <span className={`text-xs font-bold ${text} opacity-40 w-4 shrink-0`}>{num}</span>
          <div className="flex-1">
            <p className={`font-semibold text-sm ${text}`}>{label}</p>
            <p className={`text-xs mt-0.5 ${sub_color}`}>{sub}</p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="bg-navy-900 px-6 py-3 flex items-center justify-between border-t border-white/10">
        <p className="text-slate-400 text-xs">All layers connected and continuously synchronised</p>
        <p className="text-brand-accent font-semibold text-sm">◆ Sapiion</p>
      </div>
    </div>
  );
}
