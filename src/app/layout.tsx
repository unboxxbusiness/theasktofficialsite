import type {Metadata} from 'next';
import './globals.css';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import SocialLinks, { SocialLink } from '@/components/ui/social-links';

export const metadata: Metadata = {
  title: 'TheAskt',
  description: 'Cultivate Your Curiosity. Grow Your Knowledge.',
};

const socialLinks: SocialLink[] = [
  { platform: 'linkedin', href: 'https://www.linkedin.com/company/theaskt' },
  { platform: 'instagram', href: 'https://www.instagram.com/the_askt/' },
  { platform: 'facebook', href: 'https://www.facebook.com/theasktorg' },
  { platform: 'x', href: 'https://x.com/theaskt' },
  { platform: 'mail', href: 'mailto:support@theaskt.org' },
];

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
        <SocialLinks links={socialLinks} />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
