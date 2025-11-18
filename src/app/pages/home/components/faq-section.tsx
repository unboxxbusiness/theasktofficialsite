'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQSection() {
    const faqItems = [
        {
            id: 'item-1',
            question: "Can I learn if I have a long career gap?",
            answer: "Yes. Many of our most successful learners join after years away from a professional environment. Our courses are designed to ease you back in.",
        },
        {
            id: 'item-2',
            question: "Can I learn from my phone?",
            answer: "Yes! Our entire platform and all course materials are fully mobile-friendly, so you can learn anytime, anywhere.",
        },
        {
            id: 'item-3',
            question: "Do I need a strong English or tech background?",
            answer: "No. We teach in simple, accessible language and start from the very basics. No prior tech knowledge is required to begin.",
        },
        {
            id: 'item-4',
            question: "Will I get a certificate?",
            answer: "Yes, you will receive a verifiable certificate upon successful completion of our programs, which you can add to your resume and social profiles.",
        },
        {
            id: 'item-5',
            question: "Are there free & scholarship options?",
            answer: "Absolutely. We are a public trust committed to accessible education. We offer a mix of free courses, low-cost programs, and scholarship seats.",
        },
        {
            id: 'item-6',
            question: "What if I have family responsibilities?",
            answer: "Our courses are self-paced and designed for flexibility. You can make progress with as little as 30-60 minutes a day, whenever it fits your schedule.",
        },
        {
            id: 'item-7',
            question: "Is this a safe learning environment for women?",
            answer: "Yes. We provide a respectful, supportive, and women-only community to ensure a safe and comfortable learning experience.",
        },
        {
            id: 'item-8',
            question: "Will you help me find work or earn money?",
            answer: "Yes, our programs include practical support for freelancing, finding remote work, and even starting your own small business.",
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-lg w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 text-center">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
