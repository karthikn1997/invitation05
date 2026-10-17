import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Share2, Check, Compass, X, RotateCcw, Sparkles, Volume2, VolumeX } from 'lucide-react';

export const scenesList = [
  { id: 'scene-invitation', number: '01', label: 'The Invitation' },
  { id: 'scene-couple-bond', number: '02', label: 'Couple Story' },
  { id: 'scene-reception-wedding', number: '03', label: 'Reception & Wedding' },
  { id: 'scene-families', number: '04', label: 'Tamil Patrikai' },
  { id: 'scene-journey', number: '05', label: 'Event Schedule' },
  { id: 'scene-countdown', number: '06', label: 'Countdown' },
  { id: 'scene-venue', number: '07', label: 'Venue & Map' },
  { id: 'scene-rsvp', number: '08', label: 'RSVP & Wishes' },
];

export default function NavigationAndShare({
  onReplay,
  onBless,
  isMuted = false,
  onToggleMute,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = scenesList.length - 1; i >= 0; i--) {
        const el = document.getElementById(scenesList[i].id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          setActiveIdx(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToScene = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${weddingData?.couple?.groomName || 'K. Karthik'} & ${weddingData?.couple?.brideName || 'S. Priyanka'} — Wedding Invitation`,
      text: `Warmly inviting you to the wedding of ${weddingData?.couple?.groomName} & ${weddingData?.couple?.brideName} on ${weddingData?.date?.englishDate} at ${weddingData?.venue?.name}, ${weddingData?.venue?.address?.city || 'Chennai'}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (e) {}
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const currentScene = scenesList[activeIdx] || scenesList[0];

  return (
    <>
      {/* Unified Top Navigation Header (Zero Overlap, Clean Spacing) */}
      <header className="fixed top-2 sm:top-4 left-2.5 right-2.5 sm:left-6 sm:right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Left Actions: Replay & Blessings */}
        <div className="flex items-center gap-1 sm:gap-2 pointer-events-auto shrink-0">
          {onReplay && (
            <motion.button
              type="button"
              onClick={onReplay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Replay Cinematic Intro"
              className="py-1 px-2 sm:py-1.5 sm:px-3 rounded-full bg-black/85 hover:bg-black/95 backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] font-serif text-[11px] font-semibold flex items-center gap-1 shadow-lg transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#F5D98A]" />
              <span className="hidden sm:inline">திரைப்படம்</span>
              <span className="hidden xs:inline sm:hidden text-[10px] opacity-80">Replay</span>
            </motion.button>
          )}

          {onBless && (
            <motion.button
              type="button"
              onClick={onBless}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Flower Blessings Shower"
              className="py-1 px-2 sm:py-1.5 sm:px-3 rounded-full bg-gradient-to-r from-[#7A1C18]/90 to-[#5A1015]/90 hover:from-[#92241F] hover:to-[#6E161B] backdrop-blur-md border border-[#E6C687]/60 text-[#FFF5DB] font-serif text-[11px] font-semibold flex items-center gap-1 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="text-[11px]">மலர் மழை</span>
            </motion.button>
          )}
        </div>

        {/* Right Actions: Audio, Share & Scene Pill */}
        <div className="flex items-center gap-1 sm:gap-2 pointer-events-auto shrink-0">
          {onToggleMute && (
            <motion.button
              type="button"
              onClick={onToggleMute}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              className="p-1.5 sm:p-2 rounded-full bg-black/85 hover:bg-black/95 backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] shadow-md cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#F5D98A]" />
              )}
            </motion.button>
          )}

          {/* Share Button */}
          <motion.button
            type="button"
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Share Invitation"
            className="p-1.5 sm:py-1.5 sm:px-2.5 rounded-full bg-[#200A0E]/90 hover:bg-[#320F16] backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] font-serif text-xs font-semibold shadow-md flex items-center gap-1 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="hidden sm:inline text-green-300">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#E6C687]" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </motion.button>

          {/* Scene Indicator & Menu Toggle */}
          <motion.button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isMenuOpen}
            aria-label="Open Invitation Scenes Menu"
            className="inline-flex items-center gap-1 sm:gap-1.5 py-1 px-2 sm:py-1.5 sm:px-3 rounded-full bg-[#7A1C18] text-[#FCE8C5] border border-[#E6C687]/70 font-serif text-[11px] sm:text-xs uppercase tracking-wider shadow-md cursor-pointer"
          >
            <span className="font-bold tracking-tight">
              {currentScene.number}/{String(scenesList.length).padStart(2, '0')}
            </span>
            <span className="hidden md:inline text-[#F3D5A3]">• {currentScene.label}</span>
            {isMenuOpen ? (
              <X className="w-3 h-3 text-[#F5D98A]" />
            ) : (
              <Compass className="w-3 h-3 text-[#F5D98A]" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Side Vertical Progress Dots (xl screens) */}
      <div
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2.5 pointer-events-auto"
        aria-label="Invitation Scene Progress"
      >
        {scenesList.map((scene, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => scrollToScene(scene.id)}
              title={`${scene.number}. ${scene.label}`}
              aria-label={`Jump to ${scene.label}`}
              className="group p-1 cursor-pointer focus:outline-none"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E6C687] border-[#FFF8E7] scale-125 shadow-[0_0_12px_#FFD700]'
                    : 'bg-[#1C0907]/80 border-[#E6C687]/40 group-hover:bg-[#E6C687]/60'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Full-Screen / Modal Scene Navigator Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-[36px] bg-gradient-to-b from-[#240A0F] via-[#160508] to-[#1F070C] border-2 border-[#E6C687]/65 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#350F16] border border-[#E6C687]/40 text-[#F5D98A] hover:bg-[#4C1520] transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <span className="font-display text-[10px] uppercase tracking-[0.28em] text-[#E6C687] font-semibold">
                  JUMP TO SCENE
                </span>
                <h3 className="font-serif text-2xl text-[#FFF8E7] font-bold mt-1">
                  திருமண விழா பகுதிகள்
                </h3>
              </div>

              {/* Scenes List */}
              <div className="space-y-2.5">
                {scenesList.map((scene, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => scrollToScene(scene.id)}
                      className={`w-full p-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#7A1C18] to-[#501318] border-[#FFD700] text-[#FFF8E7] shadow-lg scale-[1.02]'
                          : 'bg-[#120407]/70 hover:bg-[#2A0C12] border-[#E6C687]/30 text-[#FAF0D7]/90'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-xs text-[#E6C687] w-6 text-left">
                          {scene.number}
                        </span>
                        <span className="font-serif font-semibold text-sm sm:text-base">
                          {scene.label}
                        </span>
                      </div>
                      {isActive && <span className="text-xs text-yellow-400">● Active</span>}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
