'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function FAQSection() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Q1: I have a long career break. Can I still join?',
      answer: 'Yes! Many learners are restarting after years.',
    },
    {
      id: 'item-2',
      question: 'Q2: Can I learn only from mobile?',
      answer: 'Yes. Lessons are created for mobile-first learners.',
    },
    {
      id: 'item-3',
      question: 'Q3: Do I need strong English or technical knowledge?',
      answer: 'No. Simple language, step-by-step guidance.',
    },
    {
      id: 'item-4',
      question: 'Q4: Will I get a certificate?',
      answer: 'Yes, for completed modules and skill tracks.',
    },
    {
      id: 'item-5',
      question: 'Q5: Will you help me earn?',
      answer:
        'Yes. Freelancing, remote work, and home-business support is included.',
    },
    {
      id: 'item-6',
      question: 'Q6: Is this safe for women?',
      answer:
        'Yes. Community and learning spaces are carefully moderated.',
    },
  ]

  return (
    <section className="bg-muted w-full py-16 md:py-24">
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
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
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
