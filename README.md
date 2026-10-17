# invitation05

# 🪔 Sacred Tamil Hindu Wedding Animated E-Invitation Website

A bespoke, cinematic 9:16 vertical animated Tamil Hindu wedding e-invitation inspired directly by traditional South Indian temple and heritage palace aesthetics. Built with **React 19, Vite, Tailwind CSS, Framer Motion, and Lucide React**.

---

## 🎬 Cinematic Scene Sequence

1. **Scene 1 — Temple and Vinayagar (`OpeningTempleScene`)**:
   - Dreamy pastel mint-green, turquoise, and golden-yellow sky with soft volumetric clouds and warm sunlight.
   - Intricate, colourful traditional South Indian temple gopuram filling the lower half of the screen.
   - Centered circular Lord Ganesha emblem (`vinayagar_crest`) with glowing divine aura.
   - Deep olive-green calligraphic Tamil wedding title: **"திருமண அழைப்பிதழ்"**.
   - Gentle camera push-in, drifting clouds, flying birds, and subtle floating golden particles.

2. **Scene 2 — Bride Introduction (`BrideIntroductionScene`)**:
   - Seamless continuity with the pastel sky and temple backdrop.
   - Real photographic portrait of the bride (Dhanalakshmi) positioned toward the right side in rich bridal silk saree and temple gold jewellery.
   - Clean negative space on the upper-left with Tamil typography: **"மணமகள் தனலட்சுமி"**.
   - Subtle palm leaves entering from the left edge swaying organically in the breeze.
   - Soft sunlight beam and slow floating particles with gentle upward reveal.

3. **Scene 3 — Groom Introduction (`GroomIntroductionScene`)**:
   - Same pastel sky and colourful temple environment.
   - Real photographic portrait of the groom (Saravana Velu) in white silk shirt & gold zari veshti in left foreground.
   - Tamil typography on the upper-right: **"மணமகன் சரவண வேலு"**.
   - Softly blurred bride in the background right for depth.
   - Swaying tropical palm leaves, flying birds, and subtle parallax.

4. **Scene 4 — Grand Couple Portrait (`CouplePalaceScene`)**:
   - Dramatic transition from the bright temple world into a rich, dark, warm-brown wooden palace entrance.
   - Grand traditional South Indian wooden archway with carved pillars and deep cinematic shadows.
   - Couple seated together in the center framed by large green banana leaves (*vazhai maram*), brass pots, white floral arrangements, and flower decorations.
   - Naturally drifting red rose petals tumbling continuously with 3D physics.

5. **Scene 5 — Wedding Date Reveal (`WeddingDateScene`)**:
   - Rich wooden palace background with the couple seated in the lower half.
   - Foreground drifting red rose petals.
   - Upper center sequential reveal in cream-gold serif typography:
     - `WEDDING`
     - `23rd`
     - `October 2026`
     - `Between`
     - `7.35 am to 9.00 am`
   - Dynamically generated and animated from configuration!

---

## ⚙️ How to Edit Wedding Details

All displayed content, names, dates, muhurtham times, venue, and photos update from a single central file:

👉 **[`src/config/weddingDetails.js`](file:///E:/wedding-invite/invitation/src/config/weddingDetails.js)**

### Example Configuration:
```javascript
export const weddingDetails = {
  bride: {
    tamilPrefix: 'மணமகள்',
    tamilName: 'தனலட்சுமி',
    englishName: 'Dhanalakshmi',
    fullName: 'M. Dhanalakshmi',
    parentsTamil: 'திரு. ம. முருகன் - திருமதி. மு. சாவித்திரி',
    parentsEnglish: 'Mr. M. Murugan & Mrs. M. Savithri',
    photo: '/scenes/scene2_bride_clean@2x.png',
  },
  groom: {
    tamilPrefix: 'மணமகன்',
    tamilName: 'சரவண வேலு',
    englishName: 'Saravana Velu',
    fullName: 'S. Saravana Velu',
    parentsTamil: 'திரு. சு. செந்தில்குமார் - திருமதி. செ. லட்சுமி',
    parentsEnglish: 'Mr. S. Senthilkumar & Mrs. S. Lakshmi',
    photo: '/scenes/scene3_groom_clean@2x.png',
  },
  wedding: {
    title: 'WEDDING',
    tamilTitle: 'சுபமுகூர்த்தம்',
    dayOrdinal: '23rd',
    monthYear: 'October 2026',
    betweenLabel: 'Between',
    muhurthamTimeFormatted: '7.35 am to 9.00 am',
    isoDateTime: '2026-10-23T07:35:00+05:30',
  },
  venue: {
    name: 'Sri Murugan Thirumana Mandapam',
    tamilName: 'ஸ்ரீ முருகன் திருமண மண்டபம்',
    fullAddress: 'Sri Murugan Thirumana Mandapam, Vadakkipalayam Pirivu, Kovai Main Road, Pollachi, Tamil Nadu 642002',
    mapsUrl: 'https://maps.google.com/?q=Sri+Murugan+Thirumana+Mandapam+Pollachi',
  },
  // ...
};
```

---

## 📸 How to Replace Real Photographs

Place your high-resolution images in `public/scenes/` (or `public/couple/`) and update the corresponding path in [`src/config/weddingDetails.js`](file:///E:/wedding-invite/invitation/src/config/weddingDetails.js):

| Scene | Config Field | Current Asset |
|---|---|---|
| **Scene 2 (Bride)** | `weddingDetails.bride.photo` | `/scenes/scene2_bride_clean@2x.png` |
| **Scene 3 (Groom)** | `weddingDetails.groom.photo` | `/scenes/scene3_groom_clean@2x.png` |
| **Scene 4 (Couple Palace)** | `weddingDetails.couple.palacePortraitPhoto` | `/scenes/scene4_couple_clean@2x.png` |
| **Scene 5 (Date Reveal)** | `weddingDetails.couple.palaceDateRevealPhoto` | `/scenes/scene5_palace_clean_bg@2x.png` |

---

## 🎵 Background Music & Audio Fallback

- The music file is located at `public/audio/pesamale-bgm.mp3`.
- **Autoplay Compliance**: Playback begins smoothly upon the user's initial interaction (**"Tap to Open Sacred Invitation"**).
- **Web Audio Fallback**: If an audio file fails to load or browser restrictions intervene, the built-in `audioSynth.js` seamlessly plays an authentic Mohanam Raaga melody with traditional tanpura drone.

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## ✨ Features Included
- **9:16 Fullscreen Vertical Experience**: Mobile-optimized, with opulent ambient theater backdrop on desktop.
- **Segmented Scene Progress Bar**: Jump to any scene or track current playback.
- **Pause / Resume & Replay Controls**: Easily pause to read details or restart the film from the beginning.
- **Auspicious Live Countdown**: Real-time days, hours, minutes, and seconds countdown to the Muhurtham.
- **1-Click WhatsApp Share**: Prefilled auspicious message with direct link.
- **1-Click Add to Google Calendar**: Direct link with event date, time range, venue address, and description.
- **Google Maps Directions**: Instant route navigation.
- **Full Traditional Patrikai Sheet**: Slide-up drawer displaying family lineages, Thirukkural, and complete schedule.
