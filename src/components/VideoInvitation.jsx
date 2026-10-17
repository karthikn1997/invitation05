import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  FileText,
  MapPin,
  Calendar,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { weddingDetails } from '../config/weddingDetails';
import FullDetailsModal from './FullDetailsModal';

export default function VideoInvitation() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const hideControlsTimeoutRef = useRef(null);

  // Synchronize audio with video
  const syncAudioWithVideo = useCallback(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    if (audio.duration && !isNaN(audio.duration)) {
      const targetAudioTime = video.currentTime % audio.duration;
      if (Math.abs(audio.currentTime - targetAudioTime) > 0.3) {
        audio.currentTime = targetAudioTime;
      }
    }
  }, []);

  // Format time mm:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return '0:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Auto-hide controls
  const scheduleHideControls = useCallback(() => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    setShowControls(true);
    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3200);
  }, []);

  // Start initial playback (unlocks audio & video policy)
  const handleStartExperience = () => {
    setHasStarted(true);
    setIsEnded(false);

    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.play().catch((err) => console.warn('Video play error:', err));
    }
    if (audio) {
      audio.play().catch((err) => console.warn('Audio play error:', err));
    }
    setIsPlaying(true);
    scheduleHideControls();
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      if (audio) audio.pause();
      setIsPlaying(false);
      setShowControls(true);
    } else {
      if (isEnded) {
        video.currentTime = 0;
        if (audio) audio.currentTime = 0;
        setIsEnded(false);
      }
      video.play().catch((err) => console.warn('Play error:', err));
      if (audio && !isMuted) {
        audio.play().catch((err) => console.warn('Audio play error:', err));
      }
      setIsPlaying(true);
      scheduleHideControls();
    }
  };

  // Replay
  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    video.currentTime = 0;
    if (audio) audio.currentTime = 0;
    setIsEnded(false);
    video.play().catch(() => {});
    if (audio && !isMuted) {
      audio.play().catch(() => {});
    }
    setIsPlaying(true);
    scheduleHideControls();
  };

  // Toggle Mute
  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    const video = videoRef.current;

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (audio) {
      audio.muted = nextMuted;
      if (!nextMuted && isPlaying) {
        audio.play().catch(() => {});
      }
    }
    if (video) {
      video.muted = nextMuted;
    }
    scheduleHideControls();
  };

  // Seek bar
  const handleSeek = (e) => {
    e.stopPropagation();
    const newTime = parseFloat(e.target.value);
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    video.currentTime = newTime;
    setCurrentTime(newTime);
    if (audio && audio.duration) {
      audio.currentTime = newTime % audio.duration;
    }
    scheduleHideControls();
  };

  // Fullscreen toggle
  const toggleFullscreen = (e) => {
    if (e) e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Video event handlers
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
    setShowControls(true);
    const audio = audioRef.current;
    if (audio) {
      // Allow audio to fade or pause
      audio.pause();
    }
  };

  const handleMouseMoveOrTouch = () => {
    if (isPlaying) {
      scheduleHideControls();
    } else {
      setShowControls(true);
    }
  };

  // WhatsApp share URL
  const { wedding, venue, couple, share } = weddingDetails;
  const shareText = encodeURIComponent(
    `${share.whatsappText}\n\n🏛️ மண்டபம்: ${venue.tamilName} (${venue.city})\n📅 தேதி: ${wedding.dayOrdinal} ${wedding.monthYear}\n⏰ முகூர்த்தம்: ${wedding.muhurthamTimeFormatted}\n\n👉 அழைப்பிதழ் காண்க: ${typeof window !== 'undefined' ? window.location.href : ''}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  // Google Calendar URL
  const formatCal = (iso) => (iso ? new Date(iso).toISOString().replace(/-|:|\.\d\d\d/g, '') : '');
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    couple.englishNames + ' Wedding Ceremony'
  )}&dates=${formatCal(wedding.isoDateTime)}/${formatCal(wedding.calendarEndIso)}&details=${encodeURIComponent(
    weddingDetails.invitationMessage.bodyTamil
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <div className="relative min-h-svh w-screen overflow-hidden bg-[#0A0403] text-[#FFF8E7] flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 filter blur-[100px] opacity-40 scale-110"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, #98D7C8 0%, #4A150D 40%, #0A0403 95%)',
        }}
      />

      {/* Synchronized Sacred Ceremonial Audio */}
      <audio
        ref={audioRef}
        src={weddingDetails.music.file}
        preload="auto"
        loop
      />

      {/* Main 9:16 Invitation Player Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMoveOrTouch}
        onTouchStart={handleMouseMoveOrTouch}
        className="relative z-10 w-full h-[100svh] sm:h-[96svh] max-w-[480px] sm:max-w-[440px] sm:aspect-[9/16] sm:rounded-[30px] overflow-hidden bg-black shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_0_2px_rgba(230,198,135,0.4)] flex flex-col"
      >
        {/* Actual Video Element */}
        <video
          ref={videoRef}
          src={weddingDetails.video.file}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleVideoEnded}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer select-none"
        />

        {/* Initial "Tap to Open Invitation" Overlay */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-40 bg-gradient-to-b from-[#180806]/95 via-[#2C0C08]/90 to-[#120403]/98 backdrop-blur-sm flex flex-col items-center justify-between p-6 sm:p-8 text-center"
            >
              {/* Top Invocation */}
              <div className="pt-4 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-[#E6C687]/50 flex items-center justify-center mb-2 bg-[#42140D]/50 text-[#F5D98A]">
                  <Sparkles className="w-5 h-5 text-[#F5D98A]" />
                </div>
                <p className="font-tamil text-xs tracking-widest text-[#E6C687] font-bold">
                  || {weddingDetails.invitationMessage.invocation} ||
                </p>
                <h1 className="font-tamil text-2xl sm:text-3xl font-bold text-[#FFF5DB] mt-2 tracking-wide drop-shadow">
                  திருமண அழைப்பிதழ்
                </h1>
              </div>

              {/* Couple Emblem */}
              <div className="my-auto py-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#E6C687]/60 flex items-center justify-center bg-[#3D140B]/80 shadow-[0_0_35px_rgba(230,198,135,0.3)] mb-4">
                  <span className="font-serif text-2xl font-bold text-[#FFF5DB] tracking-wider">
                    {weddingDetails.couple.monogram}
                  </span>
                </div>
                <h2 className="font-tamil text-xl sm:text-2xl font-bold text-[#FFF8E7] leading-snug">
                  {weddingDetails.couple.tamilNames}
                </h2>
                <p className="font-serif italic text-sm text-[#E6C687] mt-1">
                  {weddingDetails.couple.englishNames}
                </p>

                {/* Auspicious Date Pill */}
                <div className="mt-4 px-4 py-1.5 rounded-full bg-[#591410]/80 border border-[#E6C687]/40 text-xs font-serif text-[#FFF5DB]">
                  {weddingDetails.wedding.dayOrdinal} {weddingDetails.wedding.monthYear} • {weddingDetails.venue.city}
                </div>
              </div>

              {/* Bottom Play Trigger Button */}
              <div className="w-full pb-6 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartExperience}
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

        {/* Video Ended Banner with Quick Actions */}
        <AnimatePresence>
          {isEnded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-[#0E0403]/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#E6C687]/70 bg-[#42140D]/80 flex items-center justify-center mb-4 text-[#F5D98A] shadow-[0_0_25px_rgba(230,198,135,0.4)]">
                <Sparkles className="w-7 h-7 fill-current" />
              </div>

              <span className="font-tamil text-xs font-bold text-[#E8C77F] tracking-widest uppercase">
                {weddingDetails.wedding.tamilTitle}
              </span>
              <h3 className="font-tamil text-2xl font-bold text-[#FFF5DB] mt-1 mb-2">
                {weddingDetails.wedding.dayOrdinal} {weddingDetails.wedding.monthYear}
              </h3>
              <p className="font-serif text-xs text-[#E6C687] mb-6 max-w-[280px]">
                {weddingDetails.venue.tamilName}, {weddingDetails.venue.city}
              </p>

              <div className="w-full max-w-xs flex flex-col gap-3">
                {/* View Details Button */}
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(true)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1E0906] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>பத்திரிகை விவரங்கள் (View Details)</span>
                </button>

                {/* Replay Video Button */}
                <button
                  type="button"
                  onClick={handleReplay}
                  className="w-full py-3 px-4 rounded-xl bg-[#2A0E09]/90 hover:bg-[#3D140B] border border-[#E6C687]/50 text-[#FFF5DB] font-serif font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#E6C687]" />
                  <span>மீண்டும் பார்க்க (Replay Video)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Player Floating Controls */}
        {hasStarted && !isEnded && (
          <div
            className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Top Bar: Title & Details Quick Button */}
            <div className="flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-tamil text-xs font-bold text-[#FFF5DB]">
                  {weddingDetails.couple.shortNames}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                  className="p-2 rounded-full bg-[#1A0704]/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] hover:bg-[#3D140B] transition-all cursor-pointer shadow-md"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#F5D98A]" />}
                </button>

                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#591410]/90 backdrop-blur-md border border-[#E6C687]/50 text-[#FFF5DB] hover:bg-[#7A1C18] text-xs font-serif font-bold shadow-md cursor-pointer transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F5D98A]" />
                  <span>விவரங்கள்</span>
                </button>
              </div>
            </div>

            {/* Center Big Play/Pause Indicator (Shown when paused) */}
            {!isPlaying && (
              <div className="self-center my-auto pointer-events-auto">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="w-16 h-16 rounded-full bg-[#1A0704]/90 backdrop-blur-md border-2 border-[#E6C687] text-[#F5D98A] flex items-center justify-center shadow-[0_0_40px_rgba(230,198,135,0.4)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </button>
              </div>
            )}

            {/* Bottom Scrubber & Controls Bar */}
            <div className="w-full flex flex-col gap-2 pointer-events-auto bg-gradient-to-t from-[#0A0303]/95 via-[#1A0704]/85 to-transparent pt-6 pb-2 px-3 rounded-b-2xl">
              {/* Timeline Progress Bar / Slider */}
              <div className="flex items-center gap-2 w-full">
                <span className="text-[10px] font-mono text-[#E6C687]/90 min-w-[32px]">
                  {formatTime(currentTime)}
                </span>
                <div className="relative flex-1 flex items-center">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-[#4A180E] rounded-lg appearance-none cursor-pointer accent-[#F5D98A]"
                    style={{
                      background: `linear-gradient(to right, #F5D98A ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, #4A180E ${duration ? (currentTime / duration) * 100 : 0}%)`,
                    }}
                  />
                </div>
                <span className="text-[10px] font-mono text-[#E6C687]/90 min-w-[32px] text-right">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="p-1.5 text-[#F5D98A] hover:text-[#FFF5DB] transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleReplay}
                    aria-label="Replay video"
                    className="p-1.5 text-[#E6C687]/90 hover:text-[#FFF5DB] transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Toggle fullscreen"
                    className="p-1.5 text-[#E6C687]/90 hover:text-[#FFF5DB] transition-all cursor-pointer"
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Quick Action Bar for Guests */}
      <div className="relative z-10 mt-3 sm:mt-4 w-full max-w-[480px] sm:max-w-[440px] px-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIsDetailsOpen(true)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#230A06]/90 hover:bg-[#3D140B] border border-[#E6C687]/40 text-[#FFF5DB] font-serif text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#F5D98A]" />
          <span>பத்திரிகை விவரங்கள்</span>
        </button>

        <a
          href={weddingDetails.venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Maps"
          className="p-2.5 rounded-xl bg-[#230A06]/90 hover:bg-[#3D140B] border border-[#E6C687]/40 text-[#F5D98A] shadow-md transition-all flex items-center justify-center"
          title="Google Maps"
        >
          <MapPin className="w-4 h-4" />
        </a>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Add to Calendar"
          className="p-2.5 rounded-xl bg-[#230A06]/90 hover:bg-[#3D140B] border border-[#E6C687]/40 text-[#F5D98A] shadow-md transition-all flex items-center justify-center"
          title="Add to Google Calendar"
        >
          <Calendar className="w-4 h-4" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="p-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] shadow-md transition-all flex items-center justify-center"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Complete Traditional Patrikai Details Modal */}
      <FullDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  );
}
