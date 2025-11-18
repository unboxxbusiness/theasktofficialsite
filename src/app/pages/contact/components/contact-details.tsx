"use client";

import { Mail, MessageSquare } from 'lucide-react';

export default function ContactDetails() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background p-8 rounded-lg border flex flex-col">
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
          </div>
          <div className="bg-background p-8 rounded-lg border flex flex-col">
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
          </div>
        </div>
      </div>
    </section>
  );
}
