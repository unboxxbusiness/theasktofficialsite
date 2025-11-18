"use client";
import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
    {
        question: "Can I learn if I have a long career gap?",
        answer: "Yes. Many of our most successful learners join after years away from a professional environment. Our courses are designed to ease you back in."
    },
    {
        question: "Can I learn from my phone?",
        answer: "Yes! Our entire platform and all course materials are fully mobile-friendly, so you can learn anytime, anywhere."
    },
    {
        question: "Do I need a strong English or tech background?",
        answer: "No. We teach in simple, accessible language and start from the very basics. No prior tech knowledge is required to begin."
    },
    {
        question: "Will I get a certificate?",
        answer: "Yes, you will receive a verifiable certificate upon successful completion of our programs, which you can add to your resume and social profiles."
    },
    {
        question: "Are there free & scholarship options?",
        answer: "Absolutely. We are a public trust committed to accessible education. We offer a mix of free courses, low-cost programs, and scholarship seats."
    },
    {
        question: "What if I have family responsibilities?",
        answer: "Our courses are self-paced and designed for flexibility. You can make progress with as little as 30-60 minutes a day, whenever it fits your schedule."
    },
    {
        question: "Is this a safe learning environment for women?",
        answer: "Yes. We provide a respectful, supportive, and women-only community to ensure a safe and comfortable learning experience."
    },
    {
        question: "Will you help me find work or earn money?",
        answer: "Yes, our programs include practical support for freelancing, finding remote work, and even starting your own small business."
    }
]


export default function FAQSection() {
  return (
    <div className="w-full py-16 md:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                    Have more questions? We're here to help you on your journey to financial independence. Reach out to our friendly support team.
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Contact Support <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
