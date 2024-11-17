export const calculateLifePathNumber = (birthdate: string): number => {
  const dateNumbers = birthdate.split('-').join('').split('').map(Number);
  let sum = dateNumbers.reduce((acc, num) => acc + num, 0);
  
  while (sum > 9) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  
  return sum;
};

export const calculateDestinyNumber = (name: string): number => {
  const letterValues: { [key: string]: number } = {
    'a': 1, 'j': 1, 's': 1,
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'e': 5, 'n': 5, 'w': 5,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'i': 9, 'r': 9
  };

  const sum = name.toLowerCase().split('')
    .filter(char => /[a-z]/.test(char))
    .reduce((acc, char) => acc + (letterValues[char] || 0), 0);

  let destinyNumber = sum;
  while (destinyNumber > 9) {
    destinyNumber = destinyNumber.toString()
      .split('')
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
  }

  return destinyNumber;
};

export const getNumberMeaning = (number: number): string => {
  const meanings: { [key: number]: string } = {
    1: "The Pioneer: You are a natural born leader with strong ambitions and determination. Innovation and independence are your key traits.",
    2: "The Mediator: You possess exceptional diplomatic skills and intuition. Harmony and cooperation are your greatest strengths.",
    3: "The Creative: Your life is marked by self-expression and optimism. You have a natural ability to inspire and bring joy to others.",
    4: "The Builder: You are practical, trustworthy, and hardworking. Your methodical approach helps you create lasting foundations.",
    5: "The Freedom Seeker: Adventure and change drive you forward. You adapt easily and inspire others with your versatility.",
    6: "The Nurturer: You have a deep sense of responsibility and care for others. Harmony in relationships is essential to you.",
    7: "The Seeker: Your analytical mind drives you to seek deeper truths. Wisdom and understanding are your ultimate goals.",
    8: "The Achiever: You have natural executive abilities and material aspirations. Success and abundance flow naturally to you.",
    9: "The Humanitarian: You are compassionate and selfless. Your life purpose involves serving and inspiring humanity."
  };

  return meanings[number] || "This number holds unique spiritual significance in your life path.";
};