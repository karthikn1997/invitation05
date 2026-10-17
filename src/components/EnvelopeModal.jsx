import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

export default function EnvelopeModal({ isOpen, onOpenInvitation }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Burst auspicious golden and saffron confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#ffb703', '#d90429', '#ffeedd', '#fb8500'],
    });

    setTimeout(() => {
      onOpenInvitation();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0103]/95 backdrop-blur-md"
      >
        {/* Subtle background golden mandala */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 overflow-hidden">
          <svg
            className="w-[850px] h-[850px] animate-spin-slow text-amber-300"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {Array.from({ length: 16 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 50 50)`}>
                <path d="M50 10 Q54 25 50 35 Q46 25 50 10" fill="currentColor" opacity="0.7" />
                <circle cx="50" cy="8" r="1.5" fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>

        {/* Envelope Container */}
        <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[1.3/1] perspective-1000">
          <div
            className={`relative w-full h-full rounded-2xl shadow-2xl transition-all duration-1000 border border-amber-500/40 ${
              isOpening ? 'scale-105' : 'scale-100'
            }`}
            style={{
              background: 'radial-gradient(circle at center, #54101a 0%, #30060e 70%, #190206 100%)',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 40px rgba(212,175,55,0.25)',
            }}
          >
            {/* Golden Ornamental Corner Patterns */}
            <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-amber-400/80 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-amber-400/80 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-amber-400/80 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-amber-400/80 rounded-br-lg pointer-events-none" />

            {/* Inner Border */}
            <div className="absolute inset-3.5 border border-dashed border-amber-400/30 rounded-xl pointer-events-none" />

            {/* Envelope Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Auspicious Invocation */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400/80 text-xs">🪔</span>
                <p className="font-traditional text-amber-300 text-sm tracking-widest uppercase">
                  ஓம் கணபதயே நமஹ • சுபமஸ்து
                </p>
                <span className="text-amber-400/80 text-xs">🪔</span>
              </div>

              {/* Royal Seal Emblem */}
              <div className="my-2 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 p-0.5 shadow-lg diya-glow flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#3d0a13] flex items-center justify-center border border-amber-300/40">
                    <span className="text-2xl filter drop-shadow">🕉️</span>
                  </div>
                </div>
              </div>

              <h2 className="font-royal text-2xl sm:text-3xl font-bold text-gold-shimmer tracking-wide mt-1">
                மங்கள அழைப்பிதழ்
              </h2>
              <p className="font-script text-2xl sm:text-3xl text-amber-200 mt-1">
                Karthik & Ananya
              </p>

              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-3" />

              <p className="font-serif-classic text-xs sm:text-sm text-amber-100/90 max-w-xs leading-relaxed">
                எங்கள் இல்லத் திருமண விழாவிற்கு தங்களை அன்போடு அழைக்கின்றோம்!
              </p>

              {/* Click to open seal button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                disabled={isOpening}
                className="mt-5 relative group px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />
                <span className="relative z-10 flex items-center gap-2 text-stone-950 font-serif-classic font-bold text-sm tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-950" />
                  <span>{isOpening ? 'திறக்கிறது...' : 'அழைப்பிதழை திறக்க'}</span>
                  <span className="text-xs">✨</span>
                </span>
              </motion.button>

              <p className="text-[11px] text-amber-300/60 mt-2 font-light">
                (Click to open with music & blessings)
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
