"use client";
import Image from "next/image";
import React, { useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "Social Media Marketing",
    imageUrl: "https://picsum.photos/seed/accordion1/400/450",
    imageHint: "social media",
  },
  {
    id: 2,
    title: "AI Business Tools",
    imageUrl: "https://picsum.photos/seed/accordion2/400/450",
    imageHint: "ai tools",
  },
  {
    id: 3,
    title: "Canva & Content Creation",
    imageUrl: "https://picsum.photos/seed/accordion3/400/450",
    imageHint: "content creation",
  },
  {
    id: 4,
    title: "Freelancing & Projects",
    imageUrl: "https://picsum.photos/seed/accordion4/400/450",
    imageHint: "freelancing laptop",
  },
  {
    id: 5,
    title: "Remote Work Growth",
    imageUrl: "https://picsum.photos/seed/accordion5/400/450",
    imageHint: "remote work",
  },
];

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: (typeof accordionItems)[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="absolute inset-0 w-full h-full object-cover"
        data-ai-hint={item.imageHint}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export default function ProgramSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
            FLAGSHIP PROGRAM: DIGITAL & AI SCHOOL
          </h2>
          <p className="mt-4 text-lg font-semibold text-primary">
            🌐 Learn Digital + AI Skills to Earn From Home
          </p>
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
            Perfect for homemakers restarting careers, students, small business
            owners, and working women. You get pre-recorded video lessons,
            mobile-friendly learning, practical projects, a women-only
            community, certificates, and job support.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
            >
              👉 Create Your Learning Account
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-row items-center justify-center gap-4 overflow-hidden p-4">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => handleItemHover(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
