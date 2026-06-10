'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import WhatsAppChatbot from '../components/WhatsAppChatbot';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1'),
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5'),
    },
  ];

  return (
    <>
      {/* Premium Luxury Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Spectacular Hero Slider/Banner */}
        <Hero />

        {/* Benefits & Trustpoints */}
        <Benefits />

        {/* Catalog of Premium Massage Services */}
        <Services />

        {/* Visual Gallery of the Suite */}
        <Gallery />

        {/* Trust testimonials and Reviews */}
        <Testimonials />

        {/* Elegant SEO-optimized FAQ Section */}
        <section className="section bg-card" id="faq" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', direction: dir }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <span className="section-label">{t('faq.label')}</span>
              <h2>{t('faq.title')}</h2>
              <div className="gold-divider"></div>
              <p>
                {t('faq.desc')}
              </p>
            </div>

            {/* Accordion list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="card animate-fade-in"
                    style={{ 
                      borderRadius: 'var(--radius-md)', 
                      background: isOpen ? 'var(--bg-surface)' : 'var(--bg-card)',
                      transition: 'all 0.3s'
                    }}
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        textAlign: isRtl ? 'right' : 'left',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        flexDirection: isRtl ? 'row-reverse' : 'row',
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ 
                        color: 'var(--gold)', 
                        fontSize: '1.2rem',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s'
                      }}>
                        ＋
                      </span>
                    </button>

                    {/* Content body */}
                    {isOpen && (
                      <div style={{ 
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '1rem',
                        textAlign: isRtl ? 'right' : 'left',
                      }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Location & Map Section */}
        <Location />
      </main>

      {/* Luxury Brand Footer */}
      <Footer />

      {/* Floating high-converting widgets */}
      <FloatingWhatsApp />
      <WhatsAppChatbot />
    </>
  );
}
