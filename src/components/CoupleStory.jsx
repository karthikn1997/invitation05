import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import ParallaxBackdrop from './ParallaxBackdrop';
import FloatingPetals from './FloatingPetals';
import { Heart, Sparkles, Home, Briefcase } from 'lucide-react';

/* ── Decorative Gold SVG Divider ── */
function GoldDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 18"
      className={`w-full max-w-xs sm:max-w-sm ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="9" x2="118" y2="9" stroke="url(#gdl)" strokeWidth="1" />
      <polygon points="140,2 160,9 140,16 120,9" fill="#D4AF37" opacity="0.9" />
      <circle cx="160" cy="9" r="3.5" fill="#D4AF37" />
      <polygon points="180,2 160,9 180,16 200,9" fill="#D4AF37" opacity="0.9" />
      <line x1="202" y1="9" x2="320" y2="9" stroke="url(#gdr)" strokeWidth="1" />
      <defs>
        <linearGradient id="gdl" x1="0" y1="0" x2="118" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="gdr" x1="202" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Sparkle Particle ── */
function Sparkle({ x, y, delay, size = 3 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'radial-gradient(circle, #FFF8D0 0%, #D4AF37 60%, transparent 100%)',
        boxShadow: `0 0 ${size * 3}px ${size}px rgba(212,175,55,0.6)`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.4, 1.3, 0.4],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3 + Math.random(),
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const SPARKLES = [
  { x: 8,  y: 10, delay: 0.2, size: 2.5 },
  { x: 90, y: 14, delay: 1.1, size: 3 },
  { x: 12, y: 45, delay: 0.6, size: 2 },
  { x: 88, y: 52, delay: 1.8, size: 2.5 },
  { x: 50, y: 5,  delay: 0.9, size: 2 },
  { x: 50, y: 95, delay: 2.1, size: 2.5 },
  { x: 6,  y: 78, delay: 1.4, size: 2 },
  { x: 94, y: 82, delay: 0.5, size: 2.5 },
];

/* ── Royal Ornate Portrait Frame ── */
function RoyalMedallionPhoto({ src, fallbackSrc, alt }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 flex items-center justify-center shrink-0">
      {/* Outer rotating conic golden ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #D4AF37 15%, transparent 30%, #D4AF37 50%, transparent 65%, #D4AF37 85%, transparent 100%)',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          opacity: 0.85,
        }}
      />

      {/* Static outer glow border */}
      <div
        className="absolute inset-1.5 sm:inset-2 rounded-full pointer-events-none"
        style={{
          boxShadow:
            '0 0 0 2px rgba(212,175,55,0.6), 0 0 0 8px rgba(212,175,55,0.12), 0 14px 35px rgba(160,110,20,0.22)',
        }}
      />

      {/* Circular Photo Window */}
      <div
        className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-[#240A0E] border-2 border-[#D4AF37] shadow-inner"
        style={{
          boxShadow: '0 0 0 3px #D4AF37, 0 10px 25px rgba(120,60,10,0.3)',
        }}
      >
        <motion.img
          src={imgSrc}
          onError={() => fallbackSrc && setImgSrc(fallbackSrc)}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 18%' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ['-130%', '230%'] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none skew-x-12"
          style={{
            width: '60%',
            background:
              'linear-gradient(105deg, transparent 20%, rgba(255,245,210,0.3) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* 4 Cardinal Golden Jewel Studs */}
      {[
        { style: { top: '-4px', left: '50%', transform: 'translateX(-50%)' } },
        { style: { bottom: '-4px', left: '50%', transform: 'translateX(-50%)' } },
        { style: { left: '-4px', top: '50%', transform: 'translateY(-50%)' } },
        { style: { right: '-4px', top: '50%', transform: 'translateY(-50%)' } },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full pointer-events-none"
          style={{
            ...pos.style,
            background: 'radial-gradient(circle, #FFF8D0 0%, #D4AF37 55%, #8C6514 100%)',
            boxShadow: '0 0 8px 2px rgba(212,175,55,0.7)',
          }}
        />
      ))}
    </div>
  );
}

export default function CoupleStory() {
  const { couple, parents, date, messages } = weddingData;
  const { thirukkural } = messages;

  return (
    <section
      id="scene-couple-bond"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center justify-center select-none bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]"
    >
      {/* ── Background: Traditional Silk & Kolam Backdrop ── */}
      <ParallaxBackdrop
        src="/images/light_traditional_kolam_silk.jpg"
        objectPosition="50% 45%"
        variant="temple-dark"
        sway={false}
        brightness={0.96}
      />

      {/* ── Soft Sandalwood Wash & Fades ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(253,251,247,0.72) 10%, rgba(250,245,235,0.9) 100%)',
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #FAF6EE 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #FAF6EE 0%, transparent 100%)' }}
      />

      {/* ── Floating petals & sparkles ── */}
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {SPARKLES.map((s, i) => (
          <Sparkle key={i} {...s} />
        ))}
      </div>

      {/* ══════════ MAIN CONTENT CONTAINER ══════════ */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* ── Top Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF9] to-[#FFF9E6] border-2 border-[#D4AF37] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-widest">
              நம் காதல் கதை
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#24070A] leading-tight">
            Our Sacred Love Story
          </h2>
          <p className="font-tamil text-xs sm:text-sm text-[#8C6514] font-bold mt-1 tracking-wide">
            இரு இதயங்கள் இணையும் காவியப் பயணம்
          </p>

          <div className="mt-4">
            <GoldDivider />
          </div>
        </motion.div>

        {/* ══════════ DUAL CARDS FLOW: GROOM ➔ CONNECTOR ➔ BRIDE ══════════ */}
        <div className="w-full max-w-2xl flex flex-col items-center gap-8 mb-10">

          {/* ── 1. GROOM SHOWCASE CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-7 shadow-[0_12px_36px_rgba(180,130,20,0.15)] flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left relative overflow-hidden"
          >
            {/* Background Corner Glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />

            {/* Groom Photo */}
            <RoyalMedallionPhoto
              src="/fresh/groom_portrait.jpg"
              fallbackSrc="/scenes/groom_cutout@2x.png"
              alt={couple.groomName ? `Groom ${couple.groomName}` : "Groom"}
            />

            {/* Groom Details */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#D4AF37] mb-2">
                <span className="text-xs">🤵</span>
                <span className="font-tamil text-xs text-[#7A1C18] font-black">
                  மணமகன் • The Groom
                </span>
              </div>

              {/* English & Tamil Name */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#24070A] tracking-wider">
                {couple.groomName}, <span className="text-[#8C6514] font-semibold text-lg">{couple.groomDegree}</span>
              </h3>
              <p className="font-tamil text-sm sm:text-base font-bold text-[#7A1C18] mt-0.5">
                {couple.groomTamilName}
              </p>
              <span className="font-tamil text-xs text-[#8C6514] font-semibold">
                பாசூரார் குல திருநிறைச்செல்வன்
              </span>

              {/* Info Badges */}
              <div className="w-full grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-[#D4AF37]/30 text-xs">
                {/* Occupation */}
                <div className="flex items-center gap-2 text-[#24070A]">
                  <Briefcase className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span className="font-tamil font-bold">{couple.groomOccupationTamil}</span>
                </div>
                {/* Parents */}
                <div className="flex items-center gap-2 text-[#4A3210]">
                  <Home className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span className="font-serif text-[11px] sm:text-xs">
                    {parents.groomParentsEnglish} ({weddingData.family?.rightHostSignoff?.city || 'சென்னை'})
                  </span>
                </div>
              </div>

              {/* Romantic Groom Quote */}
              <p className="font-tamil text-[11px] sm:text-xs text-[#7A1C18] mt-3 italic font-medium bg-[#FFF9E6]/60 p-2.5 rounded-xl border border-[#D4AF37]/30 w-full">
                &quot;அன்பும் பண்பும் நிறைந்த நல் உள்ளம், தன் வாழ்வின் ராணியை கரம் பிடிக்கக் காத்திருக்கும் நாயகன்...&quot;
              </p>
            </div>
          </motion.div>

          {/* ── 2. ANIMATED LOVE STORY CONNECTOR ── */}
          <div className="flex flex-col items-center my-[-10px] z-10">
            {/* Top Golden Thread */}
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#D4AF37] to-[#C62828]" />

            {/* Beating Heart & Infinity Jewel */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1, 1.2, 1],
                boxShadow: [
                  '0 0 10px rgba(198,40,40,0.3)',
                  '0 0 24px rgba(198,40,40,0.6)',
                  '0 0 10px rgba(198,40,40,0.3)',
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A32026] via-[#7A1C18] to-[#4A0E10] border-2 border-[#FFEAA7] flex items-center justify-center text-white shadow-lg cursor-pointer"
            >
              <Heart className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
            </motion.div>

            {/* Love Caption */}
            <div className="mt-2 px-4 py-1 rounded-full bg-[#FFFDF9] border border-[#D4AF37] shadow-xs">
              <span className="font-tamil text-xs text-[#7A1C18] font-black tracking-wider">
                இரு மனம் இணையும் காதல் சங்கமம்
              </span>
            </div>

            {/* Bottom Golden Thread */}
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#C62828] to-[#D4AF37]" />
          </div>

          {/* ── 3. BRIDE SHOWCASE CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-7 shadow-[0_12px_36px_rgba(180,130,20,0.15)] flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left relative overflow-hidden"
          >
            {/* Background Corner Glow */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />

            {/* Bride Photo */}
            <RoyalMedallionPhoto
              src="/fresh/bride_portrait.jpg"
              fallbackSrc="/scenes/bride_cutout@2x.png"
              alt={couple.brideName ? `Bride ${couple.brideName}` : "Bride"}
            />

            {/* Bride Details */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#D4AF37] mb-2">
                <span className="text-xs">👰</span>
                <span className="font-tamil text-xs text-[#7A1C18] font-black">
                  மணமகள் • The Bride
                </span>
              </div>

              {/* English & Tamil Name */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#24070A] tracking-wider">
                {couple.brideName}, <span className="text-[#8C6514] font-semibold text-lg">{couple.brideDegree}</span>
              </h3>
              <p className="font-tamil text-sm sm:text-base font-bold text-[#7A1C18] mt-0.5">
                {couple.brideTamilName}
              </p>
              <span className="font-tamil text-xs text-[#8C6514] font-semibold">
                பூசம் குல திருநிறைச்செல்வி
              </span>

              {/* Info Badges */}
              <div className="w-full grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-[#D4AF37]/30 text-xs">
                {/* Occupation */}
                <div className="flex items-center gap-2 text-[#24070A]">
                  <Briefcase className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span className="font-tamil font-bold">{couple.brideOccupationTamil}</span>
                </div>
                {/* Parents */}
                <div className="flex items-center gap-2 text-[#4A3210]">
                  <Home className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span className="font-serif text-[11px] sm:text-xs">
                    {parents.brideParentsEnglish} ({weddingData.family?.leftHostSignoff?.city || 'சென்னை'})
                  </span>
                </div>
              </div>

              {/* Romantic Bride Quote */}
              <p className="font-tamil text-[11px] sm:text-xs text-[#7A1C18] mt-3 italic font-medium bg-[#FFF9E6]/60 p-2.5 rounded-xl border border-[#D4AF37]/30 w-full">
                &quot;அழகும் பாசமும் தவழும் பூமுகம், இல்லற நந்தவனத்தில் அன்பை விதைக்க வரும் நாயகி...&quot;
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Date & Auspicious Pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="px-6 py-2 rounded-full text-center bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.25)]">
            <span className="font-display text-xs sm:text-sm tracking-[0.24em] uppercase text-[#7A1C18] font-bold">
              {date.numericDate} · {date.vazhgaValamudan}
            </span>
          </div>
        </motion.div>

        {/* ── Sacred Thirukkural Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full max-w-xl rounded-2xl px-6 py-5 text-center bg-[#FFFDF9]/95 border-2 border-[#D4AF37]/60 shadow-[0_12px_32px_rgba(160,110,20,0.15)] backdrop-blur-md"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#8C6514] text-[11px] tracking-[0.3em] font-display uppercase font-black">
              திருக்குறள்
            </span>
            <span className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <p className="font-tamil text-sm sm:text-lg font-black leading-relaxed mb-1 text-[#24070A]">
            {thirukkural.line1}
          </p>
          <p className="font-tamil text-sm sm:text-lg font-bold leading-relaxed text-[#7A1C18]">
            {thirukkural.line2}{' '}
            <span className="text-[10px] sm:text-sm text-[#8C6514] font-semibold">
              {thirukkural.author}
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
