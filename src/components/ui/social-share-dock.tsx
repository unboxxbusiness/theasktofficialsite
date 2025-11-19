"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter as TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DockItemData {
  name: string;
  Icon: React.ReactNode;
  url: string;
}

export const SocialShareDock = () => {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();
  const [pageUrl, setPageUrl] = useState("");
  const [socialLinks, setSocialLinks] = useState<DockItemData[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // This ensures window is defined, running only on the client
    const currentUrl = window.location.origin + pathname;
    setPageUrl(currentUrl);

    const shareData = {
      title: "Theaskt.org | Empowering Women Across India",
      text: "I found this incredible platform, Theaskt.org, that's empowering women in India with digital and AI skills to restart careers and earn from home. Join the movement!",
    };

    setSocialLinks([
      {
        name: "WhatsApp",
        Icon: <MessageCircle size={24} />,
        url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareData.text + " " + currentUrl,
        )}`,
      },
      {
        name: "Facebook",
        Icon: <Facebook size={24} />,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl,
        )}`,
      },
      {
        name: "X (Twitter)",
        Icon: <TwitterIcon size={24} />,
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl,
        )}&text=${encodeURIComponent(shareData.text)}`,
      },
      {
        name: "LinkedIn",
        Icon: <Linkedin size={24} />,
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          currentUrl,
        )}&title=${encodeURIComponent(
          shareData.title,
        )}&summary=${encodeURIComponent(shareData.text)}`,
      },
      {
        name: "Email",
        Icon: <Mail size={24} />,
        url: `mailto:?subject=${encodeURIComponent(
          shareData.title,
        )}&body=${encodeURIComponent(shareData.text + "\n\n" + currentUrl)}`,
      },
    ]);
  }, [pathname]);

  if (socialLinks.length === 0) {
    return null; // Don't render until the links are ready
  }

  return (
    <div className={cn(
        "fixed bottom-10 left-0 right-0 w-full flex justify-center z-50 pointer-events-none transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
    )}>
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-secondary/50 border border-primary/10 shadow-md px-4 pb-3 pointer-events-auto",
            )}
        >
            {socialLinks.map((item, index) => (
                <DockItem key={index} mouseX={mouseX}>
                <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow flex items-center justify-center w-full h-full text-primary-foreground"
                    aria-label={`Share on ${item.name}`}
                >
                    {item.Icon}
                </Link>
                </DockItem>
            ))}
        </motion.div>
    </div>
  );
};

interface DockItemProps {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
}

export const DockItem = ({ mouseX, children }: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconScale = useTransform(width, [40, 80], [1, 1.5]);
  const iconSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-primary text-secondary-foreground flex items-center justify-center"
    >
      <motion.div
        style={{ scale: iconSpring }}
        className="flex items-center justify-center w-full h-full grow"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
