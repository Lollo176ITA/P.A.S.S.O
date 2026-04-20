'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-primary/10 origin-left z-40 backdrop-blur-sm block md:hidden"
      aria-hidden
    >
      <motion.div
        className="h-full bg-linear-to-r from-primary-400 to-primary"
        style={{ scaleX: smoothProgress }}
      />
    </motion.div>
  );
}
