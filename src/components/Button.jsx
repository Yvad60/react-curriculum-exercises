export default function Button({ children, className }) {
  return (
    <button
      className={`text-primary-light bg-primary-dark-blue py-3 px-9 rounded-lg text-lg ${className}`}
    >
      {children}
    </button>
  );
}
