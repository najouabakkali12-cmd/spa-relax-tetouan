'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #c5a059, #a8883f)',
        color: '#0a0a0a',
        fontSize: '1.2rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-4px) scale(1.1)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(197, 160, 89, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(197, 160, 89, 0.5)';
      }}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
