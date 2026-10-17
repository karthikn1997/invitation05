import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';
import { RitualIcon } from './Crests';
import { Sparkles, Calendar, Clock } from 'lucide-react';

/* ── Day Header Badge ──────────────────────────────────────────── */
function DaySectionHeader({ label, sub, icon }) {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF9] to-[#FFF9E6] border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.22)]">
        <span className="text-base">{icon}</span>
        <span className="font-tamil font-black text-sm sm:text-base text-[#7A1C18] tracking-wide">
          {label}
        </span>
        <span className="text-base">{icon}</span>
      </div>
      {sub && (
        <span className="text-[11px] font-cinzel font-bold text-[#8C6514] mt-1.5 tracking-widest uppercase">
          {sub}
        </span>
      )}
    </div>
  );
}

/* ── Traditional Timeline Event Item ─────────────────────────────── */
function TimelineEventItem({ item, index, isLast, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start gap-4 sm:gap-6 group"
    >
      {/* ── Left Timeline Spine & Node ── */}
      <div className="relative flex flex-col items-center self-stretch">
        {/* Sacred Glowing Node */}
        <div
          className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${
            highlight
              ? 'bg-gradient-to-br from-[#A32026] to-[#7A1C18] border-2 border-[#FFEAA7] shadow-[0_0_20px_rgba(163,32,38,0.5)] scale-110'
              : 'bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(180,130,20,0.2)]'
          }`}
        >
          {highlight ? (
            <Sparkles className="w-5 h-5 text-[#FFD700] animate-pulse" />
          ) : (
            <div className="scale-90">
              <RitualIcon id={item.id} />
            </div>
          )}
        </div>

        {/* Connecting Gold Thread Spine */}
        {!isLast && (
          <div className="w-[2px] flex-1 my-1 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-[#D4AF37]/20" />
        )}
      </div>

      {/* ── Right Event Content Card ── */}
      <div className="flex-1 pb-6 sm:pb-8">
        <div
          className={`relative rounded-3xl p-5 sm:p-6 transition-all ${
            highlight
              ? 'bg-gradient-to-br from-[#FFF9E6] via-[#FFFDF9] to-[#FFF9E6] border-2 border-[#D4AF37] shadow-[0_12px_32px_rgba(212,175,55,0.32)] ring-2 ring-[#D4AF37]/30'
              : 'bg-[#FFFDF9]/95 border-2 border-[#D4AF37]/60 shadow-[0_6px_22px_rgba(180,130,20,0.12)] hover:border-[#D4AF37]'
          }`}
        >
          {/* Top Bar: Time Badge & Highlight Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-tamil font-black shadow-sm ${
                highlight
                  ? 'bg-[#7A1C18] text-[#FFFDF9] border border-[#F5D98A]'
                  : 'bg-[#FAF6EE] text-[#7A1C18] border border-[#D4AF37]'
              }`}
            >
              <Clock className={`w-3.5 h-3.5 ${highlight ? 'text-[#FFD700]' : 'text-[#B8860B]'}`} />
              <span>{item.tamilTime}</span>
            </div>

            {highlight && (
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#A32026]/10 border border-[#A32026] text-[#A32026] font-display text-[10px] uppercase font-bold tracking-wider">
                ★ Main Ceremony
              </span>
            )}
          </div>

          {/* Event Title */}
          <h3
            className={`font-tamil text-lg sm:text-xl font-black leading-snug ${
              highlight ? 'text-[#7A1C18]' : 'text-[#24070A]'
            }`}
          >
            {item.tamilTitle}
          </h3>

          {/* Subtitle / Ritual details */}
          {item.tamilSubtitle && (
            <p className="font-tamil text-xs sm:text-sm mt-1 text-[#8C6514] font-bold">
              • {item.tamilSubtitle}
            </p>
          )}

          {/* Traditional Decorative Corner Ornament */}
          <span className="pointer-events-none absolute top-2 right-2 text-[#D4AF37]/40 text-xs select-none">
            𑁍
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventSchedule() {
  const { events } = weddingData;

  const satItems = events.saturday.items;
  const sunItems = events.sunday.items;

  return (
    <section
      id="scene-journey"
      className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden bg-[#FAF6EE]"
    >
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Sandalwood Ambient Wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255,253,249,0.8) 0%, rgba(250,246,238,0.96) 100%)',
        }}
      />

      <div className="relative z-20 max-w-xl w-full mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#D4AF37] mb-3 shadow-[0_2px_12px_rgba(212,175,55,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-bold tracking-wider">
              {events.sectionTitleTamil}
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-[#7A1C18] tracking-wide">
            Sacred Wedding Timeline
          </h2>
          <p className="text-[#8C6514] text-xs font-serif italic mt-1 font-bold tracking-wider">
            21 — 22 November 2026 • Pollachi
          </p>
        </motion.div>

        {/* ── Saturday Events Section ── */}
        <div className="relative mb-6">
          <DaySectionHeader
            label="சனிக்கிழமை · 21 நவம்பர் 2026"
            sub="Day 1 • Pre-Wedding Ceremonies & Reception"
            icon="🌙"
          />

          <div className="relative pl-1 sm:pl-3">
            {satItems.map((item, i) => (
              <TimelineEventItem
                key={item.id}
                item={item}
                index={i}
                isLast={i === satItems.length - 1}
                highlight={item.id === 'varaverpu'}
              />
            ))}
          </div>
        </div>

        {/* ── Sunday Events Section ── */}
        <div className="relative mt-10">
          <DaySectionHeader
            label="ஞாயிற்றுக்கிழமை · 22 நவம்பர் 2026"
            sub="Day 2 • Auspicious Muhurtham & Feast"
            icon="☀️"
          />

          <div className="relative pl-1 sm:pl-3">
            {sunItems.map((item, i) => (
              <TimelineEventItem
                key={item.id}
                item={item}
                index={satItems.length + i}
                isLast={i === sunItems.length - 1}
                highlight={item.id === 'subamuhurtham'}
              />
            ))}
          </div>
        </div>

        {/* ── Footer Blessing Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 text-center p-6 sm:p-7 rounded-3xl bg-[#FFFDF9]/95 border-2 border-[#D4AF37] shadow-[0_12px_32px_rgba(180,130,20,0.18)] flex flex-col items-center"
        >
          <span className="text-xl mb-2">🪔</span>
          <p className="font-tamil text-base sm:text-lg text-[#7A1C18] font-black mb-1">
            {events.footerWelcomeHeader}
          </p>
          <p className="font-tamil text-xs sm:text-sm text-[#4A2612] font-semibold italic">
            &quot;{events.footerWelcomeSub}&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

