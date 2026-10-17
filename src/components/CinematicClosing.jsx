import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, CalendarPlus, Navigation, Check } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export default function CinematicClosing() {
  const { groom, bride, weddingDate, venue, invitation } = weddingConfig;
  const [shareSuccess, setShareSuccess] = useState(false);

  // Web Share API with copy-link fallback
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: invitation.shareTitle,
          text: invitation.shareText,
          url: invitation.shareUrl,
        });
      } catch (err) {
        // user cancelled or failed, fallback to clipboard
        copyLinkToClipboard();
      }
    } else {
      copyLinkToClipboard();
    }
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(invitation.shareUrl);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  // Generate .ics calendar download file
  const handleAddToCalendar = () => {
    const eventTitle = `${groom.nameEnglish} & ${bride.nameEnglish} Wedding | திருமண விழா`;
    const eventDescription = `Auspicious Muhurtham of ${groom.nameEnglish} and ${bride.nameEnglish}. Venue: ${venue.nameEnglish}, ${venue.addressEnglish}`;
    const location = `${venue.nameEnglish}, ${venue.addressEnglish}`;
    
    // Dates formatted for iCalendar (YYYYMMDDTHHmmssZ)
    // 2026-12-06 09:00 IST is 03:30 UTC
    const dtStart = "20261206T033000Z";
    const dtEnd = "20261206T073000Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Tamil Wedding Invitation//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription}`,
      `LOCATION:${location}`,
      `DTSTART:${dtStart}`,
      `DTEnd:${dtEnd}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${groom.nameEnglish}_${bride.nameEnglish}_Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="py-20 sm:py-28 px-4 text-center border-t border-[#D9CCB8] bg-[#FAF6EF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Subtle Brass Kuthu Vilakku Illustration */}
        <div className="flex justify-center">
          <svg
            width="40"
            height="56"
            viewBox="0 0 40 56"
            fill="none"
            className="text-[#B39A65]"
          >
            {/* Flame */}
            <path
              d="M20 4C20 4 16 10 16 14C16 16.2 17.8 18 20 18C22.2 18 24 16.2 24 14C24 10 20 4 20 4Z"
              fill="#B39A65"
              opacity="0.9"
            />
            {/* Diya Bowl */}
            <path
              d="M10 20C10 25 15 28 20 28C25 28 30 25 30 20H10Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            {/* Lamp Stem */}
            <line x1="20" y1="28" x2="20" y2="48" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="20" cy="38" rx="4" ry="2" stroke="currentColor" strokeWidth="1" />
            {/* Base */}
            <path
              d="M12 48H28L32 54H8L12 48Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        <h3 className="font-serif-ta text-2xl sm:text-3xl text-[#642A32] font-semibold">
          அன்புடன் வருக! வாழ்த்துகளுடன் செல்லுங்கள்.
        </h3>

        <p className="font-serif-en text-xs sm:text-sm tracking-[0.25em] text-[#B39A65] uppercase font-medium">
          Join Us in Celebrating a Beautiful Beginning
        </p>

        <div className="pt-2 pb-4">
          <p className="font-serif-en text-2xl sm:text-3xl text-[#262321] font-normal tracking-wide">
            {groom.nameEnglish} & {bride.nameEnglish}
          </p>
          <p className="font-serif-ta text-xs text-[#262321]/70 mt-1">
            {weddingDate.dateTamil}
          </p>
        </div>

        {/* Action Buttons: Share, Add to Calendar, View Location */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9CCB8] bg-[#F7F1E7] hover:border-[#B39A65] text-[#262321] text-xs sm:text-sm font-sans-ui transition-colors cursor-pointer"
          >
            {shareSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">இணைப்பு நகலெடுக்கப்பட்டது</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#B39A65]" />
                <span>Share Invitation | பகிர்க</span>
              </>
            )}
          </button>

          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9CCB8] bg-[#F7F1E7] hover:border-[#B39A65] text-[#262321] text-xs sm:text-sm font-sans-ui transition-colors cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4 text-[#B39A65]" />
            <span>Add to Calendar | காலண்டர்</span>
          </button>

          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#642A32] text-[#F7F1E7] text-xs sm:text-sm font-sans-ui hover:bg-[#4E2127] transition-colors shadow-sm"
          >
            <Navigation className="w-4 h-4 text-[#B39A65]" />
            <span>View Location | வரைபடம்</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
