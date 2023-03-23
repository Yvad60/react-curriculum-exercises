import JokeCard from "./components/JokeCard";
import jokes from "./data/jokes";

const App = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[#e0f7dd] gap-10">
      {jokes.map((joke) => (
        <JokeCard {...joke} key={joke.id} />
      ))}
    </section>
  );
};

export default App;
