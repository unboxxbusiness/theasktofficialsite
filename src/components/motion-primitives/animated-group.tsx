// Inspired by https://github.com/Namchee/box-office-buz/blob/main/src/components/animated-group.tsx
'use client';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

type AnimatedGroupProps = HTMLMotionProps<'div'> & {
  variants: Variants;
};

export function AnimatedGroup({
  variants,
  children,
  ...props
}: AnimatedGroupProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        ...variants,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
