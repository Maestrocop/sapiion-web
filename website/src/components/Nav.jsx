import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/why-sapiion', label: 'Why Sapiion' },
  { to: '/solutions',   label: 'Solutions' },
  { to: '/about',       label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-navy-900 text-lg tracking-tight">
          <span className="text-brand-accent font-bold">◆</span>
          Sapiion
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to
                  ? 'text-navy-900'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hello@sapiion.ai"
            className="text-sm text-slate-500 hover:text-navy-900 transition-colors"
          >
            hello@sapiion.ai
          </a>
          <Link
            to="/demo"
            className="bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Request a demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-navy-900"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/demo"
            onClick={() => setOpen(false)}
            className="bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
          >
            Request a demo
          </Link>
        </div>
      )}
    </header>
  );
}
