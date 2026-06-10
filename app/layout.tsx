import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SPA RELAX ISTANBUL – Massage Tetouan | Centre de Massage Premium Tétouane',
  description:
    'SPA RELAX ISTANBUL – Le meilleur centre de massage pour hommes à Tétouane, Maroc. Massage relaxant, anti-stress, deep tissue et VIP. Réservez maintenant sur WhatsApp. Avenue Kaboul, Tiknia 93030 Tétouane.',
  keywords: [
    'massage Tetouan',
    'spa Tetouan',
    'centre de massage Tetouan',
    'massage homme Tetouan',
    'spa homme Tetouan',
    'massage relaxant Tetouan',
    'massage anti-stress Tetouan',
    'massage deep tissue Tetouan',
    'bien-être Tetouan',
    'SPA RELAX ISTANBUL',
    'massage Tétouane',
    'spa Tétouane',
    'مساج تطوان',
    'مركز مساج تطوان',
    'سبا تطوان',
    'relaxation Tetouan',
    'massage Tiknia',
    'massage Avenue Kaboul',
  ].join(', '),
  authors: [{ name: 'SPA RELAX ISTANBUL' }],
  creator: 'SPA RELAX ISTANBUL',
  publisher: 'SPA RELAX ISTANBUL',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://sparelaxistanbul.ma',
    siteName: 'SPA RELAX ISTANBUL',
    title: 'SPA RELAX ISTANBUL – Massage Premium Pour Hommes à Tétouane',
    description:
      'Découvrez une expérience de massage de luxe à Tétouane. Massage relaxant, anti-stress, deep tissue et VIP. Réservez sur WhatsApp.',
    images: [
      {
        url: '/images/men-massage-tetouan.jpg',
        width: 1200,
        height: 630,
        alt: 'SPA RELAX ISTANBUL – Massage Tetouan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPA RELAX ISTANBUL – Massage Premium Tetouan',
    description: 'Centre de massage premium pour hommes à Tétouane, Maroc.',
  },
  alternates: {
    canonical: 'https://sparelaxistanbul.ma',
  },
  other: {
    'geo.region': 'MA-04',
    'geo.placename': 'Tétouan',
    'geo.position': '35.5785;-5.3684',
    ICBM: '35.5785, -5.3684',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#131313" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://sparelaxistanbul.ma',
              name: 'SPA RELAX ISTANBUL',
              description:
                'Centre de massage premium pour hommes à Tétouane, Maroc. Massage relaxant, anti-stress, deep tissue et VIP.',
              url: 'https://sparelaxistanbul.ma',
              telephone: '+212779403213',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Avenue Kaboul',
                addressLocality: 'Tiknia',
                postalCode: '93030',
                addressRegion: 'Tétouan',
                addressCountry: 'MA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.5785,
                longitude: -5.3684,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '22:00',
                },
              ],
              priceRange: '$$',
              servesCuisine: [],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services de Massage',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Relaxant' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Anti-Stress' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Deep Tissue' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Wellness' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage VIP' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
