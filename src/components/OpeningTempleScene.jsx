import React from 'react';
import { motion } from 'framer-motion';

/**
 * Visual Scene 1 — Authentic Temple & Rotating Chakra:
 * - 100% Faithful to Reference Screenshot
 * - Continuously rotating circular Lord Ganesha Chakra at top (Suthitae irukum)
 * - Animated Tamil Calligraphic title: "திருமண அழைப்பிதழ்"
 * - Animated Colourful South Indian Temple Gopuram with slow camera push-in
 * - Animated birds flying across the pastel sky above the temple
 * - NO other clutter or overlay content
 */
export default function OpeningTempleScene() {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#98D7C8]">
      {/* 1. Luminous Pastel Mint-Green, Turquoise & Golden Sky */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 95% 75% at 20% 55%, #FFF2AA 0%, #D8EED8 35%, #96D5C7 70%, #7EC8B8 100%)',
        }}
      />

      {/* Warm Golden Sunlight Glow on the Lower Left Horizon */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.95, 0.7],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[8%] top-[50%] -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFF8D6] via-[#FFE28A]/50 to-transparent blur-3xl z-1"
        aria-hidden="true"
      />

      {/* 2. Soft Volumetric Clouds Drifting Across Sky */}
      <motion.div
        animate={{ x: ['-4%', '5%', '-4%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-[-10%] top-[5%] h-56 opacity-45 z-2"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#FFFBF0]/50 to-transparent blur-2xl" />
      </motion.div>

      {/* 3. Animated Flying Birds (Matching reference screenshot placement on the left sky) */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {/* Bird Flock matching reference screenshot position (left of temple) */}
        <motion.div
          initial={{ x: -40, y: 0, opacity: 0 }}
          animate={{
            x: [0, 80, 160],
            y: [0, -15, -30],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-[8%] top-[42%]"
        >
          {/* Individual animated bird with flapping wings */}
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

            {/* Bird 4 */}
            <motion.svg
              viewBox="0 0 32 18"
              className="w-2.5 h-1.5 text-[#325747] absolute top-3 left-7"
              fill="currentColor"
              animate={{ rotate: [3, -3, 3], scaleY: [1, 0.75, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
            </motion.svg>
          </div>
        </motion.div>

        {/* Second gentle bird crossing from far right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{
            x: [-60, -380],
            y: [0, -40],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            delay: 4,
            ease: 'linear',
          }}
          className="absolute right-[5%] top-[34%]"
        >
          <motion.svg
            viewBox="0 0 32 18"
            className="w-3.5 h-2.5 text-[#244639]"
            fill="currentColor"
            animate={{ scaleY: [1, 0.75, 1] }}
            transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
          </motion.svg>
        </motion.div>
      </div>

      {/* 4a. Small Side Temple + Trees (LEFT SIDE - behind main temple) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute bottom-0 left-0 z-12 w-[58%] h-[72%] pointer-events-none"
        style={{ transformOrigin: 'bottom center' }}
      >
        <motion.img
          src="/scenes/small_temple_trees.png"
          alt="Small Decorative Temple with Palm Trees"
          className="w-full h-full object-contain object-bottom"
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.012, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Soft golden base glow beneath the small temple */}
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#FFD980]/30 blur-2xl rounded-full"
        />
      </motion.div>

      {/* 4b. Animated Palm Trees — RIGHT SIDE (decorative, gently swaying) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: 'easeOut', delay: 0.5 }}
        className="absolute bottom-0 right-0 z-12 w-[30%] h-[60%] pointer-events-none flex items-end justify-end"
      >
        {/* Tall Right Palm Tree */}
        <motion.svg
          viewBox="0 0 120 340"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: [0, 1.5, -0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom center' }}
        >
          {/* Trunk */}
          <path d="M58 330 Q54 280 50 230 Q46 180 52 130 Q55 90 60 60" stroke="#7B5E3A" strokeWidth="10" strokeLinecap="round" fill="none"/>
          <path d="M62 330 Q66 280 68 230 Q70 180 66 130 Q63 90 60 60" stroke="#6B4E2E" strokeWidth="6" strokeLinecap="round" fill="none"/>
          {/* Trunk texture rings */}
          {[260, 220, 180, 145, 115, 88].map((y, i) => (
            <ellipse key={i} cx="60" cy={y} rx="7" ry="2.5" fill="#8B6840" opacity="0.5"/>
          ))}
          {/* Palm leaves */}
          <motion.g
            animate={{ rotate: [0, 2, -1, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            style={{ transformOrigin: '60px 62px' }}
          >
            {/* Left spreading leaves */}
            <path d="M60 62 Q30 30 -10 18" stroke="#2D7A3A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M60 62 Q25 45 -5 50" stroke="#3A8A45" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M60 62 Q35 55 10 72" stroke="#348A40" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Right spreading leaves */}
            <path d="M60 62 Q90 30 130 18" stroke="#2D7A3A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M60 62 Q95 45 125 50" stroke="#3A8A45" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M60 62 Q85 55 110 72" stroke="#348A40" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Top center leaf */}
            <path d="M60 62 Q58 20 55 0" stroke="#2D7A3A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            {/* Leaf fronds — left */}
            <path d="M60 62 Q10 25 -15 28" stroke="#4CAF55" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
            <path d="M60 62 Q15 60 -5 78" stroke="#4CAF55" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
            {/* Leaf fronds — right */}
            <path d="M60 62 Q110 25 135 28" stroke="#4CAF55" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
            <path d="M60 62 Q105 60 125 78" stroke="#4CAF55" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
            {/* Coconuts */}
            <circle cx="50" cy="70" r="5" fill="#8B6914"/>
            <circle cx="70" cy="68" r="4.5" fill="#9B7318"/>
            <circle cx="60" cy="75" r="4" fill="#7A5C10"/>
          </motion.g>
        </motion.svg>
      </motion.div>

      {/* 4. Animated Temple Gopuram (Rises gently & slow camera push-in) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 25 }}
        animate={{
          opacity: 1,
          scale: [1, 1.05],
          y: 0,
        }}
        transition={{
          opacity: { duration: 1.6, ease: 'easeOut' },
          scale: { duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          y: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
        }}
        className="absolute inset-0 w-full h-full z-15 flex flex-col justify-end pointer-events-none"
      >
        <img
          src="/scenes/scene1_opening_master@2x.png"
          alt="Traditional South Indian Temple Gopuram"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />

        {/* Gentle Sunbeam Rim Light Sweep */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-[#FFE894]/12 to-transparent mix-blend-overlay"
        />
      </motion.div>

      {/* 5. TOP SECTION: Continuously Rotating Chakra & Animated Tamil Title */}
      <div className="absolute inset-x-0 top-0 z-30 pt-7 sm:pt-9 px-4 flex flex-col items-center pointer-events-none text-center">
        {/* Lord Ganesha Circular Chakra / Mandala Emblem (SUTHITAE IRUKUM - INFINITE ROTATION) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center mb-1"
        >
          {/* Divine Pulsing Aura */}
          <motion.div
            animate={{
              scale: [0.95, 1.12, 0.95],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 w-28 h-28 -m-3 rounded-full bg-[#FFF2B2]/50 blur-lg"
          />

          {/* THE CHAKRA: Continuously spins 360 degrees smoothly in an endless loop, while Lord Ganesha remains stationary */}
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
                alt="Sacred Mandala Ring"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(30,60,35,0.4)]"
              />
            </motion.div>

            {/* 2. Stationary Lord Ganesha Center */}
            <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
              <img
                src="/scenes/ganesha-center.png"
                alt="Lord Ganesha"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(30,60,35,0.35)]"
              />
            </div>
          </div>
        </motion.div>

        {/* 6. ANIMATED TAMIL CALLIGRAPHIC TITLE: திருமண அழைப்பிதழ் */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center w-full max-w-[380px] sm:max-w-[460px] mt-3.5 sm:mt-5"
        >
          <img
            src="/scenes/thirumana_title_clean@2x.png"
            alt="திருமண அழைப்பிதழ்"
            className="w-72 sm:w-88 md:w-96 h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(25,55,30,0.45)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
