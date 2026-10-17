import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import PetalsParticleCanvas from './PetalsParticleCanvas';

/**
 * Visual Scene 3 — Groom Introduction:
 * - Same pastel sky and colourful temple environment for continuity
 * - Groom positioned in left foreground in traditional attire
 * - Tamil text 'மணமகன்' and his name in upper-right
 * - Softly blurred bride in the background
 * - Tropical palm leaves, flying birds, soft sunlight, subtle parallax
 * - Cinematic fade and gentle camera movement
 */
export default function GroomIntroductionScene({ isActive }) {
  const { groom } = weddingDetails;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#B0DDC7]">
      {/* 1. Backdrop with Parallax Camera Pan */}
      <motion.div
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: isActive ? 1.05 : 1, x: isActive ? 4 : 0 }}
        transition={{ duration: 8.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={groom.photo}
          alt={groom.alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Soft Golden Sunlight Lens Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 75% 35%, rgba(255, 245, 185, 0.45) 0%, rgba(180, 230, 215, 0.15) 55%, transparent 85%)',
          }}
        />
      </motion.div>

      {/* 2. Tiny Flying Birds in Distant Sky */}
      <div className="pointer-events-none absolute inset-0 z-5" aria-hidden="true">
        <motion.div
          initial={{ x: '-15%', y: '26%', opacity: 0 }}
          animate={{ x: '115%', y: '20%', opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 16, delay: 0.8, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <svg viewBox="0 0 32 18" className="w-4 h-2.5 text-[#2C4A3E]" fill="currentColor">
            <path d="M 2,12 C 7,6 12,6 16,10 C 20,6 25,6 30,12 C 24,9 19,11 16,15 C 13,11 8,9 2,12 Z" />
          </svg>
        </motion.div>
      </div>

      {/* 3. Tropical Palm Leaves (Entering from Left Edge with Subtle Parallax) */}
      <motion.div
        animate={{
          rotate: [1.5, -1.5, 1.5],
          y: [-3, 2, -3],
        }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-0 top-[15%] w-40 sm:w-52 h-auto z-15 origin-top-left opacity-90"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 260" fill="none" className="w-full h-auto text-[#2D5A38]">
          <path d="M 0,20 Q 55,80 88,190" stroke="#1E4427" strokeWidth="2.8" fill="none" />
          <path d="M 12,35 Q 70,50 120,60 C 90,70 52,55 15,42 Z" fill="#2F633B" opacity="0.9" />
          <path d="M 26,65 Q 95,90 140,110 C 105,120 62,100 30,72 Z" fill="#3B7748" opacity="0.92" />
          <path d="M 40,100 Q 110,130 150,160 C 112,166 70,140 44,108 Z" fill="#2A5834" opacity="0.88" />
          <path d="M 52,135 Q 112,170 142,210 C 108,212 74,180 56,142 Z" fill="#3D7E4C" opacity="0.9" />
        </svg>
      </motion.div>

      {/* 4. Upper-Right Placement: Tamil Typography for Groom */}
      <div className="absolute right-6 sm:right-10 top-14 sm:top-18 z-20 max-w-[55%] pointer-events-none text-right">
        {/* Tamil Prefix: மணமகன் */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-end gap-2 mb-1"
        >
          <span className="font-tamil font-bold text-sm sm:text-base tracking-widest text-[#1B3B24] drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]">
            {groom.tamilPrefix}
          </span>
          <span className="w-6 h-[1.5px] bg-[#1E3F27]/70" />
        </motion.div>

        {/* Groom's Sacred Tamil Name: சரவண வேலு */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-tamil text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#112D18] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.85)]"
        >
          {groom.tamilName}
        </motion.h2>

        {/* English Name & Qualification */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.95, ease: 'easeOut' }}
          className="mt-2 space-y-0.5"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#1D4026] font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]">
            {groom.englishName}
          </p>
          {groom.qualificationTamil && (
            <p className="font-tamil text-[11px] sm:text-xs text-[#2A5736] tracking-wider font-medium">
              {groom.qualificationTamil}
            </p>
          )}
        </motion.div>
      </div>

      {/* 5. Slow Floating Golden Particles */}
      <PetalsParticleCanvas type="temple-golden" count={14} />
    </div>
  );
}
