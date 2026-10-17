/**
 * Customer 001 Configuration — Saravana Velu & Dhanalakshmi
 * Authentic Tamil Hindu Wedding E-Invitation
 */
export const customer001 = {
  id: 'customer-001',
  slug: 'saravana-velu-dhanalakshmi',
  displayName: 'Saravana Velu & Dhanalakshmi',

  // Temple Gopuram (Scene 1)
  templePhoto: '/fresh/temple_gopuram_new.jpg',

  // 1. Bride Details
  bride: {
    tamilPrefix: 'மணமகள்',
    tamilName: 'S. பிரியங்கா',
    englishName: 'Priyanka',
    fullName: 'S. Priyanka',
    qualificationTamil: 'M.Tech.,',
    qualificationEnglish: 'M.Tech.',
    parentsTamil: 'திரு. மா. சௌந்தரராஜன் - திருமதி. ச. வாசந்தி',
    parentsEnglish: 'Mr. M. Soundararajan & Mrs. S. Vasanthi',
    familyCity: 'சென்னை (Chennai)',
    photo: '/scenes/bride_cutout@2x.png',
    alt: 'Bride S. Priyanka',
    scale: 1,
    offsetY: 0,
    offsetX: 0,
  },

  // 2. Groom Details
  groom: {
    tamilPrefix: 'மணமகன்',
    tamilName: 'R. அர்ஜுன்',
    englishName: 'Arjun',
    fullName: 'R. Arjun',
    qualificationTamil: 'B.Tech.,',
    qualificationEnglish: 'B.Tech.',
    parentsTamil: 'திரு. ஆர். ராமகிருஷ்ணன் - திருமதி. ரா. லட்சுமி',
    parentsEnglish: 'Mr. R. Ramakrishnan & Mrs. R. Lakshmi',
    familyCity: 'சென்னை (Chennai)',
    photo: '/scenes/groom_cutout@2x.png',
    alt: 'Groom R. Arjun',
    scale: 1,
    offsetY: 0,
    offsetX: 0,
  },

  // 3. Couple Details
  couple: {
    monogram: 'R & P',
    tamilNames: 'R. அர்ஜுன் & S. பிரியங்கா',
    englishNames: 'R. Arjun & S. Priyanka',
    shortNames: 'Arjun & Priyanka',
    photo: '/scenes/scene4_couple_cutout_clean@2x.png',
    bgPhoto: '/scenes/scene4_bg_clean.jpg',
    alt: 'R. Arjun & S. Priyanka seated in palace',
    scale: 1,
    offsetY: 0,
  },

  // 4. Wedding Ceremony Details
  wedding: {
    title: 'WEDDING',
    tamilTitle: 'சுபமுகூர்த்தம்',
    dayOrdinal: '15th',
    monthYear: 'November 2026',
    betweenLabel: 'Between',
    muhurthamStart: '5.00 am',
    muhurthamEnd: '9.00 am',
    muhurthamTimeFormatted: '5:00 am to 9:00 am',
    isoDateTime: '2026-11-15T05:00:00+05:30',
    calendarEndIso: '2026-11-15T09:00:00+05:30',
    tamilDateFull: 'நிகழும் மங்களகரமான துந்துபி வருடம் கார்த்திகை மாதம் 01-ம் தேதி (15.11.2026) ஞாயிற்றுக்கிழமை',
    tamilThithi: 'சுக்கிலபட்ச சப்தமி திதியும், உத்திராடம் நட்சத்திரமும், சுபயோகமும் கூடிய சுபயோக சுபதினத்தில்',
    tamilTimePeriod: 'காலை 5.00 மணிக்கு மேல் 9.00 மணிக்குள் அமைந்த சுபமுகூர்த்த வேளையில்',
  },

  // 5. Reception Details
  reception: {
    enabled: true,
    title: 'RECEPTION',
    tamilTitle: 'வரவேற்பு',
    dateDisplay: '22nd October 2026, Thursday',
    tamilDateDisplay: '22 அக்டோபர் 2026, வியாழக்கிழமை',
    timeDisplay: 'From 6.30 pm to 9.00 pm',
    tamilTimeDisplay: 'மாலை 6.30 மணி முதல் 9.00 மணி வரை',
    isoDateTime: '2026-10-22T18:30:00+05:30',
  },

  // 6. Auspicious Venue & Location
  venue: {
    photo: '/images/mandapam_venue_photo.jpg',
    name: 'Sri Murugan Thirumana Mandapam',
    tamilName: 'ஸ்ரீ முருகன் திருமண மண்டபம்',
    addressLine1: 'Vadakkipalayam Pirivu',
    addressLine2: 'Kovai Main Road',
    city: 'Pollachi',
    state: 'Tamil Nadu',
    pincode: '642002',
    fullAddress: 'Sri Murugan Thirumana Mandapam, Vadakkipalayam Pirivu, Kovai Main Road, Pollachi, Tamil Nadu 642002',
    tamilFullAddress: 'பொள்ளாச்சி, கோவை மெயின் ரோடு, வடக்கிப்பாளையம் பிரிவு, ஸ்ரீ முருகன் திருமண மண்டபம்',
    mapsUrl: 'https://maps.google.com/?q=Sri+Murugan+Thirumana+Mandapam+Pollachi',
  },

  // 7. Background Sacred Music
  music: {
    file: '/audio/wedding-bgm.mp3',
    title: 'Custom Wedding BGM',
  },

  // 8. Invitation Messages & Sacred Thirukkural
  invitationMessage: {
    openingTamil: 'திருமண அழைப்பிதழ்',
    invocation: 'ஸ்ரீ விநாயகர் துணை',
    salutationTamil: 'அன்புடையீர்,',
    bodyTamil: 'எங்கள் இல்லத் திருமண விழாவிற்கு தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்தி அருள அன்புடன் அழைக்கின்றோம்.',
    bodyEnglish: 'We cordially invite you with family and friends to grace the auspicious wedding ceremony and shower your warm blessings upon the newly wedded couple.',
    thirukkural: {
      line1: 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை',
      line2: 'பண்பும் பயனும் அது',
      citation: '- திருக்குறள் (45)',
    },
    closingSignoffTamil: 'இரு இல்லங்களின் இனிய அழைப்பு',
    closingSignoffEnglish: 'With Love, Family & Friends',
  },

  // 9. Scene Durations (seconds)
  sceneDurations: {
    scene1Temple: 6.5,
    scene2Bride: 6.5,
    scene3Groom: 6.5,
    scene4Couple: 7.0,
    scene5Corridor: 6.0,
    scene6Details: 8.5,
  },

  // 10. Social Share Prefill
  share: {
    whatsappText: 'Warmly inviting you to the wedding of R. Arjun & S. Priyanka on 12th December 2026 at Sri Raja Rajeshwari Thirumana Mandapam, Chennai. Please join us and bless the couple: ',
  },
};

export default customer001;
