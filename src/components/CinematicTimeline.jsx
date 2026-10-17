import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingDetails } from '../config/weddingDetails';
import OpeningTempleScene from './OpeningTempleScene';
import BrideIntroductionScene from './BrideIntroductionScene';
import GroomIntroductionScene from './GroomIntroductionScene';
import CouplePalaceScene from './CouplePalaceScene';
import WeddingDateScene from './WeddingDateScene';
import InvitationControls from './InvitationControls';
import FullDetailsModal from './FullDetailsModal';

/**
 * CinematicTimeline:
 * Coordinates the seamless 5-scene animated wedding invitation experience.
 * Manages auto-advancing timers, pause/play, scene selection, and touch gestures.
 */
export default function CinematicTimeline({
  isPlayingAudio,
  onToggleAudio,
  onOpenDetails,
  isDetailsOpen,
  onCloseDetails,
}) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const sceneDurations = [
    weddingDetails.sceneDurations.scene1Temple * 1000,
    weddingDetails.sceneDurations.scene2Bride * 1000,
    weddingDetails.sceneDurations.scene3Groom * 1000,
    weddingDetails.sceneDurations.scene4CouplePalace * 1000,
    weddingDetails.sceneDurations.scene5WeddingDate * 1000,
  ];

  const totalScenes = 5;

  // Auto-advance scenes unless paused or at final scene
  useEffect(() => {
    if (isPaused || isDetailsOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    // On final scene, let it rest gracefully on the wedding date reveal
    if (currentScene >= totalScenes - 1) {
      return;
    }

    const duration = sceneDurations[currentScene] || 7500;
    timerRef.current = setTimeout(() => {
      setCurrentScene((prev) => (prev < totalScenes - 1 ? prev + 1 : prev));
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentScene, isPaused, isDetailsOpen]);

  // Touch gesture handling for mobile swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentScene < totalScenes - 1) {
        // Swipe left -> Next scene
        setCurrentScene((s) => s + 1);
      } else if (diff < 0 && currentScene > 0) {
        // Swipe right -> Prev scene
        setCurrentScene((s) => s - 1);
      }
    }
  };

  const handleReplay = () => {
    setCurrentScene(0);
    setIsPaused(false);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleSelectScene = (index) => {
    setCurrentScene(index);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Floating Top Controls & Scene Progress */}
      <InvitationControls
        currentScene={currentScene}
        totalScenes={totalScenes}
        isPaused={isPaused}
        onTogglePause={handleTogglePause}
        onReplay={handleReplay}
        onOpenDetails={onOpenDetails}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={onToggleAudio}
        onSelectScene={handleSelectScene}
      />

      {/* Render Current Scene with Continuous Film Crossfade */}
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
            <OpeningTempleScene isActive={currentScene === 0} />
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
            <BrideIntroductionScene isActive={currentScene === 1} />
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
            <GroomIntroductionScene isActive={currentScene === 2} />
          </motion.div>
        )}

        {currentScene === 3 && (
          <motion.div
            key="scene-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <CouplePalaceScene isActive={currentScene === 3} />
          </motion.div>
        )}

        {currentScene === 4 && (
          <motion.div
            key="scene-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <WeddingDateScene
              isActive={currentScene === 4}
              onOpenDetails={onOpenDetails}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Traditional Patrikai Details Modal */}
      <FullDetailsModal isOpen={isDetailsOpen} onClose={onCloseDetails} />
    </div>
  );
}
