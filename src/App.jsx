import { AnimalListItem } from "./components/AnimalListItem";

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
          <AnimalListItem key={index}>{animal}</AnimalListItem>
        ))}
      </ul>
    </main>
  );
};

export default App;
