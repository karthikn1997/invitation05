import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { TempleBell, FlickeringDiya } from './Crests';
import FloatingPetals from './FloatingPetals';
import { Sparkles, Moon, Sun, MapPin, Calendar, Clock, ExternalLink, Utensils, Music } from 'lucide-react';

/* ── Reception Card: Royal Twilight / Moonlit Silk Theme ──────────── */
function ReceptionCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { reception } = weddingData;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateY: tilt.x, rotateX: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.015 }}
      style={{ transformPerspective: 1000 }}
      className="relative w-full rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border-2 border-[#D4AF37] shadow-[0_16px_45px_rgba(180,130,20,0.18)] group"
    >
      {/* Decorative Ornate Corners */}
      <span className="absolute top-2 left-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute top-2 right-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute bottom-2 left-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute bottom-2 right-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>

      {/* Subtle Moonlit Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#E0D0B0]/30 blur-2xl pointer-events-none" />

      {/* Ceremony Header Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FAF6EE] via-[#FFFDF9] to-[#FAF6EE] border-2 border-[#D4AF37] mb-2 shadow-xs">
        <Moon className="w-3.5 h-3.5 text-[#B8860B]" />
        <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-wider">
          {reception.tamilTitle}
        </span>
        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
      </div>

      {/* Swinging Temple Bell */}
      <div className="my-1 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
        <TempleBell />
      </div>

      {/* English Title & Subtitle */}
      <h3 className="font-cinzel text-2xl sm:text-3xl font-black tracking-widest text-[#24070A] leading-tight">
        {reception.title}
      </h3>
      <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-bold mt-0.5">
        திருமண வரவேற்பு நல்விழா
      </span>

      {/* Royal Date Calendar Plaque */}
      <div className="w-full my-4 py-4 px-4 rounded-2xl bg-white/80 border-2 border-[#D4AF37]/60 shadow-[0_6px_20px_rgba(180,130,20,0.12)] flex flex-col items-center">
        {/* Large Date Callout */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1C18] to-[#5A0E12] border-2 border-[#FFEAA7] flex flex-col items-center justify-center text-white shadow-md">
            <span className="font-cinzel text-lg font-black leading-none text-[#FFD700]">{reception.dayNumber || '11'}</span>
            <span className="font-cinzel text-[9px] uppercase tracking-wider font-bold">{reception.monthShort || 'DEC'}</span>
          </div>
          <div className="text-left">
            <span className="font-cinzel text-base sm:text-lg font-black text-[#24070A] leading-tight block">
              {reception.dateNumeric || '11.12.2026'}
            </span>
            <span className="font-tamil text-xs font-bold text-[#7A1C18] block">
              {reception.tamilDayEnglish || 'வெள்ளிக்கிழமை • Friday'}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3" />

        {/* Time Window */}
        <div className="flex items-center gap-2 text-[#7A1C18]">
          <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-serif text-sm sm:text-base font-bold">
            {reception.time}
          </span>
          <span className="font-tamil text-xs text-[#8C6514] font-semibold">
            ({reception.tamilTime})
          </span>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="w-full grid grid-cols-2 gap-2 my-2 text-left">
        <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 flex items-center gap-2">
          <Music className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-tamil text-xs font-bold text-[#24070A] leading-tight">
            சங்கீத மாலை & நல்வரவு
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 flex items-center gap-2">
          <Utensils className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-tamil text-xs font-bold text-[#24070A] leading-tight">
            அறுசுவை இரவு விருந்து
          </span>
        </div>
      </div>

      {/* Flickering Brass Diya */}
      <div className="mt-3">
        <FlickeringDiya />
      </div>
    </motion.div>
  );
}

/* ── Subamuhurtham Card: Auspicious Dawn / Solar Gold Theme ────────── */
function MuhurthamCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { wedding } = weddingData;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateY: tilt.x, rotateX: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.015 }}
      style={{ transformPerspective: 1000 }}
      className="relative w-full rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FAECE0] border-2 border-[#D4AF37] shadow-[0_16px_45px_rgba(212,175,55,0.22)] group"
    >
      {/* Decorative Ornate Corners */}
      <span className="absolute top-2 left-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute top-2 right-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute bottom-2 left-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>
      <span className="absolute bottom-2 right-2 text-xs text-[#D4AF37]/60 pointer-events-none select-none">❖</span>

      {/* Subtle Solar Dawn Ambient Glow */}
      <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-[#FFD700]/25 blur-2xl pointer-events-none" />

      {/* Ceremony Header Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FAF6EE] via-[#FFFDF9] to-[#FAF6EE] border-2 border-[#D4AF37] mb-2 shadow-xs">
        <Sun className="w-3.5 h-3.5 text-[#C62828]" />
        <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-wider">
          {wedding.tamilTitle}
        </span>
        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
      </div>

      {/* Swinging Temple Bell */}
      <div className="my-1 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)]">
        <TempleBell />
      </div>

      {/* English Title & Subtitle */}
      <h3 className="font-cinzel text-2xl sm:text-3xl font-black tracking-widest text-[#24070A] leading-tight">
        {wedding.title}
      </h3>
      <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-bold mt-0.5">
        மங்களகரமான சுபமுகூர்த்த நல்வேளை
      </span>

      {/* Royal Date Calendar Plaque */}
      <div className="w-full my-4 py-4 px-4 rounded-2xl bg-white/80 border-2 border-[#D4AF37]/60 shadow-[0_6px_20px_rgba(180,130,20,0.12)] flex flex-col items-center">
        {/* Large Date Callout */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A32026] to-[#7A1C18] border-2 border-[#FFEAA7] flex flex-col items-center justify-center text-white shadow-md">
            <span className="font-cinzel text-lg font-black leading-none text-[#FFD700]">{wedding.dayNumber || '12'}</span>
            <span className="font-cinzel text-[9px] uppercase tracking-wider font-bold">{wedding.monthShort || 'DEC'}</span>
          </div>
          <div className="text-left">
            <span className="font-cinzel text-base sm:text-lg font-black text-[#24070A] leading-tight block">
              {wedding.dateNumeric || '12.12.2026'}
            </span>
            <span className="font-tamil text-xs font-bold text-[#7A1C18] block">
              {wedding.tamilDayEnglish || 'சனிக்கிழமை • Saturday'}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3" />

        {/* Time Window */}
        <div className="flex items-center gap-2 text-[#7A1C18]">
          <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-serif text-sm sm:text-base font-bold">
            {wedding.time}
          </span>
          <span className="font-tamil text-xs text-[#8C6514] font-semibold">
            ({wedding.tamilTime})
          </span>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="w-full grid grid-cols-2 gap-2 my-2 text-left">
        <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-tamil text-xs font-bold text-[#24070A] leading-tight">
            மாங்கல்ய தாரணம் • விருச்சிகம்
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 flex items-center gap-2">
          <Utensils className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span className="font-tamil text-xs font-bold text-[#24070A] leading-tight">
            சம்பந்தி விருந்து (மதியம்)
          </span>
        </div>
      </div>

      {/* Flickering Brass Diya */}
      <div className="mt-3">
        <FlickeringDiya />
      </div>
    </motion.div>
  );
}

export default function ReceptionAndWedding() {
  const { venue, address } = weddingData;

  return (
    <section
      id="scene-reception-wedding"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]"
    >
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF9] to-[#FFF9E6] border-2 border-[#D4AF37] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-black tracking-wider">
              மங்கள நிகழ்வுகள்
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#24070A] leading-tight">
            Auspicious Ceremonies
          </h2>
          <p className="font-tamil text-xs sm:text-sm text-[#8C6514] font-bold mt-1 tracking-wide">
            வரவேற்பு மற்றும் சுபமுகூர்த்த நல்விழா அழைப்பு
          </p>
        </motion.div>

        {/* Dual Ceremonies: Moonlit Reception vs Dawn Muhurtham */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-8"
        >
          <ReceptionCard />
          <MuhurthamCard />
        </motion.div>

        {/* Mandapam Address Banner: Traditional Sandalwood & Gold Gateway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative p-6 sm:p-7 rounded-3xl text-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] border-2 border-[#D4AF37] shadow-[0_12px_36px_rgba(180,130,20,0.12)] flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF6EE] border border-[#D4AF37] mb-2 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#7A1C18]" />
            <span className="font-cinzel uppercase tracking-widest text-[11px] text-[#8C6514] font-bold">
              Ceremony Venue • திருமண மண்டபம்
            </span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-black tracking-wide text-[#24070A] mt-1">
            {venue.name}
          </h3>
          <p className="font-tamil text-sm sm:text-base text-[#7A1C18] font-bold mt-0.5">
            {venue.tamilName}
          </p>
          <p className="font-serif text-xs sm:text-sm text-[#4A141A] max-w-lg mx-auto leading-relaxed mt-1 font-medium">
            {address?.englishInvitationLine || venue?.addressLine || venue?.address?.englishInvitationLine || 'GST Road, Tambaram, Chennai - 600045'}
          </p>

          {/* Quick Google Maps Button */}
          {venue.mapsUrl && (
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8C1D18] to-[#7A1C18] text-[#FFF9E6] border border-[#D4AF37] shadow-sm hover:scale-105 active:scale-95 transition-all text-xs font-bold tracking-wide cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}
        </motion.div>

      </div>
    </section>
  );
}
