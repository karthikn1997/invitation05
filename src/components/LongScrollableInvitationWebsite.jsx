import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowUp,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 8 Master Scenes matching https://invitation04.vercel.app/
import TheInvitation from './TheInvitation';
import CoupleStory from './CoupleStory';
import ReceptionAndWedding from './ReceptionAndWedding';
import TamilPatrikai from './TamilPatrikai';
import EventSchedule from './EventSchedule';
import MuhurthamCountdown from './MuhurthamCountdown';
import VenueAndMap from './VenueAndMap';
import RsvpBlessings from './RsvpBlessings';
import NavigationAndShare from './NavigationAndShare';

/**
 * LongScrollableInvitationWebsite:
 * The complete, continuous, long-scrollable Royal Tamil Wedding Invitation Website
 * Faithfully ports the exact design, components, smooth scrolling, and content
 * from https://invitation04.vercel.app/ (S. Sivasankaran & M. Ruba | 22.11.2026).
 */
export default function LongScrollableInvitationWebsite({
  onReplay,
  isMuted = false,
  audioUnlocked = true,
  onToggleMute,
}) {
  const containerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back to top button & handle hash navigation on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        if (containerRef.current) {
          containerRef.current.scrollTop = el.offsetTop;
        }
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }

    const container = containerRef.current || window;
    const handleScroll = () => {
      const scrollY = containerRef.current ? containerRef.current.scrollTop : window.scrollY;
      setShowBackToTop(scrollY > 400);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const el = document.getElementById('scene-invitation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBlessingShower = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.2 },
      colors: ['#FFD700', '#FF6B6B', '#FFA07A', '#FFF8DC', '#FFC0CB'],
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-svh overflow-y-auto overflow-x-hidden scroll-smooth bg-[#FAF6EE] text-[#24070A] selection:bg-[#7A1C18] selection:text-[#FFFDF9]"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* 8 MASTER CONTINUOUS SCENES FROM INVITATION04.VERCEL.APP */}
      <main className="relative w-full flex flex-col">
        {/* SCENE 01: The Royal Invitation Card with Opening Temple Doors & Hanging Bells */}
        <section className="relative w-full">
          <TheInvitation isOpened={true} />
        </section>

        {/* SCENE 02: Couple Story & Sacred Thirukkural with 3D Arched Carousel */}
        <section className="relative w-full">
          <CoupleStory />
        </section>

        {/* SCENE 03: Reception & Auspicious Muhurtham Dual 3D Tilt Cards */}
        <section className="relative w-full">
          <ReceptionAndWedding />
        </section>

        {/* SCENE 04: Traditional Tamil Patrikai with Lineage & Scanned Card Viewer */}
        <section className="relative w-full">
          <TamilPatrikai />
        </section>

        {/* SCENE 05: Sacred Wedding Timeline with Illuminated Event Pins */}
        <section className="relative w-full">
          <EventSchedule />
        </section>

        {/* SCENE 06: Auspicious Muhurtham Countdown with Sacred Kolam & Agal Vilakku */}
        <section className="relative w-full">
          <MuhurthamCountdown />
        </section>

        {/* SCENE 07: Sri Murugan Thirumana Mandapam Venue & Google Maps Navigation */}
        <section className="relative w-full">
          <VenueAndMap />
        </section>

        {/* SCENE 08: RSVP & Blessings Form */}
        <section className="relative w-full">
          <RsvpBlessings />
        </section>
      </main>

      {/* Discreet Bottom-Left Audio Control */}
      {onToggleMute && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleMute();
          }}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          className="fixed bottom-6 left-5 z-40 p-3.5 rounded-full bg-[#FFFDF9]/95 hover:bg-[#FFF9E6] backdrop-blur-md border-2 border-[#D4AF37] text-[#7A1C18] shadow-[0_4px_20px_rgba(180,130,20,0.25)] cursor-pointer transition-all hover:scale-110 active:scale-95"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-rose-600" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#7A1C18]" />
          )}
        </button>
      )}

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-5 z-40 p-3.5 rounded-full bg-[#FFFDF9]/95 hover:bg-[#FFF9E6] backdrop-blur-md border-2 border-[#D4AF37] text-[#7A1C18] shadow-[0_4px_20px_rgba(180,130,20,0.25)] cursor-pointer transition-all hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
