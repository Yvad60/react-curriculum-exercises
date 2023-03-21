import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl">
          Button has been clicked:{" "}
          <span className="font-semibold">{count}</span> times.
        </p>
        <button
          className="px-8 py-2 text-lg font-medium text-white bg-blue-800 rounded hover:bg-blue-900"
          onClick={incrementCount}
        >
          Click me
        </button>
      </div>
    </main>
  );
};

export default App;
