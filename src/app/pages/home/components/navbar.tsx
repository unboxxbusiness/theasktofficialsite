"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png" alt="TheAskt Logo" width={120} height={30} />
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
