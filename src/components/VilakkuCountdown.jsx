import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';

function calculateTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

// Glowing Traditional Brass Agal Vilakku
function BrassDiyaLamp({ value, label, tamil }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Diya Flame Glow */}
      <motion.div
        animate={{ scale: [0.9, 1.25, 0.95, 1.2, 0.9], opacity: [0.6, 0.95, 0.65, 0.9, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-3 w-16 h-16 rounded-full bg-radial from-[#FFE685]/90 via-[#FF9E2C]/40 to-transparent blur-md z-0"
      />

      {/* Flame Icon */}
      <div className="relative z-10 mb-2">
        <motion.div
          animate={{ scaleY: [1, 1.3, 0.95, 1.25, 1], scaleX: [1, 0.85, 1.1, 0.9, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-3 h-5 rounded-full bg-gradient-to-t from-[#FF7A00] via-[#FFD043] to-[#FFFBE6] shadow-[0_0_12px_#FFD043]"
        />
      </div>

      {/* Numerical Digit Plaque */}
      <div className="relative z-10 w-20 sm:w-24 md:w-28 py-3 rounded-2xl bg-gradient-to-b from-[#2E0B12] via-[#1A050A] to-[#24080E] border-2 border-[#DFC59E]/70 shadow-[0_10px_25px_rgba(0,0,0,0.85)] flex flex-col items-center">
        <span
          className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF8E7] leading-none"
          style={{ textShadow: '0 0 20px rgba(255,215,0,0.5)' }}
        >
          {String(value).padStart(2, '0')}
        </span>
        <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-amber-300 font-bold mt-1.5">
          {label}
        </span>
        <span className="font-tamil text-[10px] sm:text-xs text-[#FAF0D7]/75 mt-0.5">
          {tamil}
        </span>
      </div>

      {/* Brass Lamp Base SVG */}
      <svg viewBox="0 0 60 20" fill="none" className="w-16 h-5 text-amber-500 mt-[-4px] z-20">
        <path d="M4 10 C14 18, 46 18, 56 10 C52 6, 42 4, 30 4 C18 4, 8 6, 4 10 Z" fill="#D4AF37" stroke="#FFEAA7" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function VilakkuCountdown() {
  const { date, wedding } = weddingData;
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date.isoWeddingStart));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date.isoWeddingStart));
    }, 1000);
    return () => clearInterval(timer);
  }, [date.isoWeddingStart]);

  const units = [
    { label: 'Days', tamil: 'நாட்கள்', value: timeLeft.days },
    { label: 'Hours', tamil: 'மணி', value: timeLeft.hours },
    { label: 'Minutes', tamil: 'நிமிடங்கள்', value: timeLeft.minutes },
    { label: 'Seconds', tamil: 'நொடிகள்', value: timeLeft.seconds }
  ];

  return (
    <section id="scene-countdown" className="relative min-h-[80vh] w-full py-20 sm:py-28 px-4 sm:px-8 overflow-hidden flex items-center justify-center bg-[#0A0304]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/invitation/lotus-garden-bg.jpg"
          alt="Lotus Garden"
          className="w-full h-full object-cover filter brightness-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0304] via-[#180509]/85 to-[#0A0304]" />
      </div>

      <FloatingPetals count={8} className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C060A] border border-[#DFC59E]/40 mb-3 shadow-md">
            <span className="text-amber-400 text-xs">🪔</span>
            <span className="font-tamil text-xs text-[#DFC59E] font-bold tracking-widest">
              சுபமுகூர்த்த எண்ணுகை
            </span>
            <span className="text-amber-400 text-xs">🪔</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#FFF8E7] font-bold tracking-wide">
            Muhurtham Countdown
          </h2>
          <p className="font-serif italic text-base text-amber-200 mt-1">
            Sunday, 22nd November 2026 • 6:30 AM
          </p>
        </motion.div>

        {/* 4 Brass Diya Lamps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 md:gap-8 justify-center items-center w-full max-w-2xl">
          {units.map((unit) => (
            <BrassDiyaLamp key={unit.label} value={unit.value} label={unit.label} tamil={unit.tamil} />
          ))}
        </div>

        <p className="font-tamil text-xs text-[#DFC59E]/80 mt-12 tracking-widest">
          ❖ மங்கள வாத்தியங்கள் முழங்க மணமக்கள் இல்லறம் தொடங்கும் திருநாள் ❖
        </p>
      </div>
    </section>
  );
}
