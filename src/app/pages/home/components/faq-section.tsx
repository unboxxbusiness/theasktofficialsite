'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'

export default function FAQSection() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Can I learn if I have a long career gap?',
      answer:
        'Yes. Many of our most successful learners join after years away from a professional environment. Our courses are designed to ease you back in.',
    },
    {
      id: 'item-2',
      question: 'Can I learn from my phone?',
      answer:
        'Yes! Our entire platform and all course materials are fully mobile-friendly, so you can learn anytime, anywhere.',
    },
    {
      id: 'item-3',
      question: 'Do I need a strong English or tech background?',
      answer:
        'No. We teach in simple, accessible language and start from the very basics. No prior tech knowledge is required to begin.',
    },
    {
      id: 'item-4',
      question: 'Will I get a certificate?',
      answer:
        'Yes, you will receive a verifiable certificate upon successful completion of our programs, which you can add to your resume and social profiles.',
    },
    {
      id: 'item-5',
      question: 'Are there free & scholarship options?',
      answer:
        'Absolutely. We are a public trust committed to accessible education. We offer a mix of free courses, low-cost programs, and scholarship seats.',
    },
    {
      id: 'item-6',
      question: 'What if I have family responsibilities?',
      answer:
        'Our courses are self-paced and designed for flexibility. You can make progress with as little as 30-60 minutes a day, whenever it fits your schedule.',
    },
    {
      id: 'item-7',
      question: 'Is this a safe learning environment for women?',
      answer:
        'Yes. We provide a respectful, supportive, and women-only community to ensure a safe and comfortable learning experience.',
    },
    {
      id: 'item-8',
      question: 'Will you help me find work or earn money?',
      answer:
        'Yes, our programs include practical support for freelancing, finding remote work, and even starting your own small business.',
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
            <Link href="#">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
