import React from 'react';
import { motion } from 'framer-motion';
import PetalsParticleCanvas from '../PetalsParticleCanvas';

/**
 * SCENE 4 — COUPLE REVEAL
 * Design Rules from Reference Video:
 * - Seated / full couple in traditional wooden palace entrance
 * - Preserves real customer faces and identity without distortion
 * - Banana leaves, palace wooden pillars, falling rose petals
 * - Monogram and couple names reveal
 * - Customizable position, scale, crop
 */
export default function Scene4CoupleReveal({ config, isActive = true }) {
  const couple = config?.couple || {};
  const photoScale = couple.scale || 1;
  const offsetY = couple.offsetY || 0;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#2D120B]">
      {/* 1. Traditional Wooden Palace Backdrop */}
      <motion.div
        animate={{ scale: isActive ? [1, 1.04] : 1 }}
        transition={{ duration: 8, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={couple.bgPhoto || '/scenes/scene4_bg_clean.jpg'}
          alt={couple.alt || 'Mandapam'}
          className="w-full h-full object-cover object-center"
          style={{
            transform: `translateY(${offsetY}px) scale(${photoScale})`,
          }}
          loading="eager"
        />

        {/* Cinematic Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150604]/40 via-transparent to-[#150604]/50" />
      </motion.div>

      {/* 2. Separate Animated Seated Couple */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        <img
          src={couple.photo || '/scenes/scene4_couple_cutout_clean@2x.png'}
          alt={couple.alt || 'Couple'}
          className="w-full h-full object-cover object-center drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
          loading="eager"
        />
      </motion.div>

      {/* 2. Falling Sacred Rose Petals Canvas */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <PetalsParticleCanvas type="rose" count={18} />
      </div>

      {/* 3. Top Decorative Couple Monogram & Animated Marriage Date */}
      <div className="absolute inset-x-0 top-0 z-20 pt-7 px-4 flex flex-col items-center pointer-events-none text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-13 h-13 rounded-full border border-[#E6C687]/70 bg-[#35100B]/85 backdrop-blur-md flex items-center justify-center text-[#F5D98A] shadow-[0_0_30px_rgba(230,198,135,0.45)] mb-2.5"
        >
          <span className="font-serif font-bold text-base sm:text-lg tracking-wider">
            {couple.monogram || 'S & D'}
          </span>
        </motion.div>

        {/* Animated Marriage Date Card */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Header label */}
          <div className="flex items-center gap-2 mb-1">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#E6C687]/80" />
            <span className="font-serif uppercase tracking-[0.26em] text-[#E8C77F] text-[10px] sm:text-xs font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              WEDDING CEREMONY
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#E6C687]/80" />
          </div>

          {/* Date */}
          <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#FFF6E0] tracking-wide leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            15th November 2026
          </h3>

          {/* Time Badge */}
          <div className="mt-1 px-4 py-0.5 rounded-full bg-[#35100B]/85 border border-[#E6C687]/50 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.7)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D98A] animate-ping" />
            <p className="font-serif italic font-medium text-xs sm:text-sm text-[#F5D98A] tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              5:00 am to 9:00 am
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
