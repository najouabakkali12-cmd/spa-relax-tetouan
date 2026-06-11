'use client';

import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok, FaPinterest } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid var(--border-subtle)',
      padding: '5rem 0 2rem 0',
      direction: dir,
      textAlign: isRtl ? 'right' : 'left',
    }}>
      <div className="container">
        
        {/* Footer Top Grid */}
        <div className="grid grid-3 gap-8" style={{ marginBottom: '4rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #d4b47a, #c5a059)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '0.02em',
              }}>SPA RELAX</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                fontWeight: 600, letterSpacing: '0.35em',
                textTransform: 'uppercase', color: 'var(--text-secondary)',
              }}>{t('footer.slogan')}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Specialties & Local SEO links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}>
              {t('footer.spec.title')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {[
                t('footer.spec.s1'),
                t('footer.spec.s2'),
                t('footer.spec.s3'),
                t('footer.spec.s4'),
                t('footer.spec.s5'),
                t('footer.spec.s6'),
              ].map((spec, i) => (
                <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                  <span style={{ color: 'var(--gold)' }}>✦</span> {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}>
              {t('footer.contact.title')}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
              📍 Avenue Kaboul, Tiknia 93030, Tétouan, Maroc<br />
              📞 <a href="tel:+212779403213" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{t('contact.phone.val')}</a><br />
               ✉️ <a href="mailto:najoua.bakkali12@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>najoua.bakkali12@gmail.com</a>
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', justifyContent: isRtl ? 'flex-end' : 'flex-start', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              {[
                { icon: <FaInstagram />, href: 'https://www.instagram.com/najoua.bakkali12/reels/', color: '#E4405F' },
                { icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=61590603366722', color: '#1877F2' },
                { icon: <FaTwitter />, href: 'https://twitter.com/spa_relax', color: '#A0A0A0' },
                { icon: <FaPinterest />, href: 'https://www.pinterest.com/najouabakkali120105/', color: '#BD081C' },
                { icon: <FaTiktok />, href: 'https://www.tiktok.com/@massage_hommes_tetouan', color: '#ff0050' },
                { icon: <FaWhatsapp />, href: 'https://wa.me/212779403213', color: '#25D366' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = social.color;
                    el.style.color = '#fff';
                    el.style.borderColor = social.color;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = `0 6px 20px ${social.color}66`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = 'var(--bg-surface)';
                    el.style.color = social.color;
                    el.style.borderColor = 'var(--border-subtle)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                  aria-label={social.href}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: isRtl ? 'flex-end' : 'flex-start', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <a href="https://wa.me/212779403213" target="_blank" rel="noopener noreferrer" 
                className="btn btn-whatsapp" style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem', borderRadius: '4px' }}>
                {t('footer.btn.live')}
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          flexDirection: isRtl ? 'row-reverse' : 'row',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            &copy; {currentYear} {t('footer.copy')}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <Link href="#" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {t('footer.legal')}
            </Link>
            <Link href="#" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {t('footer.privacy')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
