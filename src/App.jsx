import { useState } from "react";
import blueBlob from "./assets/blue-blob.svg";
import yellowBlob from "./assets/yellow-blob.svg";
import Game from "./components/Game";
import Landing from "./components/Landing";

export default function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  return (
    <main className="bg-primary-light">
      <img
        src={blueBlob}
        alt="blue blob"
        className="absolute bottom-0 left-0 w-[16%]"
      />

      <img
        src={yellowBlob}
        alt="yellow blob"
        className="absolute top-0 right-0 w-[16%]"
      />
      {isGameOpen ? <Game /> : <Landing />}
    </main>
  );
}
