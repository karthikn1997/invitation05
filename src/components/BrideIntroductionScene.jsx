import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import PetalsParticleCanvas from './PetalsParticleCanvas';

/**
 * Visual Scene 2 — Bride Introduction:
 * - Continuity with pastel sky and temple backdrop
 * - Bride positioned toward the right side (real uploaded photo)
 * - Negative space on upper-left with Tamil text 'மணமகள்' and her name
 * - Subtle palm leaves entering from the left edge
 * - Soft sunlight and slow floating particles
 * - Gentle upward reveal and slow camera zoom
 */
export default function BrideIntroductionScene({ isActive }) {
  const { bride } = weddingDetails;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#B0DDC7]">
      {/* 1. Seamless Temple & Sky Backdrop with Camera Drift */}
      <motion.div
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: isActive ? 1.05 : 1, x: isActive ? -4 : 0 }}
        transition={{ duration: 8.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={bride.photo}
          alt={bride.alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Ambient Warm Sunbeam & Rim Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 30% 35%, rgba(255, 245, 185, 0.45) 0%, rgba(180, 230, 215, 0.15) 55%, transparent 85%)',
          }}
        />
      </motion.div>

      {/* 2. Palm Leaves Overlay (Entering from Left Edge with Organic Gentle Sway) */}
      <motion.div
        animate={{
          rotate: [-1.2, 1.8, -1.2],
          y: [-2, 3, -2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-0 top-0 w-44 sm:w-56 h-auto z-15 origin-top-left opacity-90"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 260" fill="none" className="w-full h-auto text-[#2D5A38]">
          {/* Main stem */}
          <path d="M 0,0 Q 60,70 95,180" stroke="#1E4427" strokeWidth="3" fill="none" />
          {/* Palm Fronds */}
          <path d="M 15,20 Q 75,35 125,45 C 95,55 55,42 18,28 Z" fill="#2F633B" opacity="0.9" />
          <path d="M 30,50 Q 100,75 145,95 C 110,105 65,85 34,58 Z" fill="#3B7748" opacity="0.92" />
          <path d="M 45,85 Q 115,115 155,145 C 118,152 75,125 48,94 Z" fill="#2A5834" opacity="0.88" />
          <path d="M 60,120 Q 120,155 150,195 C 115,198 80,165 62,128 Z" fill="#3D7E4C" opacity="0.9" />
          <path d="M 72,150 Q 115,195 135,245 C 105,240 82,198 74,158 Z" fill="#244E2E" opacity="0.85" />
        </svg>
      </motion.div>

      {/* 3. Negative Space on Upper-Left: Tamil Typography for Bride */}
      <div className="absolute left-6 sm:left-10 top-14 sm:top-18 z-20 max-w-[55%] pointer-events-none text-left">
        {/* Tamil Prefix: மணமகள் */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-1"
        >
          <span className="w-6 h-[1.5px] bg-[#1E3F27]/70" />
          <span className="font-tamil font-bold text-sm sm:text-base tracking-widest text-[#1B3B24] drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]">
            {bride.tamilPrefix}
          </span>
        </motion.div>

        {/* Bride's Sacred Tamil Name: S. பிரியங்கா */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-tamil text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#112D18] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.85)]"
        >
          {bride.tamilName}
        </motion.h2>

        {/* English Name & Qualification with Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.95, ease: 'easeOut' }}
          className="mt-2 space-y-0.5"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#1D4026] font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]">
            {bride.englishName}
          </p>
          {bride.qualificationTamil && (
            <p className="font-tamil text-[11px] sm:text-xs text-[#2A5736] tracking-wider font-medium">
              {bride.qualificationTamil}
            </p>
          )}
        </motion.div>
      </div>

      {/* 4. Slow Floating Golden Particles */}
      <PetalsParticleCanvas type="temple-golden" count={14} />
    </div>
  );
}
