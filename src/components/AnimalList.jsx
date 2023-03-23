import AnimalListItem from "./AnimalListItem";

const AnimalList = () => {
  const animals = [
    { id: 0, name: "🐶 dog" },
    { id: 1, name: "🐈 cat" },
    { id: 2, name: "🐔 chicken" },
    { id: 3, name: "🐮 cow" },
    { id: 4, name: "🐏 sheep" },
    { id: 5, name: "🐴 horse" },
  ];

  return (
    <ul className="flex flex-col justify-center text-xl border rounded-md border-gray-300">
      {animals.map(({ id, name }) => (
        <AnimalListItem key={id}>{name}</AnimalListItem>
      ))}
    </ul>
  );
};

export default AnimalList;
