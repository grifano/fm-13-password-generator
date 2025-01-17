import { FC } from 'react';

type Button = {
  label: string;
  icon?: string;
  onClick: () => void;
};

const Button: FC<Button> = ({ label, onClick, icon }) => {
  return (
    <button
      type="button"
      className="flex h-[3.5rem] w-full items-center justify-center gap-4 border-2 border-accent-green bg-accent-green text-dark-400 outline-none focus-within:bg-transparent focus-within:text-accent-green hover:bg-transparent hover:text-accent-green sm:h-[4rem] sm:gap-6 lg:transition-colors"
      onClick={onClick}
    >
      {label}
      {icon && (
        <svg width={12} height={12}>
          <use href={`/images/icons.svg#${icon}`}></use>
        </svg>
      )}
    </button>
  );
};

export default Button;
