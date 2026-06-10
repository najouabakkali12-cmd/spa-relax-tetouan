'use client';

import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { language, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const prefilledMessages: Record<string, string> = {
    fr: 'Bonjour, je souhaite réserver un massage prochainement.',
    ar: 'مرحباً، أود حجز حصة تدليك قريباً.',
    en: 'Hello, I would like to book a massage session soon.',
    es: 'Hola, me gustaría réserver una sesión de masaje pronto.',
    it: 'Ciao, vorrei prenotare una sessione di massaggio presto.',
    tr: 'Merhaba, yakında bir masaj seansı ayırtmak istiyorum.',
  };

  const tooltips: Record<string, string> = {
    fr: 'Discuter sur WhatsApp',
    ar: 'تواصل معنا عبر واتساب',
    en: 'Chat on WhatsApp',
    es: 'Chatear en WhatsApp',
    it: 'Chatta su WhatsApp',
    tr: "WhatsApp'ta Sohbet Et",
  };

  const ariaLabels: Record<string, string> = {
    fr: 'Contactez-nous sur WhatsApp',
    ar: 'اتصل بنا على واتساب',
    en: 'Contact us on WhatsApp',
    es: 'Contáctenos en WhatsApp',
    it: 'Contattaci su WhatsApp',
    tr: 'WhatsApp üzerinden bizimle iletişime geçin',
  };

  const tooltipText = tooltips[language] || tooltips.fr;
  const ariaLabel = ariaLabels[language] || ariaLabels.fr;
  const prefilled = prefilledMessages[language] || prefilledMessages.fr;

  const whatsappUrl = `https://wa.me/212779403213?text=${encodeURIComponent(prefilled)}`;

  return (
    <>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wa-btn"
        aria-label={ariaLabel}
      >
        <span className="floating-wa-tooltip">{tooltipText}</span>
        {/* WhatsApp Icon SVG */}
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ display: 'block' }}
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="currentColor"/>
        </svg>
      </a>

      <style>{`
        .floating-wa-btn {
          position: fixed;
          bottom: 2rem;
          right: ${isRtl ? 'auto' : '2rem'};
          left: ${isRtl ? '2rem' : 'auto'};
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
          z-index: 999;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: wa-pulse 2s infinite;
        }

        .floating-wa-btn:hover {
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }

        .floating-wa-tooltip {
          position: absolute;
          right: ${isRtl ? 'auto' : '80px'};
          left: ${isRtl ? '80px' : 'auto'};
          background: #141414;
          color: #f0ece4;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.6rem 1rem;
          border-radius: 4px;
          border: 1px solid rgba(197, 160, 89, 0.3);
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: ${isRtl ? 'translateX(-15px)' : 'translateX(15px)'};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-wa-btn:hover .floating-wa-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        @keyframes wa-pulse {
          0% {
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 12px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .floating-wa-btn {
            bottom: 1.5rem;
            right: ${isRtl ? 'auto' : '1.5rem'};
            left: ${isRtl ? '1.5rem' : 'auto'};
            width: 54px;
            height: 54px;
          }
          .floating-wa-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
