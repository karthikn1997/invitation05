import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

export default function FamilyBlessings() {
  const { parents, messages, couple } = weddingData;

  return (
    <section id="scene-families" className="relative min-h-[85vh] w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0C0406] flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/temple-corridor.jpg"
          alt="Temple Corridor"
          className="w-full h-full object-cover filter brightness-20 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0406] via-[#1D060B]/85 to-[#0C0406]" />
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] p-6 sm:p-12 md:p-16 bg-[#FDFBF7] text-[#241315] border-2 border-[#C8A962] shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Inner Golden Border */}
          <div className="pointer-events-none absolute inset-3 rounded-[28px] border border-[#C8A962]/40 border-dashed" aria-hidden="true" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#641824] text-[#F7EFE2] shadow-md mb-3">
              <span className="text-amber-300 text-xs">🪔</span>
              <span className="font-tamil text-xs font-bold tracking-widest">
                இரு இல்லங்களின் இனிய அழைப்பு
              </span>
              <span className="text-amber-300 text-xs">🪔</span>
            </div>
            <h2 className="font-tamil text-2xl sm:text-3xl text-[#641824] font-bold">
              பெரியோரின் ஆசிர்வாதம்
            </h2>
            <p className="font-serif italic text-sm text-[#8A6729] mt-1">
              With the Love and Blessings of our Families
            </p>
          </div>

          {/* Poetic Tamil Blessing Verse */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F2E7] border border-[#C8A962]/40 text-center my-6">
            <p className="font-tamil text-base sm:text-lg text-[#641824] font-bold leading-relaxed">
              "{messages.verse.line1}
              <br />
              {messages.verse.line2}"
            </p>
            <p className="font-serif italic text-xs text-[#8A6729] mt-2">- {messages.verse.source}</p>
          </div>

          {/* Both Families Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 pt-6 border-t border-b border-[#C8A962]/30 pb-8 text-center sm:text-left">
            {/* Groom's Family */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#C8A962]/30 shadow-xs">
              <span className="inline-block px-3 py-1 rounded-full bg-[#641824] text-[#F7EFE2] text-[11px] font-tamil font-bold mb-3">
                மணமகன் வீட்டார் (Groom's Family)
              </span>
              <h3 className="font-tamil text-lg sm:text-xl text-[#641824] font-bold mb-1">
                {parents.groomParentsTamil}
              </h3>
              <p className="font-serif text-sm text-[#523B3E] font-medium">
                {parents.groomParentsEnglish}
              </p>
              <p className="font-serif text-xs text-[#8A6729] mt-1">
                {parents.groomCity}
              </p>
            </div>

            {/* Bride's Family */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#C8A962]/30 shadow-xs">
              <span className="inline-block px-3 py-1 rounded-full bg-[#641824] text-[#F7EFE2] text-[11px] font-tamil font-bold mb-3">
                மணமகள் வீட்டார் (Bride's Family)
              </span>
              <h3 className="font-tamil text-lg sm:text-xl text-[#641824] font-bold mb-1">
                {parents.brideParentsTamil}
              </h3>
              <p className="font-serif text-sm text-[#523B3E] font-medium">
                {parents.brideParentsEnglish}
              </p>
              <p className="font-serif text-xs text-[#8A6729] mt-1">
                {parents.brideCity}
              </p>
            </div>
          </div>

          {/* Warm Request Note */}
          <div className="text-center space-y-2 mt-4 px-2 sm:px-6">
            <p className="font-tamil text-sm sm:text-base text-[#641824] font-bold leading-relaxed">
              "{messages.invitationNote}"
            </p>
            <p className="font-cinzel text-xs text-[#8A6729] tracking-widest uppercase font-semibold mt-2">
              {messages.compliments}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
