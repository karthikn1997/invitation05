import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Utensils, Music, HeartHandshake } from 'lucide-react';

export default function EventsTimeline() {
  const events = [
    {
      id: 1,
      title: 'மாப்பிள்ளை அழைப்பு & சங்கீத்',
      englishTitle: 'Reception & Sangeet Celebration',
      date: 'சனிக்கிழமை, 5 டிசம்பர் 2026',
      englishDate: 'Saturday, 5th December 2026',
      time: 'மாலை 6:30 மணி முதல் (6:30 PM Onwards)',
      description: 'மணமகன் ஊர்வலம், இனிமையான சங்கீத இசை நிகழ்ச்சி, மெஹந்தி மற்றும் சுவையான விருந்து உபசரிப்பு.',
      icon: Music,
      badge: 'சங்கீத் கொண்டாட்டம்',
      accentColor: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 2,
      title: 'புனித சுபமுகூர்த்தம்',
      englishTitle: 'The Auspicious Muhurtham',
      date: 'ஞாயிற்றுக்கிழமை, 6 டிசம்பர் 2026',
      englishDate: 'Sunday, 6th December 2026',
      time: 'காலை 9:00 AM முதல் 10:30 AM வரை (மேஷ லக்னம்)',
      description: 'கன்னிகாதானம், திருமாங்கல்ய தாரணம் மற்றும் சப்தபதி சடங்குகளுடன் இரு மனங்கள் இணையும் புனித வேளை.',
      icon: HeartHandshake,
      badge: 'புனித முகூர்த்தம்',
      accentColor: 'from-yellow-500/30 to-amber-600/30',
      isPrimary: true,
    },
    {
      id: 3,
      title: 'மங்கல கல்யாண விருந்து',
      englishTitle: 'Royal South Indian Feast',
      date: 'ஞாயிற்றுக்கிழமை, 6 டிசம்பர் 2026',
      englishDate: 'Sunday, 6th December 2026',
      time: 'காலை 11:30 AM முதல் 2:30 PM வரை',
      description: 'பாரம்பரிய முறைப்படி தலைவாழை இலையில் அறுசுவை மங்கல கல்யாண விருந்து பரிமாறப்படும்.',
      icon: Utensils,
      badge: 'அறுசுவை விருந்து',
      accentColor: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      id: 4,
      title: 'மங்கல வரவேற்பு & வாழ்த்து',
      englishTitle: 'Evening Wedding Reception',
      date: 'ஞாயிற்றுக்கிழமை, 6 டிசம்பர் 2026',
      englishDate: 'Sunday, 6th December 2026',
      time: 'மாலை 6:30 மணி முதல் (6:30 PM Onwards)',
      description: 'நண்பர்கள் மற்றும் உறவினர்களின் வாழ்த்துகளுடன் நேரலை இசை மற்றும் சிறப்பு இரவு உணவு.',
      icon: Sparkles,
      badge: 'வரவேற்பு',
      accentColor: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-amber-400">✨</span>
          <span className="font-serif-classic text-xs tracking-widest text-amber-300 uppercase">
            நிகழ்ச்சி நிரல் • Wedding Itinerary
          </span>
          <span className="text-amber-400">✨</span>
        </div>
        <h2 className="font-royal text-2xl sm:text-4xl font-bold text-gold-shimmer">
          மங்கள சுப நிகழ்வுகள்
        </h2>
        <p className="font-traditional text-amber-100/70 text-sm mt-2">
          அனைத்து மங்கள நிகழ்வுகளிலும் கலந்துகொண்டு மணமக்களை வாழ்த்திடுங்கள்
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="space-y-6">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r ${event.accentColor} bg-[#230409]/90 border ${
                event.isPrimary
                  ? 'border-amber-400 shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                  : 'border-amber-500/30'
              } backdrop-blur-sm transition-all duration-300 hover:border-amber-400/80`}
            >
              {/* Special Tag for Muhurtham */}
              {event.isPrimary && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <span>⭐</span> பிரதான நிகழ்வு
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Event Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-serif-classic">
                      {event.badge}
                    </span>
                    <span className="text-xs text-amber-300/70 font-mono">
                      {event.englishTitle}
                    </span>
                  </div>

                  <h3 className="font-royal text-xl sm:text-2xl font-bold text-amber-100">
                    {event.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs sm:text-sm text-amber-200/90 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-amber-100/70 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
