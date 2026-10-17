import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FileText,
  MapPin,
  Calendar,
  Share2,
  Sparkles,
  Sliders,
  Download,
  ChevronDown,
  Clock,
  Heart,
  Users,
  ArrowUp,
} from 'lucide-react';
import Countdown from './Countdown';
import PetalsParticleCanvas from './PetalsParticleCanvas';
import FullDetailsModal from './FullDetailsModal';
import LongScrollableInvitationWebsite from './LongScrollableInvitationWebsite';

const TOTAL_DURATION = 25.5; // 25.5 seconds continuous timeline

/**
 * RealisticFlappingBird:
 * A lifelike flying bird with natural wing flapping mechanics and body bobbing.
 */
function RealisticBird({ size = 22, color = '#153625', flapSpeed = 0.28, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -3.5, 0] }}
      transition={{ duration: flapSpeed, repeat: Infinity, ease: 'easeInOut', delay }}
      className="relative flex items-center justify-center pointer-events-none select-none"
      style={{ width: size, height: size * 0.55 }}
    >
      <svg viewBox="0 0 36 20" className="w-full h-full overflow-visible" fill={color}>
        {/* Left Wing - rapid authentic flap */}
        <motion.path
          d="M 18,11 C 13,4 7,2 1,5 C 6,8 13,11 18,12 Z"
          style={{ transformOrigin: '18px 11px' }}
          animate={{
            rotate: [-28, 32, -28],
            scaleY: [1, 0.45, 1],
          }}
          transition={{
            duration: flapSpeed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        />

        {/* Right Wing - symmetric flap */}
        <motion.path
          d="M 18,11 C 23,4 29,2 35,5 C 30,8 23,11 18,12 Z"
          style={{ transformOrigin: '18px 11px' }}
          animate={{
            rotate: [28, -32, 28],
            scaleY: [1, 0.45, 1],
          }}
          transition={{
            duration: flapSpeed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        />

        {/* Bird Body & Tail */}
        <ellipse cx="18" cy="11.5" rx="3.5" ry="1.6" />
        <polygon points="18,12 16,17 20,17" />
      </svg>
    </motion.div>
  );
}

/**
 * CinematicWeddingMaster:
 * A complete, continuous, cinematic animated wedding invitation website.
 * No separate image screens or Next/Previous buttons.
 * Single master continuous timeline from 0.0s to 38.0s.
 */
export default function CinematicWeddingMaster({
  config,
  onOpenEditor,
  onOpenExport,
}) {
  const isSkipOrDetails = typeof window !== 'undefined' && (() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'details' || params.get('skip') === 'true';
  })();

  const [currentTime, setCurrentTime] = useState(isSkipOrDetails ? 25.5 : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(isSkipOrDetails);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const audioRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const scrollContainerRef = useRef(null);

  // Master Continuous Animation Clock (RequestAnimationFrame)
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const tick = (now) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + delta;
          if (next >= TOTAL_DURATION) {
            // Rest gracefully on Details & Interactive Finale
            setIsPlaying(false);
            return TOTAL_DURATION;
          }
          return next;
        });
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Handle start experience with sound
  const handleStartWithAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play().then(() => {
        setIsAudioActive(true);
      }).catch(() => {});
    }
    setIsMuted(false);
    setIsPlaying(true);
    setHasStarted(true);
  };

  // Automatic Audio Lifecycle & Global User Gesture Unlock
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;

    // 1. Attempt immediate autoplay on mount
    audio.play().then(() => {
      setIsMuted(false);
      setIsAudioActive(true);
      setIsPlaying(true);
      setHasStarted(true);
    }).catch(() => {
      // Browser autoplay policy requires user interaction before audio starts
      setIsAudioActive(false);
    });

    // 2. Global interaction handler: start audio + film on ANY user gesture anywhere on screen
    const handleGesture = () => {
      if (audio && !isMuted) {
        audio.muted = false;
        if (audio.paused) {
          audio.play().then(() => {
            setIsAudioActive(true);
          }).catch(() => {});
        } else {
          setIsAudioActive(true);
        }
      }
      setIsPlaying(true);
      setHasStarted(true);
    };

    const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'];
    events.forEach((evt) => {
      window.addEventListener(evt, handleGesture, { passive: true, capture: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleGesture, { capture: true });
      });
    };
  }, [isMuted]);

  // Keep audio in sync with timeline during film playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentTime < TOTAL_DURATION && isPlaying && !isMuted) {
      if (audio.paused && isAudioActive) {
        audio.play().catch(() => {});
      }
      if (audio.duration && !isNaN(audio.duration)) {
        const target = currentTime % audio.duration;
        if (Math.abs(audio.currentTime - target) > 0.8) {
          audio.currentTime = target;
        }
      }
    }
  }, [isPlaying, currentTime, isMuted, isAudioActive]);

  const togglePlay = () => {
    setIsPlaying((p) => {
      const next = !p;
      const audio = audioRef.current;
      if (audio) {
        if (next) {
          if (!isMuted) audio.play().catch(() => {});
        } else {
          audio.pause();
        }
      }
      return next;
    });
  };

  const handleReplay = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setHasStarted(true);
    setIsMuted(false);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.muted = false;
      audio.play().then(() => setIsAudioActive(true)).catch(() => {});
    }
  };

  // One-click Mute / Unmute & Play
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // Currently muted -> Unmute & Play
      setIsMuted(false);
      audio.muted = false;
      audio.play().then(() => {
        setIsAudioActive(true);
      }).catch(() => {});
    } else {
      // Currently playing/unmuted -> Mute & Pause
      setIsMuted(true);
      audio.muted = true;
      audio.pause();
    }
  };

  const handleScrub = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = newTime % audio.duration;
    }
  };

  // Timeline Progress Percentage
  const progressPercent = (currentTime / TOTAL_DURATION) * 100;

  // Scene Identification
  const t = currentTime;
  let activeSceneName = 'கோவில் கோபுரம் (Opening Temple)';
  if (t >= 6.0 && t < 12.0) activeSceneName = 'மணமகள் (Bride Reveal)';
  else if (t >= 12.0 && t < 18.0) activeSceneName = 'மணமகன் (Groom Reveal)';
  else if (t >= 18.0 && t < 20.0) activeSceneName = 'மண்டபம் (Temple Mandapam)';
  else if (t >= 20.0 && t < 23.8) activeSceneName = 'மணமக்கள் (Couple Reveal)';
  else if (t >= 23.8 && t < 24.6) activeSceneName = 'கதவு திறப்பு (Temple Door Opening)';
  else if (t >= 24.6) activeSceneName = 'சுபமுகூர்த்தம் (Wedding Details)';

  // Format time mm:ss
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Google Calendar URL
  const formatCal = (iso) => (iso ? new Date(iso).toISOString().replace(/-|:|\.\d\d\d/g, '') : '');
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    (config?.couple?.englishNames || 'Wedding') + ' — Subamuhurtham'
  )}&dates=${formatCal(config?.wedding?.isoDateTime)}/${formatCal(config?.wedding?.calendarEndIso)}&details=${encodeURIComponent(
    `Subamuhurtham ceremony of ${config?.couple?.englishNames} at ${config?.venue?.name}, ${config?.venue?.city}.`
  )}&location=${encodeURIComponent(config?.venue?.fullAddress || '')}`;

  // WhatsApp share URL
  const shareText = encodeURIComponent(
    `${config?.share?.whatsappText || 'Warmly inviting you to our wedding: '}\n\n🏛️ மண்டபம்: ${config?.venue?.tamilName} (${config?.venue?.city})\n📅 தேதி: ${config?.wedding?.dayOrdinal} ${config?.wedding?.monthYear}\n⏰ முகூர்த்தம்: ${config?.wedding?.muhurthamTimeFormatted}\n\n👉 அழைப்பிதழ் காண்க: ${typeof window !== 'undefined' ? window.location.href : ''}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  // =========================================================================
  // CONTINUOUS ANIMATION CALCULATIONS (Evaluated smoothly at every frame t)
  // =========================================================================

  // 1. Temple Gopuram Transform & Blur
  // Starts in closeup (1.42x), holds for 2 seconds, then smoothly zooms out to a comfortable wide view (1.18x)
  let templeScale = 1.42;
  let templeBlur = 0;
  let templeOpacity = 1;
  let templeY = 0;
  const templeX = 5.5; // Centers temple gopuram axis horizontally (5.5% rightward shift)

  if (t < 2.0) {
    // Hold in closeup framing for 2 seconds
    templeScale = 1.42;
    templeY = 0;
    templeBlur = 0;
    templeOpacity = 1;
  } else if (t >= 2.0 && t < 5.8) {
    // Gentle cinematic zoom-out (1.42 -> 1.18) so it stays majestic and covers bottom fully
    const prog = (t - 2.0) / 3.8;
    const ease = prog < 0.5 ? 2 * prog * prog : 1 - Math.pow(-2 * prog + 2, 2) / 2;
    templeScale = 1.42 - ease * 0.24; // 1.42 -> 1.18
    templeY = 0;
    templeBlur = 0;
    templeOpacity = 1;
  } else if (t >= 5.8 && t < 12.0) {
    const prog = (t - 5.8) / 6.2;
    templeScale = 1.18; // Kept at 1.18 so bottom is 100% covered behind bride
    templeY = 0;
    templeBlur = prog * 9; // 0 -> 9px
    templeOpacity = 1 - prog * 0.3; // 1 -> 0.7
  } else if (t >= 12.0 && t < 18.0) {
    const prog = (t - 12.0) / 6.0;
    templeScale = 1.18;
    templeY = 0;
    templeBlur = 9 + prog * 5; // 9 -> 14px
    templeOpacity = 0.7 - prog * 0.25; // 0.7 -> 0.45
  } else {
    const prog = Math.min(1, (t - 18.0) / 2.0);
    templeOpacity = 0.45 * (1 - prog);
    templeBlur = 14;
    templeScale = 1.18;
    templeY = 0;
  }

  // 2. Scene 1 Chakra & Title Opacity
  // Visible 0s - 5.2s, fades out by 6.0s
  let scene1ElementsOpacity = 1;
  if (t >= 5.0 && t <= 6.2) {
    scene1ElementsOpacity = Math.max(0, 1 - (t - 5.0) / 1.2);
  } else if (t > 6.2) {
    scene1ElementsOpacity = 0;
  }

  // 3. Bride Photo Transform & Opacity
  // 0s-5.8s: opacity 0
  // 5.8s-7.5s: reveals in (scale 0.94 -> 1.0, y 50px -> 0px, opacity 0 -> 1, blur 0)
  // 7.5s-12.0s: sharp foreground, gentle breathing scale
  // 12.0s-14.0s: shifts to background (blur 0 -> 7px, opacity 1 -> 0.35, x 0 -> -35px)
  // 14.0s-18.0s: softly blurred in background
  // 18.0s-20.0s: fades out as Couple Palace composition arrives
  let brideOpacity = 0;
  let brideScale = 0.94;
  let brideY = 50;
  let brideX = 0;
  let brideBlur = 0;

  if (t < 5.8) {
    brideOpacity = 0;
  } else if (t >= 5.8 && t < 7.5) {
    const prog = (t - 5.8) / 1.7;
    brideOpacity = prog;
    brideScale = 0.89 + prog * 0.05; // 0.89 -> 0.94
    brideY = 28 + 40 * (1 - prog); // enters and lands lowered down
    brideX = 35; // Positioned on the RIGHT side
    brideBlur = 0;
  } else if (t >= 7.5 && t < 12.0) {
    const prog = (t - 7.5) / 4.5;
    brideOpacity = 1;
    brideScale = 0.94 + Math.sin(prog * Math.PI) * 0.012;
    brideY = 28; // Lowered down
    brideX = 35; // Comfortably on the RIGHT side
    brideBlur = 0;
  } else if (t >= 12.0 && t < 14.0) {
    const prog = (t - 12.0) / 2.0;
    brideOpacity = 1 - prog * 0.15; // 1.0 -> 0.85 (clearly visible in background!)
    brideScale = 0.94 - prog * 0.04; // 0.94 -> 0.90
    brideX = 35 + prog * 5; // stays on the RIGHT side (35 -> 40px)
    brideBlur = prog * 2.5; // gentle, light 2.5px bokeh blur
    brideY = 28; // Lowered down
  } else if (t >= 14.0 && t < 18.0) {
    brideOpacity = 0.85; // Clearly visible in background on the RIGHT!
    brideScale = 0.90;
    brideX = 40; // Standing on the RIGHT side behind groom
    brideBlur = 2.5; // Light cinematic blur
    brideY = 28; // Lowered down
  } else if (t >= 18.0 && t < 20.0) {
    const prog = (t - 18.0) / 2.0;
    brideOpacity = 0.85 * (1 - prog);
    brideScale = 0.90;
    brideX = 40;
    brideBlur = 2.5 + prog * 3;
    brideY = 28;
  } else {
    brideOpacity = 0;
  }

  // Bride Typography Opacity (6.2s to 11.8s)
  let brideTextOpacity = 0;
  if (t >= 6.2 && t < 7.2) {
    brideTextOpacity = (t - 6.2) / 1.0;
  } else if (t >= 7.2 && t < 11.6) {
    brideTextOpacity = 1;
  } else if (t >= 11.6 && t < 12.5) {
    brideTextOpacity = Math.max(0, 1 - (t - 11.6) / 0.9);
  }

  // 4. Groom Photo Transform & Opacity
  // Positioned clearly on the LEFT side of the screen, lowered down
  let groomOpacity = 0;
  let groomScale = 0.88;
  let groomY = 68;
  let groomX = -105; // Shifted clearly to the LEFT side
  let groomBlur = 0;

  if (t < 11.8) {
    groomOpacity = 0;
  } else if (t >= 11.8 && t < 13.5) {
    const prog = (t - 11.8) / 1.7;
    groomOpacity = prog;
    groomScale = 0.88 + prog * 0.05; // 0.88 -> 0.93
    groomY = 28 + 40 * (1 - prog); // enters and lands lowered down
    groomX = -105; // Smoothly enters on the LEFT
    groomBlur = 0;
  } else if (t >= 13.5 && t < 18.0) {
    const prog = (t - 13.5) / 4.5;
    groomOpacity = 1;
    groomScale = 0.93 + Math.sin(prog * Math.PI) * 0.012;
    groomY = 28; // Lowered down
    groomX = -105; // Steady on the LEFT
    groomBlur = 0;
  } else if (t >= 18.0 && t < 20.0) {
    const prog = (t - 18.0) / 2.0;
    groomOpacity = 1 - prog;
    groomScale = 0.93;
    groomY = 28;
    groomX = -105;
  } else {
    groomOpacity = 0;
  }

  // Groom Typography Opacity (12.2s to 17.8s)
  let groomTextOpacity = 0;
  if (t >= 12.2 && t < 13.2) {
    groomTextOpacity = (t - 12.2) / 1.0;
  } else if (t >= 13.2 && t < 17.6) {
    groomTextOpacity = 1;
  } else if (t >= 17.6 && t < 18.5) {
    groomTextOpacity = Math.max(0, 1 - (t - 17.6) / 0.9);
  }

  // 5. Scene 4 Couple Reveal & Door-Opening Transition (17.8s - 27.5s)
  let coupleSceneOpacity = 0;
  let backgroundScale = 1.0;
  let coupleCutoutOpacity = 0;
  let coupleCutoutY = 45;
  let coupleCutoutScale = 0.96;
  let coupleScale = 1.0;
  let doorAngle = 0; // 0 to 90 degrees
  let doorLightOpacity = 0; // 0 to 1
  let coupleElementsOpacity = 1;

  if (t >= 17.8 && t < 19.5) {
    // Phase 1a: Background fades in with subtle camera drift
    const prog = (t - 17.8) / 1.7;
    coupleSceneOpacity = prog;
    backgroundScale = 1.04 - prog * 0.04; // 1.04 -> 1.0
    coupleElementsOpacity = Math.max(0, (t - 18.2) / 1.3);
    coupleCutoutOpacity = 0;
    coupleCutoutY = 45;
    coupleCutoutScale = 0.96;
    coupleScale = 1.0;
    doorAngle = 0;
    doorLightOpacity = 0;
  } else if (t >= 19.5 && t < 20.2) {
    // Phase 1b: Pure background & date badge view
    coupleSceneOpacity = 1;
    backgroundScale = 1.0;
    coupleElementsOpacity = 1;
    coupleCutoutOpacity = 0;
    coupleCutoutY = 45;
    coupleCutoutScale = 0.96;
    coupleScale = 1.0;
    doorAngle = 0;
    doorLightOpacity = 0;
  } else if (t >= 20.2 && t < 21.8) {
    // Phase 2a: Couple animates in onto steps (slide-up + fade-in)
    const prog = (t - 20.2) / 1.6;
    const ease = prog < 0.5 ? 2 * prog * prog : 1 - Math.pow(-2 * prog + 2, 2) / 2;
    coupleSceneOpacity = 1;
    backgroundScale = 1.0;
    coupleElementsOpacity = 1;
    coupleCutoutOpacity = ease;
    coupleCutoutY = 45 * (1 - ease); // 45px -> 0px
    coupleCutoutScale = 0.96 + ease * 0.04; // 0.96 -> 1.0
    coupleScale = 1.0;
    doorAngle = 0;
    doorLightOpacity = 0;
  } else if (t >= 21.4 && t < 23.8) {
    // Phase 2b: Couple held in full glory with gentle breathing and swaying banana leaves
    const prog = (t - 21.4) / 2.4;
    coupleSceneOpacity = 1;
    backgroundScale = 1.0;
    coupleElementsOpacity = 1;
    coupleCutoutOpacity = 1;
    coupleCutoutY = 0;
    coupleCutoutScale = 1.0 + Math.sin(prog * Math.PI) * 0.012;
    coupleScale = 1.0;
    doorAngle = 0;
    doorLightOpacity = 0;
  } else if (t >= 23.8 && t < 25.0) {
    // Phase 3: Camera pushes in towards doorway, couple fades out, 3D doors swing open
    coupleSceneOpacity = 1;
    const zoomProg = Math.min(1, (t - 23.8) / 1.2);
    const easeZoom = zoomProg < 0.5 ? 2 * zoomProg * zoomProg : 1 - Math.pow(-2 * zoomProg + 2, 2) / 2;
    coupleScale = 1.0 + easeZoom * 2.8; // 1.0 -> 3.8x zoom into door center

    // Fade couple and top date badge as camera pushes forward
    if (zoomProg > 0.08) {
      const fadeProg = Math.min(1, (zoomProg - 0.08) / 0.32);
      coupleCutoutOpacity = Math.max(0, 1 - fadeProg);
      coupleCutoutY = -25 * fadeProg;
      coupleElementsOpacity = Math.max(0, 1 - fadeProg);
    } else {
      coupleCutoutOpacity = 1;
      coupleCutoutY = 0;
      coupleElementsOpacity = 1;
    }

    // Door swings open in 3D (starts at 24.1, wide open by 24.8)
    if (t >= 24.1) {
      const doorProg = Math.min(1, (t - 24.1) / 0.7);
      const easeDoor = doorProg < 0.5 ? 2 * doorProg * doorProg : 1 - Math.pow(-2 * doorProg + 2, 2) / 2;
      doorAngle = easeDoor * 90;
      doorLightOpacity = Math.sin(doorProg * Math.PI);
    } else {
      doorAngle = 0;
      doorLightOpacity = 0;
    }
  } else if (t >= 25.0 && t < 25.5) {
    // Scene 4 doors are wide open, dissolving directly into Wedding Details
    coupleSceneOpacity = Math.max(0, 1 - (t - 25.0) / 0.4);
    coupleScale = 3.8;
    doorAngle = 90;
    coupleCutoutOpacity = 0;
    coupleElementsOpacity = 0;
    doorLightOpacity = Math.max(0, 1 - (t - 25.0) / 0.3);
  } else {
    coupleSceneOpacity = 0;
  }

  // 6. Grand Wedding Details (Opens STRAIGHT AWAY as the doors open at 24.4s+)
  let detailsSceneOpacity = 0;
  if (t >= 24.4 && t < 25.2) {
    detailsSceneOpacity = (t - 24.4) / 0.8;
  } else if (t >= 25.2) {
    detailsSceneOpacity = 1;
  }

  return (
    <div
      onClick={handleStartWithAudio}
      className="relative min-h-svh w-screen overflow-hidden bg-[#0A0403] text-[#FFF8E7] flex flex-col items-center justify-center font-sans"
    >
      {/* Background Ambient Glow */}
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
        src={config?.music?.file || '/audio/wedding-bgm.mp3'}
        preload="auto"
        loop
        playsInline
        autoPlay
        onPlay={() => {
          setIsAudioActive(true);
          setIsMuted(false);
        }}
        onPause={() => {
          if (isMuted) setIsAudioActive(false);
        }}
      />

      {/* ========================================================================= */}
      {/* 9:16 VERTICAL CINEMA FRAME (CONTINUOUS SINGLE ANIMATION STAGE) */}
      {/* ========================================================================= */}
      <main className="relative z-10 w-full h-[100svh] sm:h-[96svh] max-w-[480px] sm:max-w-[440px] sm:aspect-[9/16] sm:rounded-[32px] overflow-hidden bg-[#98D7C8] shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_0_2px_rgba(230,198,135,0.4)] flex flex-col">
        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 1: SKY, RAYS & ANIMATED FLYING BIRDS */}
        {/* ======================================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Luminous Mint & Sunrise Sky Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 95% 75% at 20% 45%, #FFF6BF 0%, #D8EED8 35%, #96D5C7 70%, #7EC8B8 100%)',
            }}
          />

          {/* Morning Sunrise Glow on Left */}
          <div className="absolute left-[5%] top-[45%] -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[#FFF8D6] via-[#FFE28A]/45 to-transparent blur-3xl opacity-85" />
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 2: SOUTH INDIAN TEMPLE GOPURAM */}
        {/* ======================================================================= */}

        {/* Main Temple — with trees & side temple already in image */}
        <div
          className="absolute inset-x-0 top-0 -bottom-10 z-10 pointer-events-none origin-top overflow-hidden"
          style={{
            transform: `scale(${templeScale}) translate(${templeX}%, ${templeY}px)`,
            filter: `blur(${templeBlur}px)`,
            opacity: templeOpacity,
            transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <img
            src="/scenes/temple_with_trees_new.jpg"
            alt="South Indian Temple Gopuram with Trees"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 2.5: ACTIVE REALISTIC FLYING BIRDS IN SKY (Z-18) */}
        {/* ======================================================================= */}
        <div
          className="absolute inset-0 z-[18] pointer-events-none overflow-hidden transition-opacity duration-700"
          style={{ opacity: scene1ElementsOpacity }}
        >
          {/* Flock 1: Main flock actively flying from right to left across the sunny sky */}
          <motion.div
            initial={{ x: 460, opacity: 0 }}
            animate={{
              x: [460, -160],
              y: [0, -14, 6, -18, 0],
              opacity: [0, 0.95, 0.95, 0],
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-[22%] left-0"
          >
            <div className="relative">
              {/* Lead Bird */}
              <div className="absolute top-0 left-0">
                <RealisticBird size={24} color="#153625" flapSpeed={0.24} delay={0} />
              </div>
              {/* Follower Bird 1 */}
              <div className="absolute top-3 left-8">
                <RealisticBird size={20} color="#1D402E" flapSpeed={0.26} delay={0.06} />
              </div>
              {/* Follower Bird 2 */}
              <div className="absolute -top-3 left-12">
                <RealisticBird size={18} color="#254A37" flapSpeed={0.23} delay={0.12} />
              </div>
              {/* Follower Bird 3 */}
              <div className="absolute top-5 left-18">
                <RealisticBird size={15} color="#2D543F" flapSpeed={0.28} delay={0.18} />
              </div>
            </div>
          </motion.div>

          {/* Flock 2: Pair of birds crossing left-to-right higher in the sky */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [-100, 480],
              y: [0, -18, 5, -22, 0],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 6.4,
              delay: 2.0,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-[16%] left-0"
          >
            <div className="relative">
              {/* Bird A */}
              <div className="absolute top-0 left-0">
                <RealisticBird size={19} color="#183A29" flapSpeed={0.25} delay={0.04} />
              </div>
              {/* Bird B */}
              <div className="absolute top-4 left-7">
                <RealisticBird size={15} color="#224733" flapSpeed={0.28} delay={0.14} />
              </div>
            </div>
          </motion.div>

          {/* Flock 3: Solo bird gliding smoothly across middle sky */}
          <motion.div
            initial={{ x: 460, opacity: 0 }}
            animate={{
              x: [460, -120],
              y: [0, -8, 3, -12, 0],
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: 5.8,
              delay: 3.6,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-[28%] left-0"
          >
            <div className="relative">
              <RealisticBird size={21} color="#1A3C2B" flapSpeed={0.26} delay={0.08} />
            </div>
          </motion.div>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 3: SCENE 1 TOP CHAKRA & TAMIL CALLIGRAPHY TITLE */}
        {/* ======================================================================= */}
        <div
          className="absolute inset-x-0 top-0 z-20 pt-4 sm:pt-5 px-4 flex flex-col items-center pointer-events-none text-center transition-opacity duration-700"
          style={{ opacity: scene1ElementsOpacity }}
        >
          {/* Rotating Ganesha Chakra: Ring spins continuously, Lord Ganesha remains stationary */}
          <div className="relative w-22 h-22 sm:w-26 sm:h-26 flex items-center justify-center mb-1">
            {/* 1. Rotating Outer Mandala Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <img
                src="/scenes/ganesha-ring.png"
                alt="Sacred Rotating Mandala Ring"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(20,50,28,0.35)]"
              />
            </motion.div>

            {/* 2. Stationary Lord Ganesha Center */}
            <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
              <img
                src="/scenes/ganesha-center.png"
                alt="Lord Ganesha"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(20,50,28,0.3)]"
              />
            </div>
          </div>

          <p className="font-tamil text-[11px] font-bold tracking-widest text-[#153B22] mb-1 drop-shadow-[0_1px_3px_rgba(255,255,255,0.85)]">
            || {config?.invitationMessage?.invocation || 'ஸ்ரீ விநாயகர் துணை'} ||
          </p>

          <div className="w-72 sm:w-88 md:w-96 max-w-[90vw] mt-3.5 sm:mt-5">
            <img
              src="/scenes/thirumana_azhaippithazh_transparent@2x.png"
              alt="திருமண அழைப்பிதழ்"
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(20,50,28,0.4)]"
            />
          </div>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 4: BRIDE PHOTOGRAPH & TYPOGRAPHY */}
        {/* ======================================================================= */}
        {/* Bride Photo */}
        <div
          className="absolute inset-0 w-full h-full z-25 flex items-end justify-center sm:justify-end pointer-events-none origin-bottom transition-all"
          style={{
            opacity: brideOpacity,
            transform: `scale(${brideScale}) translate(${brideX}px, ${brideY}px)`,
            filter: `blur(${brideBlur}px)`,
            transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <img
            src={config?.bride?.photo || '/scenes/bride_cutout@2x.png'}
            alt="Bride"
            className="h-[73%] sm:h-[77%] w-auto max-w-none object-contain object-bottom filter drop-shadow-[0_12px_30px_rgba(15,35,20,0.4)]"
            loading="eager"
          />
        </div>

        {/* Bride Typography */}
        <div
          className="absolute left-6 sm:left-9 top-14 sm:top-18 z-40 max-w-[58%] pointer-events-none text-left transition-opacity duration-500"
          style={{ opacity: brideTextOpacity }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-[2px] bg-[#1B3E25]" />
            <span className="font-tamil font-bold text-xs sm:text-sm tracking-widest text-[#1B3E25] uppercase drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]">
              {config?.bride?.tamilPrefix || 'மணமகள்'}
            </span>
          </div>

          <h2 className="font-tamil text-3xl sm:text-4xl font-extrabold text-[#0E2815] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
            {config?.bride?.tamilName || 'S. பிரியங்கா'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#1A4123] font-semibold mt-1 drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]">
            {config?.bride?.englishName || 'Priyanka'} {config?.bride?.qualificationEnglish}
          </p>

          <p className="font-tamil text-[11px] text-[#285533] mt-1">
            {config?.bride?.parentsTamil}
          </p>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 5: GROOM PHOTOGRAPH & TYPOGRAPHY */}
        {/* ======================================================================= */}
        {/* Groom Photo */}
        <div
          className="absolute inset-0 w-full h-full z-30 flex items-end justify-center sm:justify-end pointer-events-none origin-bottom transition-all"
          style={{
            opacity: groomOpacity,
            transform: `scale(${groomScale}) translate(${groomX}px, ${groomY}px)`,
            filter: `blur(${groomBlur}px)`,
            transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <img
            src={config?.groom?.photo || '/scenes/groom_cutout@2x.png'}
            alt="Groom"
            className="h-[73%] sm:h-[77%] w-auto max-w-none object-contain object-bottom filter drop-shadow-[0_12px_30px_rgba(15,35,20,0.4)]"
            loading="eager"
          />
        </div>

        {/* Groom Typography (Top-Right opposite Groom on Left) */}
        <div
          className="absolute right-6 sm:right-9 top-14 sm:top-18 z-40 max-w-[58%] pointer-events-none text-right flex flex-col items-end transition-opacity duration-500"
          style={{ opacity: groomTextOpacity }}
        >
          <div className="flex items-center gap-2 mb-1 justify-end">
            <span className="font-tamil font-bold text-xs sm:text-sm tracking-widest text-[#1B3E25] uppercase drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]">
              {config?.groom?.tamilPrefix || 'மணமகன்'}
            </span>
            <span className="w-5 h-[2px] bg-[#1B3E25]" />
          </div>

          <h2 className="font-tamil text-3xl sm:text-4xl font-extrabold text-[#0E2815] tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
            {config?.groom?.tamilName || 'R. அர்ஜுன்'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#1A4123] font-semibold mt-1 drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]">
            {config?.groom?.englishName || 'Arjun'} {config?.groom?.qualificationEnglish}
          </p>

          <p className="font-tamil text-[11px] text-[#285533] mt-1">
            {config?.groom?.parentsTamil}
          </p>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 6: SCENE 4 COUPLE REVEAL IN ROYAL PALACE */}
        {/* ======================================================================= */}
        <div
          className="absolute inset-0 w-full h-full z-35 flex flex-col pointer-events-none overflow-hidden transition-opacity duration-700 bg-[#2D120B]"
          style={{
            opacity: coupleSceneOpacity,
            display: coupleSceneOpacity > 0 ? 'flex' : 'none',
          }}
        >
          <div
            className="w-full h-full relative"
            style={{
              transform: `scale(${coupleScale})`,
              transformOrigin: '50.0% 47.0%',
              transition: 'transform 0.08s linear',
            }}
          >
            {/* 1. Base Background: Authentic Heritage Temple Door & Mandapam */}
            <img
              src={config?.couple?.bgPhoto || '/scenes/scene4_bg_clean.jpg'}
              alt="Mandapam"
              className="w-full h-full object-cover object-center"
              style={{
                transform: `scale(${backgroundScale})`,
                transition: 'transform 0.1s linear',
              }}
            />

            {/* 1.5. Dynamic Animated Swaying Banana Leaves (Left & Right) */}
            {/* Left Banana Leaves - Natural Wind Sway */}
            <motion.div
              className="absolute pointer-events-none z-12"
              style={{
                top: '14.65%',
                left: '0%',
                width: '36.78%',
                height: '58.59%',
                transformOrigin: '20% 90%',
              }}
              animate={{
                rotate: [0, -3.2, 1.5, -2.4, 0],
                scaleY: [1, 1.025, 0.985, 1.015, 1],
                skewX: [0, -1.2, 0.8, -1.0, 0],
              }}
              transition={{
                duration: 5.0,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="/scenes/scene4_leaf_left.png"
                alt="Left Banana Leaves"
                className="w-full h-full object-contain object-left-top"
              />
            </motion.div>

            {/* Right Banana Leaves - Organic Out-of-Phase Breeze Sway */}
            <motion.div
              className="absolute pointer-events-none z-12"
              style={{
                top: '14.65%',
                right: '0%',
                width: '36.95%',
                height: '58.59%',
                transformOrigin: '80% 90%',
              }}
              animate={{
                rotate: [0, 3.4, -1.8, 2.5, 0],
                scaleY: [1, 0.98, 1.025, 0.985, 1],
                skewX: [0, 1.4, -0.9, 1.1, 0],
              }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7,
              }}
            >
              <img
                src="/scenes/scene4_leaf_right.png"
                alt="Right Banana Leaves"
                className="w-full h-full object-contain object-right-top"
              />
            </motion.div>

            {/* 2. 3D Temple Double Doors in Mandapam Archway */}
            <div
              className="absolute pointer-events-none z-10"
              style={{
                top: '23.24%',
                left: '28.55%',
                width: '42.73%',
                height: '47.56%',
                perspective: '900px',
              }}
            >
              {/* Behind open doors: divine light dissolving straight into Wedding Details */}
              <div
                className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center transition-opacity duration-150"
                style={{
                  opacity: doorAngle > 2 ? 1 : 0,
                  background:
                    'radial-gradient(circle at center, rgba(230,198,135,0.4) 0%, rgba(45,14,10,0.95) 55%, #120503 100%)',
                }}
              >
                {/* Divine Golden Light Radiance Burst */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(255,250,225,0.95) 0%, rgba(245,158,11,0.6) 45%, rgba(18,5,3,0.95) 85%)',
                    opacity: doorLightOpacity,
                  }}
                />
              </div>

              {/* Left Door Shutter (Swings open backwards into the left) */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full shadow-[2px_0_12px_rgba(0,0,0,0.85)]"
                style={{
                  transformOrigin: 'left center',
                  transform: `rotateY(-${doorAngle}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.05s linear',
                }}
              >
                <img
                  src="/scenes/scene4_door_left_clean.png"
                  alt="Left Door"
                  className="w-full h-full object-fill"
                />
                <div
                  className="absolute inset-0 bg-black/60 pointer-events-none transition-opacity duration-150"
                  style={{ opacity: doorAngle / 130 }}
                />
              </div>

              {/* Right Door Shutter (Swings open backwards into the right) */}
              <div
                className="absolute top-0 right-0 w-1/2 h-full shadow-[-2px_0_12px_rgba(0,0,0,0.85)]"
                style={{
                  transformOrigin: 'right center',
                  transform: `rotateY(${doorAngle}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.05s linear',
                }}
              >
                <img
                  src="/scenes/scene4_door_right_clean.png"
                  alt="Right Door"
                  className="w-full h-full object-fill"
                />
                <div
                  className="absolute inset-0 bg-black/60 pointer-events-none transition-opacity duration-150"
                  style={{ opacity: doorAngle / 130 }}
                />
              </div>
            </div>

            {/* 3. Separate Layer: Animated Seated Couple */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              style={{
                opacity: coupleCutoutOpacity,
                transform: `translateY(${coupleCutoutY}px) scale(${coupleCutoutScale})`,
                filter: coupleCutoutOpacity < 0.2 ? 'blur(3px)' : 'none',
                transition: 'opacity 0.2s ease-out, transform 0.1s linear',
              }}
            >
              <img
                src={config?.couple?.photo || '/scenes/scene4_couple_cutout_clean@2x.png'}
                alt="Couple"
                className="w-full h-full object-cover object-center drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#150604]/40 via-transparent to-[#150604]/50 pointer-events-none z-22" />

            {/* Top Marriage Date & Monogram Announcement */}
            <div
              className="absolute inset-x-0 top-7 flex flex-col items-center pointer-events-none px-4 text-center z-25 transition-opacity duration-300"
              style={{
                opacity: coupleSceneOpacity > 0 ? coupleElementsOpacity : 0,
              }}
            >
              {/* Couple Monogram */}
              <div className="w-13 h-13 rounded-full border border-[#E6C687]/70 bg-[#35100B]/85 backdrop-blur-md flex items-center justify-center text-[#F5D98A] shadow-[0_0_30px_rgba(230,198,135,0.45)] mb-2.5">
                <span className="font-serif font-bold text-base sm:text-lg tracking-wider">
                  {config?.couple?.monogram || 'S & D'}
                </span>
              </div>

              {/* Animated Marriage Date Card */}
              <div
                className="flex flex-col items-center transition-all duration-1000 ease-out"
                style={{
                  opacity: coupleSceneOpacity > 0 ? 1 : 0,
                  transform: coupleSceneOpacity > 0 ? 'translateY(0px) scale(1)' : 'translateY(-22px) scale(0.9)',
                  transitionDelay: '350ms',
                }}
              >
                {/* Header label */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#E6C687]/80" />
                  <span className="font-serif uppercase tracking-[0.26em] text-[#E8C77F] text-[10px] sm:text-xs font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                    WEDDING CEREMONY
                  </span>
                  <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#E6C687]/80" />
                </div>

                {/* Date */}
                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#FFF6E0] tracking-wide leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
                  15th November 2026
                </h3>

                {/* Time Badge */}
                <div className="mt-1 px-4 py-0.5 rounded-full bg-[#35100B]/85 border border-[#E6C687]/50 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.7)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5D98A] animate-ping" />
                  <p className="font-serif italic font-medium text-xs sm:text-sm text-[#F5D98A] tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    5:00 am to 9:00 am
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS LAYER 7: SCENE 5 GRAND INVITATION DETAILS & FINALE */}
        {/* ======================================================================= */}
        <div
          ref={scrollContainerRef}
          className={`${
            detailsSceneOpacity >= 0.8 ? 'fixed inset-0 w-screen h-screen' : 'absolute inset-0 w-full h-full'
          } z-50 block pointer-events-auto transition-opacity duration-700 select-text overflow-hidden`}
          style={{
            opacity: detailsSceneOpacity,
            display: detailsSceneOpacity > 0 ? 'block' : 'none',
          }}
        >
          <LongScrollableInvitationWebsite
            config={config}
            onReplay={handleReplay}
            isMuted={isMuted}
            audioUnlocked={isAudioActive}
            onToggleMute={toggleMute}
          />
        </div>

        {/* ======================================================================= */}
        {/* FALLING ROSE PETALS CANVAS (Active during Scene 4) */}
        {/* ======================================================================= */}
        {t >= 18.0 && t <= 24.6 && (
          <div className="absolute inset-0 z-48 pointer-events-none">
            <PetalsParticleCanvas type="rose" count={20} />
          </div>
        )}

        {/* Ceremonial Tap to Open Overlay (When initial audio autoplay is deferred by browser) */}
        {!hasStarted && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleStartWithAudio();
            }}
            className="absolute inset-0 z-45 flex flex-col items-center justify-end pb-12 sm:pb-16 px-6 text-center cursor-pointer pointer-events-auto bg-gradient-to-t from-[#0A1F13]/70 via-transparent to-transparent"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#18462B] via-[#215E39] to-[#18462B] border border-[#F5D98A] text-[#FFF8E7] shadow-[0_10px_35px_rgba(0,0,0,0.65)] flex items-center gap-3 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFEAA7] animate-ping" />
              <span className="font-serif font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#FFFDF8]">
                ✦ திருமண அழைப்பிதழ் • Tap to Open ✦
              </span>
              <Volume2 className="w-4 h-4 text-[#F5D98A]" />
            </motion.div>
            <p className="font-tamil text-xs text-[#13371F] bg-white/75 backdrop-blur-sm px-3.5 py-1 rounded-full drop-shadow mt-2.5 font-bold tracking-wide">
              இன்னிசையுடன் கூடிய அழைப்பிதழ் • Tap Anywhere to Play with Music
            </p>
          </div>
        )}

        {/* Floating Top Controls (Active only during the introductory film) */}
        {t < 24.4 && (
          <div className="absolute top-4 inset-x-4 z-50 flex items-center justify-end pointer-events-none">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              className="pointer-events-auto p-2 rounded-full bg-black/75 backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] hover:bg-black/90 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#F5D98A]" />
              )}
            </button>
          </div>
        )}

        {/* Full Details Modal */}
        <FullDetailsModal
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          config={config}
        />
      </main>
    </div>
  );
}
