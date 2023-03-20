import { useState } from "react";
import blueBlob from "./assets/blue-blob.svg";
import yellowBlob from "./assets/yellow-blob.svg";
import Game from "./components/Game";
import Welcome from "./components/Welcome";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const startGame = () => setIsGameStarted(false);
  return (
    <main>
      <img
        src={blueBlob}
        alt="blue blob"
        className="fixed bottom-0 left-0 w-[16%]"
      />

      <img
        src={yellowBlob}
        alt="yellow blob"
        className="fixed top-0 right-0 w-[16%]"
      />
      {isGameStarted ? <Welcome startGame={startGame} /> : <Game />}
    </main>
  );
};

export default App;
