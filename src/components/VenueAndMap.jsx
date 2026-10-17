import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import ParallaxBackdrop from './ParallaxBackdrop';
import FloatingPetals from './FloatingPetals';
import { MapPin, Navigation, Copy, Check, Compass } from 'lucide-react';

export default function VenueAndMap() {
  const { venue } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venue?.fullAddress || venue?.addressLine || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section
      id="scene-venue"
      className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden flex items-center justify-center bg-[#FAF6EE]"
    >
      {/* Background Ambience */}
      <ParallaxBackdrop
        src="/images/light_traditional_mandapam.jpg"
        objectPosition="50% 50%"
        variant="temple-dark"
        sway={true}
        brightness={0.88}
      />
      <FloatingPetals count={8} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Gentle Sandalwood Ambient Wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,253,249,0.85) 0%, rgba(250,246,238,0.95) 100%)',
        }}
      />

      <div className="relative z-20 max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 overflow-hidden bg-[#FFFDF9]/95 backdrop-blur-md"
          style={{
            border: '2px solid #D4AF37',
            boxShadow:
              '0 25px 60px rgba(180,130,20,0.18), inset 0 0 25px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#D4AF37] mb-3 shadow-[0_2px_12px_rgba(212,175,55,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="font-tamil text-xs sm:text-sm text-[#7A1C18] font-bold tracking-wider">
                {venue?.tamilShort || 'ஸ்ரீ முருகன் திருமண மண்டபம், பொள்ளாச்சி'}
              </span>
            </div>

            <h2
              className="font-cinzel text-2xl sm:text-4xl font-black tracking-wide text-[#7A1C18]"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(122,28,24,0.18))',
              }}
            >
              {venue?.name || 'Sri Murugan Thirumana Mandapam'}
            </h2>
            <p className="font-tamil text-base sm:text-xl text-[#8C6514] font-bold mt-1">
              {venue?.tamilName || 'ஸ்ரீ முருகன் திருமண மண்டபம்'}
            </p>
            <p className="font-serif text-xs sm:text-sm text-[#4A2612] mt-2 max-w-lg mx-auto font-medium">
              {venue?.addressLine || 'Vadakkipalayam Pirivu, Kovai Main Road, Pollachi - 642002'}
            </p>
          </div>

          {/* Embedded Google Map with 24K Gold Filigree Border */}
          <div
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden my-6 bg-[#FAF6EE]"
            style={{
              border: '2px solid #D4AF37',
              boxShadow: '0 12px 30px rgba(180,130,20,0.15)',
            }}
          >
            <iframe
              src={venue?.embedMapUrl}
              title="Sri Murugan Thirumana Mandapam Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href={venue?.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7A1C18] via-[#9E2A2B] to-[#7A1C18] hover:from-[#8D231E] hover:to-[#7E1A16] border border-[#F5D98A] text-[#FFFDF9] font-cinzel text-xs sm:text-sm tracking-wider uppercase font-bold shadow-[0_6px_22px_rgba(122,28,24,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#FFD700]" />
              <span>Get Directions • வழித்தடம்</span>
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FFFDF9] hover:bg-[#FFF9E6] border-2 border-[#D4AF37] text-[#7A1C18] font-cinzel text-xs sm:text-sm tracking-wider uppercase font-bold shadow-[0_4px_16px_rgba(212,175,55,0.2)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#B8860B]" />
                  <span>Copy Address • முகவரி நகலெடு</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

