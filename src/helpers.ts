// Get random character
export const getRandomCharacter = (array?: string[]): string => {
  if (array !== undefined && array.length > 0) {
    const arrayLength = array.length - 1;
    const randomIndex = Math.floor(Math.random() * arrayLength);

    return array[randomIndex];
  } else {
    return '';
  }
};
