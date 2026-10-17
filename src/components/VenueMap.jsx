import React from 'react';
import { MapPin, Navigation, CalendarPlus, Phone, Share2, Compass } from 'lucide-react';

export default function VenueMap() {
  const venueTitle = 'Sri Raja Rajeshwari Thirumana Mandapam';
  const venueTamilTitle = 'ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மஹால்';
  const address = 'No. 45, 100 Feet Road, Near Metro Station, Anna Nagar / Vadapalani, Chennai - 600026';
  const mapUrl = 'https://maps.google.com/?q=Chennai+Tamil+Nadu';

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent('Karthik & Ananya Wedding | கார்த்திக் & அனன்யா திருமணம்');
    const details = encodeURIComponent('Auspicious Wedding Muhurtham & Reception of Dr. Karthik and Er. Ananya. Join us to bless the couple!');
    const location = encodeURIComponent(`${venueTamilTitle}, ${address}`);
    const start = '20261206T033000Z'; // 9:00 AM IST is 03:30 UTC
    const end = '20261206T083000Z';   // 2:00 PM IST is 08:30 UTC
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-amber-400">🏛️</span>
          <span className="font-serif-classic text-xs tracking-widest text-amber-300 uppercase">
            திருமண மண்டபம் & வழிகாட்டி • Venue Location
          </span>
          <span className="text-amber-400">🏛️</span>
        </div>
        <h2 className="font-royal text-2xl sm:text-4xl font-bold text-gold-shimmer">
          மண்டபம் & இருப்பிடம்
        </h2>
      </div>

      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#350710]/95 to-[#1c0308]/95 border border-amber-500/40 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Venue Info */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 text-xs font-serif-classic">
                மங்கள மண்டபம்
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-amber-100 mt-2">
                {venueTamilTitle}
              </h3>
              <p className="font-serif-classic text-amber-300 text-sm mt-0.5">
                {venueTitle}
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start text-xs sm:text-sm text-amber-100/80">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>{address}</span>
            </div>

            {/* Quick Contact buttons */}
            <div className="pt-2 border-t border-amber-400/20">
              <p className="text-xs text-amber-300/70 mb-2 font-mono">தொடர்புக்கு / Contact:</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 text-xs border border-amber-400/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 98765 43210 (சுந்தரம்)</span>
                </a>
                <a
                  href="tel:+919876543211"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 text-xs border border-amber-400/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 98765 43211 (ராதாகிருஷ்ணன்)</span>
                </a>
              </div>
            </div>

            {/* Action Buttons: Google Maps & Calendar */}
            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-serif-classic font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps வழிகாட்டி</span>
              </a>

              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2a070e] hover:bg-[#3d0b15] text-amber-200 border border-amber-400/40 text-xs sm:text-sm font-serif-classic transition-colors shadow-md"
              >
                <CalendarPlus className="w-4 h-4 text-amber-400" />
                <span>கேலெண்டரில் குறிக்க (Add to Calendar)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Card */}
          <div className="w-full md:w-72 aspect-square rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl relative group">
            <iframe
              title="Venue Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.28827725905!2d80.14725354999999!3d13.047525500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter contrast-125 saturate-150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-stone-950/80 backdrop-blur-sm p-2 rounded-lg border border-amber-400/30 text-center">
              <span className="text-[11px] text-amber-300 font-serif-classic flex items-center justify-center gap-1">
                <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                Easy parking & Metro accessibility available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
