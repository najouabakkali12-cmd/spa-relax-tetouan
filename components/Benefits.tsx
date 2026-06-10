'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const items = [
    {
      num: '01',
      title: t('benefits.b1.title'),
      desc: t('benefits.b1.desc'),
    },
    {
      num: '02',
      title: t('benefits.b2.title'),
      desc: t('benefits.b2.desc'),
    },
    {
      num: '03',
      title: t('benefits.b3.title'),
      desc: t('benefits.b3.desc'),
    },
    {
      num: '04',
      title: t('benefits.b4.title'),
      desc: t('benefits.b4.desc'),
    },
  ];

  return (
    <section className="section bg-card" id="why-us" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', direction: dir }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-label">{t('benefits.label')}</span>
          <h2>{t('benefits.title')}</h2>
          <div className="gold-divider"></div>
          <p>
            {t('benefits.desc')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="card" style={{ padding: '2.5rem 2rem', position: 'relative', textAlign: isRtl ? 'right' : 'left' }}>
              {/* Massive Decorative Number */}
              <span style={{
                position: 'absolute', top: '1rem',
                right: isRtl ? 'auto' : '1.5rem',
                left: isRtl ? '1.5rem' : 'auto',
                fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800,
                color: 'rgba(197, 160, 89, 0.06)', pointerEvents: 'none',
                lineHeight: 1
              }}>{item.num}</span>

              {/* Icon / Emblem */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '4px',
                background: 'var(--gold-glow)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', color: 'var(--gold)', fontWeight: 'bold',
                marginLeft: isRtl ? 'auto' : '0', marginRight: isRtl ? '0' : 'auto'
              }}>
                ✦
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {item.title}
              </h3>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
