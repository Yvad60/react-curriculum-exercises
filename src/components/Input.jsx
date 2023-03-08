const Input = ({ label, name, onChange, value }) => {
  return (
    <div className="flex flex-col w-full gap-[2px]">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="border-2 border-[#D5D4D8] p-3 outline-none rounded-md w-full"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
