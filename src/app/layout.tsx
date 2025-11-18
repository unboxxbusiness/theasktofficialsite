import type { Metadata } from 'next';
import './globals.css';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import SocialLinks, { SocialLink } from '@/components/ui/social-links';
import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';

const socialLinks: SocialLink[] = [
  { platform: 'linkedin', href: 'https://www.linkedin.com/company/theaskt' },
  { platform: 'instagram', href: 'https://www.instagram.com/the_askt/' },
  { platform: 'facebook', href: 'https://www.facebook.com/theasktorg' },
  { platform: 'x', href: 'https://x.com/theaskt' },
  { platform: 'mail', href: 'mailto:support@theaskt.org' },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://theaskt.org'),
  title: {
    default: 'TheAskt.org | Digital & AI Skills for Women in India',
    template: `%s | TheAskt.org`,
  },
  description: 'A public learning trust empowering women in India to restart careers and earn from home with practical digital and AI skills. Join our safe, supportive community.',
  keywords: ['women empowerment', 'digital skills India', 'AI training for women', 'career restart for women', 'financial independence', 'learn from home', 'Theaskt.org'],
  openGraph: {
    title: 'TheAskt.org | Digital & AI Skills for Women in India',
    description: 'A learning trust empowering women in India with skills to restart careers and earn from home.',
    url: 'https://theaskt.org',
    siteName: 'TheAskt.org',
    images: [
      {
        url: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png',
        width: 1200,
        height: 630,
        alt: 'TheAskt.org Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheAskt.org | Digital & AI Skills for Women in India',
    description: 'Empowering women in India with digital and AI skills to restart careers and achieve financial independence.',
    creator: '@theaskt',
    images: ['https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png'],
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
    icon: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png',
    shortcut: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png',
    apple: 'https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Theaskt.org",
    "url": "https://theaskt.org",
    "logo": "https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "email": "support@theaskt.org"
    },
    "sameAs": [
      "https://www.facebook.com/theasktorg",
      "https://x.com/theaskt",
      "https://www.instagram.com/the_askt/",
      "https://www.linkedin.com/company/theaskt"
    ]
  };

  const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TheAskt.org",
      "url": "https://theaskt.org",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://theaskt.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
  };


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <SocialLinks links={socialLinks} />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
