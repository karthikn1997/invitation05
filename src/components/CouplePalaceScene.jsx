import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import PetalsParticleCanvas from './PetalsParticleCanvas';

/**
 * Visual Scene 4 — Grand Couple Portrait:
 * - Transition from bright temple world into rich, dark, warm-brown wooden palace entrance
 * - Grand traditional South Indian carved wooden archway with deep shadows
 * - Couple seated together in center
 * - Large green banana leaves entering from the sides
 * - Traditional brass pots, white floral arrangements, and flower decorations
 * - Warm golden lighting, deep shadows, and editorial art direction
 * - Scattered naturally drifting red rose petals in the foreground
 */
export default function CouplePalaceScene({ isActive }) {
  const { couple } = weddingDetails;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#1A0B05]">
      {/* 1. Rich Dark Wooden Palace & Seated Couple Backdrop */}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: isActive ? 1.04 : 1, y: isActive ? -4 : 0 }}
        transition={{ duration: 8.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={couple.palacePortraitPhoto}
          alt={couple.alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* 2. Warm Golden Light Sweep & Radial Vignette */}
        <motion.div
          animate={{ opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 205, 120, 0.2) 0%, rgba(45, 18, 7, 0.4) 60%, rgba(18, 7, 3, 0.82) 100%)',
          }}
        />

        {/* Deep Cinematic Shadows around Edges */}
        <div
          className="pointer-events-none absolute inset-0 z-2"
          style={{
            background:
              'linear-gradient(180deg, rgba(14, 5, 2, 0.65) 0%, transparent 22%, transparent 75%, rgba(12, 4, 1, 0.85) 100%)',
          }}
        />
      </motion.div>

      {/* 3. Subtle Swaying Banana Leaves (Framing Left & Right) */}
      <motion.div
        animate={{ rotate: [-0.8, 1.2, -0.8] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-3 top-[10%] w-28 sm:w-36 h-auto z-10 origin-top-left opacity-80"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 240" fill="none" className="w-full h-auto text-[#2E5820]">
          <path d="M 0,0 Q 60,60 85,180 C 50,140 20,80 0,0 Z" fill="#2E5820" />
          <path d="M 10,20 Q 55,70 75,160 C 45,130 20,80 10,20 Z" fill="#3D732D" opacity="0.9" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [0.8, -1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-3 top-[12%] w-28 sm:w-36 h-auto z-10 origin-top-right opacity-80"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 240" fill="none" className="w-full h-auto text-[#2E5820]">
          <path d="M 100,0 Q 40,60 15,180 C 50,140 80,80 100,0 Z" fill="#2E5820" />
          <path d="M 90,20 Q 45,70 25,160 C 55,130 80,80 90,20 Z" fill="#3D732D" opacity="0.9" />
        </svg>
      </motion.div>

      {/* 4. Elegant Minimal Couple Subtitle at Top (Non-Intrusive, Preserving Couple Focus) */}
      <div className="absolute inset-x-0 top-8 sm:top-10 z-20 px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1A0A04]/60 backdrop-blur-sm border border-[#E6C687]/30 shadow-lg"
        >
          <span className="w-2 h-2 rotate-45 bg-[#E6C687]" />
          <span className="font-tamil text-xs sm:text-sm text-[#F5D98A] font-semibold tracking-wider">
            இரு மனம் இணையும் இனிய தருணம்
          </span>
          <span className="w-2 h-2 rotate-45 bg-[#E6C687]" />
        </motion.div>
      </div>

      {/* 5. Naturally Drifting Crimson Red Rose Petals in Foreground */}
      <PetalsParticleCanvas type="rose-petals" count={24} />
    </div>
  );
}
