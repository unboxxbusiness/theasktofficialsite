"use client";

import { Mail, MessageSquare, Handshake, Share2, Youtube, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function ContactDetails() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <HoverBorderGradient
            containerClassName="rounded-lg"
            as="div"
            className="h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <Mail className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Email Support</h3>
            </div>
             <p className="text-muted-foreground mb-1 font-semibold">Recommended for most inquiries</p>
            <a href="mailto:support@theaskt.org" className="text-primary font-bold text-lg hover:underline break-all">
              support@theaskt.org
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              We reply within 24–72 hours (Mon–Sat).
            </p>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-lg"
            as="div"
             className="h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">WhatsApp Support</h3>
            </div>
             <p className="text-muted-foreground mb-1 font-semibold">For simple questions</p>
            <p className="text-lg font-bold text-foreground">
              Coming Soon
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              A dedicated WhatsApp learning & helpdesk channel.
            </p>
          </HoverBorderGradient>
           <HoverBorderGradient
            containerClassName="rounded-lg"
            as="div"
             className="h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <Handshake className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Trust / Admin & Partnerships</h3>
            </div>
             <p className="text-muted-foreground mb-1 font-semibold">For CSR, NGO, Donor, Sponsor, and Collaboration inquiries:</p>
            <a href="mailto:partnerships@theaskt.org" className="text-primary font-bold text-lg hover:underline break-all">
              partnerships@theaskt.org
            </a>
          </HoverBorderGradient>
           <HoverBorderGradient
            containerClassName="rounded-lg"
            as="div"
             className="h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <Share2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Follow Us</h3>
            </div>
             <p className="text-muted-foreground mb-4">For updates, live sessions, and inspiration:</p>
             <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm">
                    <MessageCircle className="h-5 w-5" /> 
                    <span className="font-semibold">Community (soon)</span>
                </Link>
            </div>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}
