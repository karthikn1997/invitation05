import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export default function VenueExperience() {
  const { venue } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.nameTamil}, ${venue.addressTamil}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto">
      <div className="p-8 sm:p-12 rounded-2xl bg-[#FAF6EF] border border-[#D9CCB8] text-center relative">
        <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B39A65] font-semibold">
          Venue Experience
        </span>
        <h2 className="font-serif-ta text-2xl sm:text-3xl text-[#642A32] font-semibold mt-1">
          திருமண மண்டபம்
        </h2>

        <div className="w-12 h-[1px] bg-[#B39A65]/40 mx-auto my-4" />

        <h3 className="font-serif-ta text-xl sm:text-2xl text-[#262321] font-medium">
          {venue.nameTamil}
        </h3>
        <p className="font-serif-en text-sm text-[#B39A65] mt-0.5">
          {venue.nameEnglish}
        </p>

        <p className="font-sans-ui text-xs sm:text-sm text-[#262321]/80 max-w-md mx-auto mt-4 leading-relaxed">
          {venue.addressTamil}
        </p>
        <p className="font-sans-ui text-xs text-[#262321]/60 max-w-md mx-auto mt-1">
          {venue.addressEnglish}
        </p>

        {/* Action Buttons: Directions & Copy Address */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#642A32] text-[#F7F1E7] text-xs sm:text-sm font-sans-ui hover:bg-[#4E2127] transition-colors shadow-sm"
          >
            <Navigation className="w-4 h-4 text-[#B39A65]" />
            <span>Google Maps வழிகாட்டி</span>
          </a>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9CCB8] bg-[#FAF6EF] hover:border-[#B39A65] text-[#262321] text-xs sm:text-sm font-sans-ui transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">நகலெடுக்கப்பட்டது | Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#B39A65]" />
                <span>முகவரி நகலெடுக்க | Copy Address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
