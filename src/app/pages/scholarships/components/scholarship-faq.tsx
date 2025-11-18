"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
      question: "Q1: Do I need to speak perfect English to get a scholarship?",
      answer: "No. Our courses use a simple mix of Hindi and English. Your desire to learn is more important than your English proficiency.",
    },
    {
      question: "Q2: Can I apply for a scholarship if I only have a mobile phone?",
      answer: "Yes, absolutely. Our platform is designed for mobile-first learning, so a smartphone is all you need to start.",
    },
    {
      question: "Q3: Is the scholarship only for homemakers?",
      answer:
        "No. We welcome applications from homemakers, students, working women who need to upskill, and small business owners.",
    },
    {
      question: "Q4: Do scholarship learners receive a certificate?",
      answer: "Yes. All learners, including scholarship recipients, receive a certificate upon successful completion of their program.",
    },
    {
      question: "Q5: Do I need to repay the scholarship amount later?",
      answer: "No. A scholarship is a grant to support your education; it is not a loan and does not need to be repaid.",
    },
     {
      question: "Q6: How are scholarship recipients selected?",
      answer: "We review applications based on financial need, your motivation to learn, and your commitment to completing the program. We review every application with care.",
    },
  ];

export default function ScholarshipFaq() {
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
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
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
