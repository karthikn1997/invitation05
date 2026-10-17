/**
 * Customer 002 Configuration — Sivasankaran & Ruba
 * Demonstrates clean multi-customer isolation for e-invitation business
 */
export const customer002 = {
  id: 'customer-002',
  slug: 'sivasankaran-ruba',
  displayName: 'S. Sivasankaran & M. Ruba',

  // 1. Bride Details
  bride: {
    tamilPrefix: 'மணமகள்',
    tamilName: 'ரூபா',
    englishName: 'Ruba',
    fullName: 'M. Ruba',
    qualificationTamil: 'B.Tech.,',
    qualificationEnglish: 'B.Tech.',
    parentsTamil: 'திரு. மா. முருகேசன் - திருமதி. மு. பார்வதி',
    parentsEnglish: 'Mr. M. Murugesan & Mrs. M. Parvathi',
    familyCity: 'மதுரை (Madurai)',
    photo: '/images/photo-1594744803329-e58b31de8bf5.jpg',
    alt: 'Bride Ruba',
    scale: 1,
    offsetY: 0,
    offsetX: 0,
  },

  // 2. Groom Details
  groom: {
    tamilPrefix: 'மணமகன்',
    tamilName: 'சிவசங்கரன்',
    englishName: 'Sivasankaran',
    fullName: 'S. Sivasankaran',
    qualificationTamil: 'M.B.A.,',
    qualificationEnglish: 'M.B.A.',
    parentsTamil: 'திரு. சு. சுப்பிரமணியன் - திருமதி. சு. காமாட்சி',
    parentsEnglish: 'Mr. S. Subramanian & Mrs. S. Kamakshi',
    familyCity: 'திருச்சி (Trichy)',
    photo: '/images/photo-1506794778202-cad84cf45f1d.jpg',
    alt: 'Groom Sivasankaran',
    scale: 1,
    offsetY: 0,
    offsetX: 0,
  },

  // 3. Couple Details
  couple: {
    monogram: 'S & R',
    tamilNames: 'சிவசங்கரன் & ரூபா',
    englishNames: 'Sivasankaran & Ruba',
    shortNames: 'Siva & Ruba',
    photo: '/images/royal-couple.jpg',
    alt: 'Sivasankaran & Ruba',
    scale: 1,
    offsetY: 0,
  },

  // 4. Wedding Ceremony Details
  wedding: {
    title: 'WEDDING',
    tamilTitle: 'சுபமுகூர்த்தம்',
    dayOrdinal: '22nd',
    monthYear: 'November 2026',
    betweenLabel: 'Between',
    muhurthamStart: '6.00 am',
    muhurthamEnd: '7.30 am',
    muhurthamTimeFormatted: '6.00 am to 7.30 am',
    isoDateTime: '2026-11-22T06:00:00+05:30',
    calendarEndIso: '2026-11-22T07:30:00+05:30',
    tamilDateFull: 'நிகழும் மங்களகரமான துந்துபி வருடம் கார்த்திகை மாதம் 06-ம் தேதி (22.11.2026) ஞாயிற்றுக்கிழமை',
    tamilThithi: 'வளர்பிறை சதுர்த்தசி திதியும், அசுவினி நட்சத்திரமும் கூடிய சுபயோக சுபதினத்தில்',
    tamilTimePeriod: 'காலை 6.00 மணிக்கு மேல் 7.30 மணிக்குள் அமைந்த சுபமுகூர்த்த வேளையில்',
  },

  // 5. Reception Details
  reception: {
    enabled: true,
    title: 'RECEPTION',
    tamilTitle: 'வரவேற்பு',
    dateDisplay: '21st November 2026, Saturday',
    tamilDateDisplay: '21 நவம்பர் 2026, சனிக்கிழமை',
    timeDisplay: 'From 6.30 pm to 9.00 pm',
    tamilTimeDisplay: 'மாலை 6.30 மணி முதல் 9.00 மணி வரை',
    isoDateTime: '2026-11-21T18:30:00+05:30',
  },

  // 6. Venue & Location
  venue: {
    name: 'Meenakshi Sundareswarar Thirumana Mandapam',
    tamilName: 'மீனாட்சி சுந்தரேஸ்வரர் திருமண மண்டபம்',
    addressLine1: 'South Masi Street',
    addressLine2: 'Near Temple Gate',
    city: 'Madurai',
    state: 'Tamil Nadu',
    pincode: '625001',
    fullAddress: 'Meenakshi Sundareswarar Thirumana Mandapam, South Masi Street, Madurai 625001',
    tamilFullAddress: 'மதுரை, தெற்கு மாசி வீதி, மீனாட்சி சுந்தரேஸ்வரர் திருமண மண்டபம்',
    mapsUrl: 'https://maps.google.com/?q=Madurai+Meenakshi+Thirumana+Mandapam',
  },

  // 7. Background Sacred Music
  music: {
    file: '/audio/pesamale-bgm.mp3',
    title: 'Sacred Nadaswaram Mangala Isai',
  },

  // 8. Invitation Messages
  invitationMessage: {
    openingTamil: 'திருமண அழைப்பிதழ்',
    invocation: 'ஸ்ரீ மீனாட்சி சுந்தரேஸ்வரர் துணை',
    salutationTamil: 'அன்புடையீர்,',
    bodyTamil: 'எங்கள் இல்லத் திருமண விழாவிற்கு தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்தி அருள அன்புடன் அழைக்கின்றோம்.',
    bodyEnglish: 'We cordially invite you with family and friends to grace the wedding ceremony and shower your warm blessings upon the couple.',
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
    whatsappText: 'Warmly inviting you to the wedding of Sivasankaran & Ruba on 22nd November 2026 at Madurai. Please join us: ',
  },
};

export default customer002;
