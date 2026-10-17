import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Clock, Calendar, MapPin } from 'lucide-react';

export default function AuspiciousSchedule() {
  const { reception, wedding } = weddingData;

  return (
    <section id="scene-reception-wedding" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0C0406]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/temple-hall.jpg"
          alt="Temple Hall"
          className="w-full h-full object-cover filter brightness-20 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0406] via-[#1A050A]/80 to-[#0C0406]" />
      </div>

      <div className="relative z-20 max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A050A] border border-[#DFC59E]/40 mb-3 shadow-md">
            <span className="text-amber-400 text-xs">🪔</span>
            <span className="font-tamil text-xs text-[#DFC59E] font-bold tracking-widest">
              மங்களத் திருவிழா சுப நிகழ்வுகள்
            </span>
            <span className="text-amber-400 text-xs">🪔</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#FFF8E7] font-bold tracking-wide">
            Wedding Ceremonies
          </h2>
          <p className="font-serif italic text-base text-amber-200 mt-1">
            Reception & Auspicious Muhurtham
          </p>
        </motion.div>

        {/* Dual Grand Pavilions (Reception & Muhurtham) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* RECEPTION PAVILION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[36px] p-8 sm:p-10 bg-gradient-to-b from-[#22070D]/95 via-[#160408]/90 to-[#1F060B]/95 border-2 border-[#DFC59E]/60 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute inset-2.5 rounded-[28px] border border-[#DFC59E]/25" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#3D0E17] border border-[#DFC59E]/40 text-amber-300 text-xs font-tamil font-bold">
                  {reception.tamilTitle}
                </span>
                <span className="text-amber-300 text-xl">🌙</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFF8E7] font-bold tracking-wider mb-1">
                {reception.title}
              </h3>
              <p className="font-tamil text-sm text-[#DFC59E] mb-6">
                மங்கள மாலை வரவேற்பு நல்நிகழ்ச்சி
              </p>

              <div className="p-5 rounded-2xl bg-[#0F0205]/90 border border-[#DFC59E]/30 space-y-2 mb-6 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-cinzel font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>{reception.dateLine}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#FFF8E7] text-base font-serif font-medium">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{reception.time}</span>
                </div>
                <p className="font-tamil text-xs text-amber-300/90 font-medium">
                  ({reception.tamilTime})
                </p>
              </div>

              <p className="font-serif text-sm text-[#FAF0D7]/85 leading-relaxed text-center">
                {reception.description}
              </p>
            </div>

            <div className="mt-8 text-center pt-4 border-t border-[#DFC59E]/20">
              <span className="text-amber-400 text-sm">🪔</span>
              <p className="font-serif italic text-xs text-[#DFC59E]/80 mt-1">
                Celebration, delightful dinner, and musical feast
              </p>
            </div>
          </motion.div>

          {/* SUBAMUHURTHAM PAVILION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[36px] p-8 sm:p-10 bg-gradient-to-b from-[#350C14]/95 via-[#22060C]/90 to-[#2E0A11]/95 border-2 border-amber-400/80 shadow-[0_20px_60px_rgba(255,215,0,0.18)] flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute inset-2.5 rounded-[28px] border border-amber-300/35" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-[#FFF8E7] text-xs font-tamil font-bold shadow-md">
                  {wedding.tamilTitle}
                </span>
                <span className="text-amber-300 text-xl">☀️</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFF8E7] font-bold tracking-wider mb-1">
                {wedding.title}
              </h3>
              <p className="font-tamil text-sm text-amber-200 font-semibold mb-6">
                மங்கள மாங்கல்ய தாரண சுபவேளை ({wedding.lagnam})
              </p>

              <div className="p-5 rounded-2xl bg-[#120306]/90 border border-amber-400/40 space-y-2 mb-6 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-cinzel font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>{wedding.dateLine}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#FFF8E7] text-base font-serif font-medium">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{wedding.time}</span>
                </div>
                <p className="font-tamil text-xs text-amber-300 font-bold">
                  ({wedding.tamilTime})
                </p>
              </div>

              <p className="font-serif text-sm text-[#FAF0D7]/90 leading-relaxed text-center">
                {wedding.description}
              </p>
            </div>

            <div className="mt-8 text-center pt-4 border-t border-[#DFC59E]/20">
              <span className="text-amber-300 text-sm">✨</span>
              <p className="font-serif italic text-xs text-amber-200/90 mt-1">
                Auspicious Vedic rituals, Thirumangalyam solemnization & Sambanthi Virunthu
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
