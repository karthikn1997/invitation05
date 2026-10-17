import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Sparkles, Music2 } from 'lucide-react';
import { MonogramCrest, FlyingBird } from './Crests';

const ambientSparks = [
  { id: 1, left: '22%', top: '24%', size: 3, delay: 0.2, duration: 6.5 },
  { id: 2, left: '42%', top: '38%', size: 2.5, delay: 0.9, duration: 7.2 },
  { id: 3, left: '62%', top: '20%', size: 3.5, delay: 1.5, duration: 6.8 },
  { id: 4, left: '78%', top: '32%', size: 2.5, delay: 0.5, duration: 7.4 },
  { id: 5, left: '35%', top: '55%', size: 3, delay: 1.8, duration: 6.2 },
  { id: 6, left: '85%', top: '52%', size: 2.5, delay: 1.1, duration: 7.0 }
];

export default function RoyalTempleIntro({ onOpen }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { couple, date, venue } = weddingData;

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
      exit={{ opacity: [1, 1, 0], scale: [1, 1.85, 2.5], pointerEvents: 'none' }}
      style={{ transformOrigin: '50% 65%' }}
      transition={{ duration: 1.4, times: [0, 0.65, 1], ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] min-h-svh w-full overflow-hidden flex items-center justify-center select-none bg-[#090305]"
    >
      {/* 1. Cinematic Photorealistic Temple Gopuram Background */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0, filter: 'brightness(0.6) contrast(1.1)' }}
        animate={{
          scale: 1.02,
          x: -tilt.x * 0.45,
          y: -tilt.y * 0.45,
          opacity: 1,
          filter: 'brightness(0.96) contrast(1.05)'
        }}
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
          alt="Majestic South Indian Temple Gopuram"
          className="w-full h-full object-cover object-center md:object-[center_32%]"
        />
      </motion.div>

      {/* 2. Atmospheric Temple Gold Glow & Vignette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.4, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(255, 215, 130, 0.24) 0%, rgba(218, 165, 82, 0.12) 42%, transparent 72%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-15"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 4, 5, 0.25) 0%, rgba(14, 5, 7, 0.4) 45%, rgba(10, 3, 5, 0.85) 100%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-15 hidden md:block"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(10, 3, 5, 0.65) 0%, rgba(10, 3, 5, 0.3) 50%, transparent 85%)'
        }}
        aria-hidden="true"
      />

      {/* 3. Flying Sacred Birds Soaring Across the Sky */}
      <FlyingBird delay={0.4} duration={14} startX="82%" startY="16%" endX="24%" endY="7%" scale={0.9} />
      <FlyingBird delay={1.1} duration={15} startX="74%" startY="22%" endX="18%" endY="12%" scale={0.7} />

      {/* 4. Ambient Golden Floating Dust Particles */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {ambientSparks.map((spark) => (
          <motion.span
            key={spark.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.75, 0], y: [10, -30], x: [0, 8] }}
            transition={{ duration: spark.duration, delay: spark.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              left: spark.left,
              top: spark.top,
              width: `${spark.size}px`,
              height: `${spark.size}px`
            }}
            className="absolute rounded-full bg-[#FFF3CE] shadow-[0_0_10px_rgba(255,235,168,0.8)]"
          />
        ))}
      </div>

      {/* 5. Delicate Royal Screen Framing */}
      <div className="pointer-events-none fixed inset-3 sm:inset-6 z-25 border border-[#DFC59E]/35" aria-hidden="true" />

      {/* 6. Main Editorial Title Content */}
      <div className="relative z-30 w-full max-w-4xl md:max-w-5xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 md:pb-14 min-h-svh flex flex-col justify-between items-center text-center">
        {/* Top Sacred Emblem & Shloka */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-2 sm:mb-3"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#DFC59E] bg-[#1A050A]/90 p-1 shadow-[0_0_25px_rgba(255,215,0,0.45)] flex items-center justify-center">
              <span className="font-tamil text-3xl sm:text-4xl text-amber-300 font-bold drop-shadow">ஸ்ரீ</span>
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: 'easeOut' }}
            className="font-tamil text-xl sm:text-2xl md:text-3xl text-[#F5D98A] font-bold tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
          >
            {date.tamilTitle}
          </motion.h3>
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#DFC59E]/80 mt-1">
            The Royal Wedding Film
          </p>
        </div>

        {/* Center: Couple Names in Luxury Cinzel Typography */}
        <div className="my-auto max-w-lg md:max-w-3xl w-full mx-auto flex flex-col items-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1 w-full"
          >
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFF8E7] font-bold tracking-wide leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)]">
              {couple.groomName}{' '}
              <span className="font-serif italic text-base sm:text-2xl md:text-2xl text-[#E6C687] font-normal align-baseline">
                {couple.groomDegree}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 py-2">
              <span className="h-[1px] w-12 sm:w-20 md:w-28 bg-[#E6C687]/70" />
              <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#F5D98A] font-bold">weds</span>
              <span className="h-[1px] w-12 sm:w-20 md:w-28 bg-[#E6C687]/70" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFF8E7] font-bold tracking-wide leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)]">
              {couple.brideName}{' '}
              <span className="font-serif italic text-base sm:text-2xl md:text-2xl text-[#E6C687] font-normal align-baseline">
                {couple.brideDegree}
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.6, ease: 'easeOut' }}
            className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.28em] md:tracking-[0.35em] text-[#FAF0D7] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mt-3 sm:mt-4"
          >
            {date.englishDate} • {venue.name}, Pollachi
          </motion.p>

          {/* Grand Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.85, ease: 'easeOut' }}
            className="mt-8 sm:mt-10"
          >
            <motion.button
              type="button"
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 sm:px-12 sm:py-4.5 rounded-full bg-gradient-to-r from-[#6A1512] via-[#851E18] to-[#5E1210] hover:from-[#7E1A16] hover:via-[#9A221C] hover:to-[#721614] text-[#FFF8E7] border-2 border-[#E6C687] font-cinzel text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase font-bold shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_16px_45px_rgba(230,198,135,0.45)] transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>Enter The Wedding Film • அழைப்பிதழைத் திறக்க</span>
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            </motion.button>
            <p className="text-[11px] font-tamil text-[#DFC59E]/85 mt-2.5 tracking-wider">
              (மங்கல இசையுடன் திருக்கோவில் வாயில் திறந்து உள்ளே செல்லவும்)
            </p>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <div className="font-tamil text-xs text-[#FAF0D7]/75 tracking-widest">
          ❖ வாழ்க வளமுடன் • சுபமஸ்து ❖
        </div>
      </div>
    </motion.div>
  );
}
