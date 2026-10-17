import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';

export default function WeddingDetails() {
  const { event, venue } = weddingConfig;
  const { reception } = event;

  return (
    <section className="py-20 sm:py-28 px-4 max-w-3xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center mb-14">
        <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B49A68] font-semibold">
          The Wedding Celebration
        </span>
        <h2 className="font-serif-ta text-3xl sm:text-4xl text-[#642B35] font-light mt-1">
          திருமண நாள்
        </h2>
        <div className="w-12 h-[1px] bg-[#B49A68]/40 mx-auto mt-4" />
      </div>

      {/* Subtle Editorial Timeline Layout */}
      <div className="border-l border-[#E5D8C6] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {/* Reception (Optional) */}
        {reception && reception.enabled && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF5ED] border-2 border-[#B49A68]" />
            <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#B49A68] font-semibold">
              வரவேற்பு • RECEPTION
            </span>
            <h3 className="font-serif-ta text-xl sm:text-2xl text-[#642B35] font-semibold mt-1">
              {reception.dateTamil}
            </h3>
            <p className="font-serif-en text-sm text-[#272321]/70 italic">
              {reception.dateEnglish}
            </p>
            <p className="font-sans-ui text-xs sm:text-sm text-[#272321]/80 mt-1.5">
              {reception.timeTamil} ({reception.timeEnglish})
            </p>
          </motion.div>
        )}

        {/* Sacred Muhurtham */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          {/* Timeline Indicator with Burgundy Ring */}
          <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#642B35] border-2 border-[#B49A68]" />
          <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#642B35] font-bold">
            புனித சுபமுகூர்த்தம் • SACRED MUHURTHAM
          </span>
          <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#642B35] font-semibold mt-1">
            {event.weddingDayTamil}, {event.weddingDateTamil}
          </h3>
          <p className="font-serif-en text-base text-[#272321]/70 italic">
            {event.weddingDayEnglish}, {event.weddingDateEnglish}
          </p>

          <div className="mt-3 text-xs sm:text-sm text-[#272321]/85 space-y-1">
            <p className="font-serif-ta">
              <span className="font-medium text-[#642B35]">முகூர்த்த நேரம்:</span> {event.muhurthamTimeTamil}
            </p>
            <p className="font-sans-ui text-xs text-[#B49A68]">
              {event.auspiciousLagnamTamil} ({event.muhurthamTimeEnglish})
            </p>
          </div>
        </motion.div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF5ED] border-2 border-[#B49A68]" />
          <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#B49A68] font-semibold">
            திருமண மண்டபம் • VENUE
          </span>
          <h4 className="font-serif-ta text-xl text-[#642B35] font-semibold mt-1">
            {venue.nameTamil}
          </h4>
          <p className="font-serif-en text-sm text-[#272321]/70">
            {venue.nameEnglish}
          </p>
          <p className="font-sans-ui text-xs sm:text-sm text-[#272321]/80 mt-1 max-w-md">
            {venue.addressTamil}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
