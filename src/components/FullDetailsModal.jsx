import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Clock, Heart, Users } from 'lucide-react';
import { weddingDetails } from '../config/weddingDetails';
import Countdown from './Countdown';
import ShareButtons from './ShareButtons';

/**
 * Traditional Royal Patrikai Full Details Modal
 * Accessible, beautifully typeset with Noto Serif Tamil,
 * providing the full traditional details without interrupting the cinematic experience.
 */
export default function FullDetailsModal({ isOpen, onClose, config }) {
  if (!isOpen) return null;

  const data = config || weddingDetails;
  const { bride, groom, couple, wedding, reception, venue, invitationMessage } = data;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#0A0304]/80 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ y: '100%', opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-xl max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#160806] border-2 border-[#E6C687]/70 text-[#FFF8E7] shadow-[0_25px_80px_rgba(0,0,0,0.95)] p-5 sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#2A0E08]/80 text-[#E6C687] hover:bg-[#3D140B] border border-[#E6C687]/40 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Emblem */}
          <div className="flex flex-col items-center text-center pb-4 border-b border-[#E6C687]/30">
            <span className="text-xs font-tamil tracking-widest text-[#E8C77F] font-bold">
              {invitationMessage.invocation}
            </span>
            <h2 className="font-tamil text-xl sm:text-2xl font-bold text-[#FFF5DB] mt-1">
              {invitationMessage.openingTamil}
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-[#E6C687]/80">
              {couple.englishNames}
            </p>
          </div>

          {/* Sacred Thirukkural */}
          <div className="my-5 p-4 rounded-2xl bg-[#260D08]/80 border border-[#E6C687]/30 text-center">
            <p className="font-tamil text-sm sm:text-base text-[#FFF5DB] font-semibold leading-relaxed">
              "{invitationMessage.thirukkural.line1}"
            </p>
            <p className="font-tamil text-sm sm:text-base text-[#F5D98A] font-semibold leading-relaxed">
              "{invitationMessage.thirukkural.line2}"
            </p>
            <p className="font-tamil text-xs text-[#E6C687]/70 mt-1 font-medium">
              {invitationMessage.thirukkural.citation}
            </p>
          </div>

          {/* Countdown Card */}
          <div className="my-5 text-center">
            <p className="text-xs font-serif uppercase tracking-[0.2em] text-[#E8C77F] mb-2 font-semibold">
              Time Remaining Until Subamuhurtham
            </p>
            <Countdown />
          </div>

          {/* Bride & Groom Lineage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {/* Groom Profile */}
            <div className="p-4 rounded-2xl bg-[#220B07]/90 border border-[#E6C687]/35 text-center">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#7A1C18] text-[#FFF8E7] font-tamil text-xs font-bold mb-2">
                {groom.tamilPrefix}
              </span>
              <h3 className="font-tamil text-lg sm:text-xl font-bold text-[#FFF8E7]">
                {groom.tamilName}
              </h3>
              <p className="font-serif italic text-sm text-[#E6C687] font-semibold">
                {groom.englishName} {groom.qualificationEnglish}
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#E6C687]/20 text-xs text-[#FAF0D7]/85 space-y-0.5">
                <p className="font-tamil">{groom.parentsTamil}</p>
                <p className="font-serif text-[11px] text-[#E6C687]/70">{groom.parentsEnglish}</p>
              </div>
            </div>

            {/* Bride Profile */}
            <div className="p-4 rounded-2xl bg-[#220B07]/90 border border-[#E6C687]/35 text-center">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#7A1C18] text-[#FFF8E7] font-tamil text-xs font-bold mb-2">
                {bride.tamilPrefix}
              </span>
              <h3 className="font-tamil text-lg sm:text-xl font-bold text-[#FFF8E7]">
                {bride.tamilName}
              </h3>
              <p className="font-serif italic text-sm text-[#E6C687] font-semibold">
                {bride.englishName} {bride.qualificationEnglish}
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#E6C687]/20 text-xs text-[#FAF0D7]/85 space-y-0.5">
                <p className="font-tamil">{bride.parentsTamil}</p>
                <p className="font-serif text-[11px] text-[#E6C687]/70">{bride.parentsEnglish}</p>
              </div>
            </div>
          </div>

          {/* Auspicious Ceremony Events */}
          <div className="space-y-3 my-6">
            {/* Muhurtham */}
            <div className="p-4 rounded-2xl bg-[#290E08]/90 border border-[#E6C687]/40 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#7A1C18] text-[#F5D98A] shrink-0 mt-0.5">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-base text-[#FFF5DB] tracking-wide">
                    {wedding.title} • {wedding.tamilTitle}
                  </h4>
                  <span className="font-serif text-xs text-[#F5D98A] font-bold">
                    {wedding.dayOrdinal} {wedding.monthYear}
                  </span>
                </div>
                <p className="font-serif text-sm text-[#E8C77F] mt-0.5">
                  {wedding.betweenLabel} {wedding.muhurthamTimeFormatted}
                </p>
                <p className="font-tamil text-xs text-[#FAF0D7]/80 mt-1 leading-relaxed">
                  {wedding.tamilDateFull} • {wedding.tamilTimePeriod}
                </p>
              </div>
            </div>

            {/* Reception */}
            {reception.enabled && (
              <div className="p-4 rounded-2xl bg-[#290E08]/90 border border-[#E6C687]/30 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#591410] text-[#E6C687] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#FFF5DB] tracking-wide">
                      {reception.title} • {reception.tamilTitle}
                    </h4>
                    <span className="font-serif text-xs text-[#E6C687]/80">
                      {reception.dateDisplay}
                    </span>
                  </div>
                  <p className="font-serif text-sm text-[#E8C77F] mt-0.5">
                    {reception.timeDisplay}
                  </p>
                  <p className="font-tamil text-xs text-[#FAF0D7]/80 mt-1">
                    {reception.tamilDateDisplay} • {reception.tamilTimeDisplay}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Venue & Location */}
          <div className="my-6 p-4 rounded-2xl bg-[#200A06]/90 border border-[#E6C687]/35">
            <div className="flex items-center gap-2 mb-2 text-[#F5D98A]">
              <MapPin className="w-4 h-4" />
              <h4 className="font-serif font-bold text-sm tracking-widest uppercase">
                Auspicious Venue
              </h4>
            </div>
            <h5 className="font-tamil text-base font-bold text-[#FFF8E7]">
              {venue.tamilName}
            </h5>
            <p className="font-serif text-sm text-[#E6C687] font-semibold">{venue.name}</p>
            <p className="font-sans text-xs text-[#FAF0D7]/80 mt-1">{venue.fullAddress}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-[#E6C687]/30">
            <ShareButtons variant="full" />
          </div>

          {/* Family Signoff */}
          <div className="text-center mt-6 pt-2">
            <p className="font-tamil text-xs text-[#E6C687] font-semibold">
              {invitationMessage.closingSignoffTamil}
            </p>
            <p className="font-serif italic text-xs text-[#FFF8E7]/70 mt-0.5">
              {invitationMessage.closingSignoffEnglish}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
