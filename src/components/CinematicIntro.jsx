import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bell } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export default function CinematicIntro({ onOpen, onSkip }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const { presentation } = weddingConfig;

  const handleEnterTemple = () => {
    if (isOpening) return;
    setIsBellRinging(true);

    // 1. Ring bells and trigger door swing
    setTimeout(() => {
      setIsOpening(true);
    }, 300);

    // 2. Camera flies through the doorway right inside the temple
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0D0508] select-none">
      {/* Skip Intro Button */}
      <button
        onClick={onSkip}
        className="absolute top-4 right-4 z-50 px-4 py-1.5 rounded-full border border-[#DFC59E]/40 bg-[#1A060A]/85 hover:bg-[#641824] text-[#F7EFE2] text-xs font-sans-ui tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
        aria-label="Skip intro to invitation"
      >
        Skip Intro • தொடரவும்
      </button>

      {/* ------------------------------------------------------------- */}
      {/* 3D CAMERA RIG / STAGE (ZOOMS DEEP INSIDE TEMPLE ON CLICK) */}
      {/* ------------------------------------------------------------- */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-all duration-1600 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transform: isOpening ? 'scale(3.4) translateZ(400px)' : 'scale(1)',
          filter: isOpening ? 'brightness(1.2)' : 'brightness(1)',
          transformOrigin: 'center 60%',
        }}
      >
        {/* Full-screen Temple Gopuram Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/temple-gopuram.jpg"
            alt="Majestic South Indian Temple Gopuram"
            className="w-full h-full object-cover object-center filter brightness-65 contrast-110"
          />
          {/* Temple Night Sky & Sacred Golden Atmospheric Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0508] via-[#240A12]/60 to-[#0D0508]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,200,100,0.22)_0%,_transparent_70%)]" />
        </div>

        {/* ----------------------------------------------------------- */}
        {/* THE TEMPLE SANCTUM ENTRANCE & 3D DOORS */}
        {/* ----------------------------------------------------------- */}
        <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] px-4 flex flex-col items-center">
          {/* Temple Header Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A060A]/90 border border-[#DFC59E]/50 shadow-md mb-2">
              <span className="text-yellow-400 text-xs">🪔</span>
              <span className="font-serif-ta text-xs tracking-widest text-[#DFC59E] font-bold">
                ஓம் கணபதயே நமஹ • சுபமஸ்து
              </span>
              <span className="text-yellow-400 text-xs">🪔</span>
            </div>

            <h2 className="font-serif-ta text-2xl sm:text-3xl text-[#F7EFE2] font-bold tracking-wide drop-shadow-lg">
              மங்களத் திருக்கோவில் முகப்பு
            </h2>
            <p className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#DFC59E] font-medium mt-0.5">
              Sacred Temple Entrance
            </p>
          </motion.div>

          {/* --------------------------------------------------------- */}
          {/* THE CARVED TEMPLE DOORWAY (வாசல் முகப்பு) */}
          {/* --------------------------------------------------------- */}
          <div className="relative w-full aspect-[4/5] rounded-t-[160px] border-4 border-[#DFC59E]/70 bg-[#16060A] shadow-[0_20px_70px_rgba(0,0,0,0.95)] p-1.5 overflow-hidden">
            {/* Hanging Brass Temple Bells */}
            <div className="absolute -top-1 left-8 z-30 flex flex-col items-center pointer-events-none">
              <div className="w-[1.5px] h-7 bg-[#DFC59E]" />
              <div className={`text-[#DFC59E] text-lg ${isBellRinging ? 'animate-bounce' : ''}`}>
                🔔
              </div>
            </div>
            <div className="absolute -top-1 right-8 z-30 flex flex-col items-center pointer-events-none">
              <div className="w-[1.5px] h-7 bg-[#DFC59E]" />
              <div className={`text-[#DFC59E] text-lg ${isBellRinging ? 'animate-bounce delay-100' : ''}`}>
                🔔
              </div>
            </div>

            {/* Top Mango Leaf Thoranam Across Lintel */}
            <div className="absolute top-0 left-0 right-0 z-25 flex justify-center gap-1 pointer-events-none opacity-90">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-4 h-6 bg-gradient-to-b from-[#1b4d24] to-[#2e7d32] rounded-b-full shadow-xs" />
              ))}
            </div>

            {/* ------------------------------------------------------- */}
            {/* INNER TEMPLE SANCTUM (REVEALED WHEN DOORS OPEN!) */}
            {/* ------------------------------------------------------- */}
            <div className="absolute inset-0 rounded-t-[154px] overflow-hidden flex flex-col items-center justify-center z-0 bg-[#2B0E14]">
              {/* Grand Wedding Mandapam Photo with Lord Ganesha & Chandeliers */}
              <img
                src="/images/venue-mandap.jpg"
                alt="Inside Temple Wedding Mandapam"
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
              {/* Holy Golden Light Rays pouring through */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#641824]/60 via-transparent to-amber-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,220,120,0.4)_0%,_transparent_60%)]" />

              {/* Auspicious Center Symbol */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#DFC59E] bg-[#1A060A]/90 flex items-center justify-center shadow-2xl mb-2">
                  <span className="font-serif-ta text-3xl text-yellow-300 font-bold drop-shadow">ஸ்ரீ</span>
                </div>
                <h3 className="font-serif-ta text-xl text-yellow-200 font-bold drop-shadow-md">
                  திருக்கல்யாண வைபவம்
                </h3>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* 3D TEMPLE DOUBLE DOORS (அசைந்து திறக்கும் மரக்கதவுகள்) */}
            {/* ------------------------------------------------------- */}
            <div
              className="relative w-full h-full rounded-t-[154px] flex overflow-hidden z-10"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              {/* LEFT TEMPLE DOOR */}
              <div
                className="w-1/2 h-full bg-gradient-to-r from-[#4A190C] via-[#3B1207] to-[#2E0D05] border-r-2 border-[#693116] p-2 flex flex-col justify-between transition-transform duration-1200 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transformOrigin: 'left center',
                  transform: isOpening ? 'rotateY(-115deg)' : 'rotateY(0deg)',
                  boxShadow: 'inset 3px 3px 12px rgba(0,0,0,0.8)',
                }}
              >
                {/* Traditional Carved Brass Panels */}
                <div className="w-full h-1/4 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-1 flex items-center justify-center shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-md border border-amber-900" />
                </div>
                <div className="w-full h-1/3 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-2 flex flex-col justify-around items-center shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-xs" />
                  <div className="text-yellow-300/80 text-sm font-serif-ta">🪔</div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-xs" />
                </div>
                <div className="w-full h-1/4 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-1 flex items-center justify-center shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-md border border-amber-900" />
                </div>
              </div>

              {/* RIGHT TEMPLE DOOR */}
              <div
                className="w-1/2 h-full bg-gradient-to-l from-[#4A190C] via-[#3B1207] to-[#2E0D05] border-l-2 border-[#693116] p-2 flex flex-col justify-between transition-transform duration-1200 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transformOrigin: 'right center',
                  transform: isOpening ? 'rotateY(115deg)' : 'rotateY(0deg)',
                  boxShadow: 'inset -3px 3px 12px rgba(0,0,0,0.8)',
                }}
              >
                <div className="w-full h-1/4 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-1 flex items-center justify-center shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-md border border-amber-900" />
                </div>
                <div className="w-full h-1/3 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-2 flex flex-col justify-around items-center shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-xs" />
                  <div className="text-yellow-300/80 text-sm font-serif-ta">🪔</div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-xs" />
                </div>
                <div className="w-full h-1/4 rounded-sm border-2 border-[#DFC59E]/40 bg-[#240A04] p-1 flex items-center justify-center shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 shadow-md border border-amber-900" />
                </div>
              </div>

              {/* CENTER BRASS BELL LATCH (அழைப்பிதழ் மணி கைப்பிடி) */}
              {!isOpening && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 p-0.5 shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#240e06] flex items-center justify-center border border-yellow-400/60 shadow-inner">
                      <Bell className="w-6 h-6 text-yellow-300 animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sacred Padi Kolam & Agal Vilakku at the Threshold */}
          <div className="w-full flex justify-between items-center px-4 pt-3">
            <div className="flex items-center gap-1.5 text-yellow-400">
              <span className="text-xl animate-pulse">🪔</span>
              <span className="text-[10px] font-serif-ta text-[#DFC59E] tracking-wider">மங்கலம்</span>
            </div>
            <div className="h-[1px] flex-1 mx-3 bg-gradient-to-r from-transparent via-[#DFC59E]/50 to-transparent" />
            <div className="flex items-center gap-1.5 text-yellow-400">
              <span className="text-[10px] font-serif-ta text-[#DFC59E] tracking-wider">சுபயோகம்</span>
              <span className="text-xl animate-pulse delay-150">🪔</span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ENTER BUTTON (OVERLAID AT BOTTOM, FADES OUT ON CLICK) */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-4 right-4 z-40 flex flex-col items-center text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterTemple}
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border-2 border-[#DFC59E] bg-gradient-to-r from-[#641824] via-[#852232] to-[#641824] text-[#F7EFE2] shadow-[0_0_30px_rgba(223,197,158,0.45)] hover:shadow-[0_0_40px_rgba(223,197,158,0.7)] transition-all duration-300 cursor-pointer flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
              <span className="font-serif-ta text-sm sm:text-base font-bold tracking-wide">
                கோவில் வாசல் திறந்து உள்ளே செல்ல | Enter Temple
              </span>
              <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
            </motion.button>

            <p className="text-[11px] font-serif-ta text-[#DFC59E]/90 mt-2.5 tracking-wider drop-shadow">
              (கதவைத் தட்டி நாதஸ்வர மங்கல இசையுடன் திருக்கோவிலுக்குள் நுழையவும்)
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
