import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { Sparkles, Calendar, Share2, Check } from 'lucide-react';

export default function AkshathaiAndShare() {
  const { couple, couplePhotos, date, venue } = weddingData;
  const [showers, setShowers] = useState([]);
  const [blessingMessage, setBlessingMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  // Shower sacred Akshathai (golden rice grains) & rose petals
  const handleShowerAkshathai = () => {
    setBlessingMessage(true);
    const newItems = Array.from({ length: 30 }).map((_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 90 + 5}%`,
      delay: Math.random() * 0.4,
      duration: 2.2 + Math.random() * 2,
      emoji: i % 2 === 0 ? '🌸' : '✨'
    }));
    setShowers((prev) => [...prev, ...newItems]);

    setTimeout(() => {
      setBlessingMessage(false);
    }, 3500);
  };

  // Generate .ics calendar file
  const handleDownloadCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Royal Tamil Wedding//EN',
      'BEGIN:VEVENT',
      'UID:wedding-karthik-ananya-2026@wedding.com',
      'DTSTAMP:20261010T000000Z',
      'DTSTART:20261122T010000Z',
      'DTEND:20261122T080000Z',
      `SUMMARY:${couple.groomName} & ${couple.brideName} - Royal Wedding`,
      `DESCRIPTION:Wedding Muhurtham & Celebration at ${venue.name}, Pollachi`,
      `LOCATION:${venue.fullAddress}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Karthik-Ananya-Wedding-Invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share via Web Share or Copy Link
  const handleShare = async () => {
    const shareInfo = {
      title: `${couple.groomName} & ${couple.brideName} — Wedding Invitation`,
      text: `Warmly inviting you to the wedding of ${couple.groomName} & ${couple.brideName} on ${date.englishDate} at ${venue.name}, Pollachi.`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareInfo);
        return;
      } catch (e) {}
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer id="scene-closing" className="relative min-h-svh w-full py-20 sm:py-28 px-4 sm:px-8 overflow-hidden bg-[#0A0304] flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/closing-moment.jpg"
          alt="Palace Backdrop"
          className="w-full h-full object-cover filter brightness-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0304] via-[#1D060A]/90 to-[#0A0304]" />
      </div>

      {/* Floating Flowers & Akshathai on Screen */}
      <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
        {showers.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -50, opacity: 1, rotate: 0 }}
            animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 360 }}
            transition={{ duration: item.duration, delay: item.delay, ease: 'easeOut' }}
            style={{ left: item.left, position: 'absolute', top: 0 }}
            className="text-2xl"
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-2xl w-full mx-auto flex flex-col items-center text-center">
        {/* Closing Round Portrait */}
        <div className="relative w-48 sm:w-56 aspect-square rounded-full p-2 bg-gradient-to-tr from-[#9E783B] via-[#DFC59E] to-[#641824] shadow-[0_20px_50px_rgba(0,0,0,0.9)] mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#180507]">
            <img
              src={couplePhotos.photo3Closing.src}
              alt="Closing Moment"
              className="w-full h-full object-cover filter brightness-105 contrast-110"
            />
          </div>
        </div>

        <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFF8E7] font-bold">
          {couple.groomName} & {couple.brideName}
        </h3>
        <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-amber-300 font-semibold mt-1">
          {date.numericDate} • Pollachi
        </p>

        {/* Interactive Akshathai Blessing Button */}
        <div className="my-8 w-full max-w-lg p-6 rounded-3xl bg-[#1D060B]/90 backdrop-blur-md border border-[#DFC59E]/45 shadow-2xl">
          <p className="font-tamil text-sm text-[#DFC59E] font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>மணமக்களை வாழ்த்தி அட்சதை தூவுக</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </p>

          <button
            type="button"
            onClick={handleShowerAkshathai}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B1D2C] via-[#A82436] to-[#8B1D2C] hover:from-[#A82436] hover:to-[#A82436] text-[#FFF8E7] border border-[#DFC59E] font-tamil text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>🌸 மங்கல அட்சதை & மலர் தூவுக (Shower Blessings) 🌸</span>
          </button>

          <AnimatePresence>
            {blessingMessage && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-sm font-tamil text-amber-200 font-bold"
              >
                ✨ உங்கள் மங்கல வாழ்த்துகள் அன்புடன் பெறப்பட்டது! வாழ்க வளமுடன்! ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Calendar Save & WhatsApp Share Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4">
          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A050A] border border-[#DFC59E]/50 text-amber-200 text-xs font-cinzel tracking-wider uppercase font-semibold shadow-md hover:border-[#DFC59E] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#DFC59E]" />
            <span>Add to Calendar (.ICS)</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#641824] border border-[#DFC59E] text-[#FFF8E7] text-xs font-cinzel tracking-wider uppercase font-semibold shadow-md hover:bg-[#7A1D2D] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-300" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-amber-300" />
                <span>Share Invitation</span>
              </>
            )}
          </button>
        </div>

        <p className="font-tamil text-xs text-[#DFC59E]/75 mt-10 tracking-widest">
          ❖ வாழ்க வளமுடன் • இரு இல்லங்களின் இனிய நல்வரவு ❖
        </p>
      </div>
    </footer>
  );
}
