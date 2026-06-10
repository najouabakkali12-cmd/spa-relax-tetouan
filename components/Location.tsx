'use client';

import { useLanguage } from '../context/LanguageContext';

const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.682650742491!2d-5.38531778474296!3d35.56402428022137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b424c55555555%3A0x6b45a27863bf124e!2sAvenue%20Kaboul%2C%20T%C3%A9touan%2093030%2C%20Morocco!5e0!3m2!1sen!2sma!4v1684999999999!5m2!1sen!2sma';

export default function Location() {
  const { t, dir, language } = useLanguage();
  const isRtl = dir === 'rtl';

  const prefilledMessages: Record<string, string> = {
    fr: 'Bonjour, je souhaite réserver un massage prochainement chez SPA RELAX ISTANBUL.',
    ar: 'مرحباً، أود حجز حصة تدليك قريباً في SPA RELAX ISTANBUL.',
    en: 'Hello, I would like to book a massage soon at SPA RELAX ISTANBUL.',
    es: 'Hola, me gustaría reservar un masaje pronto en SPA RELAX ISTANBUL.',
    it: 'Ciao, vorrei prenotare un massaggio a breve presso SPA RELAX ISTANBUL.',
    tr: 'Merhaba, yakın zamanda SPA RELAX ISTANBUL’da bir masaj rezervasyonu yaptırmak istiyorum.',
  };

  const prefilled = prefilledMessages[language] || prefilledMessages.fr;
  const whatsappUrl = `https://wa.me/212779403213?text=${encodeURIComponent(prefilled)}`;

  return (
    <section className="section bg-surface" id="contact" style={{ borderBottom: '1px solid var(--border-subtle)', direction: dir }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-label">{t('contact.label')}</span>
          <h2>{t('contact.title')}</h2>
          <div className="gold-divider"></div>
          <p>
            {t('contact.desc')}
          </p>
        </div>

        {/* Location & Contact Details */}
        <div className="grid grid-2 gap-8" style={{ alignItems: 'stretch' }}>
          
          {/* Left Info Column */}
          <div className="card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: isRtl ? 'right' : 'left' }}>
            
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {t('contact.info')}
              </span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '2rem', fontWeight: 600 }}>
                SPA RELAX ISTANBUL
              </h3>
              
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--gold)', lineHeight: 1.2 }}>📍</span>
                <div style={{ width: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{t('contact.address.label')}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {t('contact.address.val')}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--gold)', lineHeight: 1.2 }}>📞</span>
                <div style={{ width: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{t('contact.phone.label')}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <a href="tel:+212779403213" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>
                      {t('contact.phone.val')}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--gold)', lineHeight: 1.2 }}>⏰</span>
                <div style={{ width: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{t('contact.hours.label')}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {t('contact.hours.val')}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', fontStyle: 'italic' }}>
                    {t('contact.hours.note')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <a href={whatsappUrl} 
                target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ flexGrow: 1, justifyContent: 'center' }}>
                 {t('contact.btn.wa')}
              </a>
              <a href="https://maps.google.com/?q=SPA+RELAX+ISTANBUL+Avenue+Kaboul+Tiknia+Tetouan" 
                target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flexGrow: 1, justifyContent: 'center' }}>
                 {t('contact.btn.maps')}
              </a>
            </div>

          </div>

          {/* Right Map Column */}
          <div className="card" style={{ overflow: 'hidden', minHeight: '400px', border: '1px solid var(--border)' }}>
            <iframe 
              src={MAP_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0, display: 'block', filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SPA RELAX ISTANBUL Location Map"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
