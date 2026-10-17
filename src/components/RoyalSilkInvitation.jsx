import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';

export default function RoyalSilkInvitation() {
  const { couple, couplePhotos, date } = weddingData;

  return (
    <section id="scene-invitation" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0A0304] flex items-center justify-center">
      {/* Background Ambience: Subtle Palace Pillars & Warm Radial Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/invitation/kalyana-mandapam-palace.jpg"
          alt="Palace Ambience"
          className="w-full h-full object-cover filter brightness-35 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0304] via-[#2A060C]/80 to-[#0A0304]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,_rgba(255,215,100,0.2)_0%,_transparent_75%)]" />
      </div>

      <FloatingPetals count={9} className="absolute inset-0 z-10" />

      {/* THE ROYAL KANCHIPURAM SILK WEDDING SCROLL */}
      <div className="relative z-20 max-w-3xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] p-6 sm:p-12 md:p-16 bg-gradient-to-b from-[#4A0E17] via-[#33080F] to-[#400B13] border-4 border-[#DFC59E] shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-center overflow-hidden"
        >
          {/* Authentic Gold Zari Border Inset */}
          <div className="pointer-events-none absolute inset-3 rounded-[32px] border-2 border-[#DFC59E]/40 border-dashed" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-5 rounded-[26px] border border-[#DFC59E]/20" aria-hidden="true" />

          {/* Corner Traditional Silk Zari Floral Motifs */}
          <div className="pointer-events-none absolute top-4 left-4 text-[#DFC59E]/70 text-lg">❖</div>
          <div className="pointer-events-none absolute top-4 right-4 text-[#DFC59E]/70 text-lg">❖</div>
          <div className="pointer-events-none absolute bottom-4 left-4 text-[#DFC59E]/70 text-lg">❖</div>
          <div className="pointer-events-none absolute bottom-4 right-4 text-[#DFC59E]/70 text-lg">❖</div>

          {/* Auspicious Invocation: Sri & Ganesha */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#DFC59E] bg-[#220509] flex items-center justify-center shadow-[0_0_20px_rgba(223,197,158,0.5)] mb-3">
              <span className="font-tamil text-3xl text-amber-300 font-bold drop-shadow">ஸ்ரீ</span>
            </div>
            <p className="font-tamil text-xs text-[#DFC59E] font-bold tracking-widest uppercase">
              ஓம் ஸ்ரீ மஹா கணபதயே நமஹ
            </p>
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC59E] to-transparent mt-2" />
          </div>

          {/* Heading */}
          <p className="font-script text-4xl sm:text-6xl text-amber-200 leading-none mb-2 drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]">
            Royal Wedding Invitation
          </p>
          <h2 className="font-tamil text-2xl sm:text-3xl text-[#FFF8E7] font-bold tracking-wide mb-6">
            திருக்கல்யாண அழைப்பிதழ்
          </h2>

          {/* Hero Couple Portrait with Royal Gold Frame */}
          <div className="my-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-t-[160px] rounded-b-[32px] p-2 bg-gradient-to-tr from-[#9B783E] via-[#FFDF9E] to-[#6E1C16] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="relative w-full h-full rounded-t-[152px] rounded-b-[26px] overflow-hidden bg-[#180507]">
                <img
                  src={couplePhotos.photo1Hero.src}
                  alt={couplePhotos.photo1Hero.alt}
                  className="w-full h-full object-cover object-[50%_24%] filter brightness-105 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0407]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <p className="font-cinzel text-lg sm:text-xl text-[#FFF8E7] font-bold tracking-widest drop-shadow">
                    SIVA & RUBA
                  </p>
                  <p className="font-cinzel text-xs text-amber-300 tracking-[0.25em] uppercase mt-0.5 font-semibold">
                    22 • 11 • 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Couple Names Editorial Display */}
          <div className="space-y-3 mt-6">
            <div>
              <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl text-[#FFF8E7] font-bold tracking-tight">
                {couple.groomName}{' '}
                <span className="font-serif italic text-base sm:text-2xl text-amber-300 font-normal">
                  {couple.groomDegree}
                </span>
              </h3>
              <p className="font-tamil text-sm text-[#DFC59E] mt-0.5">
                ({couple.groomOccupationTamil})
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-1">
              <span className="h-[1px] w-12 sm:w-20 bg-[#DFC59E]/60" />
              <span className="font-script text-3xl sm:text-4xl text-amber-300">weds</span>
              <span className="h-[1px] w-12 sm:w-20 bg-[#DFC59E]/60" />
            </div>

            <div>
              <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl text-[#FFF8E7] font-bold tracking-tight">
                {couple.brideName}{' '}
                <span className="font-serif italic text-base sm:text-2xl text-amber-300 font-normal">
                  {couple.brideDegree}
                </span>
              </h3>
              <p className="font-tamil text-sm text-[#DFC59E] mt-0.5">
                ({couple.brideOccupationTamil})
              </p>
            </div>
          </div>

          {/* Date & Location Footer */}
          <div className="mt-8 pt-6 border-t border-[#DFC59E]/30 flex flex-col items-center">
            <p className="font-cinzel text-sm sm:text-base text-amber-200 font-bold tracking-[0.2em] uppercase">
              {date.englishDate} • Sri Murugan Thirumana Mandapam, Pollachi
            </p>
            <p className="font-tamil text-xs text-[#DFC59E]/85 mt-2">
              இரு மனங்கள் இணையும் மங்கள நன்நாளில் அன்புடன் அழைக்கின்றோம்
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
