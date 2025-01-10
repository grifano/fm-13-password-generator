interface Characters {
  LettersLowerCase: string[];
  LettersUpperCase: string[];
  Numbers: string[];
  Symbols: string[];
}

const characterSets: Characters = {
  LettersLowerCase: [...'abcdefghijklmnopqrstuvwxyz'], // Lowercase letters
  LettersUpperCase: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'], // Uppercase letters,
  Numbers: [...'0123456789'], // Numbers
  Symbols: [...'!@#$%^&*()_+[]{}|;:,.<>?'], // Common symbols
};

export default characterSets;
