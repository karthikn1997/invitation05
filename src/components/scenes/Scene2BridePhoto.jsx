import React from 'react';
import { motion } from 'framer-motion';

/**
 * SCENE 2 — BRIDE PHOTO
 * Design Rules from Reference Video:
 * - Temple gopuram, tropical green leaves, warm sunlight background
 * - Bride original photo foreground (real customer photo, no AI distortions)
 * - Bride name and Tamil text ("மணமகள்") elegantly animated
 * - Natural cutout / framing with subtle camera breathing
 * - Configurable scale, offsets, focal point
 */
export default function Scene2BridePhoto({ config, isActive = true }) {
  const bride = config?.bride || {};
  const photoScale = bride.scale || 1;
  const offsetY = bride.offsetY || 0;
  const offsetX = bride.offsetX || 0;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#96D5C7]">
      {/* 1. Mint-Sky & Temple Environment Backdrop */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 20% 45%, #FFF6BF 0%, #D8EED8 35%, #96D5C7 70%, #7EC8B8 100%)',
        }}
      />

      {/* Background Soft Temple Silhouette */}
      <motion.div
        animate={{ scale: isActive ? [1, 1.03] : 1 }}
        transition={{ duration: 7, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full z-1 pointer-events-none opacity-40 filter blur-[1px]"
      >
        <img
          src="/scenes/gopuram_cutout@2x.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Warm Sunlight & Rim Light */}
      <div
        className="pointer-events-none absolute inset-0 z-2"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 35% 35%, rgba(255, 245, 185, 0.45) 0%, rgba(180, 230, 215, 0.15) 55%, transparent 85%)',
        }}
      />

      {/* 2. Tropical Palm Leaves Entering from Left Edge with Gentle Organic Sway */}
      <motion.div
        animate={{
          rotate: [-1.5, 2, -1.5],
          y: [-2, 4, -2],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-0 top-0 w-44 sm:w-56 h-auto z-15 origin-top-left opacity-90"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 260" fill="none" className="w-full h-auto text-[#2D5A38]">
          <path d="M 0,0 Q 60,70 95,180" stroke="#1E4427" strokeWidth="3" fill="none" />
          <path d="M 15,20 Q 75,35 125,45 C 95,55 55,42 18,28 Z" fill="#2F633B" opacity="0.9" />
          <path d="M 30,50 Q 100,75 145,95 C 110,105 65,85 34,58 Z" fill="#3B7748" opacity="0.92" />
          <path d="M 45,85 Q 115,115 155,145 C 118,152 75,125 48,94 Z" fill="#2A5834" opacity="0.88" />
          <path d="M 60,120 Q 120,155 150,195 C 115,198 80,165 62,128 Z" fill="#3D7E4C" opacity="0.9" />
          <path d="M 72,150 Q 115,195 135,245 C 105,240 82,198 74,158 Z" fill="#244E2E" opacity="0.85" />
        </svg>
      </motion.div>

      {/* 3. Bride's Photo Layer (Foreground, positioned gracefully to the right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, x: 20 }}
        animate={{
          opacity: 1,
          scale: isActive ? 1 : 0.98,
          x: 0,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full z-10 flex items-end justify-center sm:justify-end pointer-events-none"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${photoScale})`,
        }}
      >
        <img
          src={bride.photo}
          alt={bride.tamilName || 'Bride'}
          className="h-[82%] sm:h-[88%] w-auto max-w-none object-contain object-bottom filter drop-shadow-[0_10px_25px_rgba(20,40,25,0.35)]"
          loading="eager"
        />
      </motion.div>

      {/* 4. Tamil Typography in Upper-Left Negative Space */}
      <div className="absolute left-6 sm:left-9 top-12 sm:top-16 z-25 max-w-[60%] pointer-events-none text-left">
        {/* Prefix: மணமகள் */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-1"
        >
          <span className="w-5 h-[2px] bg-[#1B3E25]" />
          <span className="font-tamil font-bold text-xs sm:text-sm tracking-widest text-[#1B3E25] uppercase drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]">
            {bride.tamilPrefix || 'மணமகள்'}
          </span>
        </motion.div>

        {/* Bride's Tamil Name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-tamil text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B17] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.85)]"
        >
          {bride.tamilName}
        </motion.h2>

        {/* English Name & Qualification */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="mt-1.5 space-y-0.5"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#1C4124] font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]">
            {bride.englishName}
          </p>
          {bride.qualificationTamil && (
            <p className="font-tamil text-[11px] sm:text-xs text-[#285533] font-medium tracking-wide">
              {bride.qualificationTamil}
            </p>
          )}
          {bride.parentsTamil && (
            <p className="font-tamil text-[10px] sm:text-[11px] text-[#335F3E]/90 pt-1 leading-snug">
              {bride.parentsTamil}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
