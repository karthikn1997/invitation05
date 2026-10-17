import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flower2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 px-4 text-center overflow-hidden">
      {/* Auspicious Invocations */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-1.5"
      >
        <div className="flex items-center gap-3">
          <span className="text-amber-400 text-lg">🪔</span>
          <p className="font-traditional text-amber-300 text-sm sm:text-base tracking-widest font-semibold">
            ॥ ஸ்ரீ மஹா கணபதி துணை • சுபமஸ்து ॥
          </p>
          <span className="text-amber-400 text-lg">🪔</span>
        </div>

        {/* Lord Ganesha / Kalasam Motif */}
        <div className="my-3 relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-amber-400/60 bg-[#34070f] flex items-center justify-center shadow-xl diya-glow">
            <span className="text-3xl filter drop-shadow">🕉️</span>
          </div>
        </div>

        <p className="font-serif-classic text-amber-200/90 text-xs sm:text-sm tracking-widest uppercase">
          திருமண அழைப்பிதழ் • Wedding Invitation
        </p>

        <p className="font-traditional text-amber-100/80 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
          இறைவனின் திருவருளாலும், பெரியோர்களின் நல்லாசியோடும் நிகழும் எங்கள் இல்லத் திருமண விழாவிற்கு தங்களை குடும்ப சமேதராக வருகை தந்து மணமக்களை வாழ்த்த அன்போடு அழைக்கின்றோம்.
        </p>
      </motion.div>

      {/* Royal Arch and Couple Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-8 relative max-w-3xl mx-auto"
      >
        {/* Mandap Toranam / Hanging Garland effect */}
        <div className="flex justify-between items-center px-4 max-w-md mx-auto mb-4 opacity-75">
          <span className="text-xl animate-bounce">🔔</span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 mx-2" />
          <span className="text-xl">🌸</span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 mx-2" />
          <span className="text-xl animate-bounce delay-150">🔔</span>
        </div>

        {/* Couple Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-6">
          {/* Groom Card */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#3b0811]/90 to-[#220409]/90 border border-amber-400/40 shadow-xl card-inner-border">
            <div className="text-amber-400 text-xs uppercase font-serif-classic tracking-wider mb-1">
              மணமகன் • Groom
            </div>
            <h2 className="font-royal text-2xl sm:text-3xl font-extrabold text-gold-shimmer">
              Dr. S. கார்த்திக்
            </h2>
            <p className="text-xs text-amber-300 font-mono tracking-wider mt-0.5">
              M.S. (Ortho)
            </p>
            <div className="w-20 h-[1px] bg-amber-400/40 mx-auto my-3" />
            <p className="text-xs text-amber-100/80 leading-relaxed font-light">
              திரு. கு. சுந்தரம் & திருமதி. எஸ். லக்ஷ்மி
              <br />
              <span className="text-[11px] text-amber-300/70">அவர்களின் அன்புத் திருமகன்</span>
            </p>
          </div>

          {/* Bride Card */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#3b0811]/90 to-[#220409]/90 border border-amber-400/40 shadow-xl card-inner-border">
            <div className="text-amber-400 text-xs uppercase font-serif-classic tracking-wider mb-1">
              மணமகள் • Bride
            </div>
            <h2 className="font-royal text-2xl sm:text-3xl font-extrabold text-gold-shimmer">
              Er. R. அனன்யா
            </h2>
            <p className="text-xs text-amber-300 font-mono tracking-wider mt-0.5">
              B.Tech., MBA
            </p>
            <div className="w-20 h-[1px] bg-amber-400/40 mx-auto my-3" />
            <p className="text-xs text-amber-100/80 leading-relaxed font-light">
              திரு. கே. ராதாகிருஷ்ணன் & திருமதி. ஆர். மீனாட்சி
              <br />
              <span className="text-[11px] text-amber-300/70">அவர்களின் அன்புத் திருமகள்</span>
            </p>
          </div>
        </div>

        {/* Center Heart Tie */}
        <div className="my-4 flex items-center justify-center gap-3">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-amber-400" />
          <div className="px-4 py-1.5 rounded-full bg-[#3d0912] border border-amber-400/60 flex items-center gap-2 shadow-lg">
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="font-script text-xl text-amber-200">weds</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </div>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        {/* Date Highlight Badge */}
        <div className="inline-block mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-amber-400/60 shadow-lg">
          <p className="font-serif-classic text-sm sm:text-base font-bold text-amber-200">
            🗓️ ஞாயிற்றுக்கிழமை, 6 டிசம்பர் 2026 | Sunday, 6th December 2026
          </p>
          <p className="text-xs text-amber-300/80 mt-0.5">
            சுபமுகூர்த்தம் காலை 9:00 AM முதல் 10:30 AM வரை (மேஷ லக்னம்)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
