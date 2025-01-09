const Checkbox = ({ value, onChange, label, id }) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="relative flex items-center gap-2">
        <input
          type="checkbox"
          className="peer sr-only"
          name={id}
          id={id}
          checked={value}
          onChange={onChange}
        />
        <div className="relative flex h-5 w-5 items-center justify-center border-2 border-dark-100 p-[2px] transition-colors peer-checked:border-accent-green peer-checked:bg-accent-green"></div>
        <img
          width={14}
          height={14}
          src="/public/icon-check.svg"
          alt="check icon"
          className="absolute left-[4px] top-[6px] object-contain opacity-0 transition-opacity peer-checked:opacity-100 sm:top-[9px]"
        />

        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
