/**
 * =======================================================================
 * WEDDING INVITATION CONFIGURATION
 * =======================================================================
 * 
 * Instructions:
 * Non-technical users can easily edit the values below to customize
 * all details of the wedding invitation.
 */

export const weddingConfig = {
  // ---------------------------------------------------------------------
  // 1. COUPLE INFORMATION
  // ---------------------------------------------------------------------
  groom: {
    nameTamil: "கார்த்திக்",
    nameEnglish: "Karthik",
    qualification: "M.S.",
    parentsTamil: "திரு. சுந்தரம் & திருமதி. லக்ஷ்மி",
    parentsEnglish: "Mr. Sundaram & Mrs. Lakshmi",
    familyDetailsTamil: "அவர்களின் அன்புத் திருமகன்",
    familyDetailsEnglish: "Son of Mr. Sundaram & Mrs. Lakshmi",
  },

  bride: {
    nameTamil: "அனன்யா",
    nameEnglish: "Ananya",
    qualification: "B.Tech., MBA",
    parentsTamil: "திரு. ராதாகிருஷ்ணன் & திருமதி. மீனாட்சி",
    parentsEnglish: "Mr. Radhakrishnan & Mrs. Meenakshi",
    familyDetailsTamil: "அவர்களின் அன்புத் திருமகள்",
    familyDetailsEnglish: "Daughter of Mr. Radhakrishnan & Mrs. Meenakshi",
  },

  // Optional couple portrait photograph path (relative or URL).
  // If null or empty string, a refined heritage monogram is displayed.
  couplePortrait: null,

  // ---------------------------------------------------------------------
  // 2. WEDDING DATE & TIME (Asia/Kolkata Timezone)
  // ---------------------------------------------------------------------
  weddingDate: {
    // ISO format with IST (+05:30) offset for exact countdown calculation:
    isoString: "2026-12-06T09:00:00+05:30",
    dateTamil: "6 டிசம்பர் 2026",
    dateEnglish: "December 6, 2026",
    dayTamil: "ஞாயிற்றுக்கிழமை",
    dayEnglish: "Sunday",
    muhurthamTamil: "காலை 9:00 மணி முதல் 10:30 மணி வரை",
    muhurthamEnglish: "9:00 AM – 10:30 AM",
    auspiciousLagnamTamil: "மேஷ லக்னம்",
  },

  // ---------------------------------------------------------------------
  // 3. OPTIONAL RECEPTION DETAILS
  // ---------------------------------------------------------------------
  reception: {
    enabled: true,
    dateTamil: "5 டிசம்பர் 2026 (சனிக்கிழமை)",
    dateEnglish: "Saturday, December 5, 2026",
    timeTamil: "மாலை 6:30 மணி முதல்",
    timeEnglish: "6:30 PM Onwards",
  },

  // ---------------------------------------------------------------------
  // 4. VENUE DETAILS & NAVIGATION
  // ---------------------------------------------------------------------
  venue: {
    nameTamil: "ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மஹால்",
    nameEnglish: "Sri Raja Rajeshwari Thirumana Mahal",
    addressTamil: "எண். 45, 100 அடி ரோடு, அண்ணா நகர் / வடபழனி, சென்னை - 600026",
    addressEnglish: "No. 45, 100 Feet Road, Near Metro, Anna Nagar / Vadapalani, Chennai - 600026",
    // Actual Google Maps link:
    googleMapsUrl: "https://maps.google.com/?q=Chennai,+Tamil+Nadu",
  },

  // ---------------------------------------------------------------------
  // 5. INVITATION & SHARING
  // ---------------------------------------------------------------------
  invitation: {
    shareTitle: "திருமண அழைப்பிதழ் | Karthik & Ananya Wedding Invitation",
    shareText: "எங்கள் இல்லத் திருமண விழாவில் தாங்களும் தங்கள் குடும்பத்தினரும் கலந்து கொண்டு மணமக்களை வாழ்த்தி, விழாவைச் சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்.",
    // Link to this digital invitation:
    shareUrl: window?.location?.href || "https://wedding-invitation.app",
  },

  // ---------------------------------------------------------------------
  // 6. AUDIO SETTINGS
  // ---------------------------------------------------------------------
  // Optional background music path. If null, the built-in classical synth is used.
  backgroundMusicPath: null,
};
