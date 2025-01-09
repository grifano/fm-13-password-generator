import { useEffect, useMemo, useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [length, setLength] = useState('10');
  const [hasUpperCase, setHasUpperCase] = useState(true);
  const [hasLowerCase, setHasLowerCase] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(true);

  const handleUpperCaseChange = e => {
    setHasUpperCase(!hasUpperCase);
    console.log(e.target.checked);
  };
  const handleLowerCaseChange = e => {
    setHasLowerCase(!hasLowerCase);
    console.log(e.target.checked);
  };
  const handleNumbersChange = e => {
    setHasNumbers(!hasNumbers);
    console.log(e.target.checked);
  };
  const handleSymbolsChange = e => {
    setHasSymbols(!hasSymbols);
    console.log(e.target.checked);
  };
  const handleLengthChange = e => {
    const newValue = e.target.value;
    setLength(newValue);
  };

  // CalcStrength
  const calcStrength = () => {
    console.log('Calc Strength');
  };
  // handleCopy
  const handleCopyClick = () => {
    console.log('Copied!');
  };

  // Main password generation function
  const getPassword = () => {
    console.log('Generate the password');
  };

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
            } text-2xl font-bold leading-none sm:text-[2rem]`}
            id="password-result"
          >
            P4$5W0rD!
          </p>
          <button
            type="button"
            className="p-4 sm:p-7 sm:transition-[filter] sm:hover:saturate-0"
            onClick={handleCopyClick}
          >
            <img src="/public/icon-copy.svg" alt="" />
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
          <div className="flex items-center justify-between bg-dark-400 px-8 py-5">
            <p className="text-base text-dark-200 sm:text-lg">STRENGTH</p>
            <p className="text-lg">MEDIUM</p>
          </div>
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
