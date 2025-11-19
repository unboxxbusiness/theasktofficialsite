"use client";

import * as React from "react";
import { usePathname } from 'next/navigation';
import { Share2, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

type Platform =
  | "linkedin"
  | "instagram"
  | "github"
  | "mail"
  | "facebook"
  | "x"
  | "dribbble"
  | "website";

export interface SocialLink {
  platform: Platform;
  href: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
  showOnMobile?: boolean;
  floatingButtonColor?: string;
}

interface PlatformStyle {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  gradient: string;
  hoverGradient: string;
}

const PLATFORM_STYLES: Record<Platform, PlatformStyle> = {
  linkedin: {
    label: "LinkedIn",
    icon: FaLinkedin,
    gradient: "from-blue-600 to-blue-400",
    hoverGradient: "from-blue-500 to-blue-300",
  },
  instagram: {
    label: "Instagram",
    icon: FaInstagram,
    gradient: "from-pink-600 via-purple-600 to-orange-500",
    hoverGradient: "from-pink-500 via-purple-500 to-orange-400",
  },
  github: {
    label: "GitHub",
    icon: FaGithub,
    gradient:
      "from-zinc-800 to-zinc-600 dark:from-[hsl(var(--muted-foreground))] dark:to-[hsl(var(--foreground))]",
    hoverGradient:
      "from-zinc-700 to-zinc-500 dark:from-[hsl(var(--muted-foreground))] dark:to-[hsl(var(--foreground)/0.8)]",
  },
  mail: {
    label: "Mail",
    icon: FaEnvelope,
    gradient: "from-cyan-600 to-blue-500",
    hoverGradient: "from-cyan-500 to-blue-400",
  },
  facebook: {
    label: "Facebook",
    icon: FaFacebook,
    gradient: "from-blue-700 to-blue-500",
    hoverGradient: "from-blue-600 to-blue-400",
  },
  x: {
    label: "X",
    icon: FaTwitter,
    gradient: "from-[hsl(var(--foreground))] to-[hsl(var(--muted-foreground))]",
    hoverGradient:
      "from-[hsl(var(--muted-foreground))] to-[hsl(var(--muted)/0.7)]",
  },
  dribbble: {
    label: "Dribbble",
    icon: FaDribbble,
    gradient: "from-pink-600 to-pink-400",
    hoverGradient: "from-pink-500 to-pink-300",
  },
  website: {
    label: "Website",
    icon: FaGlobe,
    gradient: "from-emerald-600 to-teal-500",
    hoverGradient: "from-emerald-500 to-teal-400",
  },
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  showOnMobile = true,
  floatingButtonColor = "bg-primary",
}) => {
  const [mobileDockOpen, setMobileDockOpen] = React.useState(false);
  const pathname = usePathname();
  const [pageUrl, setPageUrl] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  const shareData = {
    title: "Theaskt.org | Empowering Women Across India",
    text: "I found this incredible platform, Theaskt.org, that's empowering women in India with digital and AI skills to restart careers and earn from home. Join the movement!",
  };

  const getShareUrl = (platform: Platform) => {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(shareData.title);
    const encodedText = encodeURIComponent(shareData.text);
    const twitterText = encodeURIComponent(`${shareData.text} #WomenInTech #DigitalIndia #TheAskt`);

    switch (platform) {
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case "x":
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${twitterText}`;
      case "mail":
        return `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
      case "instagram":
        return links.find(l => l.platform === 'instagram')?.href || '#';
      default:
        return links.find(l => l.platform === platform)?.href || '#';
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: pageUrl,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          // User cancelled the share sheet. Silently ignore.
        } else {
          console.error("Error sharing:", error);
          setMobileDockOpen(!mobileDockOpen);
        }
      }
    } else {
      setMobileDockOpen(!mobileDockOpen);
    }
  };

  if (!showOnMobile) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        {mobileDockOpen && (
          <div
            className="fixed inset-0 bg-[hsl(var(--background)/0.6)] backdrop-blur-sm"
            onClick={() => setMobileDockOpen(false)}
          />
        )}

        <div className="relative">
          <div
            className={`absolute bottom-20 left-0 flex flex-col-reverse gap-3 transition-all duration-500 ${
              mobileDockOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            {links.map(({ platform }, index) => {
              const style = PLATFORM_STYLES[platform];
              if (!style) return null;
              const Icon = style.icon;
              const shareUrl = getShareUrl(platform);
              const isShareLink = ['linkedin', 'facebook', 'x', 'mail'].includes(platform);

              return (
                <a
                  key={platform}
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mr-auto"
                  style={{
                    transitionDelay: mobileDockOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${style.gradient}
                               flex items-center justify-center shadow-lg hover:scale-110
                               transition-transform duration-300 border border-border`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-16
                                  bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))]
                                  text-xs font-medium px-3 py-1.5 rounded-md shadow-md
                                  opacity-0 group-hover:opacity-100 transition-opacity">
                    {isShareLink ? `Share on ${style.label}` : `Follow on ${style.label}`}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-[hsl(var(--popover))] rotate-45" />
                  </div>
                </a>
              );
            })}
          </div>

          <button
            onClick={handleShare}
            className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl active:scale-95
                       transition-all duration-300 border border-border overflow-hidden ${floatingButtonColor}`}
            aria-label="Share this website"
          >
            <div className="relative z-10">
              {mobileDockOpen ? (
                <X size={24} className="text-primary-foreground" />
              ) : (
                <Share2 size={24} className="text-primary-foreground" />
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
