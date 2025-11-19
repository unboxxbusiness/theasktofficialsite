"use client";

import { motion } from "framer-motion";
import { Phone, Heart, Video, Users } from 'lucide-react';

export default function DigitalAiSchoolHero() {
  const title = "DIGITAL & AI SCHOOL";
  const features = [
      { icon: <Phone className="h-5 w-5" />, text: "Learn from your phone" },
      { icon: <Heart className="h-5 w-5" />, text: "Start from zero — no experience needed" },
      { icon: <Video className="h-5 w-5" />, text: "Video lessons + mentorship + certificates" },
      { icon: <Users className="h-5 w-5" />, text: "Safe, women-only learning community" },
  ]
  return (
    <div className="relative mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl">
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto mt-4 max-w-2xl py-4 text-center text-lg font-semibold text-muted-foreground"
        >
          Learn Skills to Earn From Home, Freelance, or Grow a Small Digital Business
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1.0,
          }}
          className="relative z-10 mx-auto mt-2 max-w-3xl text-center text-base font-normal text-muted-foreground"
        >
          A practical, beginner-friendly learning pathway designed for women and girls in India—especially those restarting their careers, returning after a break, or taking their first step into the digital world.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
            {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
