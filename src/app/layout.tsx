import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Mudrika Variya | Flutter & FlutterFlow Developer',
  description:
    'Portfolio of Mudrika Variya, a Flutter & FlutterFlow Developer with 3+ years of experience delivering scalable, performant, and pixel-perfect mobile applications.',
  metadataBase: new URL(siteUrl),
  keywords: [
    'Mudrika Variya',
    'Flutter developer',
    'FlutterFlow developer',
    'mobile application developer',
    'cross-platform apps',
    'Flutter portfolio',
    'Android and iOS apps',
  ],
  openGraph: {
    title: 'Mudrika Variya | Flutter & FlutterFlow Developer',
    description:
      'Flutter & FlutterFlow Developer specializing in scalable, production-ready mobile applications for startups and businesses.',
    url: '/',
    siteName: 'Mudrika Variya Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mudrika Variya - Flutter & FlutterFlow Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudrika Variya | Flutter & FlutterFlow Developer',
    description:
      'Flutter & FlutterFlow Developer specializing in scalable, production-ready mobile applications for startups and businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mudrika Variya',
  jobTitle: 'Flutter & FlutterFlow Developer',
  url: siteUrl,
  sameAs: [
    'https://www.linkedin.com/in/mudrika-variya/',
    'https://github.com/mudrika-variya',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
