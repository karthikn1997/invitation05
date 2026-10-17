import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer({ isPlaying, onToggle }) {
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  // Synced play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Audio play error, using synth fallback if needed:', error);
          startSynthFallback();
        });
      }
    } else {
      audio.pause();
      stopSynthFallback();
    }
  }, [isPlaying]);

  // Mohanam / Traditional Melodic Synth Fallback
  const startSynthFallback = () => {
    if (!weddingData.music.enableSynthesizedFallback) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!synthRef.current) synthRef.current = new AudioCtx();
      const ctx = synthRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 440.0, 392.0];
      let step = 0;

      const playNextNote = () => {
        if (!synthRef.current || synthRef.current.state !== 'running') return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.6);

        step++;
        if (isPlaying) {
          setTimeout(playNextNote, 600);
        }
      };

      playNextNote();
    } catch (e) {
      console.warn('Synth error:', e);
    }
  };

  const stopSynthFallback = () => {
    if (synthRef.current && synthRef.current.state === 'running') {
      synthRef.current.suspend().catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
      <audio
        ref={audioRef}
        src={weddingData.music.audioSrc}
        loop
        preload="auto"
      />

      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        className={`group relative p-3.5 sm:p-4 rounded-full border shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer ${
          isPlaying
            ? 'bg-[#7A1C18] border-[#E6C687] text-[#FFF8E7] shadow-[0_0_25px_rgba(230,198,135,0.6)]'
            : 'bg-[#180805]/90 backdrop-blur-md border-[#E6C687]/40 text-[#E6C687] hover:border-[#E6C687]'
        }`}
      >
        {/* Pulsing ring when playing */}
        {isPlaying && (
          <motion.div
            animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border-2 border-[#E6C687]"
          />
        )}

        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-70" />
        )}
      </motion.button>
    </div>
  );
}
