import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Camera, Sparkles } from 'lucide-react';
import SikkuKolam from './SikkuKolam';
import { weddingConfig } from '../config/wedding';

export default function CoupleReveal() {
  const { couple, presentation, media } = weddingConfig;
  const { brideFirst, taglineEnglish, taglineTamil } = presentation;
  const imageContainerRef = useRef(null);
  const textRef = useRef(null);

  const primaryPerson = brideFirst ? couple.bride : couple.groom;
  const secondaryPerson = brideFirst ? couple.groom : couple.bride;

  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.94, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center py-16 px-4 max-w-4xl mx-auto">
      {/* Kolam decorative background flourish */}
      <div className="absolute top-10 left-4 opacity-15 pointer-events-none hidden sm:block">
        <SikkuKolam size={140} color="#641824" />
      </div>
      <div className="absolute top-10 right-4 opacity-15 pointer-events-none hidden sm:block">
        <SikkuKolam size={140} color="#641824" />
      </div>

      {/* Editorial Category Tag */}
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
        <p className="font-serif-en text-xs tracking-[0.35em] uppercase text-[#641824] font-bold">
          மணமக்கள் • THE BRIDE & GROOM
        </p>
        <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
      </div>

      {/* Full-Screen / Large Cinematic Couple Portrait with Zari Border Frame */}
      <div
        ref={imageContainerRef}
        className="relative w-full max-w-md sm:max-w-lg aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#C5A880] shadow-[0_15px_40px_rgba(100,24,36,0.18)] p-2.5 bg-[#FAF4E8]"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#E5D8C6] border border-[#C5A880]/40">
          {/* Main Couple Photo */}
          <img
            src={media.couplePortrait}
            alt={`${primaryPerson.nameEnglish} & ${secondaryPerson.nameEnglish}`}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            style={{ objectPosition: media.portraitFocalPoint || 'center 20%' }}
            loading="eager"
          />

          {/* Soft Editorial Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A0A12]/90 via-transparent to-transparent pointer-events-none" />

          {/* Notice: Replaceable Placeholder Badge */}
          {media.isPlaceholder && (
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A060A]/85 backdrop-blur-md border border-[#C5A880]/60 text-[#F7EFE2] text-[10px] font-sans-ui tracking-wider uppercase shadow-md">
                <Camera className="w-3 h-3 text-[#DFC59E]" />
                <span>Replaceable Photo • மாதிரிப் புகைப்படம்</span>
              </span>
            </div>
          )}

          {/* Overlay Names Inside Card for Cinematic Feel */}
          <div className="absolute bottom-6 left-4 right-4 z-10 text-center text-[#F7EFE2] pointer-events-none">
            <h2 className="font-serif-en text-3xl sm:text-4xl font-normal drop-shadow-md">
              {primaryPerson.nameEnglish} & {secondaryPerson.nameEnglish}
            </h2>
            <p className="font-serif-ta text-lg sm:text-xl text-[#DFC59E] drop-shadow-sm mt-0.5 font-semibold">
              {primaryPerson.nameTamil} & {secondaryPerson.nameTamil}
            </p>
          </div>
        </div>
      </div>

      {/* Supporting Narrative Text Below Image */}
      <div ref={textRef} className="space-y-3 mt-8 max-w-2xl">
        <h1 className="font-serif-en text-3xl sm:text-5xl text-[#641824] font-normal tracking-wide">
          {primaryPerson.nameEnglish}
          <span className="font-serif-en text-2xl sm:text-3xl text-[#C5A880] italic mx-3 font-light">&</span>
          {secondaryPerson.nameEnglish}
        </h1>

        <p className="font-serif-ta text-2xl sm:text-3xl text-[#272321] font-semibold tracking-wider">
          {primaryPerson.nameTamil} <span className="text-[#641824] font-serif-en">&</span> {secondaryPerson.nameTamil}
        </p>

        <div className="w-20 h-[1.5px] bg-[#641824]/30 mx-auto my-4" />

        {/* Emotional Tagline */}
        <p className="font-serif-en text-sm sm:text-base tracking-[0.25em] uppercase text-[#641824] font-bold">
          {taglineEnglish}
        </p>
        <p className="font-serif-ta text-xs sm:text-sm text-[#272321]/75 font-normal">
          {taglineTamil}
        </p>
      </div>
    </section>
  );
}
