import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-navy-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold text-white text-lg mb-3">
              <span className="text-brand-accent">◆</span>
              Sapiion
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-3">{t('footer.product')}</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/why-sapiion" className="hover:text-white transition-colors">{t('nav.whySapiion')}</Link>
              <Link to="/solutions" className="hover:text-white transition-colors">{t('nav.solutions')}</Link>
              <Link to="/demo" className="hover:text-white transition-colors">{t('nav.requestDemo')}</Link>
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-3">{t('footer.company')}</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-white transition-colors">{t('footer.about')}</Link>
              <a href="mailto:hello@sapiion.ai" className="hover:text-white transition-colors">hello@sapiion.ai</a>
              <a href="mailto:info@sapiion.ai" className="hover:text-white transition-colors">info@sapiion.ai</a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
              {t('footer.euHosted')}
            </span>
            <span>{t('footer.gdpr')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
