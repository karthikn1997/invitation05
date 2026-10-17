import React from 'react';
import { Mail, Heart } from 'lucide-react';

export default function FooterSection({ onReopenEnvelope }) {
  return (
    <footer className="pt-12 pb-24 px-4 text-center border-t border-amber-400/20 bg-gradient-to-t from-[#0e0104] to-transparent">
      {/* Auspicious Closing Blessing */}
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xl">🪔</span>
          <span className="font-traditional text-amber-300 text-base sm:text-lg">
            சுபமங்களம் • நல்வரவு
          </span>
          <span className="text-xl">🪔</span>
        </div>

        <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-gold-shimmer">
          தங்கள் நல்வரவை நாடும்
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 max-w-lg mx-auto text-xs sm:text-sm text-amber-100/90 font-serif-classic">
          <div className="p-3.5 rounded-xl bg-[#26050b]/80 border border-amber-400/20">
            <p className="font-bold text-amber-200">சுந்தரம் - லக்ஷ்மி குடும்பத்தினர்</p>
            <p className="text-[11px] text-amber-400/70 mt-1">மற்றும் உற்றார் உறவினர்கள்</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#26050b]/80 border border-amber-400/20">
            <p className="font-bold text-amber-200">ராதாகிருஷ்ணன் - மீனாட்சி குடும்பத்தினர்</p>
            <p className="text-[11px] text-amber-400/70 mt-1">மற்றும் உற்றார் உறவினர்கள்</p>
          </div>
        </div>

        <p className="font-traditional text-amber-300 text-sm">
          ✨ அனைவரும் வருக! மணமக்களை வாழ்த்தி அருளுக! ✨
        </p>

        {/* Re-open Envelope Button */}
        <div className="pt-4">
          <button
            onClick={onReopenEnvelope}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 hover:bg-amber-400/25 border border-amber-400/30 text-amber-200 text-xs font-serif-classic transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>மங்கல மடலை மீண்டும் மூட/திறக்க (Re-open Envelope)</span>
          </button>
        </div>

        <p className="text-[11px] text-amber-400/40 font-mono pt-4">
          Crafted with love & auspicious blessings • © 2026 Karthik & Ananya
        </p>
      </div>
    </footer>
  );
}
