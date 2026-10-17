import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FileText,
  Sliders,
  Download,
  Sparkles,
} from 'lucide-react';

import Scene1TempleIntro from './scenes/Scene1TempleIntro';
import Scene2BridePhoto from './scenes/Scene2BridePhoto';
import Scene3GroomPhoto from './scenes/Scene3GroomPhoto';
import Scene4CoupleReveal from './scenes/Scene4CoupleReveal';
import Scene5DarkCorridor from './scenes/Scene5DarkCorridor';
import Scene6WeddingDetails from './scenes/Scene6WeddingDetails';
import FullDetailsModal from './FullDetailsModal';

export default function InvitationTemplate({
  config,
  onOpenEditor,
  onOpenExport,
}) {
  const [currentScene, setCurrentScene] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const totalScenes = 6;
  const sceneDurations = [
    (config?.sceneDurations?.scene1Temple || 6.5) * 1000,
    (config?.sceneDurations?.scene2Bride || 6.5) * 1000,
    (config?.sceneDurations?.scene3Groom || 6.5) * 1000,
    (config?.sceneDurations?.scene4Couple || 7.0) * 1000,
    (config?.sceneDurations?.scene5Corridor || 6.0) * 1000,
    (config?.sceneDurations?.scene6Details || 8.5) * 1000,
  ];

  const sceneTitles = [
    'கோபுரம் (Temple Intro)',
    'மணமகள் (Bride)',
    'மணமகன் (Groom)',
    'மணமக்கள் (Couple)',
    'மண்டபம் (Corridor)',
    'சுபமுகூர்த்தம் (Details)',
  ];

  // Auto-advance scene timer
  useEffect(() => {
    if (!hasStarted || isPaused || isDetailsOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    // Stop auto-advancing at final scene to let user explore details
    if (currentScene >= totalScenes - 1) {
      return;
    }

    const duration = sceneDurations[currentScene] || 6500;
    timerRef.current = setTimeout(() => {
      setCurrentScene((prev) => (prev < totalScenes - 1 ? prev + 1 : prev));
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentScene, hasStarted, isPaused, isDetailsOpen]);

  // Audio Playback handler
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingAudio) {
      audio.play().catch((err) => {
        console.warn('Audio play restricted by browser:', err);
      });
    } else {
      audio.pause();
    }
  }, [isPlayingAudio]);

  const handleStart = () => {
    setHasStarted(true);
    setIsPaused(false);
    setIsPlayingAudio(true);
  };

  const togglePause = (e) => {
    if (e) e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const toggleAudio = (e) => {
    if (e) e.stopPropagation();
    setIsPlayingAudio((prev) => !prev);
  };

  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    setCurrentScene(0);
    setIsPaused(false);
  };

  const handleSelectScene = (index) => {
    setCurrentScene(index);
    setIsPaused(false);
  };

  return (
    <div className="relative min-h-svh w-screen overflow-hidden bg-[#0A0403] text-[#FFF8E7] flex flex-col items-center justify-center select-none">
      {/* Background Theater Glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 filter blur-[90px] opacity-35 scale-110"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, #98D7C8 0%, #4A150D 45%, #0A0403 95%)',
        }}
      />

      {/* Synchronized Sacred Ceremonial Audio */}
      <audio
        ref={audioRef}
        src={config?.music?.file || '/audio/pesamale-bgm.mp3'}
        preload="auto"
        loop
      />

      {/* 9:16 Fullscreen Vertical Frame (Matching Video Format Exactly) */}
      <main className="relative z-10 w-full h-[100svh] sm:h-[96svh] max-w-[480px] sm:max-w-[440px] sm:aspect-[9/16] sm:rounded-[32px] overflow-hidden bg-black shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_0_2px_rgba(230,198,135,0.4)] flex flex-col">
        {/* Top Controls Overlay */}
        {hasStarted && (
          <header className="absolute top-0 inset-x-0 z-50 p-3 sm:p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-auto flex flex-col gap-2">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-1.5">
              {/* Scene Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[11px] font-tamil text-[#FFF5DB] shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentScene + 1}/{totalScenes}: {sceneTitles[currentScene]}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5">
                {/* Audio Toggle */}
                <button
                  type="button"
                  onClick={toggleAudio}
                  aria-label={isPlayingAudio ? 'Mute Audio' : 'Unmute Audio'}
                  className="p-1.5 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#3D140B] transition-all cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <Volume2 className="w-3.5 h-3.5 text-[#F5D98A]" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                  )}
                </button>

                {/* Pause / Play */}
                <button
                  type="button"
                  onClick={togglePause}
                  aria-label={isPaused ? 'Resume' : 'Pause'}
                  className="p-1.5 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#F5D98A] hover:bg-[#3D140B] transition-all cursor-pointer"
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                {/* Replay */}
                <button
                  type="button"
                  onClick={handleReplay}
                  aria-label="Replay Invitation"
                  className="p-1.5 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#3D140B] transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* Details Modal */}
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(true)}
                  aria-label="View Details"
                  className="p-1.5 rounded-full bg-[#591410]/90 backdrop-blur-md border border-[#E6C687]/50 text-[#FFF5DB] hover:bg-[#7A1C18] transition-all cursor-pointer"
                  title="பத்திரிகை விவரங்கள்"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F5D98A]" />
                </button>
              </div>
            </div>

            {/* Segmented Timeline Progress Bars */}
            <div className="flex items-center gap-1 w-full px-0.5">
              {Array.from({ length: totalScenes }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectScene(idx)}
                  className="h-1 flex-1 rounded-full overflow-hidden bg-white/20 transition-all cursor-pointer"
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      idx < currentScene
                        ? 'w-full bg-[#F5D98A]'
                        : idx === currentScene
                        ? 'w-full bg-[#F5D98A] animate-pulse'
                        : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </header>
        )}

        {/* Initial "Tap to Open / Play" Opening Screen */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-50 bg-gradient-to-b from-[#180806]/95 via-[#2C0C08]/90 to-[#120403]/98 backdrop-blur-sm flex flex-col items-center justify-between p-6 sm:p-8 text-center"
            >
              <div className="pt-4 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-[#E6C687]/50 flex items-center justify-center mb-2 bg-[#42140D]/50 text-[#F5D98A]">
                  <Sparkles className="w-5 h-5 text-[#F5D98A]" />
                </div>
                <p className="font-tamil text-xs tracking-widest text-[#E6C687] font-bold">
                  || {config?.invitationMessage?.invocation || 'ஸ்ரீ விநாயகர் துணை'} ||
                </p>
                <h1 className="font-tamil text-2xl sm:text-3xl font-bold text-[#FFF5DB] mt-2 tracking-wide drop-shadow">
                  திருமண அழைப்பிதழ்
                </h1>
              </div>

              <div className="my-auto py-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#E6C687]/60 flex items-center justify-center bg-[#3D140B]/80 shadow-[0_0_35px_rgba(230,198,135,0.3)] mb-4">
                  <span className="font-serif text-2xl font-bold text-[#FFF5DB] tracking-wider">
                    {config?.couple?.monogram || 'S & D'}
                  </span>
                </div>
                <h2 className="font-tamil text-xl sm:text-2xl font-bold text-[#FFF8E7] leading-snug">
                  {config?.couple?.tamilNames}
                </h2>
                <p className="font-serif italic text-sm text-[#E6C687] mt-1">
                  {config?.couple?.englishNames}
                </p>

                <div className="mt-4 px-4 py-1.5 rounded-full bg-[#591410]/80 border border-[#E6C687]/40 text-xs font-serif text-[#FFF5DB]">
                  {config?.wedding?.dayOrdinal} {config?.wedding?.monthYear} • {config?.venue?.city}
                </div>
              </div>

              <div className="w-full pb-6 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleStart}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1D0805] font-serif font-bold text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(221,167,74,0.4)] hover:shadow-[0_12px_45px_rgba(221,167,74,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>அழைப்பிதழைத் திறக்க (Play Invitation)</span>
                </button>
                <p className="font-tamil text-[11px] text-[#E6C687]/80">
                  🎵 மங்கள வாத்திய இசையுடன் கண்டு மகிழுங்கள்
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 6 Recreated Cinematic Scenes with Smooth Crossfade */}
        <div className="relative w-full h-full flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {currentScene === 0 && (
              <motion.div
                key="scene-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene1TempleIntro config={config} />
              </motion.div>
            )}

            {currentScene === 1 && (
              <motion.div
                key="scene-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene2BridePhoto config={config} isActive={currentScene === 1} />
              </motion.div>
            )}

            {currentScene === 2 && (
              <motion.div
                key="scene-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene3GroomPhoto config={config} isActive={currentScene === 2} />
              </motion.div>
            )}

            {currentScene === 3 && (
              <motion.div
                key="scene-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene4CoupleReveal config={config} isActive={currentScene === 3} />
              </motion.div>
            )}

            {currentScene === 4 && (
              <motion.div
                key="scene-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene5DarkCorridor config={config} isActive={currentScene === 4} />
              </motion.div>
            )}

            {currentScene === 5 && (
              <motion.div
                key="scene-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Scene6WeddingDetails
                  config={config}
                  onOpenDetails={() => setIsDetailsOpen(true)}
                  isActive={currentScene === 5}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Full Traditional Patrikai Details Modal */}
        <FullDetailsModal
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          config={config}
        />
      </main>

    </div>
  );
}
