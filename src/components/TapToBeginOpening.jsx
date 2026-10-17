import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import PetalsParticleCanvas from './PetalsParticleCanvas';

/**
 * TapToBeginOpening:
 * Opulent ceremonial envelope / gate opening screen.
 * Complies with browser autoplay policies: user tap unlocks audio context and starts music.
 */
export default function TapToBeginOpening({ onBegin }) {
  const { couple, wedding, invitationMessage } = weddingDetails;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#0D0503] flex flex-col items-center justify-between p-6 sm:p-8">
      {/* 1. Atmospheric Temple Backdrop with Golden Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/scenes/scene1_temple_full@2x.png"
          alt="Temple Backdrop"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] scale-105"
        />
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(255, 225, 140, 0.22) 0%, rgba(20, 8, 4, 0.65) 50%, rgba(10, 3, 2, 0.92) 100%)',
          }}
        />
      </div>

      {/* Floating Golden Sparks */}
      <PetalsParticleCanvas type="temple-golden" count={18} />

      {/* 2. Top Sacred Blessing */}
      <div className="relative z-10 text-center pt-8 sm:pt-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="font-tamil text-xs sm:text-sm tracking-[0.25em] text-[#F5D98A] font-bold uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          {invitationMessage.invocation}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="font-serif italic text-xs text-[#E6C687]/80 mt-1 tracking-wider"
        >
          An Auspicious Union of Two Souls
        </motion.p>
      </div>

      {/* 3. Central Sacred Emblem & Couple Typography */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto max-w-sm w-full">
        {/* Lord Ganesha Circular Emblem with Divine Radiance */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6"
        >
          {/* Pulsing Aura */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-[#FFEFA8]/30 blur-xl"
          />

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2 bg-gradient-to-br from-[#FFEAA7] via-[#D4AF37] to-[#7A1C18] shadow-[0_12px_35px_rgba(0,0,0,0.9)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#FAF4E8] flex items-center justify-center p-3 border border-[#E6C687]">
              <img
                src="/scenes/vinayagar_crest_transparent@2x.png"
                alt="Lord Ganesha Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(40,20,10,0.4)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Tamil Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8 }}
          className="font-tamil text-2xl sm:text-3xl font-bold text-[#FFF8E7] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
        >
          {invitationMessage.openingTamil}
        </motion.h1>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.05 }}
          className="mt-4 space-y-1 w-full"
        >
          <p className="font-serif text-xl sm:text-2xl font-semibold text-[#FFF5DB] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {couple.englishNames}
          </p>
          <p className="font-tamil text-sm text-[#E6C687] font-medium tracking-wide">
            {couple.tamilNames}
          </p>
        </motion.div>

        {/* Date & Location Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.1, delay: 1.3 }}
          className="font-serif text-xs sm:text-sm tracking-[0.24em] text-[#FAF0D7] uppercase mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          {wedding.dayOrdinal} {wedding.monthYear} • {weddingDetails.venue.city}
        </motion.p>
      </div>

      {/* 4. Opulent Shimmering Tap-To-Begin Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="relative z-10 w-full flex flex-col items-center pb-6 sm:pb-8"
      >
        <motion.button
          type="button"
          onClick={onBegin}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#6A1512] via-[#8B1E19] to-[#5C110F] text-[#FFF8E7] border-2 border-[#E6C687] shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_16px_50px_rgba(230,198,135,0.4)] transition-all cursor-pointer overflow-hidden"
        >
          {/* Shimmer Light Sweep */}
          <motion.div
            animate={{ x: ['-120%', '220%'] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
          />

          <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-ping" />
          <span className="font-serif text-xs sm:text-sm tracking-[0.24em] uppercase font-bold text-[#FFF8E7] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Open Sacred Invitation
          </span>
          <span className="font-serif text-sm text-[#F5D98A] group-hover:translate-x-1 transition-transform">
            ✦
          </span>
        </motion.button>

        <p className="font-tamil text-[11px] sm:text-xs text-[#E6C687]/80 mt-3 font-medium">
          இன்னிசையுடன் கூடிய திருமண அழைப்பிதழ் • Tap with Audio
        </p>
      </motion.div>
    </div>
  );
}
