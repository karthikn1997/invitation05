import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayRequested, onTriggerAudio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const droneNodesRef = useRef([]);

  // Traditional Indian scale (Mohanam / Bhupali: Sa, Ri2, Ga3, Pa, Dha2, Sa')
  // Frequencies for a soothing warm flute & chime scale:
  const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
  const melodyPattern = [
    0, 2, 3, 4, 5, 4, 3, 2,
    3, 4, 5, 7, 5, 4, 3, 0,
    2, 3, 4, 3, 2, 0, -1, 0,
    3, 4, 5, 4, 3, 2, 0, 0
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playNote = (freq, duration, type = 'sine', gainLevel = 0.08) => {
    if (!audioCtxRef.current || !isPlaying) return;
    const ctx = audioCtxRef.current;
    
    // Primary Tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.value = 1600;

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel, ctx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);

    // Auspicious bell harmonic
    if (Math.random() > 0.4) {
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chimeOsc.type = 'triangle';
      chimeOsc.frequency.setValueAtTime(freq * 2, ctx.currentTime);
      chimeGain.gain.setValueAtTime(0.02, ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration * 0.8);
      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chimeOsc.start();
      chimeOsc.stop(ctx.currentTime + duration * 0.8);
    }
  };

  // Tanpura drone (Sa - Pa harmonic base)
  const startDrone = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    stopDrone();

    const rootFreq = 130.81; // Low C3
    const fifthFreq = 196.00; // Low G3

    [rootFreq, fifthFreq, rootFreq * 2].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.015 / (idx + 1), ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      droneNodesRef.current.push({ osc, gain });
    });
  };

  const stopDrone = () => {
    droneNodesRef.current.forEach(({ osc, gain }) => {
      try {
        gain.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => osc.stop(), 300);
      } catch (e) {
        // ignore already stopped
      }
    });
    droneNodesRef.current = [];
  };

  const startMusicLoop = () => {
    initAudio();
    startDrone();
    let step = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const noteIdx = melodyPattern[step % melodyPattern.length];
      if (noteIdx >= 0 && noteIdx < scale.length) {
        const freq = scale[noteIdx];
        playNote(freq, 0.9, 'sine', 0.09);
      }
      step++;
    }, 450);
  };

  const stopMusicLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stopDrone();
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusicLoop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startMusicLoop();
    }
  };

  useEffect(() => {
    if (isAutoPlayRequested && !isPlaying) {
      setIsPlaying(true);
      startMusicLoop();
    }
  }, [isAutoPlayRequested]);

  useEffect(() => {
    return () => {
      stopMusicLoop();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Visual equalizer animation pill */}
      <div
        className={`backdrop-blur-md px-3.5 py-2 rounded-full border border-amber-400/40 shadow-xl transition-all duration-300 flex items-center gap-2.5 ${
          isPlaying
            ? 'bg-[#2a0810]/90 text-amber-200'
            : 'bg-[#1b0308]/75 text-amber-200/60'
        }`}
      >
        <div className="flex items-center gap-1 h-4">
          <span
            className={`w-0.5 bg-gradient-to-t from-amber-500 to-yellow-200 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-4' : 'h-1'
            }`}
          />
          <span
            className={`w-0.5 bg-gradient-to-t from-amber-500 to-yellow-200 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3 delay-75' : 'h-1'
            }`}
          />
          <span
            className={`w-0.5 bg-gradient-to-t from-amber-500 to-yellow-200 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-5 delay-150' : 'h-1'
            }`}
          />
          <span
            className={`w-0.5 bg-gradient-to-t from-amber-500 to-yellow-200 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-2 delay-100' : 'h-1'
            }`}
          />
        </div>

        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
          className="flex items-center gap-1.5 font-serif-classic text-xs tracking-wider uppercase hover:text-yellow-300 transition-colors"
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span className="hidden sm:inline">நாதஸ்வரம் மங்கல இசை</span>
              <span className="sm:hidden">இசை</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-amber-400/70" />
              <span>இசை இயங்க</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
