"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t, language, dir } = useLanguage();
  const isRtl = dir === "rtl";

  const prefilledMessages: Record<string, string> = {
    fr: "Bonjour, je souhaite réserver un massage prochainement.",
    ar: "مرحباً، أود حجز حصة تدليك قريباً.",
    en: "Hello, I would like to book a massage session soon.",
    es: "Hola, me gustaría reservar una sesión de masaje pronto.",
    it: "Ciao, vorrei prenotare una sessione di massaggio presto.",
    tr: "Merhaba, yakında bir masaj seansı ayırtmak istiyorum.",
  };

  const prefilled = prefilledMessages[language] || prefilledMessages.fr;
  const whatsappUrl = `https://wa.me/212779403213?text=${encodeURIComponent(prefilled)}`;

  const galleryImages = [
    {
      src: "/images/massage-pour-homme-tetouan.jpg",
      alt: "Premium massage suite Tetouan",
      title: t("gallery.t1"),
      category: t("gallery.c1"),
    },
    {
      src: "/images/relax-tetouan-massage.jpg",
      alt: "Essential massage oils and massage environment",
      title: t("gallery.t2"),
      category: t("gallery.c2"),
    },
    {
      src: "/images/tetouan-massage-maroc.jpg",
      alt: "Massage therapist setup",
      title: t("gallery.t3"),
      category: t("gallery.c3"),
    },
    {
      src: "/images/pedicure-homme.jpg",
      alt: "Relaxation pedicure for men",
      title: t("gallery.t4"),
      category: t("gallery.c4"),
    },
    {
      src: "/images/centre-massage-tetouan.jpg",
      alt: "Luxury spa reception Tetouan",
      title: t("gallery.t5"),
      category: t("gallery.c5"),
    },
    {
      src: "/images/massage-tetouan-accueil-vip.jpeg",
      alt: "Luxury spa reception Tetouan",
      title: t("gallery.t6"),
      category: t("gallery.c6"),
    },
  ];

  return (
    <section
      className="section bg-surface"
      id="gallery"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        direction: dir,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="text-center"
          style={{ maxWidth: "700px", margin: "0 auto 4.5rem auto" }}
        >
          <span className="section-label">{t("gallery.label")}</span>
          <h2>{t("gallery.title")}</h2>
          <div className="gold-divider"></div>
          <p>{t("gallery.desc")}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-3 gap-6" style={{ marginBottom: "4rem" }}>
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden card"
              style={{ height: "300px", borderRadius: "var(--radius-md)" }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="gallery-img"
              />

              {/* Hover Dark Gold Overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.4) 60%, rgba(13,13,13,0.2) 100%)",
                  opacity: 0.85,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem 1.5rem",
                  transition: "all 0.4s",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {img.category}
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--text-primary)",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                  }}
                >
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div
          className="text-center"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "2.5rem 2rem",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-gold)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            {t("gallery.cta.title")}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
            }}
          >
            {t("gallery.cta.desc")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            {t("gallery.cta.btn")}
          </a>
        </div>
      </div>

      <style>{`
        .gallery-img:hover {
          transform: scale(1.08);
        }
        .gallery-overlay:hover {
          opacity: 0.95 !important;
        }
      `}</style>
    </section>
  );
}
