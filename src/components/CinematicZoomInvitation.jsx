import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

/**
 * 100% FRESH Tamil Hindu Wedding E-Invitation Animation
 * ZERO video assets or video crops used!
 *
 * Sequence:
 * 1. Opening: Towering Temple Gopuram in close-up ZOOM with birds flying in the sky.
 * 2. Zoom Out: Temple zooms out and gets BLURRED. Bride photo animates in sharp and clear in foreground.
 * 3. Further Zoom Out: Bride photo also gets BLURRED into background. Groom photo animates in sharp and clear in foreground.
 */
export default function CinematicZoomInvitation() {
  // Stages: 0 = Temple Zoom, 1 = Zoom Out -> Bride, 2 = Further Zoom Out -> Groom
  const [stage, setStage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  // Stage durations
  const stageDurations = [6000, 6500, 7000];

  useEffect(() => {
    if (!hasStarted || isPaused) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    if (stage >= 2) return;

    const duration = stageDurations[stage];
    timerRef.current = setTimeout(() => {
      setStage((prev) => (prev < 2 ? prev + 1 : prev));
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stage, hasStarted, isPaused]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlayingAudio) {
      audio.play().catch((err) => console.warn('Audio play notice:', err));
    } else {
      audio.pause();
    }
  }, [isPlayingAudio]);

  const handleStart = () => {
    setHasStarted(true);
    setStage(0);
    setIsPaused(false);
    setIsPlayingAudio(true);
  };

  const togglePause = () => setIsPaused((prev) => !prev);
  const toggleAudio = () => setIsPlayingAudio((prev) => !prev);
  const handleReplay = () => {
    setStage(0);
    setIsPaused(false);
  };

  const stageLabels = [
    '1. கோவில் கோபுரம் (Temple Zoom)',
    '2. மணமகள் (Bride Reveal)',
    '3. மணமகன் (Groom Reveal)',
  ];

  return (
    <div className="relative min-h-svh w-screen overflow-hidden bg-[#0A0403] text-[#FFF8E7] flex flex-col items-center justify-center select-none font-sans">
      {/* Background Theater Ambient Glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 filter blur-[100px] opacity-40 scale-110"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, #98D7C8 0%, #4A150D 45%, #0A0403 95%)',
        }}
      />

      {/* Ceremonial Background Music Track */}
      <audio
        ref={audioRef}
        src="/audio/pesamale-bgm.mp3"
        preload="auto"
        loop
      />

      {/* 9:16 Fullscreen Vertical Cinema Frame */}
      <main className="relative z-10 w-full h-[100svh] sm:h-[96svh] max-w-[480px] sm:max-w-[440px] sm:aspect-[9/16] sm:rounded-[32px] overflow-hidden bg-[#98D7C8] shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_0_2px_rgba(230,198,135,0.4)] flex flex-col">
        {/* ========================================================================= */}
        {/* 1. LAYER 1: SKY & ANIMATED FLYING BIRDS */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Luminous Mint & Sunrise Sky Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 95% 75% at 20% 45%, #FFF6BF 0%, #D8EED8 35%, #96D5C7 70%, #7EC8B8 100%)',
            }}
          />

          {/* Morning Sunrise Golden Glow */}
          <div className="absolute left-[5%] top-[45%] -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[#FFF8D6] via-[#FFE28A]/45 to-transparent blur-3xl opacity-85" />

          {/* Animated Birds Flying in the Sky */}
          <motion.div
            initial={{ x: -40, y: 0, opacity: 0 }}
            animate={{
              x: [0, 120, 240],
              y: [0, -20, -35],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-[10%] top-[30%] z-5"
          >
            <div className="relative">
              {/* Bird 1 */}
              <motion.svg
                viewBox="0 0 32 18"
                className="w-4 h-2.5 text-[#1E3B30] absolute top-0 left-0"
                fill="currentColor"
                animate={{ rotate: [-3, 3, -3], scaleY: [1, 0.75, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
              </motion.svg>
              {/* Bird 2 */}
              <motion.svg
                viewBox="0 0 32 18"
                className="w-3.5 h-2 text-[#234538] absolute top-5 -left-5"
                fill="currentColor"
                animate={{ rotate: [2, -4, 2], scaleY: [1, 0.8, 1] }}
                transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
              >
                <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
              </motion.svg>
              {/* Bird 3 */}
              <motion.svg
                viewBox="0 0 32 18"
                className="w-3 h-2 text-[#2A4E3F] absolute top-9 left-2"
                fill="currentColor"
                animate={{ rotate: [-2, 3, -2], scaleY: [1, 0.7, 1] }}
                transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <path d="M 2,12 C 7,5 12,5 16,9 C 20,5 25,5 30,12 C 24,8 19,10 16,14 C 13,10 8,8 2,12 Z" />
              </motion.svg>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. LAYER 2: FRESH TEMPLE GOPURAM (Starts in ZOOM -> Zooms out & Blurs) */}
        {/* ========================================================================= */}
        {/*
          Stage 0: scale: 1.7, y: -60px, filter: blur(0px) (Temple is in Close-up Zoom & Sharp)
          Stage 1: scale: 1.05, y: 0px, filter: blur(10px) (Temple Zooms out & BLURS!)
          Stage 2: scale: 0.98, y: 15px, filter: blur(15px) (Temple Zooms out further & stays deep blurred)
        */}
        <motion.div
          animate={{
            scale: stage === 0 ? 1.7 : stage === 1 ? 1.05 : 0.98,
            y: stage === 0 ? -60 : stage === 1 ? 0 : 15,
            filter:
              stage === 0
                ? 'blur(0px) brightness(1)'
                : stage === 1
                ? 'blur(10px) brightness(0.85)'
                : 'blur(15px) brightness(0.75)',
            opacity: stage === 0 ? 1 : stage === 1 ? 0.7 : 0.45,
          }}
          transition={{
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1], // Smooth cinematic camera easing
          }}
          className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end pointer-events-none origin-bottom"
        >
          <img
            src="/fresh/temple_gopuram.jpg"
            alt="Majestic Temple Gopuram"
            className="w-full h-full object-cover object-bottom"
            loading="eager"
          />
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. LAYER 3: STAGE 0 OVERLAYS (Endless Rotating Ganesha Mandala & Title) */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {stage === 0 && (
            <motion.div
              key="stage-0-overlays"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-x-0 top-0 z-20 pt-7 px-4 flex flex-col items-center pointer-events-none text-center"
            >
              {/* Continuous Golden Rotating Ganesha Chakra SVG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 filter drop-shadow-[0_2px_10px_rgba(20,50,28,0.4)]"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#153E23]">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Lotus Petals / Chakra Rays */}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 38 * Math.cos((i * Math.PI) / 8)}
                      y2={50 + 38 * Math.sin((i * Math.PI) / 8)}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.85"
                    />
                  ))}
                  {/* Central Sacred Om / Ganesha Symbol */}
                  <circle cx="50" cy="50" r="18" fill="#FFF8D6" stroke="currentColor" strokeWidth="2" />
                  <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#153E23" fontFamily="serif">
                    卐
                  </text>
                </svg>
              </motion.div>

              {/* Invocation */}
              <p className="font-tamil text-xs font-bold tracking-widest text-[#153B22] mb-1 drop-shadow-[0_1px_3px_rgba(255,255,255,0.85)]">
                || ஸ்ரீ விநாயகர் துணை ||
              </p>

              {/* Clean Typography Title */}
              <h1 className="font-tamil text-2xl sm:text-3xl font-extrabold text-[#0F2E18] tracking-wider drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]">
                திருமண அழைப்பிதழ்
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* 4. LAYER 4: FRESH BRIDE PHOTO (Stage 1: SHARP -> Stage 2: BLURRED) */}
        {/* ========================================================================= */}
        {/*
          Stage 0: opacity: 0, scale: 0.9, y: 50px
          Stage 1: opacity: 1, scale: 1.0, y: 0px, filter: blur(0px) (Bride is Sharp & Prominent in Foreground!)
          Stage 2: opacity: 0.35, scale: 0.92, x: -30px, filter: blur(8px) (Bride also gets BLURRED as camera zooms out further!)
        */}
        <motion.div
          animate={{
            opacity: stage === 0 ? 0 : stage === 1 ? 1 : 0.35,
            scale: stage === 0 ? 0.9 : stage === 1 ? 1.0 : 0.92,
            x: stage === 2 ? -30 : 0,
            y: stage === 0 ? 60 : 0,
            filter: stage === 1 ? 'blur(0px) brightness(1)' : 'blur(8px) brightness(0.9)',
          }}
          transition={{
            duration: 1.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute inset-0 w-full h-full z-25 flex items-end justify-center pointer-events-none origin-bottom"
        >
          <img
            src="/fresh/bride_portrait.jpg"
            alt="Bride S. Priyanka"
            className="w-full h-full object-cover object-center filter drop-shadow-[0_12px_30px_rgba(15,35,20,0.5)]"
          />
        </motion.div>

        {/* Bride Typography Overlay (Active & Crisp in Stage 1) */}
        <AnimatePresence>
          {stage === 1 && (
            <motion.div
              key="bride-text-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
              className="absolute left-5 sm:left-7 top-16 sm:top-20 z-40 max-w-[70%] pointer-events-none text-left p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-[#E6C687]/40 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#F5D98A]" />
                <span className="font-tamil font-bold text-xs sm:text-sm tracking-widest text-[#F5D98A] uppercase drop-shadow">
                  மணமகள்
                </span>
              </div>

              <h2 className="font-tamil text-2xl sm:text-3xl font-extrabold text-[#FFF5DB] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                S. பிரியங்கா
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-[#E6C687] font-semibold mt-0.5">
                S. Priyanka M.Tech.
              </p>

              <p className="font-tamil text-xs text-[#FAF0D7]/90 mt-1.5 leading-snug">
                திரு. மா. சௌந்தரராஜன் - திருமதி. ச. வாசந்தி
              </p>
              <p className="font-serif text-[11px] text-[#E6C687]/80">
                Chennai
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* 5. LAYER 5: FRESH GROOM PHOTO (Stage 2: SHARP FOREGROUND REVEAL) */}
        {/* ========================================================================= */}
        {/*
          Stage 0: opacity: 0, scale: 0.9, y: 50px
          Stage 1: opacity: 0, scale: 0.9, y: 40px
          Stage 2: opacity: 1, scale: 1.0, y: 0px, filter: blur(0px) (Groom is Sharp & Prominent in Foreground!)
        */}
        <motion.div
          animate={{
            opacity: stage === 2 ? 1 : 0,
            scale: stage === 2 ? 1.0 : 0.92,
            y: stage === 2 ? 0 : 50,
            filter: stage === 2 ? 'blur(0px) brightness(1)' : 'blur(8px)',
          }}
          transition={{
            duration: 1.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute inset-0 w-full h-full z-30 flex items-end justify-center pointer-events-none origin-bottom"
        >
          <img
            src="/fresh/groom_portrait.jpg"
            alt="Groom Saravana Velu"
            className="w-full h-full object-cover object-center filter drop-shadow-[0_12px_30px_rgba(15,35,20,0.5)]"
          />
        </motion.div>

        {/* Groom Typography Overlay (Active & Crisp in Stage 2) */}
        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              key="groom-text-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
              className="absolute left-5 sm:left-7 top-16 sm:top-20 z-40 max-w-[70%] pointer-events-none text-left p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-[#E6C687]/40 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#F5D98A]" />
                <span className="font-tamil font-bold text-xs sm:text-sm tracking-widest text-[#F5D98A] uppercase drop-shadow">
                  மணமகன்
                </span>
              </div>

              <h2 className="font-tamil text-2xl sm:text-3xl font-extrabold text-[#FFF5DB] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                சரவண வேலு
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-[#E6C687] font-semibold mt-0.5">
                Saravana Velu B.E.,
              </p>

              <p className="font-tamil text-xs text-[#FAF0D7]/90 mt-1.5 leading-snug">
                திரு. சு. செந்தில்குமார் - திருமதி. செ. லட்சுமி
              </p>
              <p className="font-serif text-[11px] text-[#E6C687]/80">
                Palani
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* 6. TOP STAGE CONTROLS BAR */}
        {/* ========================================================================= */}
        {hasStarted && (
          <div className="absolute top-0 inset-x-0 z-50 p-3 sm:p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-auto flex flex-col gap-2">
            <div className="flex items-center justify-between">
              {/* Active Stage Label */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#180704]/90 backdrop-blur-md border border-[#E6C687]/40 text-xs font-tamil text-[#FFF5DB] shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{stageLabels[stage]}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleAudio}
                  aria-label={isPlayingAudio ? 'Mute' : 'Unmute'}
                  className="p-1.5 rounded-full bg-[#180704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#3D140B] cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <Volume2 className="w-3.5 h-3.5 text-[#F5D98A]" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={togglePause}
                  aria-label={isPaused ? 'Play' : 'Pause'}
                  className="p-1.5 rounded-full bg-[#180704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#F5D98A] hover:bg-[#3D140B] cursor-pointer"
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={handleReplay}
                  aria-label="Replay"
                  className="p-1.5 rounded-full bg-[#180704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#3D140B] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Stage Jump Tabs */}
            <div className="flex items-center justify-center gap-2 w-full pt-1">
              <button
                type="button"
                onClick={() => setStage(0)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-tamil font-bold border transition-all cursor-pointer ${
                  stage === 0
                    ? 'bg-[#F5D98A] text-[#1D0805] border-[#F5D98A] shadow-md'
                    : 'bg-black/50 text-white/70 border-white/20 hover:text-white'
                }`}
              >
                1. கோவில் கோபுரம்
              </button>
              <button
                type="button"
                onClick={() => setStage(1)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-tamil font-bold border transition-all cursor-pointer ${
                  stage === 1
                    ? 'bg-[#F5D98A] text-[#1D0805] border-[#F5D98A] shadow-md'
                    : 'bg-black/50 text-white/70 border-white/20 hover:text-white'
                }`}
              >
                2. மணமகள் Reveal
              </button>
              <button
                type="button"
                onClick={() => setStage(2)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-tamil font-bold border transition-all cursor-pointer ${
                  stage === 2
                    ? 'bg-[#F5D98A] text-[#1D0805] border-[#F5D98A] shadow-md'
                    : 'bg-black/50 text-white/70 border-white/20 hover:text-white'
                }`}
              >
                3. மணமகன் Reveal
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. INITIAL "TAP TO BEGIN / PLAY" OPENING SCREEN */}
        {/* ========================================================================= */}
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
                  || ஸ்ரீ விநாயகர் துணை ||
                </p>
                <h1 className="font-tamil text-2xl sm:text-3xl font-bold text-[#FFF5DB] mt-2 tracking-wide drop-shadow">
                  திருமண அழைப்பிதழ்
                </h1>
              </div>

              <div className="my-auto py-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#E6C687]/60 flex items-center justify-center bg-[#3D140B]/80 shadow-[0_0_35px_rgba(230,198,135,0.3)] mb-4">
                  <span className="font-serif text-2xl font-bold text-[#FFF5DB] tracking-wider">
                    R & P
                  </span>
                </div>
                <h2 className="font-tamil text-xl sm:text-2xl font-bold text-[#FFF8E7] leading-snug">
                  R. அர்ஜுன் & S. பிரியங்கா
                </h2>
                <p className="font-serif italic text-sm text-[#E6C687] mt-1">
                  R. Arjun & S. Priyanka
                </p>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-[#591410]/80 border border-[#E6C687]/40 text-xs font-serif text-[#FFF5DB]">
                  23rd October 2026 • Pollachi
                </div>
              </div>

              <div className="w-full pb-6 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleStart}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1D0805] font-serif font-bold text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(221,167,74,0.4)] hover:shadow-[0_12px_45px_rgba(221,167,74,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>அழைப்பிதழைத் தொடங்குக (Play Animation)</span>
                </button>
                <p className="font-tamil text-[11px] text-[#E6C687]/80">
                  🎵 மங்கள வாத்திய இசையுடன் கண்டு மகிழுங்கள்
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Arrows on sides */}
        {hasStarted && (
          <div className="absolute inset-x-0 bottom-4 z-40 px-4 flex items-center justify-between pointer-events-auto">
            <button
              type="button"
              onClick={() => setStage((prev) => (prev > 0 ? prev - 1 : 2))}
              className="p-2.5 rounded-full bg-[#160604]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#FAF0D7] hover:bg-[#3D140B] transition-all cursor-pointer flex items-center gap-1 text-xs font-tamil shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 text-[#F5D98A]" />
              <span>முந்தையது</span>
            </button>

            <button
              type="button"
              onClick={() => setStage((prev) => (prev < 2 ? prev + 1 : 0))}
              className="p-2.5 rounded-full bg-[#160604]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#FAF0D7] hover:bg-[#3D140B] transition-all cursor-pointer flex items-center gap-1 text-xs font-tamil shadow-lg"
            >
              <span>அடுத்தது</span>
              <ChevronRight className="w-4 h-4 text-[#F5D98A]" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
