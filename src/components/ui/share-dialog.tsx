
"use client";

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Facebook, Linkedin, Mail, MessageCircle, Twitter as TwitterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const pathname = usePathname();
  const [pageUrl, setPageUrl] = React.useState("");

  React.useEffect(() => {
    setPageUrl(window.location.href);
  }, [pathname]);

  const shareData = {
    title: "Theaskt.org | Empowering Women Across India",
    text: "I found this incredible platform, Theaskt.org, that's empowering women in India with digital and AI skills to restart careers and earn from home. Join the movement!",
  };

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageCircle className="h-6 w-6" />, url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + " " + pageUrl)}` },
    { name: "Facebook", icon: <Facebook className="h-6 w-6" />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` },
    { name: "X (Twitter)", icon: <TwitterIcon className="h-6 w-6" />, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareData.text)}` },
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareData.title)}&summary=${encodeURIComponent(shareData.text)}` },
    { name: "Email", icon: <Mail className="h-6 w-6" />, url: `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + "\n\n" + pageUrl)}` },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border bg-card shadow-xl"
          >
            <div className="relative p-8 text-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                <img src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png" alt="Theaskt.org Logo" className="max-h-full max-w-full object-contain" />
              </div>
              <h2 className="mb-2 flex items-center justify-center gap-2 text-2xl font-bold text-card-foreground">
                <Share2 className="h-5 w-5 text-primary" />
                Spread the Word
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                If you find our mission valuable, please share it with others. Your share can help another woman learn, grow, and become independent.
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <Button asChild key={link.name} variant="outline" size="icon" className="rounded-full h-12 w-12" aria-label={`Share on ${link.name}`}>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </Link>
                  </Button>
                ))}
              </div>
               <Button variant="link" onClick={onClose} className="mt-4 text-muted-foreground">
                  Maybe later
                </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
