import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import PetalsParticleCanvas from './PetalsParticleCanvas';
import ShareButtons from './ShareButtons';
import { Sparkles } from 'lucide-react';

/**
 * Visual Scene 5 — Wedding Date Reveal:
 * - Keep the wooden palace background, seated couple near lower half
 * - Drifting red rose petals in the foreground
 * - Upper center reveal using refined cream-gold serif typography:
 *     'WEDDING'
 *     '[WEDDING DAY / ORDINAL]'
 *     '[MONTH] [YEAR]'
 *     'Between'
 *     '[MUHURTHAM START TIME] to [END TIME]'
 * - All fields dynamically pulled from weddingDetails.js
 * - Sequential line-by-line reveal with subtle opacity and upward movement
 * - High contrast and pristine readability
 * - Integrated 1-click WhatsApp, Calendar, Maps, and Full Details action bar
 */
export default function WeddingDateScene({ isActive, onOpenDetails }) {
  const { wedding, couple, venue } = weddingDetails;

  // Split ordinal number (e.g., "23rd" -> "23" and "rd")
  const match = wedding.dayOrdinal.match(/^(\d+)([a-zA-Z]+)$/);
  const dayNum = match ? match[1] : wedding.dayOrdinal;
  const daySuffix = match ? match[2] : '';

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#180A04]">
      {/* 1. Palace Background with Seated Couple in Lower Half */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: isActive ? 1.05 : 1.02 }}
        transition={{ duration: 9.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={couple.palaceDateRevealPhoto}
          alt="Palace backdrop with seated couple"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />

        {/* Dark Vignette & Soft Gradient to Guarantee Strong Text Contrast */}
        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              'linear-gradient(180deg, rgba(16, 6, 2, 0.90) 0%, rgba(22, 9, 3, 0.74) 42%, rgba(20, 8, 3, 0.45) 60%, rgba(12, 4, 1, 0.92) 100%)',
          }}
        />

        {/* Golden Central Aura for Typography */}
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 w-80 h-72 rounded-full bg-[#FFE28A]/15 blur-3xl z-2"
        />
      </motion.div>

      {/* 2. Drifting Red Rose Petals in Foreground */}
      <PetalsParticleCanvas type="rose-petals" count={26} />

      {/* 3. Upper Center Wedding Details in Refined Cream-Gold Serif Typography */}
      <div className="relative z-20 pt-9 sm:pt-12 px-6 flex flex-col items-center text-center pointer-events-none">
        {/* Line 1: 'WEDDING' */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.24em] sm:tracking-[0.28em] text-[#F3DC9B] font-semibold uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
        >
          {wedding.title}
        </motion.h3>

        {/* Line 2: '[WEDDING DAY / ORDINAL]' e.g., 23rd */}
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start justify-center mt-0.5 mb-0.5"
        >
          <span className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal text-[#FFF5DB] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.98)] tracking-tight">
            {dayNum}
          </span>
          {daySuffix && (
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E8C77F] ml-0.5 -mt-1 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {daySuffix}
            </span>
          )}
        </motion.div>

        {/* Line 3: '[MONTH] [YEAR]' e.g., October 2026 */}
        <motion.h4
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#F7E5B5] tracking-wide drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]"
        >
          {wedding.monthYear}
        </motion.h4>

        {/* Line 4: 'Between' */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.35, ease: 'easeOut' }}
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#E5BF77] mt-2.5 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        >
          {wedding.betweenLabel}
        </motion.p>

        {/* Line 5: '[MUHURTHAM START TIME] to [END TIME]' e.g., 7.35 am to 9.00 am */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#FFF2D0] tracking-wide mt-0.5 drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)]"
        >
          {wedding.muhurthamTimeFormatted}
        </motion.p>

        {/* Auspicious Tamil Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.95, ease: 'easeOut' }}
          className="font-tamil text-xs sm:text-sm text-[#E8C77F]/90 font-medium tracking-wider mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
        >
          {wedding.tamilTitle} • {venue.name}
        </motion.p>
      </div>

      {/* 4. Bottom Interactive Invitation Action Bar */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
        className="absolute bottom-5 inset-x-3 sm:inset-x-5 z-30 flex flex-col items-center gap-2 pointer-events-auto"
      >
        {/* Quick Icon Actions (WhatsApp, Calendar, Maps) */}
        <div className="flex items-center justify-center p-1.5 rounded-full bg-[#180703]/80 backdrop-blur-md border border-[#E6C687]/40 shadow-lg">
          <ShareButtons variant="compact" />
        </div>

        {/* Full Details Drawer Trigger */}
        <button
          type="button"
          onClick={onOpenDetails}
          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6A1512] via-[#851D18] to-[#5C110F] border border-[#E6C687]/90 text-[#FFF8E7] font-serif text-[11px] sm:text-xs uppercase tracking-[0.2em] shadow-[0_8px_25px_rgba(0,0,0,0.85)] hover:shadow-[0_10px_30px_rgba(230,198,135,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F5D98A]" />
          <span>View Full Patrikai Details</span>
          <span className="text-[#E6C687] group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </motion.div>
    </div>
  );
}
