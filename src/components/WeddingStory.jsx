import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';

export default function WeddingStory() {
  const { media } = weddingConfig;

  return (
    <section className="py-24 sm:py-32 px-4 max-w-5xl mx-auto">
      {/* Editorial Title */}
      <div className="text-center mb-16 space-y-4">
        <p className="font-serif-en text-xs tracking-[0.35em] uppercase text-[#B49A68] font-semibold">
          The Wedding Story
        </p>
        <h3 className="font-serif-en text-3xl sm:text-5xl text-[#642B35] font-light tracking-wide max-w-2xl mx-auto leading-tight">
          "Every beautiful story deserves a beginning."
        </h3>
        <p className="font-serif-ta text-xl sm:text-2xl text-[#272321]/80 font-light max-w-xl mx-auto">
          "ஒவ்வொரு அழகான கதைக்கும் ஒரு தொடக்கம் உண்டு."
        </p>
        <div className="w-16 h-[1px] bg-[#B49A68]/40 mx-auto mt-4" />
      </div>

      {/* Editorial Visual Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Story Photo 1: Traditional Attire Moment */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative group"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5D8C6] shadow-xl bg-[#FAF5ED] p-2">
            <img
              src={media.storyPhoto1}
              alt="Traditional Tamil Wedding Attire Moment"
              className="w-full h-full object-cover rounded-xl filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#B49A68] font-semibold block">
              தருணம் ஒன்று • CHAPTER ONE
            </span>
            <p className="font-serif-ta text-sm text-[#272321] mt-1">
              மங்களகரமான பட்டு மற்றும் பாரம்பரிய மங்கல ஆடைத் தருணங்கள்
            </p>
          </div>
        </motion.div>

        {/* Story Photo 2: Sacred Rituals / Rings */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group md:mt-12"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5D8C6] shadow-xl bg-[#FAF5ED] p-2">
            <img
              src={media.storyPhoto2}
              alt="Sacred Wedding Rituals and Celebration"
              className="w-full h-full object-cover rounded-xl filter contrast-105 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#B49A68] font-semibold block">
              தருணம் இரண்டு • CHAPTER TWO
            </span>
            <p className="font-serif-ta text-sm text-[#272321] mt-1">
              இரு மனங்கள் இணைந்து புதிய வாழ்வைத் தொடங்கும் புனித வேளை
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
