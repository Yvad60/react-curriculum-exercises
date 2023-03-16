import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Dice from "./components/Dice";

const generateRandomDiceValue = () => {
  return Math.ceil(Math.random() * 6);
};

const generateDiceValues = () => {
  return Array.from(Array(10).keys()).map(() => ({
    id: nanoid(),
    value: generateRandomDiceValue(),
    isHeld: false,
  }));
};

const App = () => {
  const [dices, setDices] = useState(() => generateDiceValues());
  const [isGameWon, setIsGameWon] = useState(false);

  const toggleDiceHoldState = (diceId) => {
    setDices((prevState) =>
      prevState.map((dice) =>
        dice.id === diceId ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  };

  const rollDices = () => {
    setDices((prevState) =>
      prevState.map((dice) =>
        dice.isHeld ? dice : { ...dice, value: generateRandomDiceValue() }
      )
    );
  };

  const startNewGame = () => {
    setIsGameWon(false);
    setDices(generateDiceValues());
  };

  useEffect(() => {
    if (dices.every((dice) => dice.isHeld && dice.value === dices[0].value)) {
      setIsGameWon(true);
    }
  }, [dices]);

  return (
    <main className="bg-[#0B2434] flex justify-center items-center h-screen">
      {isGameWon && <Confetti recycle={false} />}
      <section className="bg-[#F5F5F5] rounded-xl p-9">
        <h1 className="text-4xl font-bold text-center">Tenzies</h1>
        <p className="mt-3 text-lg text-[#4A4E74] max-w-[440px] text-center">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5 gap-5 mt-9">
          {dices.map((dice) => (
            <Dice
              key={dice.id}
              {...dice}
              toggleHoldState={() => toggleDiceHoldState(dice.id)}
            />
          ))}
        </div>
        <div className="flex mt-7">
          <button
            className="mx-auto px-11 bg-[#5035FF] text-white text-xl font-bold rounded py-3"
            onClick={isGameWon ? startNewGame : rollDices}
          >
            {isGameWon ? "New game" : "Roll"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
