"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/schools", label: "Schools" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "w-full flex items-center justify-between px-4 py-4 transition-all duration-300",
      "fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-7xl",
      scrolled ? "mt-2 rounded-xl border bg-background/80 shadow-md backdrop-blur-lg" : "bg-transparent"
    )}>
      <Link href="/" className="flex items-center gap-2">
        <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png" alt="TheAskt Logo" width={120} height={30} className="dark:hidden" />
        <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763528756/logo_dark_mode_theaskt_xnbah7.webp" alt="TheAskt Logo" width={120} height={30} className="hidden dark:block" />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                {link.label}
            </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-2">
        <ThemeToggle />
        <Button asChild>
            <Link href="https://edu.theaskt.org" target="_blank" rel="noopener noreferrer">
                Enroll Now
            </Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b px-6 py-4">
                 <Link href="/" className="flex items-center gap-2">
                    <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763047330/theasktlogo_ujo9hi.png" alt="TheAskt Logo" width={120} height={30} className="dark:hidden" />
                    <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763528756/logo_dark_mode_theaskt_xnbah7.webp" alt="TheAskt Logo" width={120} height={30} className="hidden dark:block" />
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                    <Button asChild className="w-full" size="lg">
                        <Link href="https://edu.theaskt.org" target="_blank" rel="noopener noreferrer">
                            Enroll Now
                        </Link>
                    </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};