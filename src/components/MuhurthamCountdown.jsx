import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';
import SikkuKolam from './SikkuKolam';
import { SacredKalasam } from './Crests';
import { Sparkles, Calendar, Clock, Bell, MapPin } from 'lucide-react';

function calculateTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

/* ── Traditional Hanging Toranam & Mango Leaves Garland ── */
function TempleToranamGarland() {
  return (
    <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 overflow-hidden pointer-events-none z-10 opacity-70">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 40">
        <defs>
          <linearGradient id="toranamGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9945A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#C9945A" />
          </linearGradient>
        </defs>
        {/* Main curved thread */}
        <path
          d="M 0,8 Q 75,26 150,8 Q 225,26 300,8 Q 375,26 450,8 Q 525,26 600,8 Q 675,26 750,8 Q 825,26 900,8 Q 975,26 1050,8 Q 1125,26 1200,8"
          fill="none"
          stroke="url(#toranamGold)"
          strokeWidth="2.5"
        />
        {/* Mango Leaf and Marigold Drops */}
        {[75, 225, 375, 525, 675, 825, 975, 1125].map((cx, idx) => (
          <g key={idx}>
            <circle cx={cx} cy={24} r="3" fill="#E67E22" />
            <path
              d={`M ${cx - 6},24 Q ${cx},36 ${cx + 6},24 Z`}
              fill="#2E7D32"
              opacity="0.85"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Glowing Brass Diya with Animated Sacred Flame ── */
function DiyaFlameGlow({ isSeconds }) {
  return (
    <div className="relative flex flex-col items-center mb-1 sm:mb-2 pointer-events-none">
      {/* Ambient flame halo */}
      <motion.div
        animate={{
          scale: [0.85, 1.25, 0.9, 1.2, 0.85],
          opacity: [0.45, 0.9, 0.5, 0.85, 0.45],
        }}
        transition={{
          duration: isSeconds ? 1.0 : 2.0,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-3 sm:-top-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-radial from-[#FFE685]/80 via-[#FF9E2C]/35 to-transparent blur-md"
      />
      {/* Teardrop flame */}
      <motion.div
        animate={{
          scaleY: [1, 1.3, 0.92, 1.25, 1],
          scaleX: [1, 0.86, 1.08, 0.88, 1],
          rotate: isSeconds ? [-2, 2, -2] : [-1, 1, -1],
        }}
        transition={{
          duration: isSeconds ? 0.9 : 1.7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-2.5 sm:w-3.5 h-4 sm:h-5 rounded-full bg-gradient-to-t from-[#E65100] via-[#FFB300] to-[#FFFDE7] shadow-[0_0_12px_#FFD043]"
      />
      {/* Brass Diya Plate Base */}
      <div className="w-6 sm:w-8 h-1 rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mt-0.5 shadow-sm" />
    </div>
  );
}

/* ── Royal Temple Arch Medallion Clock Dial ── */
function TempleCountdownPlaque({ value, label, tamil, index, isSeconds }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center group"
    >
      {/* Diya Flame sitting atop each dial */}
      <DiyaFlameGlow isSeconds={isSeconds} />

      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#D4AF37]/15 blur-xl group-hover:bg-[#D4AF37]/25 transition-all pointer-events-none" />

      {/* Ornate Arch Dial Frame */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[130px] rounded-2xl sm:rounded-3xl p-2 sm:p-3 flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-[0_10px_28px_rgba(180,130,20,0.18)] transition-transform duration-300 group-hover:-translate-y-1">
        
        {/* Subtle rotating inner dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35 + index * 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-1 sm:inset-1.5 rounded-xl sm:rounded-2xl pointer-events-none"
          style={{
            border: '1px dashed rgba(212,175,55,0.45)',
          }}
        />

        {/* Ornate Corner Accents */}
        <span className="absolute top-1 left-1.5 text-[8px] sm:text-[10px] text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
        <span className="absolute top-1 right-1.5 text-[8px] sm:text-[10px] text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
        <span className="absolute bottom-1 left-1.5 text-[8px] sm:text-[10px] text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
        <span className="absolute bottom-1 right-1.5 text-[8px] sm:text-[10px] text-[#D4AF37]/60 pointer-events-none select-none">❖</span>

        {/* Counter Number */}
        <div className="relative z-10 flex-1 flex items-center justify-center pt-1">
          <span
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black leading-none text-[#7A1C18] tracking-tight"
            style={{
              textShadow: '0 2px 10px rgba(180,130,20,0.3)',
            }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>

        {/* Labels Container with Gold Divider */}
        <div className="relative z-10 w-full flex flex-col items-center pt-1 border-t border-[#D4AF37]/30 pb-0.5">
          {/* English Unit */}
          <span className="font-cinzel text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8C6514] font-black leading-tight">
            {label}
          </span>

          {/* Tamil Unit */}
          <span className="font-tamil text-[10px] sm:text-xs text-[#24070A] font-bold leading-tight mt-0.5">
            {tamil}
          </span>
        </div>

        {/* Live Second Pulsing Indicator for Seconds Plaque */}
        {isSeconds && (
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C62828] shadow-[0_0_6px_#C62828]"
          />
        )}
      </div>
    </motion.div>
  );
}

export default function MuhurthamCountdown() {
  const { date, wedding, family } = weddingData;
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date.isoWeddingStart));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date.isoWeddingStart));
    }, 1000);
    return () => clearInterval(timer);
  }, [date.isoWeddingStart]);

  const units = [
    { label: 'Days', tamil: 'நாட்கள்', value: timeLeft.days, isSeconds: false },
    { label: 'Hours', tamil: 'மணி', value: timeLeft.hours, isSeconds: false },
    { label: 'Minutes', tamil: 'நிமிடங்கள்', value: timeLeft.minutes, isSeconds: false },
    { label: 'Seconds', tamil: 'நொடிகள்', value: timeLeft.seconds, isSeconds: true },
  ];

  /* ── Google Calendar URL Generator ── */
  const makeGoogleCalendarUrl = () => {
    const { couple, venue } = weddingData;
    const title = encodeURIComponent(`${couple?.groomName || 'Karthik'} & ${couple?.brideName || 'Priyanka'} Wedding - சுபமுகூர்த்தம்`);
    const details = encodeURIComponent(
      `மங்களகரமான சுபமுகூர்த்த நல்வேளை: ${couple?.groomName} & ${couple?.brideName} திருமண விழா. ${venue?.tamilName || 'ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மண்டபம்'}, ${venue?.address?.city || 'சென்னை'}.`
    );
    const location = encodeURIComponent(venue?.address?.fullAddress || venue?.name || '');
    // 2026-12-12 06:30 AM to 08:00 AM IST (UTC: 20261212T010000Z to 20261212T023000Z)
    const dates = '20261212T010000Z/20261212T023000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="scene-countdown"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]"
    >
      {/* Decorative Top Toranam */}
      <TempleToranamGarland />

      {/* Floating Petals */}
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Sacred Watermark Sikku Kolam */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] z-0">
        <SikkuKolam size={460} color="#7A1C18" />
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-10 flex flex-col items-center"
        >
          {/* Sacred Pill Badge with Diya Emojis */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF9] to-[#FFF9E6] border-2 border-[#D4AF37] mb-3.5 shadow-[0_4px_16px_rgba(212,175,55,0.22)]">
            <span className="text-sm">🪔</span>
            <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-wider">
              சுபமுகூர்த்த நல்வேளை
            </span>
            <span className="text-sm">🪔</span>
          </div>

          {/* Main Title */}
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#24070A] leading-tight">
            Auspicious Countdown
          </h2>
          
          {/* Tamil Subheading */}
          <span className="font-tamil text-sm sm:text-base text-[#7A1C18] font-bold mt-1 tracking-wide">
            மணவிழா நன்னாள் எதிர்நோக்கி...
          </span>

          {/* Golden Divider Line with Floral Centerpiece */}
          <div className="flex items-center justify-center gap-3 w-48 sm:w-64 my-2.5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <span className="text-[#8C6514] text-xs">✦ ॐ ✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </div>

          {/* Date & Muhurtham Timing */}
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6514] font-bold tracking-wider">
            Sunday, 22nd November 2026 • 6:30 AM – 8:00 AM
          </p>
        </motion.div>

        {/* ── Centerpiece 4 Majestic Temple Arch Countdown Dials ── */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-5 md:gap-6 w-full max-w-xl mx-auto mb-8 sm:mb-10">
          {units.map((unit, idx) => (
            <TempleCountdownPlaque
              key={unit.label}
              value={unit.value}
              label={unit.label}
              tamil={unit.tamil}
              index={idx}
              isSeconds={unit.isSeconds}
            />
          ))}
        </div>

        {/* ── Interactive Action Buttons: Add to Calendar & Venue Location ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Add to Google Calendar Button */}
          <a
            href={makeGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8C1D18] via-[#A32026] to-[#7A1C18] text-[#FFF9E6] border border-[#D4AF37] shadow-[0_4px_16px_rgba(163,32,38,0.35)] hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-bold tracking-wide cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            <span>Add to Calendar</span>
            <span className="text-white/60">•</span>
            <span className="font-tamil text-xs">நாள்காட்டியில் சேர்</span>
          </a>

          {/* Quick Mandapam Venue Jump Link */}
          <a
            href="#scene-venue"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] text-[#7A1C18] border-2 border-[#D4AF37] shadow-sm hover:bg-[#FFF9E6] hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-bold tracking-wide cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-tamil text-xs sm:text-sm">மண்டபம் வழித்தடம்</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
