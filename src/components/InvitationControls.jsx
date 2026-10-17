import React from 'react';
import { RotateCcw, Play, Pause, FileText } from 'lucide-react';
import MusicControls from './MusicControls';
import ShareButtons from './ShareButtons';

/**
 * Top & Floating Invitation Controls:
 * - Scene step indicator / progress pills
 * - Music toggle
 * - Play / Pause cinematic timeline
 * - Replay from start
 * - Open Full Patrikai Details
 */
export default function InvitationControls({
  currentScene,
  totalScenes,
  isPaused,
  onTogglePause,
  onReplay,
  onOpenDetails,
  isPlayingAudio,
  onToggleAudio,
  onSelectScene,
}) {
  const sceneLabels = ['Temple', 'Bride', 'Groom', 'Palace', 'Wedding Date'];

  return (
    <header className="fixed top-0 inset-x-0 z-40 p-3 sm:p-5 pointer-events-none flex flex-col gap-2 max-w-[480px] mx-auto">
      {/* 1. Top Bar: Segmented Scene Progress Bars */}
      <nav aria-label="Invitation scene progress" className="flex items-center gap-1.5 w-full pointer-events-auto">
        {Array.from({ length: totalScenes }).map((_, idx) => {
          const isActive = idx === currentScene;
          const isCompleted = idx < currentScene;

          return (
            <button
              type="button"
              key={idx}
              onClick={() => onSelectScene(idx)}
              title={`Jump to Scene ${idx + 1}: ${sceneLabels[idx]}`}
              aria-label={`Jump to Scene ${idx + 1}: ${sceneLabels[idx]}`}
              aria-current={isActive ? 'step' : undefined}
              className="flex-1 h-1 sm:h-1.5 rounded-full overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 p-0 cursor-pointer transition-all hover:h-2"
            >
              <div
                className={`h-full transition-all duration-300 ${
                  isCompleted
                    ? 'w-full bg-[#E6C687]'
                    : isActive
                    ? 'w-full bg-gradient-to-r from-[#FFF5DB] to-[#F5D98A] shadow-[0_0_8px_rgba(245,217,138,0.8)]'
                    : 'w-0'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* 2. Secondary Row: Scene Label & Action Icons */}
      <div className="flex items-center justify-between pointer-events-auto pt-1">
        {/* Current Scene Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160806]/80 backdrop-blur-md border border-[#E6C687]/40 shadow-sm text-xs font-serif">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6C687] animate-pulse" />
          <span className="text-[#FFF8E7] font-semibold tracking-wider">
            Scene {currentScene + 1}/{totalScenes}
          </span>
          <span className="text-[#E6C687]/80 hidden sm:inline">• {sceneLabels[currentScene]}</span>
        </div>

        {/* Right Action Icons Group */}
        <div className="flex items-center gap-2">
          {/* Pause / Resume Button */}
          <button
            type="button"
            onClick={onTogglePause}
            title={isPaused ? 'Resume Invitation' : 'Pause Invitation'}
            aria-label={isPaused ? 'Resume Invitation' : 'Pause Invitation'}
            className="p-1.5 sm:p-2 rounded-full bg-[#160806]/80 hover:bg-[#2B1006] backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* Replay Button */}
          <button
            type="button"
            onClick={onReplay}
            title="Replay Complete Invitation"
            aria-label="Replay Complete Invitation"
            className="p-1.5 sm:p-2 rounded-full bg-[#160806]/80 hover:bg-[#2B1006] backdrop-blur-md border border-[#E6C687]/50 text-[#F5D98A] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Music Toggle */}
          <MusicControls isPlaying={isPlayingAudio} onToggle={onToggleAudio} />

          {/* Full Details Modal Toggle */}
          <button
            type="button"
            onClick={onOpenDetails}
            title="Full Wedding Patrikai Details"
            aria-label="View Full Wedding Patrikai Details"
            className="p-1.5 sm:p-2 rounded-full bg-[#7A1C18]/90 hover:bg-[#96221D] backdrop-blur-md border border-[#E6C687] text-[#FFF8E7] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
