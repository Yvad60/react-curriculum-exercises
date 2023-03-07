import { useState } from "react";
import Box from "./components/Box";
import allBoxes from "./data/boxes";

export default function App() {
  const [boxes, setBoxes] = useState(allBoxes);
  const toggle = (boxId) => {
    setBoxes((prevState) =>
      prevState.map((box) => (box.id === boxId ? { ...box, on: !box.on } : box))
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-2">
        {boxes.map((box) => (
          <Box key={box.id} id={box.id} handleClick={toggle} isOn={box.on} />
        ))}
      </div>
    </div>
  );
}
