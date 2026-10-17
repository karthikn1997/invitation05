import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';
import { Heart, Calendar, MapPin } from 'lucide-react';

export default function ClosingScene() {
  const { couplePhotos, couple, date, venue } = weddingData;

  return (
    <footer
      id="scene-closing"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF6EE] text-[#24070A] select-none"
    >
      {/* ── 1. LIGHT TRADITIONAL MANDAPAM & SILK BACKGROUND (MATCHING SITE) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.img
          src="/images/light_traditional_mandapam.jpg"
          alt="Traditional Tamil Wedding Mandapam"
          style={{ objectPosition: '50% 10%' }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Sandalwood & Cream Ivory Ambient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(253,251,247,0.72) 0%, rgba(250,245,235,0.85) 40%, rgba(253,251,247,0.95) 100%)',
          }}
        />

        {/* Radiant Golden Sunlight Warmth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[650px] h-[550px] rounded-full bg-gradient-to-b from-[#FFF0B3]/40 via-[#F5D98A]/20 to-transparent blur-3xl" />
      </div>

      {/* Floating Rose & Jasmine Petals */}
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      {/* ── 2. MAIN SEAMLESS CONTENT (OPEN AIR, ZERO BOXES) ── */}
      <div className="relative z-20 max-w-2xl w-full mx-auto flex flex-col items-center text-center">

        {/* ── AUSPICIOUS TOP MOTIF ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-4"
        >
          {/* Sacred Symbol */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#8C6514] text-xs font-bold tracking-widest">❖ ॐ ஸ்ரீம் ❖</span>
            <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2
            className="font-tamil text-2xl sm:text-3xl md:text-4xl font-black tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #7A141A 0%, #A32026 50%, #5E0E12 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 6px rgba(160,30,30,0.25))',
            }}
          >
            இனிய இல்லறத் தொடக்கம்
          </h2>

          <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.28em] text-[#8C6514] font-bold mt-1">
            Forever Begins • With Divine Blessings
          </p>
        </motion.div>

        {/* ── 3. FLOATING ROYAL PORTRAIT (CIRCULAR / ORGANIC MEDALLION — NO BOXES) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative my-4 flex flex-col items-center"
        >
          {/* Rotating Soft Golden Halo behind circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 sm:-inset-6 rounded-full pointer-events-none"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, #D4AF37 20%, transparent 40%, #FFEAA7 60%, transparent 80%, #D4AF37 100%)',
              padding: '2.5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
              opacity: 0.7,
            }}
          />

          {/* Floating Glow Ambient */}
          <div className="absolute inset-0 rounded-full bg-[#FFEAA7]/40 blur-2xl pointer-events-none" />

          {/* Organic Circular Medallion Frame */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#8B5E2B] via-[#FFEAA7] to-[#7A1C18] shadow-[0_16px_45px_rgba(180,130,20,0.28)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#240A0E] border-2 border-[#FFFDF5] shadow-inner relative">
              <motion.img
                src={couplePhotos.photo3Closing.src}
                alt={couplePhotos.photo3Closing.alt || 'S. Sivasankaran & M. Ruba'}
                style={{ objectPosition: couplePhotos.photo3Closing.objectPosition || '50% 18%' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04]"
              />

              {/* Shimmer Light Reflection Sweep */}
              <motion.div
                animate={{ x: ['-140%', '220%'] }}
                transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.45) 50%, transparent 80%)',
                }}
                className="pointer-events-none absolute inset-0 w-3/4 h-full skew-x-12 z-20"
              />

              {/* Soft Bottom Shadow inside photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24070A]/70 via-transparent to-transparent pointer-events-none z-10" />

              {/* Date tag inside bottom of circle */}
              <div className="absolute bottom-2 inset-x-0 z-20 text-center">
                <span className="font-tamil text-xs text-[#FFF9E6] font-bold drop-shadow">
                  வாழ்க வளமுடன் • {date.numericDate}
                </span>
              </div>
            </div>

            {/* 4 Golden Cardinal Lotus Studs */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white shadow-sm" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white shadow-sm" />
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white shadow-sm" />
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white shadow-sm" />
          </div>
        </motion.div>

        {/* ── 4. COUPLE NAMES WITH SLIDE-IN ANIMATION (OPEN, NO BOXES) ── */}
        <div className="w-full my-3 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <motion.span
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-tamil text-2xl sm:text-3xl md:text-4xl font-black text-[#7A1C18] tracking-wide"
            >
              {couple.groomTamilName}
            </motion.span>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, type: 'spring' }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF9E6] border border-[#D4AF37] flex items-center justify-center shadow-xs"
            >
              <Heart className="w-4 h-4 text-[#C62828] fill-[#C62828] animate-pulse" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-tamil text-2xl sm:text-3xl md:text-4xl font-black text-[#7A1C18] tracking-wide"
            >
              {couple.brideTamilName}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-cinzel text-xs sm:text-sm font-bold text-[#8C6514] tracking-widest mt-1"
          >
            {couple.groomName} ({couple.groomDegree}) &amp; {couple.brideName} ({couple.brideDegree})
          </motion.p>
        </div>

        {/* ── 5. SACRED KURAL & BLESSINGS (FLOWING TEXT, ZERO BOXES) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-5 flex flex-col items-center max-w-lg px-2"
        >
          {/* Subtle Filigree Divider */}
          <div className="flex items-center justify-center gap-3 w-40 mb-3">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs text-[#8C6514] font-bold">❖ குறள் ❖</span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Kural */}
          <p className="font-tamil text-sm sm:text-base text-[#4A1016] font-bold leading-relaxed italic">
            &quot;அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை பண்பும் பயனும் அது&quot;
          </p>

          <p className="font-tamil text-xs sm:text-sm text-[#7A1C18]/90 font-medium mt-2 leading-relaxed">
            இரு குடும்பங்களின் அன்போடும் பெரியோர்களின் ஆசியோடும் தொடங்கும் எங்கள் இல்லற வாழ்விற்குத் தாங்கள் வருகை தந்து வாழ்த்தியருள அன்புடன் வேண்டுகிறோம்!
          </p>

          {/* Clean Open Date & Venue Row (No boxes around them!) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-4 pt-3 border-t border-[#D4AF37]/35 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-[#7A1C18] font-bold">
              <Calendar className="w-4 h-4 text-[#B8860B]" />
              <span>{date.englishDate} • ஞாயிற்றுக்கிழமை</span>
            </div>

            <span className="text-[#D4AF37] hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-[#7A1C18] font-bold">
              <MapPin className="w-4 h-4 text-[#B8860B]" />
              <span>{venue.name}, பொள்ளாச்சி</span>
            </div>
          </div>
        </motion.div>



        {/* ── 7. COMPLIMENTS & SACRED FOOTER SIGN-OFF ── */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="font-cinzel text-[10px] tracking-widest uppercase text-[#8C6514] font-bold">
            With Best Compliments From
          </p>
          <p className="font-serif text-sm font-bold text-[#24070A] mt-0.5">
            Family and Friends • <span className="font-tamil text-xs text-[#7A1C18]">இரு இல்லத்தார் மற்றும் சுற்றத்தார்</span>
          </p>

          <p className="font-tamil text-xs text-[#8C6514] font-bold tracking-widest mt-4">
            ❖ வாழ்க வளமுடன் • மங்களம் உண்டாகட்டும் ❖
          </p>
        </div>

      </div>
    </footer>
  );
}
