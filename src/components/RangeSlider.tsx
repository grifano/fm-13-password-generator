import { ChangeEvent, FC, useEffect, useRef } from 'react';

type RangeSliderProps = {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RangeSlider: FC<RangeSliderProps> = ({ value, onChange }) => {
  const rangeInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const rangeInput = rangeInputRef.current;

    const handleInputChange = (e: Event) => {
      if (!rangeInput) return;

      // Safely access min, max, and value with fallback defaults
      const target = e.target as HTMLInputElement;
      const min = target.min ? Number(target.min) : 0;
      const max = target.max ? Number(target.max) : 100;
      const val = target.value ? Number(target.value) : 0;

      const percentage = ((val - min) * 100) / (max - min);

      // Apply the dynamic background size
      target.style.backgroundSize = `${percentage}% 100%`;
    };

    if (rangeInput) {
      rangeInput.addEventListener('input', handleInputChange);

      // Initialize the background size on mount
      const initEvent = new Event('input');
      rangeInput.dispatchEvent(initEvent); // Ensure input is triggered
    }

    // Cleanup on component unmount
    return () => {
      if (rangeInput) {
        rangeInput.removeEventListener('input', handleInputChange);
      }
    };
  }, []);

  return (
    <label htmlFor="length">
      <div className="mb-2 flex items-center justify-between">
        <p>Character Length</p>
        <p className="text-2xl font-bold leading-none text-accent-green sm:text-[2rem]">
          {value}
        </p>
      </div>
      <div>
        <input
          ref={rangeInputRef}
          type="range"
          name="length"
          id="length"
          value={value}
          min="6"
          max="32"
          onChange={onChange}
          style={{
            // Provide a fallback for the background style
            backgroundSize: '0% 100%',
          }}
        />
      </div>
    </label>
  );
};

export default RangeSlider;
