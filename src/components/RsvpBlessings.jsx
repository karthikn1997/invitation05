import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../config/weddingData';
import { Heart, Share2, CheckCircle2, MessageSquareHeart, Sparkles, Check, MessageCircle, ExternalLink } from 'lucide-react';

export default function RsvpBlessings() {
  const { couple, venue, date, rsvpWhatsAppNumber } = weddingData;

  // Target WhatsApp number for RSVP messages (demo)
  const targetPhone = (rsvpWhatsAppNumber || '919876543210').replace(/[^0-9]/g, '');

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('with-family');
  const [guestCount, setGuestCount] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const formatRsvpMessage = (guestName, guestRel, guestAtt, count, guestMsg) => {
    const attendanceLabel =
      guestAtt === 'with-family'
        ? `👨‍👩‍👧‍👦 With Family (குடும்பத்துடன் - ${count} நபர்கள்)`
        : guestAtt === 'single'
        ? '👤 Will Attend (நிச்சயம் வருகிறேன்)'
        : '💌 Wishes Only (வாழ்த்துகள் மட்டும்)';

    return (
      `💐 *Wedding RSVP & Blessings* 💐\n` +
      `*திருமண வாழ்த்து & வருகை உறுதி*\n\n` +
      `💍 *Couple:* ${couple.groomName} & ${couple.brideName}\n` +
      `🗓️ *Date:* ${date.englishDate} (${date.englishDay || 'Saturday'})\n` +
      `🏛️ *Venue:* ${venue.name}, ${venue.address?.city || 'Chennai'}\n\n` +
      `────────────────────\n` +
      `👤 *Guest Name (பெயர்):* ${guestName.trim()}\n` +
      `📍 *Relation & City (உறவு / ஊர்):* ${guestRel.trim() || 'Family Friend / நலம் விரும்பி'}\n` +
      `✅ *Attendance (வருகை):* ${attendanceLabel}\n` +
      (guestAtt !== 'wishes-only' ? `👥 *Guests (நபர்கள்):* ${count} Persons\n` : '') +
      (guestMsg.trim() ? `💌 *Blessing Message (வாழ்த்து):*\n"${guestMsg.trim()}"\n` : '') +
      `────────────────────\n` +
      `✨ *Sent via Digital Wedding Invitation*`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Celebratory confetti burst
    confetti({
      particleCount: 95,
      spread: 95,
      origin: { y: 0.65 },
      colors: ['#25D366', '#D4AF37', '#E53935', '#FFA000', '#FFF8DC'],
    });

    // Compose formatted text for WhatsApp
    const rsvpText = formatRsvpMessage(name, relation, attendance, guestCount, message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(rsvpText)}`;

    setLastWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    // Directly open WhatsApp
    try {
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      window.location.href = whatsappUrl;
    }

    setName('');
    setRelation('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ Wedding Invitation • திருமண அழைப்பிதழ் ✨\n\n${couple.groomName} (${couple.groomDegree}) & ${couple.brideName} (${couple.brideDegree})\n🗓️ Date: ${date.englishDate} (Sunday)\n🏛️ Venue: ${venue.name}, Pollachi.\n\nWarmly inviting you with family and friends to grace our wedding celebration! 🪔\n\nView Digital Invitation: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section
      id="scene-rsvp"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF6EE] text-[#24070A] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[620px] h-[520px] rounded-full bg-gradient-to-b from-[#FFF0B3]/30 via-[#F5D98A]/15 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/95 border border-[#D4AF37] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-cinzel text-xs uppercase tracking-widest text-[#7A1C18] font-bold">
              RSVP &amp; WhatsApp Blessings
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          {/* Bilingual Main Headline */}
          <h2
            className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #7A141A 0%, #A32026 50%, #5E0E12 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Confirm Your Presence &amp; Wishes
          </h2>

          <p className="font-tamil text-sm sm:text-base font-bold text-[#7A1C18] mt-1">
            வருகை உறுதி &amp; மங்கள வாழ்த்துப் படிவம்
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-[#8C6514] font-medium mt-1.5 max-w-lg mx-auto">
            Please fill in your details and click OK to send your blessings!
            <span className="block font-tamil font-normal text-xs text-[#8C6514]/90 mt-0.5">
              விவரங்களை நிரப்பி OK பட்டனை அழுத்தினால் வாட்ஸ்அப் வழியாக மணமக்களுக்கு நேரடியாகச் செல்லும்!
            </span>
          </p>
        </motion.div>

        {/* ── CENTERED BILINGUAL RSVP FORM ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-[0_12px_35px_rgba(180,130,20,0.15)]"
        >
          {/* Card Title */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="w-5 h-5 text-[#7A1C18]" />
              <div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#7A1C18]">
                  RSVP Registration Form
                </h3>
                <span className="font-tamil text-[11px] text-[#8C6514] font-semibold block">
                  வருகை விவரம் &amp; வாழ்த்துப் படிவம்
                </span>
              </div>
            </div>

            {/* Target Contact Chip */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span>WhatsApp: +91 98765 43210</span>
            </span>
          </div>

          {/* Success Alert */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-5 p-4 rounded-2xl bg-[#E8F5E9] border-2 border-[#4CAF50] text-[#1B5E20] text-xs sm:text-sm font-medium flex flex-col gap-2 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                  <span className="font-bold text-sm sm:text-base">
                    ✅ OK! RSVP Confirmed &amp; WhatsApp Opened!
                  </span>
                </div>
                <p className="font-tamil text-xs text-[#2E7D32] pl-7">
                  உங்கள் வருகை உறுதி செய்யப்பட்டு WhatsApp திறக்கப்பட்டது! மணமக்களுக்கு வாழ்த்துகள் சென்றடையும். வாழ்க வளமுடன்! ✨
                </p>
                {lastWhatsAppUrl && (
                  <div className="pl-7 pt-1">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#1B5E20] underline font-bold hover:text-[#2E7D32]"
                    >
                      <span>Click here if WhatsApp didn't open automatically (வாட்ஸ்அப் திறக்க இங்கே கிளிக் செய்க)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-[#7A1C18] mb-1">
                <span className="font-sans">Your Name</span> • <span className="font-tamil">உங்கள் பெயர்</span> *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. S. Subramanian & Family / சுப்பிரமணியன்"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/60 text-[#24070A] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder-[#8C6514]/40 transition-all"
              />
            </div>

            {/* Relation / City */}
            <div>
              <label className="block text-xs font-bold text-[#7A1C18] mb-1">
                <span className="font-sans">Relation &amp; City</span> • <span className="font-tamil">உறவுமுறை &amp; ஊர்</span>
              </label>
              <input
                type="text"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                placeholder="e.g. Friend, Coimbatore / மாமா, பழனி"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/60 text-[#24070A] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder-[#8C6514]/40 transition-all"
              />
            </div>

            {/* Attendance Options (Bilingual Radio Pills) */}
            <div>
              <label className="block text-xs font-bold text-[#7A1C18] mb-1.5">
                <span className="font-sans">Will You Be Attending?</span> • <span className="font-tamil">வருகை விவரம்</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setAttendance('with-family')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 cursor-pointer transition-all ${
                    attendance === 'with-family'
                      ? 'bg-[#7A1C18] text-[#FFF9E6] border-[#7A1C18] shadow-xs'
                      : 'bg-white text-[#4A1016] border-[#D4AF37]/60 hover:bg-[#FAF6EE]'
                  }`}
                >
                  <span className="text-xs font-bold flex items-center gap-1">
                    <span>👨‍👩‍👧‍👦</span>
                    <span>With Family</span>
                  </span>
                  <span className={`font-tamil text-[11px] ${attendance === 'with-family' ? 'text-[#FFEAA7]' : 'text-[#8C6514]'}`}>
                    குடும்பத்துடன் வருகிறோம்
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('single')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 cursor-pointer transition-all ${
                    attendance === 'single'
                      ? 'bg-[#7A1C18] text-[#FFF9E6] border-[#7A1C18] shadow-xs'
                      : 'bg-white text-[#4A1016] border-[#D4AF37]/60 hover:bg-[#FAF6EE]'
                  }`}
                >
                  <span className="text-xs font-bold flex items-center gap-1">
                    <span>👤</span>
                    <span>Will Attend</span>
                  </span>
                  <span className={`font-tamil text-[11px] ${attendance === 'single' ? 'text-[#FFEAA7]' : 'text-[#8C6514]'}`}>
                    நிச்சயம் வருகிறேன்
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('wishes-only')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 cursor-pointer transition-all ${
                    attendance === 'wishes-only'
                      ? 'bg-[#7A1C18] text-[#FFF9E6] border-[#7A1C18] shadow-xs'
                      : 'bg-white text-[#4A1016] border-[#D4AF37]/60 hover:bg-[#FAF6EE]'
                  }`}
                >
                  <span className="text-xs font-bold flex items-center gap-1">
                    <span>💌</span>
                    <span>Wishes Only</span>
                  </span>
                  <span className={`font-tamil text-[11px] ${attendance === 'wishes-only' ? 'text-[#FFEAA7]' : 'text-[#8C6514]'}`}>
                    வாழ்த்துகள் மட்டும்
                  </span>
                </button>
              </div>
            </div>

            {/* Guest Count (if attending) */}
            {attendance !== 'wishes-only' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-1"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#7A1C18]">
                    <span className="font-sans">Number of Guests</span> • <span className="font-tamil">மொத்த நபர்கள்</span>
                  </label>
                  <span className="text-xs font-mono font-bold text-[#8C6514] bg-[#FFF9E6] px-2 py-0.5 rounded-md border border-[#D4AF37]/40">
                    {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        guestCount === num
                          ? 'bg-[#D4AF37] text-[#24070A] border-[#8C6514] shadow-xs scale-105'
                          : 'bg-white text-[#7A1C18] border-[#D4AF37]/60 hover:bg-[#FAF6EE]'
                      }`}
                    >
                      {num === 5 ? '5+' : num}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Blessing Message */}
            <div>
              <label className="block text-xs font-bold text-[#7A1C18] mb-1">
                <span className="font-sans">Your Message &amp; Blessings</span> • <span className="font-tamil">வாழ்த்துச் செய்தி</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/60 text-[#24070A] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder-[#8C6514]/40 resize-none transition-all"
              />
            </div>

            {/* ── THE PROMINENT "SUBMIT" BUTTON ── */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white shadow-[0_8px_25px_rgba(46,125,50,0.4)] flex items-center justify-center cursor-pointer transition-all border-2 border-[#81C784]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#A5D6A7] fill-[#1B5E20]" />
                <span className="font-cinzel text-base sm:text-lg font-black tracking-wider uppercase">
                  SUBMIT
                </span>
              </div>
            </motion.button>
          </form>

          {/* Share Invitation Link */}
          <div className="mt-5 pt-4 border-t border-[#D4AF37]/30 text-center">
            <button
              type="button"
              onClick={shareOnWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF6EE] text-[#7A1C18] font-bold text-xs shadow-xs border border-[#D4AF37]/60 transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Share Wedding Invitation • அழைப்பிதழைப் பகிர்க</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
