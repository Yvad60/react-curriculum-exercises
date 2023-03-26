import Button from "./Button";

const Welcome = ({ startGame }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold">Quizzical</h1>
      <p className="mt-4 text-xl mb-7">Some description if needed</p>
      <Button onClick={startGame}>Start quiz</Button>
    </section>
  );
};

export default Welcome;
