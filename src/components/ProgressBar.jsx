import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none" aria-hidden="true">
      {/* Top Gold Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8B5E2B] via-[#E6C687] to-[#7A1C18] z-50"
      />

      {/* Royal Screen Framing Borders */}
      <div className="fixed inset-2 sm:inset-4 md:inset-5 border border-[#E6C687]/25 rounded-sm">
        <div className="absolute inset-1 border border-[#E6C687]/15 rounded-sm" />
      </div>
    </div>
  );
}
