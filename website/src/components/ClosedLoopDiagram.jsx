const steps = [
  'Curriculum Design',
  'Teaching',
  'Assessment',
  'Student Success',
  'Workplace Learning',
  'Educational Intelligence',
  'Curriculum Improvement',
];

export default function ClosedLoopDiagram() {
  const total = steps.length;

  return (
    <div
      className="relative w-full mx-auto"
      style={{ maxWidth: 380, aspectRatio: '1' }}
    >
      {/* Dashed orbit ring */}
      <div className="absolute inset-[13%] rounded-full border border-dashed border-slate-600" />

      {/* Center: large loop arrow encircling the label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-1">
        <span className="text-brand-accent/40 text-5xl leading-none select-none">↻</span>
        <span className="text-slate-400 text-[11px] uppercase tracking-widest text-center leading-tight">
          closed<br />loop
        </span>
      </div>

      {/* 7 nodes arranged clockwise from top */}
      {steps.map((label, i) => {
        const angle = (i * (360 / total) - 90) * (Math.PI / 180);
        const r = 37;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        const isFirst = i === 0;
        const isLast = i === total - 1;

        return (
          <div
            key={label}
            className={`absolute text-center border rounded-lg px-1.5 py-1 ${
              isFirst
                ? 'bg-brand-accent/20 border-brand-accent/60'
                : isLast
                ? 'bg-navy-900/40 border-slate-500'
                : 'bg-navy-900/50 border-navy-600'
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: 90,
            }}
          >
            <span
              className={`text-[10.5px] font-medium leading-snug block ${
                isFirst ? 'text-brand-accent' : 'text-slate-300'
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
