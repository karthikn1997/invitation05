/**
 * =======================================================================
 * SACRED TAMIL HINDU WEDDING E-INVITATION CONFIGURATION
 * =======================================================================
 * Modify this file to update all bride and groom details, dates, muhurtham timings,
 * venue information, family blessings, photo assets, and background music.
 * Every displayed element across the 5 cinematic scenes and interactive tools
 * updates dynamically from this single source of truth.
 */

export const weddingDetails = {
  // 1. Bride Information
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
    // Photo asset (Cutout or portrait for Scene 2)
    photo: '/scenes/scene2_bride_clean@2x.png',
    cutout: '/scenes/bride_cutout@2x.png',
    alt: 'Bride S. Priyanka in traditional bridal silk saree and temple gold jewellery',
  },

  // 2. Groom Information
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
    // Photo asset (Cutout or portrait for Scene 3)
    photo: '/scenes/scene3_groom_clean@2x.png',
    cutout: '/scenes/groom_cutout@2x.png',
    alt: 'Groom R. Arjun in traditional silk shirt and gold zari veshti',
  },

  // 3. Couple Information (Scenes 4 & 5)
  couple: {
    monogram: 'R & P',
    tamilNames: 'R. அர்ஜுன் & S. பிரியங்கா',
    englishNames: 'R. Arjun & S. Priyanka',
    shortNames: 'Arjun & Priyanka',
    // Grand wooden palace couple portrait (Scene 4)
    palacePortraitPhoto: '/scenes/scene4_couple_clean@2x.png',
    // Clean wooden palace background with seated couple for date reveal (Scene 5)
    palaceDateRevealPhoto: '/scenes/scene5_palace_clean_bg@2x.png',
    alt: 'R. Arjun & S. Priyanka seated in traditional wooden palace entrance',
  },

  // 4. Wedding Ceremony Details (Visual Scene 5 & Countdown)
  wedding: {
    title: 'WEDDING',
    tamilTitle: 'சுபமுகூர்த்தம்',
    // Formatted strings matching the reference visual style:
    dayOrdinal: '15th',
    monthYear: 'November 2026',
    betweenLabel: 'Between',
    muhurthamStart: '5.00 am',
    muhurthamEnd: '9.00 am',
    muhurthamTimeFormatted: '5:00 am to 9:00 am',
    
    // Exact ISO Timestamp for live countdown & calendar:
    isoDateTime: '2026-11-15T05:00:00+05:30',
    calendarEndIso: '2026-11-15T09:00:00+05:30',
    
    // Auspicious astrological & Tamil calendar details:
    tamilDateFull: 'நிகழும் மங்களகரமான துந்துபி வருடம் கார்த்திகை மாதம் 01-ம் தேதி (15.11.2026) ஞாயிற்றுக்கிழமை',
    tamilThithi: 'சுக்கிலபட்ச சப்தமி திதியும், உத்திராடம் நட்சத்திரமும், சுபயோகமும் கூடிய சுபயோக சுபதினத்தில்',
    tamilTimePeriod: 'காலை 5.00 மணிக்கு மேல் 9.00 மணிக்குள் அமைந்த சுபமுகூர்த்த வேளையில்',
  },

  // 5. Reception Details (Optional / Ceremony Timeline)
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

  // 6. Sacred Venue & Location
  venue: {
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
    embedMapUrl: 'https://maps.google.com/maps?q=Sri%20Murugan%20Thirumana%20Mandapam%20Vadakkipalayam%20Pirivu%20Pollachi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // 8. Background Sacred Music
  music: {
    file: '/audio/wedding-bgm.mp3',
    title: 'Custom Wedding BGM',
    subtitle: 'Nadaswaram & Traditional Raagas',
    enableSynthFallback: true,
  },

  // 8b. Sacred Animated Video Invitation
  video: {
    file: '/video/wedding-invite.mp4',
    title: 'Saravana Velu & Dhanalakshmi Wedding Video Invitation',
  },

  // 8. Invitation Messages & Thirukkural
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

  // 9. Scene Timeline Durations (in seconds)
  sceneDurations: {
    scene1Temple: 7.5,      // Visual Scene 1: Temple and Vinayagar Title
    scene2Bride: 7.5,       // Visual Scene 2: Bride Introduction
    scene3Groom: 7.5,       // Visual Scene 3: Groom Introduction
    scene4CouplePalace: 8.0,// Visual Scene 4: Grand Seated Couple in Wooden Palace
    scene5WeddingDate: 9.5, // Visual Scene 5: Date, Month, Muhurtham Time Reveal
  },

  // 10. Social Sharing
  share: {
    whatsappText: 'Warmly inviting you to the wedding of Saravana Velu & Dhanalakshmi on 23rd October 2026 at Sri Murugan Thirumana Mandapam, Pollachi. Please join us and bless the couple: ',
    calendarTitle: 'Wedding: Saravana Velu & Dhanalakshmi',
    calendarDescription: 'Subamuhurtham wedding ceremony of Saravana Velu and Dhanalakshmi at Sri Murugan Thirumana Mandapam, Pollachi.',
  },
};

export default weddingDetails;
