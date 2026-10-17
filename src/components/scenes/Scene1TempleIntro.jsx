import React from 'react';
import { motion } from 'framer-motion';

/**
 * SCENE 1 — TEMPLE INTRO
 * Design Rules from Reference Video:
 * - Light mint-green / turquoise sky (#98D7C8)
 * - Colourful traditional South Indian temple gopuram
 * - Soft clouds & warm sunlight glow
 * - Top traditional ornamental circular design (Lord Ganesha Chakra continuously rotating)
 * - Tamil calligraphy ("திருமண அழைப்பிதழ்")
 * - Flying birds flock across the sky
 * - Subtle camera push-in
 * - NO dark gold luxury theme; bright, traditional, elegant.
 */
export default function Scene1TempleIntro({ config }) {
  const invocation = config?.invitationMessage?.invocation || 'ஸ்ரீ விநாயகர் துணை';

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#98D7C8]">
      {/* 1. Luminous Pastel Mint-Green / Turquoise Sky */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 95% 75% at 20% 55%, #FFF6BF 0%, #D8EED8 35%, #96D5C7 70%, #7EC8B8 100%)',
        }}
      />

      {/* 2. Warm Sunrise Glow on the Lower Left Horizon */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.75, 0.95, 0.75],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[5%] top-[48%] -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFF8D6] via-[#FFE28A]/50 to-transparent blur-3xl z-1"
        aria-hidden="true"
      />

      {/* 3. Soft Volumetric Clouds Drifting Across Sky */}
      <motion.div
        animate={{ x: ['-4%', '5%', '-4%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-[-10%] top-[4%] h-52 opacity-45 z-2"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#FFFBF0]/60 to-transparent blur-2xl" />
      </motion.div>

      {/* 4. Animated Flying Birds Flock */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <motion.div
          initial={{ x: -40, y: 0, opacity: 0 }}
          animate={{
            x: [0, 90, 180],
            y: [0, -15, -30],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-[8%] top-[38%]"
        >
          <div className="relative">
            {/* Bird 1 */}
            <motion.svg
              viewBox="0 0 32 18"
              className="w-4 h-2.5 text-[#1E3B30] absolute top-0 left-0"
              fill="currentColor"
              animate={{ rotate: [-3, 3, -3], scaleY: [1, 0.75, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
            </motion.svg>
            {/* Bird 2 */}
            <motion.svg
              viewBox="0 0 32 18"
              className="w-3.5 h-2 text-[#234538] absolute top-5 -left-4"
              fill="currentColor"
              animate={{ rotate: [2, -4, 2], scaleY: [1, 0.8, 1] }}
              transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            >
              <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
            </motion.svg>
            {/* Bird 3 */}
            <motion.svg
              viewBox="0 0 32 18"
              className="w-3 h-2 text-[#2A4E3F] absolute top-9 left-2"
              fill="currentColor"
              animate={{ rotate: [-2, 3, -2], scaleY: [1, 0.7, 1] }}
              transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* 5. Animated Temple Gopuram (Rising & Slow Camera Push-in) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{
          opacity: 1,
          scale: [1, 1.04],
          y: 0,
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeOut' },
          scale: { duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          y: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
        }}
        className="absolute inset-0 w-full h-full z-15 flex flex-col justify-end pointer-events-none"
      >
        <img
          src="/scenes/gopuram_cutout@2x.png"
          alt="South Indian Temple Gopuram"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />

        {/* Ambient Warm Sunbeam Sweep */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-[#FFE894]/15 to-transparent mix-blend-overlay"
        />
      </motion.div>

      {/* 6. TOP SECTION: Continuously Rotating Chakra & Tamil Calligraphy Title */}
      <div className="absolute inset-x-0 top-0 z-30 pt-6 sm:pt-8 px-4 flex flex-col items-center pointer-events-none text-center">
        {/* Lord Ganesha Circular Chakra Mandala (Continuous 360 degree spin) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center mb-1"
        >
          {/* Divine Pulsing Aura */}
          <motion.div
            animate={{
              scale: [0.95, 1.12, 0.95],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 w-28 h-28 -m-3 rounded-full bg-[#FFF2B2]/50 blur-lg"
          />

          {/* Endless 360 Rotation for Outer Mandala Ring, Stationary Ganesha Center */}
          <div className="relative w-22 h-22 sm:w-26 sm:h-26 flex items-center justify-center">
            {/* 1. Rotating Outer Mandala Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <img
                src="/scenes/ganesha-ring.png"
                alt="Sacred Rotating Mandala Ring"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(20,50,28,0.35)]"
              />
            </motion.div>

            {/* 2. Stationary Lord Ganesha Center */}
            <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
              <img
                src="/scenes/ganesha-center.png"
                alt="Lord Ganesha"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(20,50,28,0.3)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Invocation Wording */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-tamil text-[11px] font-bold tracking-widest text-[#183B24] drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)] mb-1"
        >
          || {invocation} ||
        </motion.span>

        {/* 7. Clean Tamil Calligraphic Title: திருமண அழைப்பிதழ் */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center w-full max-w-[380px] sm:max-w-[460px] mt-3.5 sm:mt-5"
        >
          <img
            src="/scenes/thirumana_azhaippithazh_transparent@2x.png"
            alt="திருமண அழைப்பிதழ்"
            className="w-72 sm:w-88 md:w-96 h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(20,50,28,0.4)]"
            onError={(e) => {
              // Fallback to beautiful pure CSS typography if image fails
              e.currentTarget.style.display = 'none';
              const textEl = document.getElementById('scene1-title-fallback');
              if (textEl) textEl.style.display = 'block';
            }}
          />
          <h1
            id="scene1-title-fallback"
            style={{ display: 'none' }}
            className="font-tamil text-2xl sm:text-3xl font-extrabold text-[#112F1B] tracking-wider drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]"
          >
            திருமண அழைப்பிதழ்
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
