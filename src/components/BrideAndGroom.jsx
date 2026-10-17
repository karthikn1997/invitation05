import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export default function BrideAndGroom() {
  const { groom, bride, couplePortrait } = weddingConfig;

  return (
    <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center">
      {/* Editorial Couple Names & Centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative"
      >
        <p className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B39A65] mb-8 font-medium">
          The Union of Two Souls
        </p>

        {/* Couple Portrait Frame / Heritage Monogram Centerpiece */}
        <div className="relative mx-auto w-56 sm:w-64 h-72 sm:h-80 mb-10">
          {/* Antique Brass Arch Frame */}
          <div className="absolute inset-0 rounded-t-full border border-[#B39A65]/60 p-2 shadow-sm bg-[#FAF6EF]">
            <div className="w-full h-full rounded-t-full overflow-hidden border border-[#D9CCB8] relative bg-[#F7F1E7] flex items-center justify-center">
              {couplePortrait ? (
                <img
                  src={couplePortrait}
                  alt={`${groom.nameEnglish} & ${bride.nameEnglish}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                /* Heritage Editorial Monogram when custom photo is optional */
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border border-[#B39A65]/40 flex items-center justify-center mb-3 text-[#642A32]">
                    <span className="font-serif-ta text-2xl font-semibold">க & அ</span>
                  </div>
                  <span className="font-serif-en text-xl tracking-widest text-[#642A32] font-medium">
                    K & A
                  </span>
                  <div className="w-12 h-[1px] bg-[#B39A65]/40 my-2" />
                  <span className="font-serif-ta text-xs text-[#262321]/60">
                    மங்கல தம்பதிகள்
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Subtle Arch Cap Line */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#B39A65]/40 bg-[#FAF6EF] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#B39A65]" />
          </div>
        </div>

        {/* Groom & Bride Detailed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-6 max-w-3xl mx-auto">
          {/* Groom Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#FAF6EF] border border-[#D9CCB8] text-center relative group">
            <span className="text-[11px] font-sans-ui tracking-[0.25em] text-[#B39A65] uppercase font-semibold">
              மணமகன் | GROOM
            </span>
            <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#642A32] font-semibold mt-2">
              {groom.nameTamil}
            </h3>
            <p className="font-serif-en text-xl text-[#262321] mt-0.5 tracking-wide">
              {groom.nameEnglish}
              {groom.qualification && (
                <span className="text-xs text-[#B39A65] font-sans-ui ml-2 tracking-normal">
                  {groom.qualification}
                </span>
              )}
            </p>

            <div className="w-16 h-[1px] bg-[#D9CCB8] mx-auto my-4" />

            <p className="font-serif-ta text-xs sm:text-sm text-[#262321]/80 leading-relaxed">
              {groom.parentsTamil}
              <br />
              <span className="text-[11px] text-[#B39A65]">{groom.familyDetailsTamil}</span>
            </p>
          </div>

          {/* Bride Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#FAF6EF] border border-[#D9CCB8] text-center relative group">
            <span className="text-[11px] font-sans-ui tracking-[0.25em] text-[#B39A65] uppercase font-semibold">
              மணமகள் | BRIDE
            </span>
            <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#642A32] font-semibold mt-2">
              {bride.nameTamil}
            </h3>
            <p className="font-serif-en text-xl text-[#262321] mt-0.5 tracking-wide">
              {bride.nameEnglish}
              {bride.qualification && (
                <span className="text-xs text-[#B39A65] font-sans-ui ml-2 tracking-normal">
                  {bride.qualification}
                </span>
              )}
            </p>

            <div className="w-16 h-[1px] bg-[#D9CCB8] mx-auto my-4" />

            <p className="font-serif-ta text-xs sm:text-sm text-[#262321]/80 leading-relaxed">
              {bride.parentsTamil}
              <br />
              <span className="text-[11px] text-[#B39A65]">{bride.familyDetailsTamil}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
