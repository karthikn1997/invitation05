import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController({ isPlaying, onToggleAudio }) {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={onToggleAudio}
        aria-label={isPlaying ? 'Mute background audio' : 'Play background audio'}
        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#F5F0E7]/90 backdrop-blur-md border border-[#E5D8C6] text-[#642B35] shadow-sm hover:border-[#B49A68] transition-all duration-300 cursor-pointer"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-3 bg-[#B49A68] rounded-full animate-pulse" />
              <span className="w-0.5 h-2 bg-[#B49A68] rounded-full animate-pulse delay-75" />
              <span className="w-0.5 h-3.5 bg-[#B49A68] rounded-full animate-pulse delay-150" />
            </div>
            <Volume2 className="w-4 h-4 text-[#B49A68]" />
            <span className="text-[11px] font-sans-ui tracking-wider uppercase text-[#642B35] hidden sm:inline">
              நாதஸ்வர இசை
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#272321]/60 group-hover:text-[#642B35]" />
            <span className="text-[11px] font-sans-ui tracking-wider uppercase text-[#272321]/70 group-hover:text-[#642B35] hidden sm:inline">
              இசை ஒலிக்க
            </span>
          </>
        )}
      </button>
    </div>
  );
}
