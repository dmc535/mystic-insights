export const zodiacSigns = [
  {
    name: 'Aries',
    date: 'March 21 - April 19',
    symbol: '/images/zodiac/aries.png'
  },
  {
    name: 'Taurus',
    date: 'April 20 - May 20',
    symbol: '/images/zodiac/taurus.png'
  },
  {
    name: 'Gemini',
    date: 'May 21 - June 20',
    symbol: '/images/zodiac/gemini.png'
  },
  {
    name: 'Cancer',
    date: 'June 21 - July 22',
    symbol: '/images/zodiac/cancer.png'
  },
  {
    name: 'Leo',
    date: 'July 23 - August 22',
    symbol: '/images/zodiac/leo.png'
  },
  {
    name: 'Virgo',
    date: 'August 23 - September 22',
    symbol: '/images/zodiac/virgo.png'
  },
  {
    name: 'Libra',
    date: 'September 23 - October 22',
    symbol: '/images/zodiac/libra.png'
  },
  {
    name: 'Scorpio',
    date: 'October 23 - November 21',
    symbol: '/images/zodiac/scorpio.png'
  },
  {
    name: 'Sagittarius',
    date: 'November 22 - December 21',
    symbol: '/images/zodiac/sagittarius.png'
  },
  {
    name: 'Capricorn',
    date: 'December 22 - January 19',
    symbol: '/images/zodiac/capricorn.png'
  },
  {
    name: 'Aquarius',
    date: 'January 20 - February 18',
    symbol: '/images/zodiac/aquarius.png'
  },
  {
    name: 'Pisces',
    date: 'February 19 - March 20',
    symbol: '/images/zodiac/pisces.png'
  }
];

const horoscopes = {
  Aries: "Your natural leadership abilities shine today. Take initiative in projects and relationships. Your confidence will inspire others.",
  Taurus: "Focus on stability and growth today. Your practical approach to challenges will yield positive results.",
  Gemini: "Communication is highlighted today. Share your ideas freely, as others are particularly receptive to your perspective.",
  Cancer: "Trust your intuition in emotional matters. Your sensitivity is a strength that will guide you to meaningful connections.",
  Leo: "Your creative energy is at its peak. Express yourself boldly and don't be afraid to stand out from the crowd.",
  Virgo: "Details matter more than usual today. Your analytical skills will help solve a long-standing problem.",
  Libra: "Harmony in relationships brings joy today. Focus on finding balance between your needs and others'.",
  Scorpio: "Your intensity serves you well today. Deep insights lead to transformative experiences.",
  Sagittarius: "Adventure calls to you. Embrace new opportunities for learning and growth that come your way.",
  Capricorn: "Your ambitions align with opportunities today. Stay focused on your goals and take practical steps forward.",
  Aquarius: "Your innovative ideas are particularly powerful today. Share your unique perspective with others.",
  Pisces: "Your imagination and intuition are heightened. Trust your inner guidance in creative and spiritual matters."
};

export const getHoroscope = (sign: string): string => {
  return horoscopes[sign as keyof typeof horoscopes] || '';
};