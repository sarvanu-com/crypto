import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://texnova.org'),
  title: {
    default: 'Texnova | Enterprise Crypto Payment Gateway',
    template: '%s | Texnova'
  },
  description: 'Global crypto payment infrastructure with ultra-low 0.1% fees, instant settlement, and enterprise-grade security.',
  keywords: ['Crypto Payment Gateway', 'Enterprise Blockchain', 'B2B Payments', 'Stablecoin Settlement', 'RWA Tokenization', 'MPC Wallets'],
  authors: [{ name: 'Texnova Team' }],
  creator: 'Texnova',
  publisher: 'Texnova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Texnova | Enterprise Crypto Payment Gateway',
    description: 'Global crypto payment infrastructure with ultra-low 0.1% fees.',
    url: 'https://texnova.org',
    siteName: 'Texnova',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Texnova - Enterprise Crypto Payment gateway',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texnova | Enterprise Crypto Payment Gateway',
    description: 'Global crypto payment infrastructure with ultra-low 0.1% fees, instant settlement, and enterprise-grade security.',
    images: ['/og-image.png'],
    creator: '@texnova',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.svg',
      },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#0047FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Texnova',
  url: 'https://texnova.org',
  logo: 'https://texnova.org/icon.svg',
  description: 'Enterprise crypto payment gateway providing stablecoin settlement, programmatic wallets, and RWA tokenization.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K2J8W1WCR2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K2J8W1WCR2');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
