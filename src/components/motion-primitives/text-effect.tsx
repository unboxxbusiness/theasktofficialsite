// Inspired by https://github.com/Namchee/box-office-buz/blob/main/src/components/text-effect.tsx
'use client';

import { cn } from '@/lib/utils';
import { motion, type Variant } from 'framer-motion';
import { Children, createElement, Fragment, ReactNode, useMemo } from 'react';

type Preset = 'slide-in' | 'fade-in' | 'fade-in-blur';
type TextEffectProps<T extends keyof JSX.IntrinsicElements = 'p'> = {
  as?: T;
  per?: 'char' | 'word' | 'line';
  className?: string;
  delay?: number;
  speedSegment?: number;
  preset?: Preset;
  children: ReactNode;
};

const presets: Record<
  Preset,
  {
    hidden: Variant;
    visible: Variant;
  }
> = {
  'slide-in': {
    hidden: {
      y: '110%',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 15,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 15,
        mass: 0.5,
      },
    },
  },
  'fade-in': {
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.75,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.75,
      },
    },
  },
  'fade-in-blur': {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      transition: {
        type: 'spring',
        duration: 1.25,
      },
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        duration: 1.25,
      },
    },
  },
};

export function TextEffect<T extends keyof JSX.IntrinsicElements>({
  as = 'p',
  per = 'word',
  className,
  delay = 0,
  speedSegment: speed = 0.1,
  preset = 'slide-in',
  children,
}: TextEffectProps<T>) {
  const segments = useMemo(() => {
    let results: string[] = [];

    Children.forEach(children, (child) => {
      if (typeof child !== 'string') {
        return;
      }

      switch (per) {
        case 'char':
          results = results.concat(child.split(''));
          break;
        case 'word':
          results = results.concat(child.split(/(\s+)/));
          break;
        case 'line':
          results = results.concat(child.split(/(\n+)/));
          break;
      }
    });

    return results;
  }, [children, per]);

  return createElement(
    as,
    { className },
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: speed,
        delayChildren: delay,
      }}
      className={cn(
        'inline-block',
        per === 'line' && 'w-full',
        per !== 'char' && 'whitespace-pre-wrap',
      )}
    >
      {segments.map((segment, idx) => (
        <motion.span
          key={idx}
          variants={presets[preset]}
          className={cn(
            'inline-block',
            per === 'line' && 'w-full',
            per !== 'char' && 'whitespace-pre-wrap',
          )}
        >
          {segment}
        </motion.span>
      ))}
    </motion.span>,
  );
}
