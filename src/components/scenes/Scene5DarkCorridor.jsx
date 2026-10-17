import React from 'react';
import { motion } from 'framer-motion';
import PetalsParticleCanvas from '../PetalsParticleCanvas';

/**
 * SCENE 5 — DARK TEMPLE CORRIDOR
 * Design Rules from Reference Video:
 * - Contrasting dark carved temple corridor
 * - Floating crimson & gold rose petals
 * - Slow forward camera push-in
 * - Atmospheric sacred bridge connecting couple reveal to the ceremony
 * - Sacred Thirukkural & Vinayagar blessings typography
 */
export default function Scene5DarkCorridor({ config, isActive = true }) {
  const invitationMessage = config?.invitationMessage || {};

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#0E0403]">
      {/* 1. Atmospheric Carved Temple Pillar Corridor with Slow Forward Dolly */}
      <motion.div
        animate={{ scale: isActive ? [1, 1.08] : 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src="/images/temple-corridor.jpg"
          alt="Temple Corridor"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
          loading="eager"
        />

        {/* Deep Mystical Temple Vignette & Warm Lamp Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0302]/95 via-[#1A0504]/50 to-[#0A0202]/90" />
      </motion.div>

      {/* 2. Diya / Vilakku Flickering Golden Ambient Light */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [0.98, 1.05, 0.98],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 z-5"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255, 190, 80, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* 3. Floating Rose Petals Drifting Down */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PetalsParticleCanvas type="rose" count={22} />
      </div>

      {/* 4. Sacred Inscription & Thirukkural Card */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
        {/* Sacred Diya Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-12 h-12 rounded-full border border-[#E6C687]/50 bg-[#260A06]/80 backdrop-blur-sm flex items-center justify-center text-[#F5D98A] shadow-[0_0_30px_rgba(245,217,138,0.3)] mb-4"
        >
          <span className="text-xl">🪔</span>
        </motion.div>

        {/* Sacred Invocation */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-tamil text-xs font-bold tracking-widest text-[#E8C77F] mb-3"
        >
          || {invitationMessage.invocation || 'ஸ்ரீ விநாயகர் துணை'} ||
        </motion.span>

        {/* Sacred Thirukkural Lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[340px] p-5 rounded-2xl bg-[#1C0604]/85 border border-[#E6C687]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
        >
          <p className="font-tamil text-sm sm:text-base text-[#FFF5DB] font-semibold leading-relaxed">
            "{invitationMessage?.thirukkural?.line1 || 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை'}"
          </p>
          <p className="font-tamil text-sm sm:text-base text-[#F5D98A] font-semibold leading-relaxed mt-0.5">
            "{invitationMessage?.thirukkural?.line2 || 'பண்பும் பயனும் அது'}"
          </p>
          <p className="font-tamil text-[11px] text-[#E6C687]/80 mt-2 font-medium">
            {invitationMessage?.thirukkural?.citation || '- திருக்குறள் (45)'}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-tamil text-xs text-[#FAF0D7]/80 mt-4 max-w-[280px] leading-relaxed drop-shadow"
        >
          {invitationMessage.bodyTamil}
        </motion.p>
      </div>
    </div>
  );
}
