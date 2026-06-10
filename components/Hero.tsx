'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, dir, language } = useLanguage();

  const prefilledMessages: Record<string, string> = {
    fr: 'Bonjour, je voudrais réserver un massage chez SPA RELAX ISTANBUL.',
    ar: 'مرحباً، أود حجز حصة تدليك في SPA RELAX ISTANBUL.',
    en: 'Hello, I would like to book a massage at SPA RELAX ISTANBUL.',
    es: 'Hola, me gustaría reservar un masaje en SPA RELAX ISTANBUL.',
    it: 'Ciao, vorrei prenotare un massaggio presso SPA RELAX ISTANBUL.',
    tr: 'Merhaba, SPA RELAX ISTANBUL’da bir masaj rezervasyonu yaptırmak istiyorum.',
  };

  const prefilled = prefilledMessages[language] || prefilledMessages.fr;
  const whatsappUrl = `https://wa.me/212779403213?text=${encodeURIComponent(prefilled)}`;
  const isRtl = dir === 'rtl';

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      {/* Background Video with Dark Overlays */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 40%', zIndex: 1,
        }}
      >
        <source src="/videos/Massage Homme Tetouan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.92) 80%, #0d0d0d 100%)',
        zIndex: 2,
      }} />
      
      {/* Dynamic Gold Accent Light */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 3, filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 4, width: '100%', direction: dir }}>
        <div style={{ maxWidth: '750px', padding: '2rem 0', textAlign: isRtl ? 'right' : 'left' }}>
          
          {/* Tagline */}
          <div className="animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197, 160, 89, 0.08)', border: '1px solid rgba(197, 160, 89, 0.25)', padding: '0.4rem 1rem', borderRadius: '100px', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
              {t('hero.badge')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-in-up delay-100" style={{ marginBottom: '1.5rem', letterSpacing: '-0.01em', fontWeight: 700 }}>
            {t('hero.title1')} <span className="gradient-text" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>{t('hero.titleItalic')}</span> {t('hero.title2')}
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '650px', lineHeight: '1.8' }}>
            {t('hero.desc1')}<strong>{t('hero.descBold')}</strong>{t('hero.desc2')}<em>{t('hero.descItalic')}</em>
          </p>

          {/* Bullet Trustpoints */}
          <div className="animate-fade-in-up delay-300" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            marginBottom: '3rem', 
            borderLeft: isRtl ? 'none' : '3px solid var(--gold)', 
            paddingLeft: isRtl ? '0' : '1.2rem',
            borderRight: isRtl ? '3px solid var(--gold)' : 'none', 
            paddingRight: isRtl ? '1.2rem' : '0',
            flexDirection: isRtl ? 'row-reverse' : 'row'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>{t('hero.trust.masseur')}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>{t('hero.trust.frame')}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>{t('hero.trust.hygiene')}</span>
            </div>
          </div>

          {/* Buttons CTA */}
          <div className="animate-fade-in-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: isRtl ? 'flex-start' : 'flex-start', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: isRtl ? '0' : '6px', marginLeft: isRtl ? '6px' : '0' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.019-5.109-2.877-6.97-1.859-1.86-4.339-2.88-6.974-2.88-5.441 0-9.865 4.42-9.87 9.86-.001 1.767.461 3.49 1.339 5.025l-.995 3.637 3.713-.975zm11.367-7.405c-.3-.15-1.772-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.579-1.786-4.73-2.91-5.385-4.041-.175-.3-.025-.463.125-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.52l-.575-.01c-.2 0-.525.075-.8 1.012l-1.01 1.01c-.815.815-1.12 1.962-.77 3.037.765 2.348 2.28 4.3 4.15 5.562 1.3.875 2.76 1.4 4.3 1.5.875.05 1.76-.05 2.612-.3.94-.275 1.838-.975 2.25-1.925.325-.75.325-1.4 0-1.6-.075-.1-.275-.2-.575-.35z"/>
              </svg>
              {t('hero.btn.wa')}
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              {t('hero.btn.services')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
