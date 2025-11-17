'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">
            TheAskt
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#features"
            className="text-foreground/80 hover:text-foreground"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground/80 hover:text-foreground"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 hover:text-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="#">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="#">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
