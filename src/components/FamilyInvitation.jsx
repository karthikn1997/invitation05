import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

export default function FamilyInvitation() {
  const { groom, bride } = weddingConfig;

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 sm:p-14 rounded-2xl bg-[#FAF6EF] border border-[#D9CCB8] relative"
      >
        <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B39A65] font-semibold">
          With Love, We Invite You
        </span>
        <h2 className="font-serif-ta text-2xl sm:text-3xl text-[#642A32] font-semibold mt-1">
          அன்புடன் அழைக்கிறோம்
        </h2>

        <div className="w-12 h-[1px] bg-[#B39A65]/40 mx-auto my-5" />

        <p className="font-serif-ta text-sm sm:text-base text-[#262321]/85 leading-relaxed max-w-xl mx-auto font-light">
          "எங்கள் இல்லத் திருமண விழாவில் தாங்களும் தங்கள் குடும்பத்தினரும் கலந்து கொண்டு மணமக்களை வாழ்த்தி, விழாவைச் சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்."
        </p>

        <p className="font-serif-en text-xs sm:text-sm text-[#262321]/60 italic mt-3 max-w-lg mx-auto">
          "Your gracious presence and blessings would make our celebration even more special."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-lg mx-auto text-left">
          <div className="p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
            <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#B39A65] font-semibold block mb-1">
              மணமகன் இல்லத்தார்
            </span>
            <p className="font-serif-ta text-sm font-semibold text-[#642A32]">
              {groom.parentsTamil}
            </p>
            <p className="font-serif-en text-xs text-[#262321]/70 mt-0.5">
              {groom.parentsEnglish}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
            <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#B39A65] font-semibold block mb-1">
              மணமகள் இல்லத்தார்
            </span>
            <p className="font-serif-ta text-sm font-semibold text-[#642A32]">
              {bride.parentsTamil}
            </p>
            <p className="font-serif-en text-xs text-[#262321]/70 mt-0.5">
              {bride.parentsEnglish}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
