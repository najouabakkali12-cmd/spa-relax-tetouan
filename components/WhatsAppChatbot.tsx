'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { t, dir, language } = useLanguage();

  useEffect(() => {
    // Show automated chat invitation badge/notification after 4 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const greetings: Record<string, string> = {
    fr: 'Bonjour, ',
    ar: 'مرحباً، ',
    en: 'Hello, ',
    es: 'Hola, ',
    it: 'Ciao, ',
    tr: 'Merhaba, ',
  };

  const handleOptionClick = (optionText: string) => {
    const prefix = greetings[language] || greetings.fr;
    const encodedText = encodeURIComponent(`${prefix}${optionText}`);
    window.open(`https://wa.me/212779403213?text=${encodedText}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userMessage = formData.get('message') as string;
    if (userMessage.trim()) {
      const encodedText = encodeURIComponent(userMessage);
      window.open(`https://wa.me/212779403213?text=${encodedText}`, '_blank');
    }
  };

  const isRtl = dir === 'rtl';

  return (
    <>
      {/* Floating Trigger Bubble */}
      <div 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="chatbot-trigger"
        style={{
          position: 'fixed',
          bottom: '2.2rem',
          left: isRtl ? 'auto' : '2rem',
          right: isRtl ? '2rem' : 'auto',
          zIndex: 998,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexDirection: isRtl ? 'row-reverse' : 'row',
        }}
      >
        {/* Sparkle Notification Banner */}
        {showNotification && !isOpen && (
          <div className="chatbot-notification" style={{
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            padding: '0.6rem 1rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-gold)',
            fontSize: '0.8rem',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            animation: 'wa-pulse 2s infinite',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}>
            <span style={{ color: '#25D366' }}>●</span>
            {t('chat.notify')}
          </div>
        )}

        {/* The Avatar Bubble */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: '2px solid var(--gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          position: 'relative',
          fontSize: '1.4rem'
        }}>
          💆‍♂️
          {/* Online green indicator */}
          <span style={{
            position: 'absolute',
            bottom: '2px',
            right: isRtl ? 'auto' : '2px',
            left: isRtl ? '2px' : 'auto',
            width: '12px',
            height: '12px',
            background: '#25D366',
            borderRadius: '50%',
            border: '2px solid var(--bg-card)'
          }}></span>
        </div>
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="chatbot-window" style={{
          position: 'fixed',
          bottom: '6.5rem',
          left: isRtl ? 'auto' : '2rem',
          right: isRtl ? '2rem' : 'auto',
          width: '350px',
          background: '#141414',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.6), var(--shadow-gold)',
          zIndex: 997,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeInUp 0.3s ease-out forwards',
          direction: dir,
        }}>
          {/* Chat Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1e1e1e, #111111)',
            padding: '1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--gold-glow)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
              }}>
                💆‍♂️
              </div>
              <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Youssef</h4>
                <span style={{ fontSize: '0.7rem', color: '#25d366', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: isRtl ? 'flex-end' : 'flex-start', fontWeight: 500 }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#25d366', borderRadius: '50%' }}></span>
                  {t('chat.status')}
                </span>
              </div>
            </div>
            
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.1rem' }}
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{
            padding: '1.5rem 1.25rem',
            maxHeight: '280px',
            overflowY: 'auto',
            background: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {/* Agent Greeting */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: '0.9rem 1.1rem',
              borderRadius: isRtl ? '12px 0 12px 12px' : '0 12px 12px 12px',
              maxWidth: '85%',
              alignSelf: 'flex-start',
              textAlign: 'start',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                {t('chat.greet1')}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5, marginTop: '0.5rem' }}>
                {t('chat.greet2')}
              </p>
            </div>

            {/* Simulated Timing */}
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', alignSelf: 'flex-start', paddingLeft: isRtl ? '0' : '8px', paddingRight: isRtl ? '8px' : '0' }}>
              {t('chat.hours')}
            </span>

            {/* Quick Options Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '0.5rem' }}>
              {[
                t('chat.opt1'),
                t('chat.opt2'),
                t('chat.opt3'),
                t('chat.opt4')
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  style={{
                    background: 'rgba(197, 160, 89, 0.06)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    color: 'var(--gold-light)',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    textAlign: 'start',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontWeight: 500
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--gold-glow)';
                    e.currentTarget.style.borderColor = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(197, 160, 89, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.2)';
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Form Footer */}
          <form onSubmit={handleFormSubmit} style={{
            background: 'var(--bg-card)',
            padding: '0.75rem 1rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '8px',
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}>
            <input 
              name="message"
              placeholder={t('chat.placeholder')} 
              required
              style={{
                flexGrow: 1,
                background: '#0d0d0d',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '0.6rem 0.8rem',
                color: 'var(--text-primary)',
                fontSize: '0.82rem',
                outline: 'none',
                textAlign: 'start',
              }}
            />
            <button 
              type="submit"
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                transform: isRtl ? 'rotate(180deg)' : 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#20ba59')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              ➔
            </button>
          </form>

        </div>
      )}

      <style>{`
        .chatbot-trigger:hover {
          transform: translateY(-2px);
        }
        .chatbot-notification {
          transform-origin: ${isRtl ? 'right' : 'left'} center;
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
