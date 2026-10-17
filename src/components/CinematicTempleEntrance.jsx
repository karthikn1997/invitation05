import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bell } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export default function CinematicTempleEntrance({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const { couple, date } = weddingData;

  const handleOpenDoor = () => {
    if (isOpening) return;
    setIsBellRinging(true);

    // 1. Ring bells and trigger 3D door swing
    setTimeout(() => {
      setIsOpening(true);
    }, 400);

    // 2. Camera flies through the opened doors directly into the inner sanctum
    setTimeout(() => {
      onEnter();
    }, 2400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9 } }}
      className="fixed inset-0 z-[100] min-h-svh w-full overflow-hidden flex items-center justify-center select-none bg-[#090305]"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. INNER TEMPLE SANCTUM (Revealed when the outer doors open) */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        animate={{
          scale: isOpening ? [1, 1.25, 1.6] : 1,
          filter: isOpening ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.9)'
        }}
        transition={{ duration: 2.4, ease: [0.25, 1, 0.35, 1] }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <img
          src="/images/temple-open-sanctum.jpg"
          alt="Sacred Temple Sanctum Inner Mandapam"
          className="w-full h-full object-cover object-center"
        />
        {/* Divine Golden Light Flare Pouring Out */}
        <motion.div
          animate={isOpening ? { opacity: [0, 0.9, 0], scale: [0.8, 1.8, 2.5] } : { opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,230,140,0.95)_0%,_rgba(218,165,82,0.4)_45%,_transparent_75%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090305]/90 via-transparent to-[#090305]/80" />
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* 2. THE 3D SPLIT TEMPLE DOORS (Photorealistic Masterpiece) */}
      {/* ------------------------------------------------------------- */}
      <div
        className="absolute inset-0 z-10 w-full h-full flex overflow-hidden pointer-events-none"
        style={{ perspective: '1600px', transformStyle: 'preserve-3d' }}
      >
        {/* LEFT CARVED DOOR PANEL */}
        <motion.div
          animate={
            isOpening
              ? {
                  rotateY: -115,
                  x: '-48%',
                  scale: 1.08,
                  opacity: 0.3
                }
              : { rotateY: 0, x: '0%', scale: 1, opacity: 1 }
          }
          transition={{ duration: 1.9, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="relative w-1/2 h-full overflow-hidden shadow-[30px_0_70px_rgba(0,0,0,0.95)]"
        >
          <img
            src="/images/temple-closed-doors.jpg"
            alt="Left Carved Door"
            className="absolute top-0 bottom-0 left-0 w-[200%] max-w-none h-full object-cover object-left filter brightness-100 contrast-108"
          />
          {/* Edge shadow & golden seam highlight */}
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-[#DFC59E]/40 via-amber-300 to-[#DFC59E]/40 shadow-[0_0_15px_#FFD700]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
        </motion.div>

        {/* RIGHT CARVED DOOR PANEL */}
        <motion.div
          animate={
            isOpening
              ? {
                  rotateY: 115,
                  x: '48%',
                  scale: 1.08,
                  opacity: 0.3
                }
              : { rotateY: 0, x: '0%', scale: 1, opacity: 1 }
          }
          transition={{ duration: 1.9, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: 'right center' }}
          className="relative w-1/2 h-full overflow-hidden shadow-[-30px_0_70px_rgba(0,0,0,0.95)]"
        >
          <img
            src="/images/temple-closed-doors.jpg"
            alt="Right Carved Door"
            className="absolute top-0 bottom-0 right-0 w-[200%] max-w-none h-full object-cover object-right filter brightness-100 contrast-108"
          />
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#DFC59E]/40 via-amber-300 to-[#DFC59E]/40 shadow-[0_0_15px_#FFD700]" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-transparent to-black/25" />
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. FLOATING SPARKS & CAMPHOR GLOW */}
      {/* ------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: [0, 0.85, 0],
              y: [25, -60],
              x: [(i % 2 === 0 ? 1 : -1) * 14, (i % 2 === 0 ? -1 : 1) * 18]
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
      {/* 4. DOOR LOCK & CALL TO ACTION (Center & Bottom) */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.4 } }}
            className="relative z-30 flex flex-col items-center justify-between min-h-svh w-full px-6 py-10 sm:py-14 text-center"
          >
            {/* Top Sacred Shloka */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#180509]/90 border border-[#DFC59E]/70 shadow-2xl backdrop-blur-md mb-2">
                <span className="text-amber-400 text-sm">🪔</span>
                <span className="font-tamil text-xs sm:text-sm tracking-widest text-[#DFC59E] font-bold">
                  ஓம் கணபதயே நமஹ • சுபமஸ்து
                </span>
                <span className="text-amber-400 text-sm">🪔</span>
              </div>
              <h2 className="font-tamil text-xl sm:text-2xl text-[#FFF8E7] font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                திருக்கோவில் மகா துவாரம்
              </h2>
            </motion.div>

            {/* Center Bell Door Knocker */}
            <div className="my-auto flex flex-col items-center">
              <motion.button
                type="button"
                onClick={handleOpenDoor}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Tap to open temple doors"
                className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-300 to-amber-800 p-1 shadow-[0_0_40px_rgba(255,215,0,0.7)] hover:shadow-[0_0_60px_rgba(255,215,0,0.95)] transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                {/* Pulsing ring */}
                <motion.div
                  animate={{ scale: [1, 1.45, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full border-2 border-amber-300"
                />
                <div className="w-full h-full rounded-full bg-[#1A0508] flex items-center justify-center border border-amber-400/80 shadow-inner">
                  <Bell className="w-9 h-9 sm:w-10 sm:h-10 text-amber-300 group-hover:scale-110 transition-transform animate-pulse" />
                </div>
              </motion.button>
              <p className="font-tamil text-xs sm:text-sm text-amber-200/90 font-bold tracking-wider mt-3 drop-shadow">
                (கதவைத் தட்டவும் • Tap Bell to Enter)
              </p>
            </div>

            {/* Bottom Invitation Button */}
            <div className="flex flex-col items-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenDoor}
                className="px-9 sm:px-12 py-4 sm:py-4.5 rounded-full border-2 border-[#DFC59E] bg-gradient-to-r from-[#580D18] via-[#7F1725] to-[#580D18] text-[#FFF8E7] shadow-[0_0_35px_rgba(223,197,158,0.55)] hover:shadow-[0_0_50px_rgba(223,197,158,0.85)] transition-all duration-300 cursor-pointer flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
                <span className="font-tamil text-sm sm:text-base font-bold tracking-wide">
                  கோவில் வாசல் திறந்து உள்ளே செல்ல • Enter Sanctuary
                </span>
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              </motion.button>
              <p className="text-[11px] font-tamil text-[#DFC59E]/85 mt-2.5 tracking-wider drop-shadow">
                நாதஸ்வர மங்கல இசையுடன் திருக்கோவிலுக்குள் நுழையவும்
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
