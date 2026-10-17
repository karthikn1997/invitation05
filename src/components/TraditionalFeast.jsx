import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export default function TraditionalFeast() {
  const [activeTab, setActiveTab] = useState('all');

  const menuCategories = [
    {
      id: 'sweets',
      name: 'இனிப்பு & பட்சணம்',
      subtitle: 'Sweets & Starters',
      items: [
        'பாலடை பாயாசம் (Palada Payasam)',
        'நெய் மைசூர் பாக் (Ghee Mysore Pak)',
        'காரசாரமான மெது வடை (Crispy Medu Vada)',
        'மிளகு காரா பூந்தி (Spicy Kara Boondi)',
      ],
    },
    {
      id: 'main',
      name: 'பிரதான உணவு',
      subtitle: 'Main Delicacies',
      items: [
        'மணமணக்கும் சுடச்சுட பொன்னி சாதம் & நெய்',
        'பருப்பு & நெய் சாதம் (Ghee Paruppu)',
        'மல்லிகைப் பூ இட்லி (Fluffy Malli Idli)',
        'உப்பலான பூரி & உருளைக்கிழங்கு மசாலா',
      ],
    },
    {
      id: 'curries',
      name: 'குழம்பு & கூட்டுகள்',
      subtitle: 'Curries & Sides',
      items: [
        'கல்யாண முருங்கைக்காய் சாம்பார் (Drumstick Sambar)',
        'மணமணக்கும் பூண்டு வத்தக்குழம்பு (Vatha Kuzhambu)',
        'கேரளா கதம்ப அவியல் (Traditional Aviyal)',
        'கார உருளைக்கிழங்கு வறுவல் (Potato Roast)',
        'மிளகு சீரக தக்காளி ரசம் (Tomato Pepper Rasam)',
        'மொறுமொறுப்பான உளுந்து அப்பளம் (Crisp Appalam)',
      ],
    },
    {
      id: 'finishers',
      name: 'நிறைவு & தாம்பூலம்',
      subtitle: 'Dessert & Beeda',
      items: [
        'கெட்டித் தயிர் & மாங்காய் ஊறுகாய் (Curd & Mango Pickle)',
        'குளிர்ந்த இஞ்சி கொத்தமல்லி மோர் (Spiced Buttermilk)',
        'வெண்ணிலா ஐஸ்கிரீம் (Vanilla Ice Cream)',
        'மங்கள வெற்றிலை பாக்கு தாம்பூலம் (Beeda & Thamboolam)',
      ],
    },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#34070f] via-[#240409] to-[#150205] border border-amber-500/40 shadow-2xl overflow-hidden">
        {/* Background Decorative Banana Leaf Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center relative z-10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs uppercase tracking-wider mb-2">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>அறுசுவை விருந்து உபசரிப்பு</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl font-bold text-gold-shimmer">
            தலைவாழை இலை கல்யாண விருந்து
          </h2>
          <p className="font-traditional text-amber-200/80 text-xs sm:text-sm mt-1">
            Royal Traditional Banana Leaf Feast Menu
          </p>
        </div>

        {/* Banana Leaf Visual Platter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {menuCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#1b0307]/80 border border-amber-400/25 hover:border-amber-400/60 transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-400/20">
                <h3 className="font-serif-classic text-base sm:text-lg font-bold text-amber-200">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-amber-400/60 font-mono">
                  {cat.subtitle}
                </span>
              </div>

              <ul className="space-y-2">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-amber-100/80 font-light"
                  >
                    <span className="text-amber-400 text-xs mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center relative z-10">
          <p className="font-script text-xl sm:text-2xl text-amber-300">
            "அன்போடு பரிமாறப்படும் அறுசுவை விருந்தை உண்டு மகிழுங்கள்"
          </p>
        </div>
      </div>
    </section>
  );
}
