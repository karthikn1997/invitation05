import React from 'react';
import { motion } from 'framer-motion';

export function MonogramCrest({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36'
  }[size] || 'w-20 h-20';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses} ${className}`}>
      <svg viewBox="0 0 220 220" className="relative w-full h-full overflow-visible">
        <defs>
          <path id="topDateArcRoyal" d="M 36,110 A 74,74 0 1,1 184,110" />
          <path id="bottomNameArcRoyal" d="M 188,110 A 78,78 0 1,1 32,110" />
        </defs>
        <circle cx="110" cy="110" r="78" fill="#FAF4E8" stroke="#B6894C" strokeWidth="1.2" />
        <circle cx="110" cy="110" r="72" fill="none" stroke="#7A1C18" strokeWidth="0.6" strokeDasharray="3 3" />
        <path d="M34 102 C26 94, 28 84, 38 88 C32 94, 32 98, 34 102 Z" fill="#B6894C" opacity="0.75" />
        <path d="M186 118 C194 126, 192 136, 182 132 C188 126, 188 122, 186 118 Z" fill="#B6894C" opacity="0.75" />
        <text fill="#7A1C18" fontSize="10.5" fontWeight="600" letterSpacing="3.5" className="font-serif">
          <textPath href="#topDateArcRoyal" startOffset="50%" textAnchor="middle">
            22 . 11 . 2026
          </textPath>
        </text>
        <text fill="#7A1C18" fontSize="10.5" fontWeight="600" letterSpacing="4.5" className="font-serif">
          <textPath href="#bottomNameArcRoyal" startOffset="50%" textAnchor="middle">
            SIVA & RUBA
          </textPath>
        </text>
        <text x="92" y="130" textAnchor="middle" fill="#7A1C18" fontSize="84" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="600">
          S
        </text>
        <text x="128" y="144" textAnchor="middle" fill="#8B5E2B" fontSize="78" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="600">
          R
        </text>
      </svg>
    </div>
  );
}

export function SacredKalasam({ className = 'w-16 h-20' }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      viewBox="0 0 80 100"
      fill="none"
      className={`text-[#8B5E2B] ${className}`}
    >
      <path d="M40 12 C33 20, 32 30, 40 34 C48 30, 47 20, 40 12 Z" stroke="#7A1C18" strokeWidth="1.4" fill="currentColor" fillOpacity="0.18" />
      <path d="M36 32 C22 24, 14 30, 18 40 C24 38, 30 35, 36 34 Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.14" />
      <path d="M44 32 C58 24, 66 30, 62 40 C56 38, 50 35, 44 34 Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.14" />
      <rect x="28" y="35" width="24" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 40 C14 50, 16 74, 28 82 L52 82 C64 74, 66 50, 54 40 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <line x1="20" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="70" x2="60" y2="70" stroke="currentColor" strokeWidth="1" />
      <text x="40" y="66" textAnchor="middle" fill="#7A1C18" fontSize="16" fontWeight="bold">
        ॐ
      </text>
      <path d="M24 82 L56 82 L52 88 L28 88 Z" stroke="currentColor" strokeWidth="1.4" />
    </motion.svg>
  );
}

export function GaneshaLineArt({ className = 'w-14 h-14' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`text-[#7A1C18] ${className}`}>
      <circle cx="32" cy="32" r="28" stroke="#B6894C" strokeWidth="1" strokeDasharray="3 3" />
      <path
        d="M32 10 L38 20 L26 20 Z M24 24 C16 24, 14 36, 24 38 M40 24 C48 24, 50 36, 40 38 M32 22 C32 34, 28 42, 36 46 C40 48, 42 44, 39 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="52" r="2" fill="#B6894C" />
    </svg>
  );
}

export function FlyingBird({ delay = 0, duration = 16, startX = '84%', startY = '22%', endX = '44%', endY = '9%', scale = 1 }) {
  return (
    <motion.div
      initial={{ left: startX, top: startY, opacity: 0, scale: scale * 0.85 }}
      animate={{
        left: [startX, endX],
        top: [startY, endY],
        opacity: [0, 0.85, 0.85, 0],
        scale: [scale * 0.85, scale, scale * 1.05]
      }}
      transition={{ duration, delay, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
      className="pointer-events-none absolute z-20"
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 48 32"
        className="w-7 h-5 sm:w-9 sm:h-6 text-[#231610]"
        fill="currentColor"
        animate={{ rotate: [-4, 3, -4], scaleY: [1, 0.8, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M2 18 C10 8, 18 10, 24 16 C30 10, 38 8, 46 18 C37 14, 30 16, 24 21 C18 16, 11 14, 2 18 Z" />
      </motion.svg>
    </motion.div>
  );
}

export function TempleBell() {
  return (
    <div className="relative flex flex-col items-center pt-1" aria-hidden="true">
      <div className="w-[2px] h-6 bg-gradient-to-b from-[#E6C687] via-[#C9945A] to-[#8B5E2B] rounded-full" />
      <motion.div
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        style={{ transformOrigin: 'top center' }}
        className="relative flex flex-col items-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#E6C687]" />
        <svg viewBox="0 0 24 28" fill="none" className="w-6 h-7 text-[#E6C687] drop-shadow-[0_2px_8px_rgba(230,198,135,0.4)]">
          <path d="M12 2 C7 2, 6 8, 5 16 L3 19 C3 20.5, 4.5 21, 6 21 L18 21 C19.5 21, 21 20.5, 21 19 L19 16 C18 8, 17 2, 12 2 Z" fill="#D4AF37" stroke="#FFEAA7" strokeWidth="1" />
          <path d="M9 21 C9 23, 10.5 24.5, 12 24.5 C13.5 24.5, 15 23, 15 21" stroke="#8B5E2B" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
}

export function FlickeringDiya() {
  return (
    <div className="relative flex flex-col items-center pt-2 pb-1" aria-hidden="true">
      <motion.div
        animate={{ scale: [0.9, 1.4, 0.95, 1.35, 0.9], opacity: [0.5, 0.95, 0.55, 0.9, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-4 w-20 h-20 rounded-full bg-radial from-[#FFE685]/85 via-[#FF9E2C]/40 to-transparent blur-md"
      />
      <div className="relative z-20 flex items-end justify-center gap-2 mb-[-3px]">
        {[-1, 0, 1].map((offset, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [1, 1.3, 0.9, 1.25, 1],
              scaleX: [1, 0.85, 1.1, 0.9, 1],
              x: offset * 3,
              rotate: [offset * -4, offset * 6, offset * -4]
            }}
            transition={{ duration: 1.6 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex flex-col items-center origin-bottom"
          >
            <div className="w-2.5 h-4 rounded-full bg-gradient-to-t from-[#FF7A00] via-[#FFD043] to-[#FFFBE6] shadow-[0_0_12px_#FFD043]" />
          </motion.div>
        ))}
      </div>
      <svg viewBox="0 0 64 24" fill="none" className="relative z-10 w-16 h-6 text-[#E6C687] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        <path d="M6 14 C16 22, 48 22, 58 14 C54 10, 44 8, 32 8 C20 8, 10 10, 6 14 Z" fill="#D4AF37" stroke="#FFEAA7" strokeWidth="1" />
        <ellipse cx="32" cy="11" rx="22" ry="4" fill="#8B5E2B" opacity="0.6" />
      </svg>
    </div>
  );
}

export function RitualIcon({ id }) {
  if (id === 'nichayathartham') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
        <circle cx="26" cy="32" r="14" stroke="#B8860B" strokeWidth="2.5" />
        <circle cx="38" cy="32" r="14" stroke="#D4AF37" strokeWidth="2.5" />
        <path d="M38 18 L40 14 L42 18 Z" fill="#7A1C18" />
      </svg>
    );
  }
  if (id === 'pattinisatha-virunthu') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
        <path d="M12 28 C12 40, 20 48, 32 48 C44 48, 52 40, 52 28 Z" fill="#D4AF37" fillOpacity="0.25" stroke="#B8860B" strokeWidth="2.5" />
        <ellipse cx="32" cy="28" rx="20" ry="8" stroke="#7A1C18" strokeWidth="2" fill="#FFFDF9" />
        <path d="M26 26 Q32 20 38 26" stroke="#B8860B" strokeWidth="2" />
      </svg>
    );
  }
  if (id === 'inaicheer') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
        <rect x="14" y="24" width="36" height="26" rx="3" stroke="#B8860B" strokeWidth="2.5" fill="#D4AF37" fillOpacity="0.2" />
        <line x1="14" y1="36" x2="50" y2="36" stroke="#7A1C18" strokeWidth="2" />
        <path d="M32 24 V50" stroke="#7A1C18" strokeWidth="2" />
        <circle cx="32" cy="20" r="4" fill="#B8860B" />
      </svg>
    );
  }
  if (id === 'muhurthakaal') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
        <line x1="32" y1="10" x2="32" y2="54" stroke="#B8860B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="14" r="5" fill="#7A1C18" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M26 22 Q32 18 38 22" stroke="#B8860B" strokeWidth="2" />
        <path d="M26 30 Q32 26 38 30" stroke="#B8860B" strokeWidth="2" />
      </svg>
    );
  }
  if (id === 'varaverpu') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
        <path d="M20 44 C20 32, 26 24, 32 24 C38 24, 44 32, 44 44" stroke="#B8860B" strokeWidth="2.5" />
        <path d="M28 24 C28 18, 30 14, 32 14 C34 14, 36 18, 36 24" fill="#D4AF37" />
        <circle cx="32" cy="12" r="2.5" fill="#7A1C18" />
        <line x1="16" y1="46" x2="48" y2="46" stroke="#7A1C18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'subamuhurtham') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#D4AF37]">
        <circle cx="32" cy="32" r="22" stroke="#B8860B" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M32 18 L34 26 L42 26 L36 31 L38 39 L32 34 L26 39 L28 31 L22 26 L30 26 Z" fill="#D4AF37" stroke="#7A1C18" strokeWidth="1" />
        <circle cx="32" cy="32" r="3.5" fill="#7A1C18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 text-[#B8860B]">
      <path d="M16 38 C16 26, 24 18, 32 18 C40 18, 48 26, 48 38 Z" fill="#D4AF37" fillOpacity="0.25" stroke="#B8860B" strokeWidth="2.5" />
      <line x1="14" y1="42" x2="50" y2="42" stroke="#7A1C18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
