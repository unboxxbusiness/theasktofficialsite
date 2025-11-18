"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ScholarshipFaq() {
  const faqItems = [
    {
      id: "item-1",
      question: "Q1: Do I need to speak perfect English?",
      answer: "No. We use a simple Hindi/English mix for easy learning.",
    },
    {
      id: "item-2",
      question: "Q2: Can I apply if I only have a mobile phone?",
      answer: "Yes. Our platform is mobile-friendly.",
    },
    {
      id: "item-3",
      question: "Q3: Is this only for homemakers?",
      answer:
        "No. Students, working women, and small business owners are welcome.",
    },
    {
      id: "item-4",
      question: "Q4: Will I receive a certificate?",
      answer: "Yes, for completed learning programs.",
    },
    {
      id: "item-5",
      question: "Q5: Do I need to repay the scholarship later?",
      answer: "No. It is not a loan.",
    },
  ];

  return (
    <section className="bg-muted w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">
                Scholarship FAQ
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                Common Questions
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                Find quick answers to common questions about our scholarship
                program.
              </p>
            </div>
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
