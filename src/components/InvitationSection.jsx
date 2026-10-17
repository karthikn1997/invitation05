import React from 'react';
import { motion } from 'framer-motion';
import SikkuKolam from './SikkuKolam';
import { weddingConfig } from '../config/wedding';

export default function InvitationSection() {
  const { couple, presentation } = weddingConfig;
  const { brideFirst } = presentation;

  const primary = brideFirst ? couple.bride : couple.groom;
  const secondary = brideFirst ? couple.groom : couple.bride;
  const primaryTitle = brideFirst ? 'மணமகள் | BRIDE' : 'மணமகன் | GROOM';
  const secondaryTitle = brideFirst ? 'மணமகன் | GROOM' : 'மணமகள் | BRIDE';

  return (
    <section className="py-20 sm:py-28 px-3 sm:px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative rounded-3xl overflow-hidden border-2 border-[#C5A880]/60 bg-[#FAF4E8] shadow-[0_10px_40px_rgba(100,24,36,0.12)]"
      >
        {/* Left Side Authentic Silk Saree Zari Border Strip */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 overflow-hidden pointer-events-none z-10 hidden xs:block">
          <img
            src="/images/traditional-bg.png"
            alt="Zari border"
            className="w-[500px] max-w-none h-full object-cover object-left"
          />
        </div>

        {/* Decorative Sikku Kolam on Top-Right Corner */}
        <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none">
          <SikkuKolam size={220} color="#641824" />
        </div>

        {/* Inner Card Content */}
        <div className="p-6 sm:p-14 pl-6 xs:pl-14 sm:pl-28 text-center relative z-20">
          {/* Sacred Traditional Invocation */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-serif-ta text-xl text-[#641824] font-bold">உ</span>
            <span className="text-[#C5A880] text-xs">•</span>
            <span className="font-serif-ta text-xl text-[#641824] font-bold">ஸ்ரீ</span>
          </div>

          <p className="font-serif-ta text-xs sm:text-sm text-[#641824] font-semibold tracking-widest uppercase">
            ஓம் கணபதயே நமஹ • சுபமஸ்து
          </p>

          <p className="font-serif-ta text-xs sm:text-sm text-[#272321]/75 italic mt-1">
            இறையருளுடனும், பெரியோர்களின் நல்லாசியுடனும்...
          </p>

          <div className="w-20 h-[1.5px] bg-[#641824]/30 mx-auto my-3" />

          {/* Main Titles */}
          <h2 className="font-serif-ta text-3xl sm:text-4xl text-[#641824] font-bold tracking-wide">
            திருமண அழைப்பிதழ்
          </h2>
          <p className="font-serif-en text-xs sm:text-sm text-[#641824]/80 tracking-[0.25em] uppercase font-semibold mt-1">
            Wedding Invitation
          </p>

          {/* Traditional Thali Shloka / Blessing */}
          <div className="my-5 p-4 rounded-xl border border-[#C5A880]/40 bg-[#F7EFE2]/70 max-w-lg mx-auto">
            <p className="font-serif-ta text-xs sm:text-sm text-[#641824] leading-relaxed font-semibold">
              "மாங்கல்யம் தந்துனானேனா மம ஜீவன ஹேதுனா<br />
              கண்டே பத்னாமி சுபகே சஞ்சீவ சரதசதம்"
            </p>
            <p className="text-[10px] font-sans-ui text-[#272321]/60 mt-1 uppercase tracking-wider">
              (நூறாண்டு காலம் நல்வாழ்வு வாழ மங்கல நாண் பூட்டும் இனிய வேளை)
            </p>
          </div>

          {/* Couple & Family Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-center max-w-2xl mx-auto">
            {/* Primary Person */}
            <div className="p-6 rounded-2xl bg-[#F7EFE2] border border-[#C5A880]/50 shadow-xs relative">
              <span className="text-[10px] font-sans-ui tracking-[0.25em] text-[#641824] uppercase font-bold block mb-1">
                {primaryTitle}
              </span>
              <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#641824] font-bold">
                {primary.nameTamil}
              </h3>
              <p className="font-serif-en text-base sm:text-lg text-[#272321] font-medium">
                {primary.nameEnglish}
                {primary.qualification && (
                  <span className="text-xs text-[#641824] font-sans-ui ml-1.5 font-normal">
                    {primary.qualification}
                  </span>
                )}
              </p>
              <div className="w-12 h-[1px] bg-[#C5A880]/50 mx-auto my-3" />
              <p className="font-serif-ta text-xs sm:text-sm text-[#272321]/80 leading-relaxed font-medium">
                {primary.parentsTamil}
                <br />
                <span className="text-[11px] text-[#641824] font-normal">{primary.familyDetailsTamil}</span>
              </p>
            </div>

            {/* Secondary Person */}
            <div className="p-6 rounded-2xl bg-[#F7EFE2] border border-[#C5A880]/50 shadow-xs relative">
              <span className="text-[10px] font-sans-ui tracking-[0.25em] text-[#641824] uppercase font-bold block mb-1">
                {secondaryTitle}
              </span>
              <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#641824] font-bold">
                {secondary.nameTamil}
              </h3>
              <p className="font-serif-en text-base sm:text-lg text-[#272321] font-medium">
                {secondary.nameEnglish}
                {secondary.qualification && (
                  <span className="text-xs text-[#641824] font-sans-ui ml-1.5 font-normal">
                    {secondary.qualification}
                  </span>
                )}
              </p>
              <div className="w-12 h-[1px] bg-[#C5A880]/50 mx-auto my-3" />
              <p className="font-serif-ta text-xs sm:text-sm text-[#272321]/80 leading-relaxed font-medium">
                {secondary.parentsTamil}
                <br />
                <span className="text-[11px] text-[#641824] font-normal">{secondary.familyDetailsTamil}</span>
              </p>
            </div>
          </div>

          {/* Bottom Ceremonial Invitation Paragraph */}
          <div className="max-w-xl mx-auto text-[#272321]/85 space-y-2 mt-6">
            <p className="font-serif-ta text-xs sm:text-sm leading-relaxed font-normal">
              நிகழும் மங்களகரமான சுபகிருது வருடம், எங்கள் இல்லத் திருமண விழாவில் தாங்களும் தங்கள் குடும்பத்தினரும் வருகை தந்து மணமக்களை வாழ்த்தி, விழாவினை சிறப்பித்து அருள அன்போடு வேண்டுகிறோம்.
            </p>
            <p className="font-serif-en text-xs italic text-[#272321]/60">
              We cordially request your gracious presence and heartfelt blessings on this auspicious union.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
