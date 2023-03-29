export default function Box({ id, handleClick, isOn }) {
  return (
    <div
      className={`w-28 h-28 border-2 border-black rounded-md ${
        isOn ? "bg-[#222222]" : "bg-none"
      }`}
      onClick={() => {
        handleClick(id);
      }}
    ></div>
  );
}
