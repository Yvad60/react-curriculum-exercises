export default function Button({ children, className }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
