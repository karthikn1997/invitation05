import React, { useState } from 'react';
import { Share2, Calendar, MapPin, Check, MessageCircle } from 'lucide-react';
import { weddingDetails } from '../config/weddingDetails';

/**
 * Functional ShareButtons:
 * - WhatsApp sharing with prefilled invitation message
 * - Add to Google Calendar with date, time, venue
 * - Google Maps directions
 * - Quick copy invitation link
 */
export default function ShareButtons({ className = '', variant = 'compact' }) {
  const [copied, setCopied] = useState(false);
  const { wedding, venue, couple, share } = weddingDetails;

  // Format dates for Google Calendar (YYYYMMDDTHHmmssZ)
  const formatGoogleCalendarDate = (isoStr) => {
    try {
      const d = new Date(isoStr);
      return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    } catch {
      return '';
    }
  };

  const startCal = formatGoogleCalendarDate(wedding.isoDateTime);
  const endCal = formatGoogleCalendarDate(wedding.calendarEndIso);
  const calTitle = encodeURIComponent(`${couple.englishNames} — Wedding Ceremony`);
  const calDetails = encodeURIComponent(
    `Subamuhurtham Wedding Ceremony of ${couple.englishNames} on ${wedding.dayOrdinal} ${wedding.monthYear} (${wedding.muhurthamTimeFormatted}) at ${venue.name}, ${venue.city}.`
  );
  const calLocation = encodeURIComponent(venue.fullAddress);
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${startCal}/${endCal}&details=${calDetails}&location=${calLocation}`;

  // WhatsApp share url
  const shareText = encodeURIComponent(
    `${share.whatsappText}\n\n🏛️ Venue: ${venue.name}, ${venue.city}\n📅 Date: ${wedding.dayOrdinal} ${wedding.monthYear}\n⏰ Muhurtham: ${wedding.muhurthamTimeFormatted}\n\n👉 View Invitation: ${window.location.href}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  if (variant === 'full') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full select-none ${className}`}>
        {/* WhatsApp Share */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#25D366]/90 hover:bg-[#25D366] text-[#0B2E15] font-serif text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Share on WhatsApp</span>
        </a>

        {/* Add to Google Calendar */}
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#4285F4]/90 hover:bg-[#4285F4] text-white font-serif text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Add to Calendar</span>
        </a>

        {/* Google Maps Directions */}
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#EA4335]/90 hover:bg-[#EA4335] text-white font-serif text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <MapPin className="w-4 h-4" />
          <span>Get Venue Directions</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* WhatsApp Quick Share */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="p-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] transition-all hover:scale-105"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      {/* Add to Calendar */}
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add to Google Calendar"
        className="p-2 rounded-full bg-[#E6C687]/15 hover:bg-[#E6C687]/25 border border-[#E6C687]/50 text-[#F5D98A] transition-all hover:scale-105"
      >
        <Calendar className="w-4 h-4" />
      </a>

      {/* Google Maps */}
      <a
        href={venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Venue Google Maps Directions"
        className="p-2 rounded-full bg-[#E6C687]/15 hover:bg-[#E6C687]/25 border border-[#E6C687]/50 text-[#F5D98A] transition-all hover:scale-105"
      >
        <MapPin className="w-4 h-4" />
      </a>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy invitation link"
        className="p-2 rounded-full bg-[#E6C687]/15 hover:bg-[#E6C687]/25 border border-[#E6C687]/50 text-[#F5D98A] transition-all hover:scale-105 cursor-pointer"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
