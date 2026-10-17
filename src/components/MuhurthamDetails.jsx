import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export default function MuhurthamDetails() {
  const { weddingDate, venue, reception } = weddingConfig;

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(weddingDate.isoString).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          isPassed: false,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [weddingDate.isoString]);

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center mb-12">
        <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B39A65] font-semibold">
          The Wedding Celebration
        </span>
        <h2 className="font-serif-ta text-3xl sm:text-4xl text-[#642A32] font-semibold mt-1">
          திருமண நாள்
        </h2>
        <div className="w-12 h-[1px] bg-[#B39A65]/50 mx-auto mt-4" />
      </div>

      {/* Elegant Editorial Timeline (No generic cards) */}
      <div className="border-l border-[#D9CCB8] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {/* Reception (if enabled) */}
        {reception.enabled && (
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF6EF] border-2 border-[#B39A65]" />
            <span className="text-[11px] font-sans-ui uppercase tracking-widest text-[#B39A65] font-semibold">
              வரவேற்பு • Reception
            </span>
            <h3 className="font-serif-ta text-xl text-[#642A32] font-semibold mt-1">
              {reception.dateTamil}
            </h3>
            <p className="font-sans-ui text-xs sm:text-sm text-[#262321]/80 mt-1">
              {reception.timeTamil} ({reception.timeEnglish})
            </p>
          </div>
        )}

        {/* Sacred Muhurtham */}
        <div className="relative">
          {/* Timeline Dot with Brass ring */}
          <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#642A32] border-2 border-[#B39A65]" />
          <span className="text-[11px] font-sans-ui uppercase tracking-widest text-[#642A32] font-bold">
            புனித சுபமுகூர்த்தம் • Sacred Muhurtham
          </span>
          <h3 className="font-serif-ta text-2xl text-[#642A32] font-bold mt-1">
            {weddingDate.dayTamil}, {weddingDate.dateTamil}
          </h3>
          <p className="font-serif-en text-sm text-[#262321]/70 italic">
            {weddingDate.dayEnglish}, {weddingDate.dateEnglish}
          </p>

          <div className="mt-3 text-xs sm:text-sm text-[#262321]/85 space-y-1">
            <p className="font-serif-ta">
              <span className="font-semibold text-[#642A32]">முகூர்த்த நேரம்:</span> {weddingDate.muhurthamTamil}
            </p>
            <p className="font-sans-ui text-xs text-[#B39A65]">
              {weddingDate.auspiciousLagnamTamil} ({weddingDate.muhurthamEnglish})
            </p>
          </div>
        </div>

        {/* Venue Point */}
        <div className="relative">
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF6EF] border-2 border-[#B39A65]" />
          <span className="text-[11px] font-sans-ui uppercase tracking-widest text-[#B39A65] font-semibold">
            திருமண மண்டபம் • Venue
          </span>
          <h4 className="font-serif-ta text-lg text-[#642A32] font-semibold mt-1">
            {venue.nameTamil}
          </h4>
          <p className="font-serif-en text-sm text-[#262321]/70">
            {venue.nameEnglish}
          </p>
          <p className="font-sans-ui text-xs sm:text-sm text-[#262321]/80 mt-1 max-w-md">
            {venue.addressTamil}
          </p>
        </div>
      </div>

      {/* Live Muhurtham Countdown */}
      <div className="mt-14 p-8 rounded-2xl bg-[#FAF6EF] border border-[#D9CCB8] text-center">
        <p className="font-serif-en text-xs uppercase tracking-[0.25em] text-[#B39A65] mb-4 font-semibold">
          Countdown to Sacred Muhurtham
        </p>

        {timeLeft.isPassed ? (
          <p className="font-serif-ta text-lg text-[#642A32] font-medium">
            மங்களத் திருமண விழா இனிதே நடைபெறுகிறது ✨
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            <div className="p-3 sm:p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642A32] font-semibold block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#262321]/70">நாட்கள்</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642A32] font-semibold block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#262321]/70">மணி</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642A32] font-semibold block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#262321]/70">நிமிடம்</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#D9CCB8] bg-[#F7F1E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642A32] font-semibold block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#262321]/70">விநாடி</span>
            </div>
          </div>
        )}

        {/* View Location Button */}
        <div className="mt-8">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B39A65] bg-[#FAF6EF] hover:bg-[#642A32] text-[#642A32] hover:text-[#F7F1E7] text-xs sm:text-sm font-sans-ui tracking-wide transition-all duration-300 shadow-sm"
          >
            <Navigation className="w-4 h-4 text-[#B39A65]" />
            <span>View Location | வழித்தடம் காண</span>
          </a>
        </div>
      </div>
    </section>
  );
}
