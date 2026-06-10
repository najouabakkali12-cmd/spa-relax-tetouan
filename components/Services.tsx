'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, dir, language } = useLanguage();
  const isRtl = dir === 'rtl';

  const services = [
    {
      title: t('services.s1.title'),
      durationVal: '',
      price: '250 DH',
      desc: t('services.s1.desc'),
      image: '/images/massage-relax.jpg',
      popular: false,
    },
    {
      title: t('services.s2.title'),
      durationVal: '',
      price: '350 DH',
      desc: t('services.s2.desc'),
      image: '/images/massage-homme.jpg',
      popular: true,
    },
    {
      title: t('services.s3.title'),
      durationVal: '',
      price: '450 DH',
      desc: t('services.s3.desc'),
      image: '/images/massage-oriental-tetouan.jpeg',
      popular: false,
    },
    {
      title: t('services.s4.title'),
      durationVal: '',
      price: '600 DH',
      desc: t('services.s4.desc'),
      image: '/images/massage-tetouan-kaboul.jpg',
      popular: true,
    },
  ];

  const getWhatsAppLink = (serviceName: string) => {
    const prefilledMessages: Record<string, string> = {
      fr: `Bonjour, je souhaite réserver le service : ${serviceName} chez SPA RELAX ISTANBUL.`,
      ar: `مرحباً، أود حجز خدمة: ${serviceName} في SPA RELAX ISTANBUL.`,
      en: `Hello, I would like to book the service: ${serviceName} at SPA RELAX ISTANBUL.`,
      es: `Hola, me gustaría reservar el servicio: ${serviceName} en SPA RELAX ISTANBUL.`,
      it: `Ciao, vorrei prenotare il servizio: ${serviceName} presso SPA RELAX ISTANBUL.`,
      tr: `Merhaba, SPA RELAX ISTANBUL’da şu hizmet için rezervasyon yaptırmak istiyorum: ${serviceName}.`,
    };
    const msg = prefilledMessages[language] || prefilledMessages.fr;
    return `https://wa.me/212779403213?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="section bg-dark" id="services" style={{ direction: dir }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-label">{t('services.label')}</span>
          <h2>{t('services.title')}</h2>
          <div className="gold-divider"></div>
          <p>
            {t('services.desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-2 gap-8">
          {services.map((item, idx) => {
            const formattedPrice = language === 'ar' ? `${item.price.replace(' DH', '')} درهم` : item.price;
            return (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: isRtl ? 'right' : 'left' }}>
                
                {/* Image & Price Tag */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  
                  {/* Black Gradient Overlay over Image */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(20,20,20,1) 0%, rgba(0,0,0,0) 50%)'
                  }} />

                  {/* Popular Badge */}
                  {item.popular && (
                    <span style={{
                      position: 'absolute', 
                      top: '1.25rem', 
                      left: isRtl ? 'auto' : '1.25rem',
                      right: isRtl ? '1.25rem' : 'auto',
                      background: 'var(--gold)', 
                      color: '#0d0d0d', 
                      fontSize: '0.65rem',
                      fontWeight: 700, 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.85rem', 
                      borderRadius: '4px', 
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}>
                      {t('services.rec')}
                    </span>
                  )}

                  {/* Duration & Price overlay */}
                  <div style={{
                    position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                    flexDirection: isRtl ? 'row-reverse' : 'row'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {/* ⏱ {item.durationVal} {t('services.min')} */}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--gold)', fontWeight: 700 }}>
                      {formattedPrice}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '2rem 1.5rem 2.5rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a 
                      href={getWhatsAppLink(item.title)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-whatsapp"
                      style={{ flexGrow: 1, justifyContent: 'center', padding: '0.9rem' }}
                    >
                      {t('services.btn')}
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
