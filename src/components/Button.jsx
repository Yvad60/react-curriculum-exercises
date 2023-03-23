export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 text-lg font-medium text-white bg-blue-800 rounded hover:bg-blue-900"
    >
      {children}
    </button>
  );
};
