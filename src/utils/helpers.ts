export const getRandomWord = (words: string[]): string => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};

export const sanitizeUrl = (url: string): string => {
  const lowerCaseStr = url.toLowerCase();
  return lowerCaseStr.replace(/,|\./g, "").replace(/\s/g, "-");
};
