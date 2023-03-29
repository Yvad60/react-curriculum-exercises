const Dice = ({ value, isHeld, toggleHoldState }) => {
  return (
    <button
      className={`font-inter py-2 px-5 flex justify-center shadow-md border text-2xl font-bold rounded ${
        isHeld ? "bg-[#59E391]" : "bg-white"
      }`}
      onClick={toggleHoldState}
    >
      {value}
    </button>
  );
};

export default Dice;
