"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  const faqItems = [
    {
      id: "item-1",
      question:
        "Q: Do I need to join the Digital & AI School to access other schools later?",
      answer: "No, you can join any school when it launches.",
    },
    {
      id: "item-2",
      question: "Q: Can I join from a mobile phone?",
      answer: "Yes. Our platform is mobile-friendly.",
    },
    {
      id: "item-3",
      question: "Q: Are there scholarships for all schools?",
      answer: "Yes, based on funding and eligibility.",
    },
    {
      id: "item-4",
      question: "Q: Will each school have certificates?",
      answer: "Yes, for completed courses/modules.",
    },
  ];

  return (
    <section className="bg-muted w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">
                FAQ
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                Common questions about our learning ecosystem.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-4 w-fit"
            >
              Any more questions? Reach out <PhoneCall className="w-4 h-4" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
