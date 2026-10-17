import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { MonogramCrest } from './Crests';
import { Sparkles, Heart } from 'lucide-react';

export default function BlessingsAndClosing() {
  const { couple, couplePhotos, date, messages } = weddingData;
  const [blessingShower, setBlessingShower] = useState([]);
  const [activeBlessing, setActiveBlessing] = useState(null);

  const blessingsList = [
    { id: 1, text: 'வாழ்க வளமுடன்! 🌸', label: 'Long Life & Prosperity' },
    { id: 2, text: 'பல்லாண்டு வாழ்க! 🪔', label: 'Eternal Happiness' },
    { id: 3, text: 'திருக்கல்யாண நல்வாழ்த்துகள்! ✨', label: 'Divine Wedding Blessings' }
  ];

  const triggerBlessing = (b) => {
    setActiveBlessing(b.text);
    // Add bursts of flower petals
    const newPetals = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 90 + 5}%`,
      delay: Math.random() * 0.3,
      duration: 2.5 + Math.random() * 2
    }));
    setBlessingShower((prev) => [...prev, ...newPetals]);

    setTimeout(() => {
      setActiveBlessing(null);
    }, 3000);
  };

  return (
    <footer id="scene-closing" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 overflow-hidden bg-[#0A0304] flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/invitation/kalyana-mandapam-palace.jpg"
          alt="Palace Backdrop"
          className="w-full h-full object-cover filter brightness-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0304] via-[#1D060A]/90 to-[#0A0304]" />
      </div>

      {/* Flower Shower Showering on screen when user clicks blessing */}
      <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
        {blessingShower.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -50, opacity: 1, rotate: 0 }}
            animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 360 }}
            transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
            style={{ left: p.left, position: 'absolute', top: 0 }}
            className="text-2xl"
          >
            🌸
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-3xl w-full mx-auto flex flex-col items-center text-center">
        {/* Monogram Crest */}
        <div className="mb-6">
          <MonogramCrest size="lg" className="shadow-[0_0_35px_rgba(223,197,158,0.4)] rounded-full" />
        </div>

        {/* Closing Round Portrait in Gold Ornate Frame */}
        <div className="relative w-56 sm:w-64 aspect-square rounded-full p-2 bg-gradient-to-tr from-[#9B783E] via-[#FFDF9E] to-[#6E1C16] shadow-[0_20px_50px_rgba(0,0,0,0.9)] mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#180507]">
            <img
              src={couplePhotos.photo3Closing.src}
              alt={couplePhotos.photo3Closing.alt}
              className="w-full h-full object-cover object-[50%_20%] filter brightness-105 contrast-110"
            />
          </div>
        </div>

        <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFF8E7] font-bold">
          {couple.groomCompactName} & {couple.brideCompactName}
        </h3>
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-amber-300 font-semibold mt-1">
          {date.numericDate}
        </p>

        {/* Interactive Blessings Generator */}
        <div className="my-8 w-full max-w-lg p-6 rounded-3xl bg-[#1E070C]/85 backdrop-blur-md border border-[#DFC59E]/40 shadow-xl">
          <p className="font-tamil text-sm text-[#DFC59E] font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>மணமக்களுக்கு மங்கல வாழ்த்து அனுப்ப (Send Your Blessing)</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {blessingsList.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => triggerBlessing(b)}
                className="px-4 py-2 rounded-full bg-[#380E17] hover:bg-[#501320] border border-[#DFC59E]/50 text-amber-200 text-xs font-tamil font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {b.text}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {activeBlessing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-sm font-tamil text-green-300 font-bold"
              >
                ✨ உங்கள் வாழ்த்து மலர்களாய் பொழிகிறது! ({activeBlessing}) ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Signoff */}
        <div className="space-y-2 mt-4">
          <p className="font-serif italic text-base sm:text-lg text-amber-200">
            "{messages.closingMessage}"
          </p>
          <p className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#DFC59E] font-bold pt-2">
            {messages.englishCompliments.heading}
          </p>
          <p className="font-serif text-lg text-[#FFF8E7] font-semibold">
            {messages.englishCompliments.sub}
          </p>
        </div>

        <p className="font-tamil text-xs text-[#DFC59E]/70 mt-8 tracking-widest">
          ❖ வாழ்க வளமுடன் • இரு இல்லங்களின் இனிய நல்வரவு ❖
        </p>
      </div>
    </footer>
  );
}
