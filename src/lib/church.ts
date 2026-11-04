
export const church = {
  name: "ACK St. Stephen Karunga",
  shortName: "St. Stephen Karunga",
  denomination: "Anglican Church of Kenya",
  location: "Ndumberi, Kiambu County, Kenya",
  address: "ACK St. Stephen Karunga, Ndumberi, Kiambu County",

  phone: "0701112670",
  whatsappNumber: "254701112670",
  whatsappLink: "https://wa.me/254701112670",

  email: null,

  facebook:
    "https://www.facebook.com/groups/257444238975435/",

  tagline: "Worship. Grow. Serve.",
  welcome:
    "A place to worship. A community to belong.",

  services: [
    {
      name: "First Service",
      time: "7:00 AM – 9:00 AM",
      start: "7:00 AM",
      end: "9:00 AM",
      audience: "Church congregation",
    },
    {
      name: "Second Service",
      time: "9:00 AM – 11:00 AM",
      start: "9:00 AM",
      end: "11:00 AM",
      audience: "Church congregation",
    },
    {
      name: "Third Service",
      time: "11:30 AM – 2:00 PM",
      start: "11:30 AM",
      end: "2:00 PM",
      audience: "Church congregation",
    },
  ],

  sundaySchool: {
    name: "Sunday School",
    time: "8:30 AM – 9:45 AM",
  },

  teens: {
    name: "Teen Fellowship",
    time: "8:00 AM – 10:00 AM",
  },

  weekdayServices: [
    {
      name: "Wednesday Service",
      day: "Wednesday",
      time: "12:00 PM – 2:00 PM",
    },
  ],

  sermons: {
    available: true,
    title: "Messages that inspire and strengthen faith.",
    description:
      "Recorded sermons are part of our church's teaching and spiritual growth. Explore the messages and continue reflecting on God's Word.",
    externalLinks: false,
  },

  social: {
    facebook:
      "https://www.facebook.com/groups/257444238975435/",
  },
} as const;
