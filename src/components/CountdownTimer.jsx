import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';

export default function CountdownTimer() {
  const { event } = weddingConfig;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(event.isoString).getTime();
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
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
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [event.isoString]);

  return (
    <section className="py-12 sm:py-16 px-4 max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 sm:p-10 rounded-2xl bg-[#FAF5ED] border border-[#E5D8C6]"
      >
        <p className="font-serif-en text-xs uppercase tracking-[0.25em] text-[#B49A68] font-semibold mb-1">
          The Day is Approaching
        </p>
        <p className="font-serif-ta text-xs text-[#272321]/60 mb-6">
          அந்த அழகான நாளை நோக்கி...
        </p>

        {timeLeft.isPassed ? (
          <p className="font-serif-ta text-base sm:text-lg text-[#642B35] font-normal">
            மங்களத் திருமண விழா இனிதே நடைபெறுகிறது ✨
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            <div className="p-3 sm:p-4 rounded-xl border border-[#E5D8C6] bg-[#F5F0E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642B35] font-light block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#272321]/70 mt-1 block">நாட்கள்</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#E5D8C6] bg-[#F5F0E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642B35] font-light block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#272321]/70 mt-1 block">மணி</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#E5D8C6] bg-[#F5F0E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642B35] font-light block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#272321]/70 mt-1 block">நிமிடம்</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[#E5D8C6] bg-[#F5F0E7]">
              <span className="font-serif-en text-2xl sm:text-4xl text-[#642B35] font-light block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-serif-ta text-[#272321]/70 mt-1 block">விநாடி</span>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
