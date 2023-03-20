export default function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`py-3 text-lg rounded-lg text-primary-light bg-primary-dark-blue px-9 shadow-aline ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
