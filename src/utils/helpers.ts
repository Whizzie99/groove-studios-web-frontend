export const getRandomWord = (words: string[]): string => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};
