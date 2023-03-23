const JokeCard = ({ setup, punchline }) => {
  return (
    <div className="max-w-md px-3 py-10 text-center bg-white rounded-md shadow-md h-52">
      <h2 className="text-2xl font-bold max-w-[80%] mx-auto">{setup}</h2>
      <p className="mt-5 text-lg">{punchline}</p>
    </div>
  );
};

export default JokeCard;
