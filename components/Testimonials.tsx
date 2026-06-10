'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const reviews = [
    {
      name: t('reviews.r1.name'),
      role: t('reviews.r1.role'),
      quote: t('reviews.r1.quote'),
      rating: 5,
    },
    {
      name: t('reviews.r2.name'),
      role: t('reviews.r2.role'),
      quote: t('reviews.r2.quote'),
      rating: 5,
    },
    {
      name: t('reviews.r3.name'),
      role: t('reviews.r3.role'),
      quote: t('reviews.r3.quote'),
      rating: 5,
    },
  ];

  return (
    <section className="section bg-dark" id="testimonials" style={{ borderBottom: '1px solid var(--border-subtle)', direction: dir }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-label">{t('reviews.label')}</span>
          <h2>{t('reviews.title')}</h2>
          <div className="gold-divider"></div>
          <p>
            {t('reviews.desc')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', textAlign: isRtl ? 'right' : 'left' }}>
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', color: 'var(--gold)', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} style={{ fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                }}>
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                {/* Avatar Placeholder with Initial */}
                <div style={{
                  width: '45px', height: '45px', borderRadius: '50%',
                  background: 'var(--gold-glow)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', fontWeight: 'bold', fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  {rev.name.charAt(0)}
                </div>
                
                <div style={{ textAlign: isRtl ? 'right' : 'left', width: '100%' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {rev.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
