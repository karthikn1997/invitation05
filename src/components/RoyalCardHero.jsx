import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';

export default function RoyalCardHero() {
  const { couple, couplePhotos, date, venue } = weddingData;

  return (
    <section id="scene-invitation" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0C0406] flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/venue-mandap.jpg"
          alt="Mandapam Ambience"
          className="w-full h-full object-cover filter brightness-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0406] via-[#22070D]/85 to-[#0C0406]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,_rgba(255,215,100,0.2)_0%,_transparent_75%)]" />
      </div>

      <FloatingPetals count={8} className="absolute inset-0 z-10" />

      {/* LUXURY IVORY & BURGUNDY INVITATION PLAQUE */}
      <div className="relative z-20 max-w-3xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] p-6 sm:p-12 md:p-16 bg-[#FDFBF7] text-[#261518] border-4 border-[#C8A962] shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-center overflow-hidden"
        >
          {/* Authentic Gold Zari Inner Border */}
          <div className="pointer-events-none absolute inset-3 rounded-[32px] border-2 border-[#C8A962]/50 border-dashed" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-5 rounded-[26px] border border-[#641824]/20" aria-hidden="true" />

          {/* Corner Ornamental Motifs */}
          <div className="pointer-events-none absolute top-4 left-4 text-[#C8A962] text-xl">❖</div>
          <div className="pointer-events-none absolute top-4 right-4 text-[#C8A962] text-xl">❖</div>
          <div className="pointer-events-none absolute bottom-4 left-4 text-[#C8A962] text-xl">❖</div>
          <div className="pointer-events-none absolute bottom-4 right-4 text-[#C8A962] text-xl">❖</div>

          {/* Sacred Top Invocation */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#C8A962] bg-[#641824] flex items-center justify-center shadow-[0_4px_16px_rgba(100,24,36,0.35)] mb-3">
              <span className="font-tamil text-3xl text-[#F7EFE2] font-bold drop-shadow">ஸ்ரீ</span>
            </div>
            <p className="font-tamil text-xs text-[#641824] font-bold tracking-widest uppercase">
              ஓம் ஸ்ரீ மஹா கணபதயே நமஹ • சுபமஸ்து
            </p>
            <p className="font-serif italic text-xs text-[#8A6729] mt-0.5">
              With the blessings of Almighty & our beloved elders
            </p>
            <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A962] to-transparent mt-2" />
          </div>

          <h2 className="font-tamil text-2xl sm:text-3xl text-[#641824] font-bold tracking-wide mb-1">
            திருமண அழைப்பிதழ்
          </h2>
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8A6729] font-semibold mb-6">
            The Royal Wedding Invitation
          </p>

          {/* Royal Dummy Couple Portrait in Arched Gold Frame */}
          <div className="my-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] rounded-t-[160px] rounded-b-[32px] p-2 bg-gradient-to-tr from-[#9E783B] via-[#DFC59E] to-[#641824] shadow-[0_15px_45px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-full rounded-t-[152px] rounded-b-[26px] overflow-hidden bg-[#180507]">
                <img
                  src={couplePhotos.photo1Hero.src}
                  alt={couplePhotos.photo1Hero.alt}
                  className="w-full h-full object-cover object-[50%_20%] filter brightness-105 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140306]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <p className="font-cinzel text-lg sm:text-xl text-[#FFF8E7] font-bold tracking-widest drop-shadow">
                    {couple.groomName.split(' ')[1]} & {couple.brideName.split(' ')[1]}
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
              <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl text-[#641824] font-bold tracking-tight">
                {couple.groomName}{' '}
                <span className="font-serif italic text-base sm:text-2xl text-[#8A6729] font-normal">
                  {couple.groomDegree}
                </span>
              </h3>
              <p className="font-tamil text-sm text-[#4A3236] mt-0.5">
                ({couple.groomTamilName})
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-1">
              <span className="h-[1.5px] w-12 sm:w-24 bg-[#C8A962]" />
              <span className="font-script text-3xl sm:text-4xl text-[#8A6729]">weds</span>
              <span className="h-[1.5px] w-12 sm:w-24 bg-[#C8A962]" />
            </div>

            <div>
              <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl text-[#641824] font-bold tracking-tight">
                {couple.brideName}{' '}
                <span className="font-serif italic text-base sm:text-2xl text-[#8A6729] font-normal">
                  {couple.brideDegree}
                </span>
              </h3>
              <p className="font-tamil text-sm text-[#4A3236] mt-0.5">
                ({couple.brideTamilName})
              </p>
            </div>
          </div>

          {/* Date & Location Footer */}
          <div className="mt-8 pt-6 border-t border-[#C8A962]/40 flex flex-col items-center">
            <p className="font-cinzel text-sm sm:text-base text-[#641824] font-bold tracking-[0.18em] uppercase">
              {date.englishDate}
            </p>
            <p className="font-serif text-sm text-[#8A6729] font-semibold mt-0.5">
              {venue.name}, Pollachi
            </p>
            <p className="font-tamil text-xs text-[#523C40] mt-3">
              இரு மனங்கள் இணையும் மங்கள நன்நாளில் அன்புடன் அழைக்கின்றோம்
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
