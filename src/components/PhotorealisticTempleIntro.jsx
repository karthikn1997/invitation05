import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bell } from 'lucide-react';
import { weddingData } from '../config/weddingData';

// Traditional South Indian Brass Kuthu Vilakku (குத்துவிளக்கு)
function KuthuVilakku({ className = '' }) {
  return (
    <div className={`relative flex flex-col items-center select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Top Flame Glow */}
      <motion.div
        animate={{ scale: [0.9, 1.3, 0.95, 1.25, 0.9], opacity: [0.5, 0.95, 0.55, 0.9, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-5 w-14 h-14 rounded-full bg-radial from-[#FFE685]/90 via-[#FF9E2C]/40 to-transparent blur-md z-0"
      />
      {/* 5-flame tips */}
      <div className="relative z-10 flex items-end justify-center gap-1 mb-[-2px]">
        {[-1, 0, 1].map((offset, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [1, 1.35, 0.9, 1.25, 1],
              scaleX: [1, 0.85, 1.15, 0.9, 1],
              x: offset * 2
            }}
            transition={{ duration: 1.5 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-3.5 rounded-full bg-gradient-to-t from-[#FF7A00] via-[#FFD043] to-[#FFFBE6] shadow-[0_0_10px_#FFD043]"
          />
        ))}
      </div>
      {/* Ornate Brass Lamp Body */}
      <svg viewBox="0 0 40 120" fill="none" className="w-8 sm:w-10 h-28 sm:h-36 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
        <path d="M12 12 Q20 8 28 12 L26 18 Q20 16 14 18 Z" fill="#D4AF37" stroke="#FFEAA7" strokeWidth="0.8" />
        <ellipse cx="20" cy="18" rx="14" ry="4" fill="#C5A059" stroke="#FFEAA7" strokeWidth="0.8" />
        <path d="M18 22 L18 50 L16 52 L16 80 L24 80 L24 52 L22 50 L22 22 Z" fill="#B38743" stroke="#FFEAA7" strokeWidth="0.6" />
        <ellipse cx="20" cy="50" rx="8" ry="3" fill="#D4AF37" />
        <ellipse cx="20" cy="80" rx="10" ry="3.5" fill="#D4AF37" />
        <path d="M15 84 L10 110 Q20 115 30 110 L25 84 Z" fill="#8B6914" stroke="#FFEAA7" strokeWidth="0.8" />
        <ellipse cx="20" cy="112" rx="18" ry="5" fill="#D4AF37" stroke="#FFEAA7" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function PhotorealisticTempleIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const { couple, date } = weddingData;

  const handleOpenSanctum = () => {
    if (isOpening) return;
    setIsBellRinging(true);

    // 1. Ring bell and start 3D door swing
    setTimeout(() => {
      setIsOpening(true);
    }, 350);

    // 2. Camera flies through the open doors into the inner mandapam
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[100] min-h-svh w-full overflow-hidden flex items-center justify-center select-none bg-[#080204]"
    >
      {/* Background Ambience: Night Temple Gopuram Silhouette & Warm Sky */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/temple-gopuram.jpg"
          alt="Temple Gopuram at Night"
          className="w-full h-full object-cover object-center filter brightness-45 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080204] via-[#1A0409]/75 to-[#080204]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_45%,_rgba(255,215,110,0.22)_0%,_transparent_75%)]" />
      </div>

      {/* Floating Golden Dust Particles */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: [0, 0.85, 0],
              y: [25, -60],
              x: [(i % 2 === 0 ? 1 : -1) * 12, (i % 2 === 0 ? -1 : 1) * 16]
            }}
            transition={{
              duration: 4.5 + (i % 3) * 1.5,
              delay: (i * 0.35) % 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${(i * 17) % 90 + 5}%`,
              top: `${(i * 21) % 80 + 10}%`
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#FFEAA7] shadow-[0_0_12px_#FFD700]"
          />
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3D CAMERA RIG / STAGE (ZOOMS THROUGH THE DOORS ON CLICK) */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        animate={{
          scale: isOpening ? 3.4 : 1,
          opacity: isOpening ? 0 : 1
        }}
        transition={{ duration: 2.1, ease: [0.25, 1, 0.35, 1] }}
        className="relative z-20 w-full max-w-[420px] sm:max-w-[480px] px-4 flex flex-col items-center"
      >
        {/* Sacred Header Invocation Plaque */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-4 sm:mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A050A]/90 border border-[#DFC59E]/60 shadow-xl mb-2">
            <span className="text-amber-400 text-xs">🪔</span>
            <span className="font-tamil text-xs tracking-widest text-[#DFC59E] font-bold">
              ஓம் கணபதயே நமஹ • சுபமஸ்து
            </span>
            <span className="text-amber-400 text-xs">🪔</span>
          </div>

          <h1 className="font-tamil text-2xl sm:text-3xl text-[#FFF8E7] font-bold tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            திருக்கோவில் மகா துவாரம்
          </h1>
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#DFC59E] mt-0.5 font-medium">
            Sacred Temple Gateway
          </p>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* THE PHOTOREALISTIC CARVED TEMPLE GATEWAY */}
        {/* ------------------------------------------------------------- */}
        <div className="relative w-full aspect-[4/5] rounded-t-[200px] border-4 border-[#DFC59E] bg-[#120407] shadow-[0_30px_90px_rgba(0,0,0,0.95)] p-1.5 overflow-hidden">
          {/* Top Hanging Brass Temple Bells */}
          <div className="absolute top-1 left-7 sm:left-10 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#DFC59E] to-[#9E783B]" />
            <motion.div
              animate={isBellRinging ? { rotate: [-20, 20, -20, 15, -15, 0] } : {}}
              transition={{ duration: 1.5, repeat: isBellRinging ? Infinity : 0 }}
              style={{ transformOrigin: 'top center' }}
              className="text-[#DFC59E] text-xl drop-shadow-[0_2px_8px_rgba(255,215,0,0.7)]"
            >
              🔔
            </motion.div>
          </div>

          <div className="absolute top-1 right-7 sm:right-10 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#DFC59E] to-[#9E783B]" />
            <motion.div
              animate={isBellRinging ? { rotate: [20, -20, 20, -15, 15, 0] } : {}}
              transition={{ duration: 1.5, repeat: isBellRinging ? Infinity : 0, delay: 0.1 }}
              style={{ transformOrigin: 'top center' }}
              className="text-[#DFC59E] text-xl drop-shadow-[0_2px_8px_rgba(255,215,0,0.7)]"
            >
              🔔
            </motion.div>
          </div>

          {/* Top Fresh Mango Leaf Thoranam Across Lintel */}
          <div className="absolute top-0 left-0 right-0 z-25 flex justify-center gap-1.5 pointer-events-none opacity-95">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-6 bg-gradient-to-b from-[#1b4d24] via-[#2e7d32] to-[#14421b] rounded-b-full shadow-sm border-t border-amber-500/50"
              />
            ))}
          </div>

          {/* ----------------------------------------------------------- */}
          {/* INNER TEMPLE SANCTUM (Revealed when 3D doors open) */}
          {/* ----------------------------------------------------------- */}
          <div className="absolute inset-0 rounded-t-[192px] overflow-hidden flex flex-col items-center justify-center z-0 bg-[#22070D]">
            <img
              src="/images/venue-mandap.jpg"
              alt="Inside Temple Wedding Mandapam"
              className="w-full h-full object-cover filter brightness-110 contrast-115"
            />
            {/* Camphor Divine Light Flare Burst */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#580D18]/85 via-transparent to-amber-500/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,230,130,0.75)_0%,_transparent_65%)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full border-2 border-[#DFC59E] bg-[#1A050A]/95 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.8)] mb-3">
                <span className="font-tamil text-3xl text-amber-300 font-bold drop-shadow">ஸ்ரீ</span>
              </div>
              <h3 className="font-tamil text-xl sm:text-2xl text-amber-200 font-bold drop-shadow-md">
                திருக்கல்யாண வைபவம்
              </h3>
              <p className="font-cinzel text-xs tracking-widest text-[#FFE8A3] uppercase mt-1 font-semibold">
                Sacred Wedding Sanctuary
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* PHOTOREALISTIC 3D CARVED WOODEN DOUBLE DOORS */}
          {/* ----------------------------------------------------------- */}
          <div
            className="relative w-full h-full rounded-t-[192px] flex overflow-hidden z-10"
            style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
          >
            {/* LEFT PHOTOREALISTIC CARVED DOOR */}
            <div
              className="w-1/2 h-full overflow-hidden relative transition-transform duration-1400 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transformOrigin: 'left center',
                transform: isOpening ? 'rotateY(-112deg)' : 'rotateY(0deg)',
                boxShadow: 'inset 4px 0 20px rgba(0,0,0,0.9)'
              }}
            >
              <img
                src="/invitation/wedding-temple-door.jpg"
                alt="Carved Wooden Temple Door Left"
                className="absolute inset-0 w-[200%] h-full object-cover object-left filter brightness-95 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
              <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-[#DFC59E]/40 via-amber-300 to-[#DFC59E]/40 shadow-[0_0_15px_#FFD700]" />
            </div>

            {/* RIGHT PHOTOREALISTIC CARVED DOOR */}
            <div
              className="w-1/2 h-full overflow-hidden relative transition-transform duration-1400 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transformOrigin: 'right center',
                transform: isOpening ? 'rotateY(112deg)' : 'rotateY(0deg)',
                boxShadow: 'inset -4px 0 20px rgba(0,0,0,0.9)'
              }}
            >
              <img
                src="/invitation/wedding-temple-door.jpg"
                alt="Carved Wooden Temple Door Right"
                className="absolute inset-0 w-[200%] h-full object-cover object-right filter brightness-95 contrast-110 -translate-x-1/2"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/30" />
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-[#DFC59E]/40 via-amber-300 to-[#DFC59E]/40 shadow-[0_0_15px_#FFD700]" />
            </div>

            {/* CENTER ORNATE BRASS BELL LATCH */}
            {!isOpening && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-800 p-0.5 shadow-[0_0_30px_rgba(255,215,0,0.7)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#1E0704] flex items-center justify-center border border-amber-400/80 shadow-inner">
                    <Bell className="w-6 h-6 text-amber-300 animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Both Sides Flanked by Tall Brass Kuthu Vilakkus */}
        <div className="w-full flex justify-between items-end px-2 -mt-16 sm:-mt-20 z-30 pointer-events-none">
          <KuthuVilakku className="transform -scale-x-100" />
          <KuthuVilakku />
        </div>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* ENTER BUTTON AT BOTTOM */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-5 sm:bottom-8 left-4 right-4 z-40 flex flex-col items-center text-center"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenSanctum}
              className="px-8 sm:px-11 py-3.5 sm:py-4 rounded-full border-2 border-[#DFC59E] bg-gradient-to-r from-[#580D18] via-[#7D1623] to-[#580D18] text-[#FFF8E7] shadow-[0_0_35px_rgba(223,197,158,0.55)] hover:shadow-[0_0_50px_rgba(223,197,158,0.85)] transition-all duration-300 cursor-pointer flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              <span className="font-tamil text-sm sm:text-base font-bold tracking-wide">
                கோவில் வாசல் திறந்து உள்ளே செல்ல • Enter Sanctuary
              </span>
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
            </motion.button>

            <p className="text-[11px] font-tamil text-[#DFC59E]/90 mt-2.5 tracking-wider drop-shadow">
              (கதவைத் தட்டி நாதஸ்வர மங்கல இசையுடன் திருக்கோவிலுக்குள் நுழையவும்)
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
