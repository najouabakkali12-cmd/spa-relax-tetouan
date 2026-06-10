'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: t('nav.services') },
    { href: '#why-us', label: t('benefits.label') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#testimonials', label: t('nav.reviews') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

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

  const renderLangSelector = () => (
    <select
      value={language}
      onChange={(e) => handleLangChange(e.target.value as Language)}
      style={{
        background: 'rgba(197, 160, 89, 0.08)',
        border: '1px solid rgba(197, 160, 89, 0.3)',
        color: 'var(--gold)',
        padding: isRtl ? '0.45rem 0.8rem 0.45rem 1.6rem' : '0.45rem 1.6rem 0.45rem 0.8rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M0 0l5 5 5-5z' fill='%23c5a059'/></svg>")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isRtl ? 'left 0.6rem center' : 'right 0.6rem center',
        textTransform: 'uppercase',
      }}
    >
      <option style={{ background: '#131313', color: '#f0ece4' }} value="fr">🇫🇷 FR</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="ar">🇲🇦 AR</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="en">🇬🇧 EN</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="es">🇪🇸 ES</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="it">🇮🇹 IT</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="tr">🇹🇷 TR</option>
      <option style={{ background: '#131313', color: '#f0ece4' }} value="pt">🇵🇹 PT</option>
    </select>
  );

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(197,160,89,0.15)' : 'none',
        transition: 'all 0.4s ease',
        padding: '1rem 0',
        direction: dir,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          {/* Logo */}
          <Link href="#" style={{ textDecoration: 'none', textAlign: isRtl ? 'right' : 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #d4b47a, #c5a059)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '0.02em',
              }}>SPA RELAX</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.55rem',
                fontWeight: 600, letterSpacing: '0.35em',
                textTransform: 'uppercase', color: 'var(--text-secondary)',
              }}>{t('footer.slogan')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexDirection: isRtl ? 'row-reverse' : 'row' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{l.label}</Link>
            ))}
            
            {/* Language Dropdown Selector */}
            {renderLangSelector()}

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.72rem' }}>
              📲 {t('nav.book')}
            </a>
          </div>

          {/* Hamburger */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem', flexDirection: isRtl ? 'row-reverse' : 'row' }} className="hamburger-container">
            {renderLangSelector()}
            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
              }} aria-label="Menu">
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '24px', height: '2px',
                  background: menuOpen
                    ? (i === 1 ? 'transparent' : 'var(--gold)')
                    : 'var(--text-primary)',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none')
                    : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(13,13,13,0.98)', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2rem',
          direction: dir,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)', fontSize: '2rem',
                color: 'var(--text-primary)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}>
              {l.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg" onClick={() => setMenuOpen(false)}>
            📲 {t('footer.btn.live')}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-container { display: flex !important; }
        }
      `}</style>
    </>
  );
}
