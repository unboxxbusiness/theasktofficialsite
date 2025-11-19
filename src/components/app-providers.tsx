
'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/app/pages/home/components/navbar';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import { ShareDialog } from '@/components/ui/share-dialog';
import { useState, useEffect } from 'react';

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [isShareDialogOpen, setShareDialogOpen] = useState(false);

  useEffect(() => {
    const showDialog = () => {
      const hasBeenShown = sessionStorage.getItem('shareDialogShown');
      if (hasBeenShown) {
        window.removeEventListener('scroll', showDialog);
        return;
      }

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollThreshold = (documentHeight - windowHeight) * 0.4;

      if (scrollThreshold > 0 && scrollPosition > scrollThreshold) {
        setShareDialogOpen(true);
        sessionStorage.setItem('shareDialogShown', 'true');
        window.removeEventListener('scroll', showDialog);
      }
    };
    
    window.addEventListener('scroll', showDialog, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', showDialog);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <ScrollToTopButton />
      <ShareDialog isOpen={isShareDialogOpen} onClose={() => setShareDialogOpen(false)} />
    </ThemeProvider>
  );
}
