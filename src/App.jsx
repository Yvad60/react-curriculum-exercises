const App = () => {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <main className="flex items-center justify-center h-screen">
      <ul className="flex flex-col list-disc text-xl gap-2">
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
