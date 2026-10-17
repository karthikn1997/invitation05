import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Heart, Share2, FileText, ExternalLink } from 'lucide-react';
import Countdown from '../Countdown';

/**
 * SCENE 6 — WEDDING DETAILS & INTERACTIVE FINALE
 * Design Rules from Reference Video:
 * - Wedding Date, Muhurtham timing, Auspicious Tamil calendar details
 * - Bride & Groom names and lineage
 * - Mandapam / Venue
 * - Interactive Working Controls:
 *   - Live countdown to Muhurtham
 *   - Google Maps navigation button
 *   - Add to Calendar button
 *   - WhatsApp Share button
 *   - View Full Patrikai Modal button
 */
export default function Scene6WeddingDetails({
  config,
  onOpenDetails,
  isActive = true,
}) {
  const { wedding, venue, couple, bride, groom, share, invitationMessage } = config || {};

  // Format dates for Google Calendar
  const formatCal = (iso) => (iso ? new Date(iso).toISOString().replace(/-|:|\.\d\d\d/g, '') : '');
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    (couple?.englishNames || 'Wedding') + ' — Subamuhurtham Ceremony'
  )}&dates=${formatCal(wedding?.isoDateTime)}/${formatCal(wedding?.calendarEndIso)}&details=${encodeURIComponent(
    `Subamuhurtham ceremony of ${couple?.englishNames} at ${venue?.name}, ${venue?.city}.`
  )}&location=${encodeURIComponent(venue?.fullAddress || '')}`;

  // WhatsApp share URL
  const shareText = encodeURIComponent(
    `${share?.whatsappText || 'Warmly inviting you to our wedding: '}\n\n🏛️ மண்டபம்: ${venue?.tamilName} (${venue?.city})\n📅 தேதி: ${wedding?.dayOrdinal} ${wedding?.monthYear}\n⏰ முகூர்த்தம்: ${wedding?.muhurthamTimeFormatted}\n\n👉 அழைப்பிதழ் காண்க: ${typeof window !== 'undefined' ? window.location.href : ''}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <div className="relative w-full h-full overflow-y-auto select-none bg-[#140604] text-[#FFF8E7] pb-12">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #5C1910 0%, #200805 60%, #0D0302 100%)',
        }}
      />

      <div className="relative z-10 p-5 sm:p-6 flex flex-col items-center text-center max-w-md mx-auto">
        {/* Top Header Card */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full pt-4 pb-3 flex flex-col items-center border-b border-[#E6C687]/30"
        >
          <span className="font-tamil text-xs font-bold tracking-widest text-[#E8C77F] uppercase">
            {wedding?.tamilTitle || 'சுபமுகூர்த்தம்'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5DB] tracking-wide mt-1">
            {wedding?.title || 'WEDDING INVITATION'}
          </h2>
          <p className="font-serif italic text-sm text-[#E6C687] mt-0.5">
            {couple?.englishNames}
          </p>
        </motion.div>

        {/* Date & Muhurtham Big Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="my-5 w-full p-4 rounded-2xl bg-[#260C08]/90 border-2 border-[#E6C687]/50 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex flex-col items-center"
        >
          <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#E8C77F]">
            AUSPICIOUS DATE & TIME
          </span>
          <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF5DB] my-1 tracking-tight">
            {wedding?.dayOrdinal} {wedding?.monthYear}
          </div>
          <p className="font-serif text-sm font-semibold text-[#F5D98A]">
            {wedding?.betweenLabel || 'Between'} {wedding?.muhurthamTimeFormatted}
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#E6C687]/20 w-full text-xs font-tamil text-[#FAF0D7]/85 space-y-0.5">
            <p>{wedding?.tamilDateFull}</p>
            <p className="text-[11px] text-[#E6C687]/80">{wedding?.tamilTimePeriod}</p>
          </div>
        </motion.div>

        {/* Live Countdown to Muhurtham */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="w-full mb-5"
        >
          <p className="text-[11px] font-serif uppercase tracking-[0.2em] text-[#E8C77F] mb-1.5 font-semibold">
            Time Remaining
          </p>
          <Countdown targetDate={wedding?.isoDateTime} />
        </motion.div>

        {/* Auspicious Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full p-4 rounded-2xl bg-[#200A06]/90 border border-[#E6C687]/40 mb-5 text-left"
        >
          <div className="flex items-center gap-2 mb-1.5 text-[#F5D98A]">
            <MapPin className="w-4 h-4 shrink-0" />
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest">
              Sacred Venue
            </h4>
          </div>
          <h3 className="font-tamil text-base font-bold text-[#FFF8E7]">
            {venue?.tamilName}
          </h3>
          <p className="font-serif text-sm text-[#E6C687] font-semibold">{venue?.name}</p>
          <p className="font-sans text-xs text-[#FAF0D7]/80 mt-1 leading-relaxed">
            {venue?.fullAddress}
          </p>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="w-full flex flex-col gap-2.5"
        >
          {/* View Full Patrikai Modal Button */}
          <button
            type="button"
            onClick={onOpenDetails}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1D0805] font-serif font-bold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>பத்திரிகை முழு விவரங்கள் (View Full Details)</span>
          </button>

          <div className="grid grid-cols-3 gap-2 w-full">
            {/* Google Maps Directions */}
            <a
              href={venue?.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#EA4335]/90 hover:bg-[#EA4335] text-white font-serif text-[11px] font-bold flex flex-col items-center justify-center gap-1 shadow transition-all hover:scale-[1.02]"
            >
              <MapPin className="w-4 h-4" />
              <span>Google Maps</span>
            </a>

            {/* Add to Calendar */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#4285F4]/90 hover:bg-[#4285F4] text-white font-serif text-[11px] font-bold flex flex-col items-center justify-center gap-1 shadow transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Calendar</span>
            </a>

            {/* Share on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#25D366]/90 hover:bg-[#25D366] text-[#0A2E14] font-serif text-[11px] font-bold flex flex-col items-center justify-center gap-1 shadow transition-all hover:scale-[1.02]"
            >
              <Share2 className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Family Blessings Signoff */}
        <div className="mt-6 pt-3 border-t border-[#E6C687]/20 text-center">
          <p className="font-tamil text-xs text-[#E6C687] font-semibold">
            {invitationMessage?.closingSignoffTamil || 'இரு இல்லங்களின் இனிய அழைப்பு'}
          </p>
          <p className="font-serif italic text-xs text-[#FFF8E7]/70 mt-0.5">
            {invitationMessage?.closingSignoffEnglish || 'With Love, Family & Friends'}
          </p>
        </div>
      </div>
    </div>
  );
}
