import React from 'react';
import { motion } from 'framer-motion';

export default function TwoFamilies() {
  return (
    <section className="py-20 sm:py-28 px-4 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-12 px-6"
      >
        {/* Subtle Kolam Linework Animation */}
        <div className="flex justify-center mb-6">
          <svg
            width="56"
            height="40"
            viewBox="0 0 56 40"
            fill="none"
            className="text-[#B39A65]"
          >
            <path
              d="M28 2C34 10 44 14 54 14C44 14 34 18 28 26C22 18 12 14 2 14C12 14 22 10 28 2Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="14" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Emotionally Meaningful Tamil & English Copy */}
        <h3 className="font-serif-ta text-2xl sm:text-3xl lg:text-4xl text-[#642A32] font-normal leading-relaxed tracking-wide">
          இரு மனங்கள், இரு குடும்பங்கள்,<br />
          ஒரு அழகான புதிய தொடக்கம்.
        </h3>

        <div className="w-16 h-[1px] bg-[#B39A65]/40 mx-auto my-6" />

        <p className="font-serif-en text-base sm:text-lg text-[#262321]/75 tracking-[0.15em] uppercase font-light">
          Two Hearts. Two Families. One Beautiful Beginning.
        </p>
      </motion.div>
    </section>
  );
}
