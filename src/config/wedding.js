/**
 * ==============================================================================
 * THE WEDDING FILM - CENTRAL CONTENT CONFIGURATION
 * ==============================================================================
 * 
 * Instructions:
 * Families and users can easily customize all details of the wedding film invitation below.
 * Replace placeholder photos with real couple photographs in /public/images/
 */

export const weddingConfig = {
  // ----------------------------------------------------------------------------
  // 1. COUPLE INFORMATION
  // ----------------------------------------------------------------------------
  couple: {
    bride: {
      nameTamil: "அனன்யா",
      nameEnglish: "Ananya",
      qualification: "B.Tech., MBA",
      parentsTamil: "திரு. கே. ராதாகிருஷ்ணன் & திருமதி. ஆர். மீனாட்சி",
      parentsEnglish: "Mr. K. Radhakrishnan & Mrs. R. Meenakshi",
      familyDetailsTamil: "அவர்களின் அன்புத் திருமகள்",
      familyDetailsEnglish: "Daughter of Mr. K. Radhakrishnan & Mrs. R. Meenakshi",
    },

    groom: {
      nameTamil: "கார்த்திக்",
      nameEnglish: "Karthik",
      qualification: "M.S.",
      parentsTamil: "திரு. கு. சுந்தரம் & திருமதி. எஸ். லக்ஷ்மி",
      parentsEnglish: "Mr. K. Sundaram & Mrs. S. Lakshmi",
      familyDetailsTamil: "அவர்களின் அன்புத் திருமகன்",
      familyDetailsEnglish: "Son of Mr. K. Sundaram & Mrs. S. Lakshmi",
    },
  },

  // ----------------------------------------------------------------------------
  // 2. PRESENTATION SETTINGS
  // ----------------------------------------------------------------------------
  presentation: {
    // Name order: Set to true for "Bride & Groom", false for "Groom & Bride"
    brideFirst: true,

    // Enable/disable the full-screen cinematic doorway introduction
    enableCinematicIntro: true,

    // Creative film taglines
    taglineEnglish: "Two Hearts. One Beautiful Beginning.",
    taglineTamil: "இரு மனங்கள். ஓர் அழகான தொடக்கம்.",

    // Film title lines for Scene 02
    filmTitleEnglish: "A CELEBRATION OF LOVE",
    filmTitleTamil: "அன்பின் அழகான தொடக்கம்",
  },

  // ----------------------------------------------------------------------------
  // 3. EVENT SCHEDULE (Asia/Kolkata Time Zone)
  // ----------------------------------------------------------------------------
  event: {
    // Exact ISO String with Asia/Kolkata (+05:30) offset for live countdown:
    isoString: "2026-12-06T09:00:00+05:30",
    timezone: "Asia/Kolkata",

    // Start & End time in UTC for calendar ICS export (09:00 AM IST is 03:30 UTC):
    calendarStartUTC: "20261206T033000Z",
    calendarEndUTC: "20261206T073000Z",

    // Wedding Day & Muhurtham display texts
    weddingDateEnglish: "December 6, 2026",
    weddingDateTamil: "6 டிசம்பர் 2026",
    weddingDayEnglish: "Sunday",
    weddingDayTamil: "ஞாயிற்றுக்கிழமை",

    muhurthamTimeEnglish: "9:00 AM – 10:30 AM",
    muhurthamTimeTamil: "காலை 9:00 மணி முதல் 10:30 மணி வரை",
    auspiciousLagnamTamil: "மேஷ லக்னம்",

    // Optional Reception Details
    reception: {
      enabled: true,
      dateEnglish: "Saturday, December 5, 2026",
      dateTamil: "5 டிசம்பர் 2026 (சனிக்கிழமை)",
      timeEnglish: "6:30 PM Onwards",
      timeTamil: "மாலை 6:30 மணி முதல்",
      calendarStartUTC: "20261205T130000Z",
      calendarEndUTC: "20261205T163000Z",
    },
  },

  // ----------------------------------------------------------------------------
  // 4. VENUE AND NAVIGATION
  // ----------------------------------------------------------------------------
  venue: {
    nameEnglish: "Sri Raja Rajeshwari Thirumana Mahal",
    nameTamil: "ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மஹால்",
    addressEnglish: "No. 45, 100 Feet Road, Near Metro Station, Anna Nagar / Vadapalani, Chennai - 600026",
    addressTamil: "எண். 45, 100 அடி ரோடு, அண்ணா நகர் / வடபழனி, சென்னை - 600026",
    googleMapsUrl: "https://maps.google.com/?q=Chennai,+Tamil+Nadu",
  },

  // ----------------------------------------------------------------------------
  // 5. PHOTOGRAPHY & MEDIA (All paths verified & active in /public/images/)
  // ----------------------------------------------------------------------------
  media: {
    // Opening heritage doorway background
    doorwayBg: "/images/heritage-doorway.jpg",

    // Couple portrait photo (clearly labeled as placeholder until user replaces)
    couplePortrait: "/images/couple-portrait.jpg",
    portraitFocalPoint: "center 20%",
    isPlaceholder: true,

    // Wedding story editorial photos
    storyPhoto1: "/images/story-moment-1.jpg",
    storyPhoto2: "/images/story-moment-2.jpg",

    // Grand wedding mandap / venue hall photo
    venuePhoto: "/images/venue-mandap.jpg",

    // Closing cinematic backdrop
    closingPhoto: "/images/closing-moment.jpg",

    // Optional custom audio file path (null uses built-in Mohanam classical synth)
    customAudioPath: null,
  },

  // ----------------------------------------------------------------------------
  // 6. SHARING & PRODUCTION METADATA
  // ----------------------------------------------------------------------------
  sharing: {
    pageTitle: "THE WEDDING FILM | Ananya & Karthik",
    shareTitle: "The Wedding Film | திருமண அழைப்பிதழ்",
    shareText: "எங்கள் இல்லத் திருமண விழாவில் தாங்களும் தங்கள் குடும்பத்தினரும் கலந்து கொண்டு மணமக்களை வாழ்த்தி, விழாவைச் சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்.",
    publicInvitationUrl: typeof window !== "undefined" ? window.location.href : "https://wedding-invitation.app",
  },
};
