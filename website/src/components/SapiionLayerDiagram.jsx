const layers = [
  { num: 1, label: 'Curriculum Design',      sub: 'Intent' },
  { num: 2, label: 'Teaching Delivery',       sub: 'Practice' },
  { num: 3, label: 'Assessment',              sub: 'Evidence' },
  { num: 4, label: 'Student Success',         sub: 'Progress + WBL' },
  { num: 5, label: 'Programme Intelligence',  sub: 'Insight' },
  { num: 6, label: 'Quality Assurance',       sub: 'Improvement' },
];

export default function SapiionLayerDiagram() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Cycle diagram */}
      <div className="relative w-full max-w-[520px]" style={{ aspectRatio: '1' }}>

        {/* Dashed orbit ring */}
        <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-slate-200" />

        {/* Clockwise arrow indicator on ring */}
        <div
          className="absolute text-slate-300 text-xl select-none pointer-events-none"
          style={{ left: '50%', top: '12%', transform: 'translate(-50%, -50%)' }}
        >
          ↻
        </div>

        {/* Center Sapiion badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-navy-900 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-brand-accent text-xl leading-none">◆</span>
            <span className="text-white text-sm font-semibold mt-1">Sapiion</span>
            <span className="text-slate-400 text-[10px] mt-0.5 leading-none">intelligence</span>
          </div>
        </div>

        {/* 6 nodes around the ring */}
        {layers.map(({ num, label, sub }, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const r = 36; // % radius from center
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={num}
              className="absolute bg-white border border-slate-200 rounded-2xl px-3 py-3 text-center shadow-sm w-[136px] hover:border-brand-accent transition-colors group"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-brand-accent text-sm font-bold block group-hover:text-brand-teal transition-colors leading-none mb-1">{num}</span>
              <span className="text-navy-900 text-xs font-semibold leading-snug block">{label}</span>
              <span className="text-slate-500 text-[11px] leading-none mt-0.5 block">{sub}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
