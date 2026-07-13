import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation('common');

  const links = [
    { to: '/why-sapiion', label: t('nav.whySapiion') },
    { to: '/solutions',   label: t('nav.solutions') },
    { to: '/about',       label: t('nav.ourVision') },
  ];

  const LANGS = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
  ];

  function switchLang(code) {
    i18n.changeLanguage(code);
    localStorage.setItem('sapiion-lang', code);
    setLangOpen(false);
  }

  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Sapiion home" className="flex items-center">
          <Logo />
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
          <div className="relative">
            <button
              onClick={() => setLangOpen(o => !o)}
              className="text-xs font-semibold text-slate-400 hover:text-navy-900 transition-colors border border-slate-200 rounded-md px-2 py-1 uppercase"
              aria-label="Switch language"
            >
              {i18n.language?.toUpperCase?.() || 'EN'}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-md z-50 py-1 min-w-[60px]">
                {LANGS.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => switchLang(code)}
                    className={`w-full text-left px-3 py-1 text-xs font-semibold hover:bg-slate-50 transition-colors ${i18n.language === code ? 'text-navy-900' : 'text-slate-400'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/demo"
            className="bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors"
          >
            {t('nav.requestDemo')}
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
          <div className="flex items-center gap-3">
            <Link
              to="/demo"
              onClick={() => setOpen(false)}
              className="flex-1 bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
            >
              {t('nav.requestDemo')}
            </Link>
            <div className="relative">
              <button
                onClick={() => setLangOpen(o => !o)}
                className="text-xs font-semibold text-slate-400 border border-slate-200 rounded-md px-2 py-2 uppercase"
              >
                {i18n.language?.toUpperCase?.() || 'EN'}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-md z-50 py-1 min-w-[60px]">
                  {LANGS.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => switchLang(code)}
                      className={`w-full text-left px-3 py-1 text-xs font-semibold hover:bg-slate-50 transition-colors ${i18n.language === code ? 'text-navy-900' : 'text-slate-400'}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
