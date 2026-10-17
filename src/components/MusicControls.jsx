import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingDetails } from '../config/weddingDetails';
import { audioSynth } from '../utils/audioSynth';

/**
 * Premium MusicControls Component:
 * - Plays background instrumental music (pesamale-bgm.mp3)
 * - Has graceful fallback to Web Audio API synthesizer (Mohanam Raaga) if audio file fails or is blocked
 * - Only begins after user interaction (tap-to-begin)
 * - Mute / Unmute toggle with subtle luxury pulse
 */
export default function MusicControls({ isPlaying, onToggle }) {
  const audioRef = useRef(null);
  const [useSynth, setUseSynth] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setHasInteracted(true);
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio element play interrupted or blocked, falling back to Web Audio synth', err);
          setUseSynth(true);
          audioSynth.start();
        });
      }
    } else {
      if (audio) {
        audio.pause();
      }
      if (useSynth) {
        audioSynth.stop();
      }
    }
  }, [isPlaying, useSynth]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      audioSynth.stop();
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div className="relative z-50">
      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src={weddingDetails.music.file}
        preload="auto"
        loop
        onError={() => {
          console.warn('Audio file error, enabling synth fallback');
          setUseSynth(true);
        }}
      />

      <button
        type="button"
        onClick={handleClick}
        aria-label={isPlaying ? 'Mute background ceremonial music' : 'Play background ceremonial music'}
        className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A0A04]/80 hover:bg-[#2B1006] backdrop-blur-md border border-[#E6C687]/60 text-[#FFF8E7] text-xs font-serif uppercase tracking-widest shadow-[0_4px_16px_rgba(0,0,0,0.7)] transition-all cursor-pointer"
      >
        {/* Animated Sound Wave Bars when Playing */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3.5 w-3.5 text-[#F5D98A]" aria-hidden="true">
            <span className="w-0.5 bg-current rounded-full animate-[bounce_0.8s_infinite_100ms] h-full" />
            <span className="w-0.5 bg-current rounded-full animate-[bounce_0.8s_infinite_300ms] h-2/3" />
            <span className="w-0.5 bg-current rounded-full animate-[bounce_0.8s_infinite_200ms] h-4/5" />
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#E6C687]/70" />
        )}

        <span className="text-[11px] font-medium text-[#F7E5B5] hidden sm:inline">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
      </button>
    </div>
  );
}
