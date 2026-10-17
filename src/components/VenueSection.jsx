import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Copy, Check, MapPin } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export default function VenueSection() {
  const { venue, media } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${venue.nameTamil}, ${venue.addressTamil}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 sm:py-28 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 sm:p-14 rounded-3xl bg-[#FAF5ED] border border-[#E5D8C6] shadow-lg"
      >
        <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B49A68] font-semibold">
          Venue & Directions
        </span>
        <h2 className="font-serif-ta text-2xl sm:text-3xl text-[#642B35] font-light mt-1">
          திருமண மண்டபம்
        </h2>

        <div className="w-12 h-[1px] bg-[#B49A68]/40 mx-auto my-5" />

        {/* Venue Photo Display */}
        {media.venuePhoto && (
          <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-[#B49A68]/40 shadow-xl mb-8 group">
            <img
              src={media.venuePhoto}
              alt="Grand Wedding Mandap & Venue Hall"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-left text-white text-xs font-serif-ta drop-shadow flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B49A68]" />
              <span>{venue.nameTamil} • {venue.nameEnglish}</span>
            </div>
          </div>
        )}

        <h3 className="font-serif-ta text-xl sm:text-2xl text-[#272321] font-medium">
          {venue.nameTamil}
        </h3>
        <p className="font-serif-en text-sm text-[#B49A68] mt-0.5">
          {venue.nameEnglish}
        </p>

        <p className="font-sans-ui text-xs sm:text-sm text-[#272321]/80 max-w-md mx-auto mt-4 leading-relaxed">
          {venue.addressTamil}
        </p>
        <p className="font-sans-ui text-xs text-[#272321]/60 max-w-md mx-auto mt-1">
          {venue.addressEnglish}
        </p>

        {/* Action Buttons: Get Directions & Copy Address */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to wedding venue on Google Maps (opens in new tab)"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#642B35] text-[#F5F0E7] text-xs sm:text-sm font-sans-ui hover:bg-[#4E2127] transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B49A68]" />
            <span>GET DIRECTIONS | வழித்தடம் காண</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5D8C6] bg-[#FAF5ED] hover:border-[#B49A68] text-[#272321] text-xs sm:text-sm font-sans-ui transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800 font-medium">நகலெடுக்கப்பட்டது | Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>முகவரி நகலெடுக்க | Copy Address</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
