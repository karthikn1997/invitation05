import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';
import { Sparkles, Calendar, Clock, MapPin } from 'lucide-react';

/* ─── Auspicious Sri Maha Ganapathi Sacred Crest SVG ──────────────── */
function SacredGaneshaEmblem({ className = 'w-16 h-16 sm:w-20 sm:h-20' }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 1. Continuously Rotating Outer Mandala Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src="/scenes/ganesha-ring.png"
          alt="Sacred Rotating Mandala Ring"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(20,50,28,0.35)]"
        />
      </motion.div>

      {/* 2. Stationary Divine Lord Ganesha Center */}
      <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
        <img
          src="/scenes/ganesha-center.png"
          alt="Lord Ganesha"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(20,50,28,0.3)]"
        />
      </div>
    </div>
  );
}

/* ─── Sacred Thirumangalyam Knot SVG ───────────────────────────────── */
function SacredThaliPendant({ className = '' }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="thaliBrightGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDF0" />
          <stop offset="40%" stopColor="#F0C852" />
          <stop offset="80%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8C6514" />
        </linearGradient>
      </defs>
      <path d="M4 12 Q30 26 56 12" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 12 Q30 26 56 12" stroke="#FFF8DC" strokeWidth="1" strokeDasharray="2 3" />
      <path
        d="M30 18 C25 18, 21 24, 23 31 C25 37, 33 37, 35 31 C37 24, 34 18, 30 18 Z"
        fill="url(#thaliBrightGold)"
        stroke="#FFFDF0"
        strokeWidth="1.2"
      />
      <circle cx="20" cy="21" r="4.5" fill="url(#thaliBrightGold)" stroke="#FFFDF0" strokeWidth="0.8" />
      <circle cx="40" cy="21" r="4.5" fill="url(#thaliBrightGold)" stroke="#FFFDF0" strokeWidth="0.8" />
      <circle cx="30" cy="28" r="2" fill="#C62828" />
    </svg>
  );
}


export default function TheInvitation() {
  const { couple, couplePhotos, venue, date } = weddingData;

  const coupleSlides = [
    {
      src: couplePhotos?.photo1Hero?.src || '/couple/new_royal_couple.jpg',
      alt: 'S. Sivasankaran & M. Ruba — Royal Wedding Portrait',
      objectPosition: couplePhotos?.photo1Hero?.objectPosition || '50% 28%',
    },
    {
      src: couplePhotos?.photo3Closing?.src || '/couple/closing_royal_couple.jpg',
      alt: 'S. Sivasankaran & M. Ruba — Divine Blessings',
      objectPosition: couplePhotos?.photo3Closing?.objectPosition || '50% 18%',
    },
    {
      src: '/couple/couple_story_portrait.jpg',
      alt: 'S. Sivasankaran & M. Ruba — Two Hearts One Sacred Journey',
      objectPosition: '50% 22%',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coupleSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [coupleSlides.length]);

  return (
    <div
      id="scene-invitation"
      className="relative w-full overflow-hidden bg-[#FAF6EE] text-[#2A080C]"
    >
      {/* ── 1. BRIGHT TRADITIONAL SUNLIT TEMPLE MANDAPAM BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.img
          src="/images/light_traditional_mandapam.jpg"
          alt="Sunlit Traditional Tamil Wedding Mandapam"
          style={{ objectPosition: '50% 0%' }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Auspicious Sandalwood & Cream Ivory Ambient Wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(253,251,247,0.52) 0%, rgba(250,245,235,0.68) 35%, rgba(253,251,247,0.85) 100%)',
          }}
        />

        {/* Golden Sunlight Aura Glow */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[620px] h-[520px] rounded-full bg-gradient-to-b from-[#FFF0B3]/35 via-[#F5D98A]/18 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Cascading Flower Petals */}
      <FloatingPetals count={9} className="absolute inset-0 z-10 pointer-events-none" />

      {/* ── 2. MAIN SANCTUARY CONTENT CONTAINER ── */}
      <section className="relative z-20 min-h-svh w-full flex flex-col items-center justify-center pt-8 sm:pt-14 pb-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">

        {/* ── SACRED INVOCATION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="relative mb-2">
            <SacredGaneshaEmblem className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_4px_16px_rgba(212,160,23,0.45)]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFFDF9]/95 border-2 border-[#D4AF37] shadow-[0_4px_20px_rgba(180,130,20,0.2)] backdrop-blur-md">
            <span className="text-[#C62828] text-xs">❖</span>
            <p className="font-tamil text-xs sm:text-sm text-[#7A1C18] tracking-wider font-extrabold">
              || ஸ்ரீ மஹா கணபதி துணை ||
            </p>
            <span className="text-[#C62828] text-xs">❖</span>
          </div>

          <div className="mt-2.5 flex flex-col items-center">
            <span className="font-display uppercase tracking-[0.32em] text-[#8C6514] text-[10px] sm:text-xs font-bold">
              THE ROYAL WEDDING INVITATION
            </span>
            <h1
              className="font-tamil text-2xl sm:text-4xl md:text-5xl font-black mt-1 leading-tight tracking-normal whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #7A141A 0%, #A32026 50%, #5E0E12 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px rgba(160,30,30,0.3))',
              }}
            >
              திருமண அழைப்பிதழ்
            </h1>
          </div>
        </motion.div>

        {/* ── HERO COUPLE PORTRAIT: OPULENT TRADITIONAL SANDALWOOD & GOLD CAMEO ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative w-full max-w-[310px] sm:max-w-[360px] my-3 flex flex-col items-center"
        >
          {/* Luminous Warm Halo */}
          <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-b from-[#F5D98A]/35 via-[#FFDF80]/20 to-transparent blur-2xl pointer-events-none" />

          {/* Traditional Carved Mandapam Arch Frame */}
          <div className="relative w-full rounded-t-[160px] sm:rounded-t-[180px] rounded-b-[38px] p-2.5 sm:p-3 bg-gradient-to-b from-[#FFFDF0] via-[#E5B942] to-[#B37D14] shadow-[0_20px_50px_rgba(140,80,20,0.25)] border border-[#FFFDF5]">
            <div className="relative w-full rounded-t-[150px] sm:rounded-t-[170px] rounded-b-[30px] overflow-hidden bg-[#240A0E] aspect-[3/4] border-2 border-[#FAF4E6] shadow-inner">
              {coupleSlides.map((slide, idx) => (
                <motion.img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  style={{ objectPosition: slide.objectPosition }}
                  initial={false}
                  animate={{
                    opacity: currentSlide === idx ? 1 : 0,
                    scale: currentSlide === idx ? 1.03 : 1,
                  }}
                  transition={{
                    opacity: { duration: 1.2, ease: 'easeInOut' },
                    scale: { duration: 4, ease: 'easeOut' },
                  }}
                  className={`absolute inset-0 w-full h-full object-cover filter brightness-[1.02] contrast-[1.04] transition-opacity duration-1000 ${
                    currentSlide === idx ? 'z-10' : 'z-0'
                  }`}
                />
              ))}

              {/* Shimmer Light Reflection Sweep */}
              <motion.div
                animate={{ x: ['-140%', '220%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(255, 250, 220, 0.4) 50%, transparent 80%)',
                }}
                className="pointer-events-none absolute inset-0 w-3/4 h-full skew-x-12 z-20"
              />

              {/* Bottom Vignette & Sacred Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0408]/90 via-[#1A0408]/20 to-transparent pointer-events-none z-20" />

              <div className="absolute bottom-3 inset-x-2 z-30 text-center flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9]/95 border border-[#D4AF37] text-[#7A1C18] font-tamil text-[11px] sm:text-xs font-bold shadow-md backdrop-blur-md mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>இருமனங்கள் இணையும் மங்கலத் திருநாள்</span>
                </span>
                <p className="font-serif italic text-[11px] text-[#FFF9E6] drop-shadow">
                  Two Souls • One Sacred Bond
                </p>

                {/* Subtle Slide Indicator Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  {coupleSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to photo ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx
                          ? 'w-5 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                          : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Corner Rubies */}
            <span className="pointer-events-none absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#D32F2F] to-[#7A1C18] border-2 border-[#FFFDF0] shadow-md z-30" />
            <span className="pointer-events-none absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#D32F2F] to-[#7A1C18] border-2 border-[#FFFDF0] shadow-md z-30" />
          </div>
        </motion.div>


        {/* ── COUPLE NAMES: ORGANIC ROYAL TEMPLE PRESENTATION (NO CLUNKY BOXES) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="w-full my-6 flex flex-col items-center"
        >
          {/* GROOM REGAL PRESENTATION */}
          <div className="flex flex-col items-center text-center">
            <span className="font-traditional text-xs sm:text-sm font-bold tracking-wider text-[#A32026] mb-0.5 flex items-center gap-1.5">
              <span className="text-[#D4AF37]">𑁍</span>
              <span>மணமகன் (Groom)</span>
              <span className="text-[#D4AF37]">𑁍</span>
            </span>
            <h2
              className="font-traditional text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wide py-0.5"
              style={{
                color: '#5E0E12',
                filter: 'drop-shadow(0 2px 6px rgba(212,175,55,0.4))',
              }}
            >
              {couple.groomTamilName || 'R. அர்ஜுன்'}
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-[#24070A]">
                {couple.groomName || 'R. Arjun'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#FAF4E6] text-[#7A1C18] text-xs font-serif italic font-bold border border-[#D4AF37] shadow-sm">
                {couple.groomDegree || 'B.Tech.'}
              </span>
            </div>
            {couple.groomOccupationTamil && (
              <p className="font-traditional text-xs sm:text-sm text-[#8C6514] font-bold mt-0.5">
                ({couple.groomOccupationTamil})
              </p>
            )}
          </div>

          {/* SACRED THALI KNOT & WEDDING FLOURISH */}
          <div className="flex items-center justify-center gap-3 my-4 w-full max-w-xs sm:max-w-sm">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <div className="flex items-center gap-2 px-5 py-1 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#FFF9E6] to-[#FFFDF9] border border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.2)]">
              <SacredThaliPendant className="w-5 h-3 shrink-0" />
              <span className="font-script text-2xl sm:text-3xl text-[#7A1C18] font-bold px-1 select-none">weds</span>
              <SacredThaliPendant className="w-5 h-3 shrink-0 scale-x-[-1]" />
            </div>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </div>

          {/* BRIDE REGAL PRESENTATION */}
          <div className="flex flex-col items-center text-center">
            <span className="font-traditional text-xs sm:text-sm font-bold tracking-wider text-[#A32026] mb-0.5 flex items-center gap-1.5">
              <span className="text-[#D4AF37]">𑁍</span>
              <span>மணமகள் (Bride)</span>
              <span className="text-[#D4AF37]">𑁍</span>
            </span>
            <h2
              className="font-traditional text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wide py-0.5"
              style={{
                color: '#5E0E12',
                filter: 'drop-shadow(0 2px 6px rgba(212,175,55,0.4))',
              }}
            >
              {couple.brideTamilName || 'S. பிரியங்கா'}
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-[#24070A]">
                {couple.brideName || 'S. Priyanka'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#FAF4E6] text-[#7A1C18] text-xs font-serif italic font-bold border border-[#D4AF37] shadow-sm">
                {couple.brideDegree || 'M.Tech.'}
              </span>
            </div>
            {couple.brideOccupationTamil && (
              <p className="font-traditional text-xs sm:text-sm text-[#8C6514] font-bold mt-0.5">
                ({couple.brideOccupationTamil})
              </p>
            )}
          </div>
        </motion.div>

        {/* ── SEAMLESS AUSPICIOUS CEREMONY HIGHLIGHT RIBBON (ORGANIC, NOT BOXES) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8 }}
          className="w-full my-6 py-5 px-4 sm:px-8 border-y-2 border-[#D4AF37]/50 relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,253,249,0.7) 15%, rgba(255,249,230,0.85) 50%, rgba(255,253,249,0.7) 85%, transparent 100%)',
          }}
        >
          {/* Centered structured container ensuring 100% vertical alignment of icons and text */}
          <div className="w-full max-w-[320px] sm:max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center divide-y sm:divide-y-0 sm:divide-x-2 divide-[#D4AF37]/35">
            
            {/* 1. Date - Slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:w-auto sm:flex-1 flex items-center justify-start gap-4 py-3 sm:py-2 px-2 sm:px-6 group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                className="w-12 h-12 rounded-full bg-[#7A1C18] border-2 border-[#D4AF37] flex items-center justify-center shadow-md shrink-0 transition-transform group-hover:scale-105"
              >
                <Calendar className="w-5 h-5 text-[#FFF8DC]" />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#8C6514] font-black block">
                  திருமண நாள்
                </span>
                <p className="font-cinzel font-black text-base sm:text-lg text-[#24070A] leading-tight">
                  {date?.englishDate || '12 Dec 2026'}
                </p>
                <span className="font-tamil text-xs text-[#7A1C18] font-bold block">
                  {date?.tamilDay || 'சனிக்கிழமை'}
                </span>
              </div>
            </motion.div>

            {/* 2. Muhurtham - Slides in from left with staggered delay */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:w-auto sm:flex-1 flex items-center justify-start gap-4 py-3 sm:py-2 px-2 sm:px-6 group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.32, type: 'spring' }}
                className="w-12 h-12 rounded-full bg-[#A32026] border-2 border-[#FFEAA7] flex items-center justify-center shadow-md shrink-0 ring-2 ring-[#D4AF37]/40 transition-transform group-hover:scale-105"
              >
                <Clock className="w-5 h-5 text-[#FFFDF0]" />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#7A1C18] font-black block">
                  சுபமுகூர்த்தம்
                </span>
                <p className="font-cinzel font-black text-base sm:text-lg text-[#24070A] leading-tight">
                  {weddingData?.wedding?.time || '6:30 AM – 8:00 AM'}
                </p>
                <span className="font-tamil text-xs text-[#A32026] font-bold block">
                  {weddingData?.wedding?.tamilTime || 'காலை 6.30 - 8.00'}
                </span>
              </div>
            </motion.div>

            {/* 3. Venue - Slides in from left with staggered delay */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:w-auto sm:flex-1 flex items-center justify-start gap-4 py-3 sm:py-2 px-2 sm:px-6 group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.44, type: 'spring' }}
                className="w-12 h-12 rounded-full bg-[#7A1C18] border-2 border-[#D4AF37] flex items-center justify-center shadow-md shrink-0 transition-transform group-hover:scale-105"
              >
                <MapPin className="w-5 h-5 text-[#FFF8DC]" />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#8C6514] font-black block">
                  திருமண இடம்
                </span>
                <p className="font-tamil font-black text-xs sm:text-sm text-[#24070A] leading-tight">
                  {venue?.tamilName || 'ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மண்டபம்'}
                </p>
                <span className="font-serif text-xs text-[#7A1C18] font-bold block">
                  {venue?.address?.city || 'Chennai'}
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Traditional Blessing Verse (Organic Flow) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black italic text-center max-w-lg my-4 leading-relaxed px-4"
          style={{ textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}
        >
          🌸 &quot;கண்ணும் இமையும் போல, மலரும் மணமும் போல, இணைபிரியா அன்போடு இல்லறம் சிறக்க வாழ்த்துகிறோம்&quot; 🌸
        </motion.p>

      </section>
    </div>
  );
}


