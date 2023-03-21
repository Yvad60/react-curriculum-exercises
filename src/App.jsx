const App = () => {
  const animals = [
    "🐶 dog",
    "🐈 cat",
    "🐔 chicken",
    "🐮 cow",
    "🐏 sheep",
    "🐴 horse",
  ];
  return (
    <main className="flex items-center justify-center h-screen">
      <ul className="flex flex-col justify-center text-xl border rounded-md border-gray-300">
        {animals.map((animal, index) => (
          <li
            className="w-full px-16 py-4 text-center border-b border-gray-300"
            key={index}
          >
            {animal}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
