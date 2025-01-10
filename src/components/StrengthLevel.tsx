const StrengthLevel = ({ strengthLevel }: { strengthLevel: boolean[] }) => {
  const soretedLevel = [...strengthLevel].sort(
    (a: boolean, b: boolean) => Number(b) - Number(a)
  );

  return (
    <div className="flex items-center justify-between bg-dark-400 px-8 py-5">
      <p className="text-base text-dark-200 sm:text-lg">STRENGTH</p>
      <div className="flex gap-4">
        <p className="text-lg">MEDIUM</p>
        <ul className="flex gap-2">
          {soretedLevel.map((item, index: number) => (
            <li
              key={index}
              className={`h-[28px] w-[10px] border-2 ${item ? 'border-accent-yellow bg-accent-yellow' : 'border-dark-100'}`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StrengthLevel;
