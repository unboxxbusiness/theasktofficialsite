'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'

const faqItems = [
    {
      question: 'I have a long career break. Can I still join?',
      answer: 'Yes! Our programs are designed for women restarting their careers, even after a long break. We start with the basics and provide full support.',
    },
    {
      question: 'Can I learn only from a mobile phone?',
      answer: 'Absolutely. Our entire learning system is mobile-friendly, from video lessons to community access. No laptop is required to start.',
    },
    {
      question: 'Do I need strong English or technical knowledge?',
      answer: 'No. Our courses use a simple mix of Hindi and English (Hinglish). We teach step-by-step, assuming no prior technical knowledge.',
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, you will receive a certificate from Theaskt Learning Trust for successfully completing learning paths and modules, which you can add to your CV.',
    },
    {
      question: 'Will you help me find work or earn?',
      answer:
        'Yes. We provide dedicated support for freelancing, finding remote work, and starting a home-based business. Our goal is to help you become financially independent.',
    },
    {
      question: 'Is this platform safe for women?',
      answer:
        'Yes. Safety is our top priority. Our learning communities are women-only, carefully moderated, and based on respect, support, and trust.',
    },
  ];

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-muted w-full py-16 md:py-24">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">FAQ</span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                Discover quick and comprehensive answers to common questions
                about our platform, services, and features.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-4 w-fit"
            >
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
