import { ChangeEvent, useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import StrengthLevel from './StrengthLevel';
import characterSets from '../constants/characterSets';
import { toast } from 'react-toastify';

function App() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [isEmpty, setIsEmpty] = useState(true);
  const [length, setLength] = useState(10);
  const [hasUpperCase, setHasUpperCase] = useState(true);
  const [hasLowerCase, setHasLowerCase] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);

  const strengthLevel: boolean[] = [
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSymbols,
    isLongEnough,
  ];

  const handleUpperCaseChange = () => {
    setHasUpperCase(!hasUpperCase);
  };
  const handleLowerCaseChange = () => {
    setHasLowerCase(!hasLowerCase);
  };
  const handleNumbersChange = () => {
    setHasNumbers(!hasNumbers);
  };
  const handleSymbolsChange = () => {
    setHasSymbols(!hasSymbols);
  };
  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setLength(Number(newValue));
  };

  // CalcStrength
  useEffect(() => {
    length >= 8 ? setIsLongEnough(true) : setIsLongEnough(false);
  }, [length]);

  // handleCopy
  const handleCopyClick = () => {
    if (navigator.clipboard && password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          console.log('Password copied to clipboard!');
          toast.success('Password copied to clipboard!', {
            className: 'toast-body toast-success toast-fixes',
          });
        })
        .catch(err => {
          console.error('Failed to copy password:', err);
          toast.error('Failed to copy password.', {
            className: 'toast-body toast-error toast-fixes',
          });
        });
    } else {
      toast.error('Clipboard API is not supported or password is empty.', {
        className: 'toast-body toast-error toast-fixes',
      });
    }
  };

  // Main password generation function
  const getPassword = () => {
    // Get password
    const passwordArray = Array.from({ length }, () => {
      const arrayFunctions = [
        getRandomCharacter(
          hasLowerCase ? characterSets.LettersLowerCase : ['']
        ),
        getRandomCharacter(
          hasUpperCase ? characterSets.LettersUpperCase : ['']
        ),
        getRandomCharacter(hasNumbers ? characterSets.Numbers : ['']),
        getRandomCharacter(hasSymbols ? characterSets.Symbols : ['']),
      ];
      let passwordInner = '';

      for (let index = 0; index < arrayFunctions.length; index++) {
        const element =
          arrayFunctions[Math.floor(Math.random() * arrayFunctions.length)];
        passwordInner += element;
      }

      return passwordInner;
    });

    const passwordString = passwordArray.join('');
    const sliceStart = Math.floor(Math.random() * passwordArray.length);
    const sliceEnd = sliceStart + passwordArray.length;

    setPassword(passwordString.slice(sliceStart, sliceEnd));
    setIsEmpty(false);
  };

  // Get random character
  function getRandomCharacter(array?: string[]): string {
    if (array !== undefined && array.length > 0) {
      const arrayLength = array.length - 1;
      const randomIndex = Math.floor(Math.random() * arrayLength);

      return array[randomIndex];
    } else {
      return '';
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-2xl font-bold leading-none text-dark-200">
        Password Generator
      </h1>

      {/* Password result with copy */}
      <section className="w-full max-w-[35.75rem] px-4">
        <div className="mb-6 flex items-center justify-between bg-dark-300 pl-4 sm:pl-8">
          <p
            className={`${
              isEmpty && 'opacity-25'
            } overflow-auto text-2xl font-bold leading-none sm:text-[2rem]`}
            id="password-result"
          >
            {password}
          </p>
          <button
            type="button"
            className="shrink-0 p-4 sm:p-7 sm:transition-[filter] sm:hover:saturate-0"
            onClick={handleCopyClick}
          >
            <img src="/public/icon-copy.svg" alt="copy icon" />
          </button>
        </div>
        {/* Settings Box */}
        <div className="flex flex-col gap-8 bg-dark-300 p-4 sm:p-8">
          {/* - Length */}
          <label htmlFor="length">
            <div className="mb-2 flex items-center justify-between">
              <p>Character Length</p>
              <p className="text-2xl font-bold leading-none text-accent-green sm:text-[2rem]">
                {length}
              </p>
            </div>
            <input
              className="w-full"
              type="range"
              name="length"
              id="length"
              value={length}
              min={6}
              max={32}
              onChange={handleLengthChange}
            />
          </label>
          {/* - Checkboxes: */}
          <ul className="flex flex-col gap-5">
            <li>
              {/* -- Include Uppercase Letters: */}
              <Checkbox
                id="include-uppercase"
                value={hasUpperCase}
                onChange={handleUpperCaseChange}
                label="Include Uppercase Letters"
              />
            </li>
            <li>
              {/* -- Include Lowercase Letters: */}
              <Checkbox
                id="include-lowercase"
                value={hasLowerCase}
                onChange={handleLowerCaseChange}
                label="Include Lowercase Letters"
              />
            </li>
            <li>
              {/* -- Include Numbers: */}
              <Checkbox
                id="include-numbers"
                value={hasNumbers}
                onChange={handleNumbersChange}
                label="Include Numbers"
              />
            </li>
            <li>
              {/* -- Include Symbols: */}
              <Checkbox
                id="include-symbols"
                value={hasSymbols}
                onChange={handleSymbolsChange}
                label="Include Symbols"
              />
            </li>
          </ul>
          {/* - Strength Info: */}
          <StrengthLevel strengthLevel={strengthLevel} />

          {/* - GENERATE BTN: */}
          <Button
            label="Generate"
            onClick={getPassword}
            icon="icon-arrow-right"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
