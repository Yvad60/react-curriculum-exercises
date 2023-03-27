import { useState } from "react";
import { calculateOperation, setDisplayValue } from "./helpers/calculator";

const App = () => {
  const [operation, setOperation] = useState({
    operand1: "",
    operator: "",
    operand2: "",
    result: "",
  });

  const handleNumberPress = (number) => {
    setOperation((prevState) => {
      if (prevState.operator)
        return {
          ...prevState,
          operand2: prevState.operand2 + number,
          result: "",
        };
      return {
        ...prevState,
        operand1: prevState.operand1 + number,
        result: "",
      };
    });
  };

  const handleOperatorPress = (operator) => {
    setOperation((prevState) => {
      if (prevState.result)
        return {
          ...prevState,
          operand1: prevState.result,
          result: "",
          operator,
        };
      return { ...prevState, operator };
    });
  };

  const handleCalculation = () => {
    const { operand1, operator, operand2 } = operation;
    const result = calculateOperation(operand1, operator, operand2);
    // reset operand1 and operand2  to ''
    setOperation((prevState) => ({
      ...prevState,
      operand1: "",
      operand2: "",
      result: result.toString(),
    }));
  };

  const displayValue = setDisplayValue(operation);

  console.log(operation);

  const handleKeyClick = (e) => {
    const key = e.target.textContent;
    switch (true) {
      case key === "AC":
        break;
      case key === ".":
        break;
      case key === "=":
        handleCalculation(operation);
        break;
      case key === "+/-":
        break;
      case ["+", "-", "x", "÷", "%"].includes(key):
        handleOperatorPress(key);
        break;
      default:
        handleNumberPress(key);
    }
  };
  const keys = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <main className="flex items-center justify-center h-screen bg-slate-100">
      <div className="max-w-[317px]">
        <input
          type="number"
          value={displayValue}
          className="outline-none bg-[#7b7a89] w-full h-16 flex items-center text-3xl text-[#fffdfe] text-right px-2"
          readOnly
        />
        <div className="grid grid-cols-4 bg-[#95949b] gap-[1.5px]">
          {keys.map((key, index, arr) => (
            <button
              className={`h-[86px] w-[78px] flex justify-center items-center text-2xl font-medium ${
                (index + 1) % 4 === 0 || index + 1 === arr.length
                  ? "bg-[#f58636] hover:bg-[#ea7f33] text-[#fffdfe]"
                  : "bg-[#dddadc] hover:bg-[#cfcccc] text-[#030002]"
              } ${key === "0" && "col-span-2 w-full"}`}
              onClick={handleKeyClick}
              key={index}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      {/* <button className="bg-[#f58636] h-20 w-[72px] flex justify-center items-center text-2xl font-medium hover:bg-[#ea7f33] text-[#fffdfe]">
        7
      </button> */}
    </main>
  );
};

export default App;
