import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import FloatingPetals from './FloatingPetals';

export default function CoupleEditorialShowcase() {
  const { couple, couplePhotos, messages } = weddingData;
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const photos = [
    {
      id: 'photo-1',
      src: couplePhotos.photo1Hero.src,
      title: `${couple.groomName} & ${couple.brideName}`,
      tag: 'இரு மனம் இணையும் திருநாள்',
      desc: 'The beginning of a sacred journey bound by eternal love, family blessings, and timeless traditions.'
    },
    {
      id: 'photo-2',
      src: couplePhotos.photo2Editorial.src,
      title: 'Sacred Bond of Love',
      tag: 'அன்பின் திருவுருவம்',
      desc: 'Two hearts finding their home in each other, rooted in culture and flourishing with divine grace.'
    },
    {
      id: 'photo-3',
      src: couplePhotos.photo3Closing.src,
      title: 'Forever Begins Together',
      tag: 'மங்கல வாழ்வின் தொடக்கம்',
      desc: 'Walking hand in hand toward a lifetime of laughter, prosperity, peace, and beautiful memories.'
    }
  ];

  return (
    <section id="scene-couple-bond" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0A0304]">
      {/* Subtle radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(120, 20, 30, 0.28) 0%, rgba(10, 3, 4, 0.95) 75%)'
        }}
      />
      <FloatingPetals count={8} className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-6xl w-full mx-auto">
        {/* Sacred Thirukkural Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F070B] border border-[#DFC59E]/40 mb-4 shadow-md">
            <span className="text-amber-400 text-xs">❖</span>
            <span className="font-tamil text-xs text-[#DFC59E] font-bold tracking-widest">
              திருக்குறள் அருள்மொழி
            </span>
            <span className="text-amber-400 text-xs">❖</span>
          </div>

          <h3 className="font-tamil text-xl sm:text-2xl md:text-3xl text-[#FFF8E7] leading-relaxed font-bold drop-shadow">
            "{messages.thirukkural.line1}
            <br />
            {messages.thirukkural.line2}"
          </h3>
          <p className="font-serif italic text-sm text-amber-200/80 mt-2">{messages.thirukkural.author}</p>
        </motion.div>

        {/* Interactive Couple Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Cinematic Photo */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[4/5] rounded-[36px] p-2.5 bg-gradient-to-tr from-[#9B783E] via-[#FFDF9E] to-[#6E1C16] shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#160407]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={photos[selectedPhoto].id}
                    src={photos[selectedPhoto].src}
                    alt={photos[selectedPhoto].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover object-[50%_24%] filter brightness-105 contrast-108"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#140306]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 inset-x-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#7A1C18]/80 text-[#FFF8E7] text-[11px] font-tamil font-semibold mb-1">
                    {photos[selectedPhoto].tag}
                  </span>
                  <p className="font-cinzel text-xl sm:text-2xl text-[#FFF8E7] font-bold drop-shadow">
                    {photos[selectedPhoto].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Photo Selection Tabs & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-cinzel text-xl sm:text-2xl text-amber-200 font-bold mb-4">
              Two Hearts • One Beautiful Beginning
            </h4>

            {photos.map((photo, idx) => {
              const isSelected = idx === selectedPhoto;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedPhoto(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#3D0E17] to-[#25080E] border-[#DFC59E] shadow-[0_0_20px_rgba(223,197,158,0.3)]'
                      : 'bg-[#180508]/70 border-[#DFC59E]/25 hover:border-[#DFC59E]/50'
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#DFC59E]/40">
                    <img src={photo.src} alt="" className="w-full h-full object-cover object-[50%_20%]" />
                  </div>
                  <div>
                    <span className="font-tamil text-xs text-amber-300 font-bold block">
                      {photo.tag}
                    </span>
                    <h5 className="font-cinzel text-sm sm:text-base text-[#FFF8E7] font-bold">
                      {photo.title}
                    </h5>
                    <p className="font-serif text-xs text-[#FAF0D7]/75 line-clamp-2 mt-0.5">
                      {photo.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
