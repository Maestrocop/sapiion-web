export default function Logo({ className = '', white = false }) {
  const text    = white ? '#FFFFFF' : '#0F172A';
  const bg      = white ? 'rgba(255,255,255,0.15)' : '#0F172A';
  const nodeTop = white ? '#FFFFFF' : '#14B8A6';
  const nodeSub = white ? 'rgba(255,255,255,0.65)' : '#0E7490';
  const line    = white ? 'rgba(255,255,255,0.45)' : 'rgba(20,184,166,0.5)';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 44"
      fill="none"
      className={className}
      aria-label="Sapiion"
      role="img"
    >
      {/* Icon: rounded square */}
      <rect x="0" y="2" width="40" height="40" rx="8" fill={bg} />

      {/* Connector lines (behind nodes) */}
      <line x1="20" y1="15" x2="10" y2="32" stroke={line} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="15" x2="30" y2="32" stroke={line} strokeWidth="1.5" strokeLinecap="round" />

      {/* Top node — primary */}
      <circle cx="20" cy="13" r="5.5" fill={nodeTop} />

      {/* Bottom nodes — secondary */}
      <circle cx="10" cy="33" r="4" fill={nodeSub} />
      <circle cx="30" cy="33" r="4" fill={nodeSub} />

      {/* Wordmark */}
      <text
        x="52"
        y="30"
        fontFamily="Geist, Inter, -apple-system, system-ui, sans-serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="-0.4"
        fill={text}
      >
        Sapiion
      </text>
    </svg>
  );
}
