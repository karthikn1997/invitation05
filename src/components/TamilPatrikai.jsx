import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';
import { Eye, X, Sparkles, MapPin, Heart } from 'lucide-react';

export default function TamilPatrikai() {
  const { family, date, couple, parents, venue } = weddingData;
  const [showImageModal, setShowImageModal] = useState(false);
  const [showFullLineage, setShowFullLineage] = useState(false);

  return (
    <section
      id="scene-families"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]"
    >
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-3xl w-full mx-auto">
        {/* ── TRADITIONAL AUSPICIOUS PATRIKAI SILK FRAME ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl sm:rounded-4xl p-6 sm:p-10 overflow-hidden bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-[0_16px_45px_rgba(180,130,20,0.15)] text-center"
        >
          {/* Ornate Gold Filigree Inner Border */}
          <div
            className="pointer-events-none absolute inset-3 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40"
            aria-hidden="true"
          />

          {/* 4 Corner Traditional Golden Studs */}
          <span className="absolute top-2 left-2 text-xs text-[#D4AF37] pointer-events-none select-none">❖</span>
          <span className="absolute top-2 right-2 text-xs text-[#D4AF37] pointer-events-none select-none">❖</span>
          <span className="absolute bottom-2 left-2 text-xs text-[#D4AF37] pointer-events-none select-none">❖</span>
          <span className="absolute bottom-2 right-2 text-xs text-[#D4AF37] pointer-events-none select-none">❖</span>

          {/* ── Header ── */}
          <div className="flex flex-col items-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] border-2 border-[#D4AF37] mb-2.5 shadow-xs">
              <span className="text-xs">🪔</span>
              <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-wider">
                பாரம்பரிய தமிழ் அழைப்பிதழ்
              </span>
              <span className="text-xs">🪔</span>
            </div>

            <h2 className="font-tamil text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-[#24070A] leading-tight">
              திருமண அழைப்பிதழ்
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-[#8C6514] font-bold mt-0.5 tracking-wider uppercase">
              Traditional Tamil Wedding Patrikai
            </p>

            {/* View Original Scanned Card Button */}
            <button
              type="button"
              onClick={() => setShowImageModal(true)}
              className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1C18] hover:bg-[#8D231E] border border-[#D4AF37] text-[#FFFDF9] text-xs font-tamil transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="font-bold">அசல் பத்திரிகை வடிவம் (View Printed Card)</span>
            </button>
          </div>

          {/* ── Short Salutation & Auspicious Timing Note ── */}
          <div className="mb-6 space-y-1.5 max-w-xl mx-auto px-2">
            <p className="font-tamil text-base sm:text-lg text-[#7A1C18] font-black">
              அன்புடையீர் வணக்கம்,
            </p>
            <p className="font-tamil text-xs sm:text-sm text-[#3A0C12] leading-relaxed font-semibold">
              {family.auspiciousTimingLines ? family.auspiciousTimingLines.join(' ') : 'நிகழும் மங்களகரமான பராபவ வருடம் கார்த்திகை 26 (12.12.2026) சனிக்கிழமை சுபமுகூர்த்த வேளையில்...'}
            </p>
          </div>

          {/* ── Two Families & Couple Showcase (Clean, Concise Cards) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 pt-5 border-t border-b border-[#D4AF37]/35 pb-6">
            
            {/* Groom Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] border border-[#D4AF37]/60 shadow-xs flex flex-col justify-between text-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A1C18] text-[#FFFDF9] text-xs font-tamil font-bold mb-3 shadow-2xs">
                  <span>🤵</span>
                  <span>மணமகன் இல்லத்தார்</span>
                </div>
                <h3 className="font-tamil text-lg sm:text-xl font-black text-[#24070A] leading-snug">
                  {couple.groomTamilName}{' '}
                  <span className="text-sm font-serif font-bold text-[#7A1C18]">
                    {couple.groomDegree}
                  </span>
                </h3>
                <p className="font-tamil text-xs font-bold text-[#8C6514] mt-0.5">
                  ({couple.groomOccupationTamil})
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-[#D4AF37]/30 text-xs text-[#3A0C12] font-tamil leading-relaxed">
                <span className="text-[#8C6514] font-bold block text-[11px]">பெற்றோர்:</span>
                <p className="font-semibold text-[#24070A]">
                  {parents.groomParentsEnglish}
                </p>
                <span className="text-[11px] text-[#7A1C18] font-bold">{family.rightHostSignoff?.city || 'சென்னை'}</span>
              </div>
            </div>

            {/* Bride Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] border border-[#D4AF37]/60 shadow-xs flex flex-col justify-between text-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A1C18] text-[#FFFDF9] text-xs font-tamil font-bold mb-3 shadow-2xs">
                  <span>👰</span>
                  <span>மணமகள் இல்லத்தார்</span>
                </div>
                <h3 className="font-tamil text-lg sm:text-xl font-black text-[#24070A] leading-snug">
                  {couple.brideTamilName}{' '}
                  <span className="text-sm font-serif font-bold text-[#7A1C18]">
                    {couple.brideDegree}
                  </span>
                </h3>
                <p className="font-tamil text-xs font-bold text-[#8C6514] mt-0.5">
                  ({couple.brideOccupationTamil})
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-[#D4AF37]/30 text-xs text-[#3A0C12] font-tamil leading-relaxed">
                <span className="text-[#8C6514] font-bold block text-[11px]">பெற்றோர்:</span>
                <p className="font-semibold text-[#24070A]">
                  {parents.brideParentsEnglish}
                </p>
                <span className="text-[11px] text-[#7A1C18] font-bold">{family.leftHostSignoff?.city || 'சென்னை'}</span>
              </div>
            </div>

          </div>

          {/* ── Optional Full Lineage Toggle (Keeps default ultra-clean) ── */}
          <div className="my-2">
            <button
              type="button"
              onClick={() => setShowFullLineage(!showFullLineage)}
              className="text-xs font-tamil text-[#8C6514] hover:text-[#7A1C18] underline cursor-pointer transition-colors"
            >
              {showFullLineage ? '▲ மூதாதையர் விவரங்களை மறைக்கவும்' : '▼ மூதாதையர் & வம்சாவளி விவரங்களைக் காண'}
            </button>

            {showFullLineage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 text-left text-xs font-tamil space-y-3"
              >
                <div>
                  <span className="font-bold text-[#7A1C18] block mb-1">மணமகன் வம்சாவளி:</span>
                  <p className="text-[#3A0C12] leading-relaxed">
                    {family.groomLineage?.lines?.join(' ')} {couple.groomTamilName}.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D4AF37]/20">
                  <span className="font-bold text-[#7A1C18] block mb-1">மணமகள் வம்சாவளி:</span>
                  <p className="text-[#3A0C12] leading-relaxed">
                    {family.brideLineage?.lines?.join(' ')} {couple.brideTamilName}.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Concise Warm Invitation Note with Venue ── */}
          <div className="my-5 space-y-1.5 px-2 max-w-lg mx-auto">
            <p className="font-tamil text-xs sm:text-sm text-[#3A0C12] leading-relaxed font-medium">
              ஆகியோரின் அன்பு பொதி மங்கலத்திருமணம் திருநெறிய தீந்தமிழ் முறைப்படி பெரியோர்களால் நிச்சயிக்கப்பட்டு,
            </p>
            <p className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-bold leading-relaxed">
              &quot;{venue.tamilInlineVenue || 'சென்னை, ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மண்டபத்தில்'}&quot;
            </p>
            <p className="font-tamil text-xs sm:text-sm text-[#3A0C12] leading-relaxed font-semibold">
              நடைபெறுவதால் தாங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.
            </p>
          </div>

          {/* ── Host Signoffs (Clean & Compact) ── */}
          <div className="mt-6 pt-5 border-t border-[#D4AF37]/40 text-center">
            <p className="font-tamil text-xs text-[#8C6514] font-bold mb-3 tracking-wider">
              {family.yoursAffectionately || 'தங்கள் அன்புள்ள,'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3A0C12] font-tamil max-w-lg mx-auto">
              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40">
                <p className="font-bold text-[#24070A] text-xs sm:text-sm mb-0.5">
                  {family.leftHostSignoff.names}
                </p>
                <p className="text-[11px] text-[#7A1C18] font-semibold">{family.leftHostSignoff?.city || 'சென்னை'}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40">
                <p className="font-bold text-[#24070A] text-xs sm:text-sm mb-0.5">
                  {family.rightHostSignoff.names}
                </p>
                <p className="text-[11px] text-[#7A1C18] font-semibold">{family.rightHostSignoff?.city || 'சென்னை'}</p>
              </div>
            </div>
            <p className="font-tamil text-xs text-[#8C6514] font-bold mt-4 tracking-wider">
              ❖ இரு இல்லங்களின் இனிய அழைப்பு ❖
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal for viewing the complete printed wedding patrikai image */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              className="relative max-w-3xl max-h-[90vh] overflow-auto rounded-2xl border-2 border-[#D4AF37] shadow-2xl bg-[#FFFDF9] p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#7A1C18] text-[#FFFDF9] border border-[#D4AF37] cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/invitation/page-tamil-patrikai.png"
                alt="Original Scanned Tamil Wedding Patrikai"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
