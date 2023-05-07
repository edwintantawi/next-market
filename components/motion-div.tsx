'use client';

import * as React from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const setZIndex = (zIndex: number) => {
    if (ref.current) ref.current.style.zIndex = zIndex.toString();
  };

  return (
    <motion.div
      ref={ref}
      onLayoutAnimationStart={() => setZIndex(999)}
      onLayoutAnimationComplete={() => setZIndex(0)}
      className="relative"
      {...props}
    >
      {children}
    </motion.div>
  );
};
