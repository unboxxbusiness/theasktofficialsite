import type {Metadata} from 'next';
import './globals.css';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

export const metadata: Metadata = {
  title: 'TheAskt',
  description: 'Cultivate Your Curiosity. Grow Your Knowledge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
