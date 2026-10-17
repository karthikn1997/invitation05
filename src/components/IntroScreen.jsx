import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { MonogramCrest, FlyingBird } from './Crests';

const introDustParticles = [
  { id: 1, left: '38%', top: '20%', size: 3, delay: 0.4, duration: 6.5 },
  { id: 2, left: '54%', top: '30%', size: 2.5, delay: 1.1, duration: 7.2 },
  { id: 3, left: '68%', top: '18%', size: 3.5, delay: 1.7, duration: 6.8 },
  { id: 4, left: '46%', top: '44%', size: 2.5, delay: 0.8, duration: 7.4 },
  { id: 5, left: '74%', top: '36%', size: 3, delay: 2.1, duration: 6.2 }
];

export default function IntroScreen({ onOpenComplete }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { couple, date } = weddingData;

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    if (!innerWidth || !innerHeight) return;
    const x = ((e.clientX / innerWidth) - 0.5) * 14;
    const y = ((e.clientY / innerHeight) - 0.5) * 10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: [1, 1, 0], scale: [1, 1.85, 2.45], pointerEvents: 'none' }}
      style={{ transformOrigin: '50% 68%' }}
      transition={{ duration: 1.35, times: [0, 0.65, 1], ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[90] min-h-svh w-full overflow-hidden flex items-center justify-center select-none bg-[#0E0906]"
    >
      {/* Temple Gopuram Background with subtle parallax */}
      <motion.div
        initial={{ scale: 1.12, y: 16, opacity: 0, filter: 'brightness(0.55) contrast(1.08)' }}
        animate={{ scale: 1.02, x: -tilt.x * 0.45, y: -tilt.y * 0.45, opacity: 1, filter: 'brightness(0.96) contrast(1.05)' }}
        transition={{
          scale: { duration: 3.6, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 2, ease: 'easeOut' },
          filter: { duration: 3.2, ease: 'easeOut' },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' }
        }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/invitation/temple-gopuram-matching.jpg"
          alt="South Indian Temple Gopuram Entrance"
          className="w-full h-full object-cover object-center md:object-[center_32%]"
        />
      </motion.div>

      {/* Atmospheric Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.4, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at 50% 65%, rgba(255, 215, 130, 0.22) 0%, rgba(218, 165, 82, 0.1) 42%, transparent 72%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-15"
        style={{
          background: 'linear-gradient(180deg, rgba(14, 7, 5, 0.25) 0%, rgba(16, 8, 5, 0.38) 45%, rgba(12, 6, 4, 0.82) 100%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-15 hidden md:block"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(14, 7, 5, 0.65) 0%, rgba(14, 7, 5, 0.32) 50%, transparent 85%)'
        }}
        aria-hidden="true"
      />

      {/* Birds soaring in sky */}
      <FlyingBird delay={0.4} duration={14} startX="82%" startY="16%" endX="24%" endY="7%" scale={0.9} />
      <FlyingBird delay={1.1} duration={15} startX="74%" startY="22%" endX="18%" endY="12%" scale={0.7} />

      {/* Floating Sparkles */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {introDustParticles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.65, 0], y: [10, -24], x: [0, 6] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
            className="absolute rounded-full bg-[#FFF3CE] shadow-[0_0_8px_rgba(255,235,168,0.75)]"
          />
        ))}
      </div>

      {/* Outer Border Frame */}
      <div className="pointer-events-none fixed inset-3 sm:inset-6 z-25 border border-[#E6C687]/35" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-4xl md:max-w-5xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 md:pb-14 min-h-svh flex flex-col justify-between items-center text-center">
        {/* Top Emblem & Tamil Heading */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-2 sm:mb-3"
          >
            <MonogramCrest size="sm" className="!w-14 !h-14 sm:!w-16 sm:!h-16 md:!w-20 md:!h-20 shadow-2xl rounded-full" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.15, ease: 'easeOut' }}
            className="font-tamil text-lg sm:text-2xl md:text-2xl lg:text-3xl text-[#F5D98A] font-bold tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
          >
            {date.tamilTitle}
          </motion.h3>
        </div>

        {/* Center: Couple Names in Luxury Cinzel Typography */}
        <div className="my-auto max-w-lg md:max-w-3xl w-full mx-auto flex flex-col items-center py-2 sm:py-4 -translate-y-8 md:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 space-y-1 w-full"
          >
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFF8E7] font-bold tracking-wide leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)]">
              {couple.groomName}{' '}
              <span className="font-serif italic text-base sm:text-2xl md:text-2xl text-[#E6C687] font-normal align-baseline">
                {couple.groomDegree}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 py-1 md:py-2">
              <span className="h-[1px] w-10 sm:w-16 md:w-24 bg-[#E6C687]/70" />
              <span className="font-cinzel text-xl sm:text-2xl md:text-3xl text-[#F5D98A] font-bold">&</span>
              <span className="h-[1px] w-10 sm:w-16 md:w-24 bg-[#E6C687]/70" />
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFF8E7] font-bold tracking-wide leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)]">
              {couple.brideName}{' '}
              <span className="font-serif italic text-base sm:text-2xl md:text-2xl text-[#E6C687] font-normal align-baseline">
                {couple.brideDegree}
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.65, ease: 'easeOut' }}
            className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.32em] md:tracking-[0.38em] text-[#FAF0D7] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:mt-2"
          >
            {date.englishDate} • Pollachi
          </motion.p>

          {/* Grand Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.9, ease: 'easeOut' }}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            <motion.button
              type="button"
              onClick={onOpenComplete}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-9 py-3.5 sm:px-11 sm:py-4 md:px-14 md:py-4.5 rounded-full bg-gradient-to-r from-[#6A1512] via-[#841D18] to-[#5E1210] hover:from-[#7E1A16] hover:via-[#9A221C] hover:to-[#721614] text-[#FFF8E7] border border-[#E6C687] font-cinzel text-xs sm:text-sm md:text-base tracking-[0.24em] md:tracking-[0.28em] uppercase font-semibold shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_16px_45px_rgba(218,165,82,0.35)] transition-all duration-300 cursor-pointer"
            >
              <span>Enter Invitation • அழைப்பிதழைத் திறக்க</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom auspicious tag */}
        <div className="font-tamil text-xs text-[#FAF0D7]/70 tracking-widest">
          {date.vazhgaValamudan}
        </div>
      </div>
    </motion.div>
  );
}
