"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const title = "Restart Your Career & Earn From Home With Digital & AI Skills";
  return (
    <div className="relative mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto mt-4 max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          A trusted online learning platform for Indian women who want to become
          financially independent — even if you have a career break or are
          starting from zero.
        </motion.p>
        
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/digital-ai-school">
                Enroll Now
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="https://res.cloudinary.com/dhrigocvd/image/upload/v1762921471/hero_banner_fnwfpn.png"
              alt="Women learning and working on laptops"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={675}
              width={1200}
              data-ai-hint="women learning"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/schools", label: "Schools" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex w-full items-center justify-between border-b border-t border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <Link href="/" className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-primary via-accent to-secondary" />
        <h1 className="text-base font-bold md:text-2xl">TheAskt</h1>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                {link.label}
            </Link>
        ))}
      </div>
      <Button asChild>
        <Link href="/digital-ai-school">
            Enroll Now
        </Link>
      </Button>
    </nav>
  );
};
