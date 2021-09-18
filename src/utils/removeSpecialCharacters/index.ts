export const removeSpecialCharacters = (text: string) => {
  return text.replace(/[^\w\s]/gi, '');
};
