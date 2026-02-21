import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mudrika Variya | Flutter & FlutterFlow Developer',
  description: 'Portfolio of Mudrika Variya, a Flutter & FlutterFlow Developer with 3+ years of experience delivering scalable and pixel-perfect applications.',
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
