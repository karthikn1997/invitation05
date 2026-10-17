import React, { useState, useEffect } from 'react';
import { weddingDetails } from '../config/weddingDetails';

/**
 * Auspicious Countdown Component:
 * - Dynamically calculates days, hours, minutes, and seconds until the wedding muhurtham
 * - Uses weddingDetails.wedding.isoDateTime
 * - Opulent gold & maroon styling with traditional South Indian flair
 */
export default function Countdown({ className = '', targetDate: propTargetDate }) {
  const targetDate = propTargetDate 
    ? new Date(propTargetDate).getTime() 
    : new Date(weddingDetails.wedding.isoDateTime).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', tamilLabel: 'நாட்கள்', value: timeLeft.days },
    { label: 'HOURS', tamilLabel: 'மணி', value: timeLeft.hours },
    { label: 'MINUTES', tamilLabel: 'நிமிடம்', value: timeLeft.minutes },
    { label: 'SECONDS', tamilLabel: 'வினாடி', value: timeLeft.seconds },
  ];

  if (timeLeft.isComplete) {
    return (
      <div className={`text-center py-3 px-4 rounded-2xl bg-[#2A0E08]/85 border border-[#E6C687]/60 ${className}`}>
        <p className="font-tamil text-sm text-[#F5D98A] font-bold">சுபமுகூர்த்த நன்னாள்!</p>
        <p className="font-serif text-xs text-[#FFF8E7] tracking-widest uppercase mt-0.5">The Auspicious Wedding Day</p>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3.5 select-none ${className}`}>
      {units.map((unit, idx) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center min-w-[58px] sm:min-w-[68px] py-2 px-1.5 rounded-xl bg-gradient-to-b from-[#2B1006]/90 to-[#180703]/95 border border-[#E6C687]/50 shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFF5DB] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="font-display text-[9px] sm:text-[10px] tracking-[0.16em] text-[#E6C687] uppercase font-semibold mt-1">
            {unit.label}
          </span>
          <span className="font-tamil text-[8px] text-[#C9A362] leading-none mt-0.5 opacity-80">
            {unit.tamilLabel}
          </span>
        </div>
      ))}
    </div>
  );
}
