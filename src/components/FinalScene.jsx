import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, CalendarPlus, Navigation, Check } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export default function FinalScene() {
  const { couple, event, venue, sharing, presentation, media } = weddingConfig;
  const { brideFirst } = presentation;
  const [shareSuccess, setShareSuccess] = useState(false);

  const primary = brideFirst ? couple.bride : couple.groom;
  const secondary = brideFirst ? couple.groom : couple.bride;

  // Web Share API with copy-link fallback
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: sharing.shareTitle,
          text: sharing.shareText,
          url: sharing.publicInvitationUrl,
        });
      } catch (err) {
        copyFallback();
      }
    } else {
      copyFallback();
    }
  };

  const copyFallback = () => {
    navigator.clipboard.writeText(sharing.publicInvitationUrl);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  // Generate valid downloadable .ics calendar file
  const handleAddToCalendar = () => {
    const title = `${primary.nameEnglish} & ${secondary.nameEnglish} - The Wedding Film | திருமண விழா`;
    const description = `Wedding celebration of ${primary.nameEnglish} and ${secondary.nameEnglish}. Venue: ${venue.nameEnglish}, ${venue.addressEnglish}`;
    const location = `${venue.nameEnglish}, ${venue.addressEnglish}`;
    const dtStart = event.calendarStartUTC;
    const dtEnd = event.calendarEndUTC;

    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Wedding Film//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "wedding-invitation.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative py-24 sm:py-32 px-4 text-center border-t border-[#E5D8C6] overflow-hidden bg-[#FAF5ED]">
      {/* Subtle Background Photo with Soft Opacity */}
      {media.closingPhoto && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img
            src={media.closingPhoto}
            alt="Ceremonial celebration"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-2xl mx-auto space-y-6"
      >
        {/* Subtle Brass Kuthu Vilakku Illustration */}
        <div className="flex justify-center mb-3">
          <svg
            width="38"
            height="54"
            viewBox="0 0 36 52"
            fill="none"
            className="text-[#B49A68] drop-shadow-sm"
          >
            <path
              d="M18 4C18 4 14 9 14 13C14 15.2 15.8 17 18 17C20.2 17 22 15.2 22 13C22 9 18 4 18 4Z"
              fill="#B49A68"
              opacity="0.9"
            />
            <path
              d="M9 19C9 23.5 13.5 26 18 26C22.5 26 27 19 27 19H9Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <line x1="18" y1="26" x2="18" y2="44" stroke="currentColor" strokeWidth="1.4" />
            <ellipse cx="18" cy="35" rx="3.5" ry="1.8" stroke="currentColor" strokeWidth="1" />
            <path
              d="M11 44H25L28 50H8L11 44Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        <p className="font-serif-en text-xs tracking-[0.3em] uppercase text-[#B49A68] font-semibold">
          With Love, We Invite You
        </p>

        <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#642B35] font-light">
          அன்புடன் அழைக்கிறோம்
        </h3>

        <div className="pt-2 pb-2">
          <p className="font-serif-en text-2xl sm:text-3xl text-[#272321] font-normal tracking-wide">
            {primary.nameEnglish} & {secondary.nameEnglish}
          </p>
          <p className="font-serif-ta text-xs text-[#272321]/70 mt-1">
            {event.weddingDateTamil}
          </p>
        </div>

        <p className="font-serif-ta text-xs sm:text-sm text-[#272321]/80 max-w-md mx-auto italic font-light">
          "தங்கள் வருகை எங்கள் மகிழ்ச்சியை நிறைவு செய்யும்."
        </p>
        <p className="font-serif-en text-xs text-[#272321]/60 italic">
          "Your presence will make our celebration complete."
        </p>

        {/* Working Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5D8C6] bg-[#F5F0E7] hover:border-[#B49A68] text-[#272321] text-xs sm:text-sm font-sans-ui transition-colors shadow-xs cursor-pointer"
          >
            {shareSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800 font-medium">இணைப்பு நகலெடுக்கப்பட்டது</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>SHARE THIS INVITATION | பகிர்க</span>
              </>
            )}
          </button>

          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5D8C6] bg-[#F5F0E7] hover:border-[#B49A68] text-[#272321] text-xs sm:text-sm font-sans-ui transition-colors shadow-xs cursor-pointer"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-[#B49A68]" />
            <span>ADD TO CALENDAR | நாள்காட்டியில் சேர்க்க</span>
          </button>

          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions on Google Maps"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#642B35] text-[#F5F0E7] text-xs sm:text-sm font-sans-ui hover:bg-[#4E2127] transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B49A68]" />
            <span>GET DIRECTIONS | வரைபடம்</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
