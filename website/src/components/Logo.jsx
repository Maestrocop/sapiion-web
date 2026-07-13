export default function Logo({ className = '', white = false, showTagline = false }) {
  const iconFill = white ? '#FFFFFF' : '#2563EB';
  const textCol  = white ? '#FFFFFF' : '#0F172A';
  const tagCol   = white ? 'rgba(255,255,255,0.6)' : '#64748B';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0" aria-hidden="true" style={{ transform: 'translateY(-6px) rotate(140deg)' }}>
        <path fill={iconFill} d="M28.757 57.483l1.517-.875 13.176-7.634.026.014 24.85-14.341-.006-12.287L7.493 57.449 82.193 100l10.282-5.93-19.037-10.932z"/>
        <path fill={iconFill} d="M70.426 35.858l.013 28.49 10.554 6.011L80.96 0 6.462 42.973l.006 12.642 63.95-36.887z"/>
        <path fill={iconFill} d="M83.093 73.972l-12.652-7.208-.001.007-2.273-1.303-24.684-14.062-10.521 6.073L93.538 92.26l-.041-86.253L83.059.014z"/>
      </svg>
      <div>
        <div style={{
          color: textCol,
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: '0.12em',
          lineHeight: 1,
          fontFamily: "'Josefin Sans', sans-serif",
        }}>
          SAPIION
        </div>
        {showTagline && (
          <div style={{
            color: tagCol,
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: '0.08em',
            marginTop: 5,
            fontFamily: "'Manrope', system-ui, sans-serif",
          }}>
            Education. Connected. Intelligent.
          </div>
        )}
      </div>
    </div>
  );
}
