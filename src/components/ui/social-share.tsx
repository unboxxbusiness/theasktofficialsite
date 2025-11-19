"use client";

import {
  Share2,
  Mail,
  Linkedin,
  Facebook,
  MessageCircle, // Using MessageCircle for WhatsApp as there is no direct WhatsApp icon
} from "lucide-react";
import { Twitter as TwitterIcon } from 'lucide-react'; // Renaming to avoid conflict
import { Button } from "./button";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SocialShare() {
  const pathname = usePathname();
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, [pathname]);

  const shareData = {
    title: "Theaskt.org | Empowering Women Across India",
    text: "I found this incredible platform, Theaskt.org, that's empowering women in India with digital and AI skills to restart careers and earn from home. Join the movement!",
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: pageUrl,
        });
      } catch (error) {
        // This will catch the AbortError if the user cancels the share sheet.
        // We can safely ignore it.
        if ((error as DOMException).name !== 'AbortError') {
          console.error("Error sharing:", error);
        }
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      // This part is handled by the Popover on desktop.
      // On mobile, if navigator.share is not supported, nothing will happen,
      // but this is very rare on modern mobile browsers.
    }
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + " " + pageUrl)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    },
    {
      name: "X (Twitter)",
      icon: <TwitterIcon className="h-6 w-6" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareData.text)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareData.title)}&summary=${encodeURIComponent(shareData.text)}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + "\n\n" + pageUrl)}`,
    },
  ];

  // Use native share on mobile, popover on desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    window.addEventListener('resize', () => setIsMobile(checkMobile()));
    return () => window.removeEventListener('resize', () => setIsMobile(checkMobile()));
  }, []);

  if (isMobile) {
    return (
      <Button onClick={handleNativeShare} variant="outline" size="sm" className="gap-2">
        <Share2 className="h-4 w-4" />
        Share this page
      </Button>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share this page
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title={`Share on ${link.name}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}