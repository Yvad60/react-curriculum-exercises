import { FC, MouseEvent, useState } from "react";
import { EMPTY_OPERATION, KEYS } from "./constants";
import { calculateOperation, setDisplayValue } from "./helpers/calculator";

const App : FC = () => {
  const [operation, setOperation] = useState<Operation>({ ...EMPTY_OPERATION });

  const displayValue = setDisplayValue(operation);

  const handleNumericKeyPress = (clickedKey: string) => {
    const isNegativeSign = clickedKey === "+/-";
    const isDecimalSignClicked = clickedKey === ".";

    setOperation((prevState) => {
      const { result, operand1, operand2 } = prevState;
      const activeOperand = prevState.operator ? "operand2" : "operand1";

      if (
        isDecimalSignClicked &&
        (operand1.includes(".") || operand2.includes("."))
      )
        return prevState;

      if (result && !prevState.operand1 && !prevState.operand2) {
        return {
          ...EMPTY_OPERATION,
          operand1: isDecimalSignClicked ? "0." : clickedKey,
        };
      }

      if (isDecimalSignClicked && !activeOperand)
        return {
          ...prevState,
          [activeOperand]: "0.",
          result: "",
        };
      return {
        ...prevState,
        [activeOperand]: isNegativeSign
          ? calculateOperation(prevState[activeOperand], "x", "-1")
          : prevState[activeOperand] + clickedKey,
        result: "",
      };
    });
  };

  const resetDisplayValue = () => setOperation({ ...EMPTY_OPERATION });

  const handleOperatorPress = (clickedOperator: string) => {
    setOperation((prevState) => {
      const { result, operand1, operand2, operator } = prevState;
      if (result)
        return {
          ...prevState,
          operand1: result,
          result: "",
          operator: clickedOperator,
        };
      if (operand1 && operand2 && operator)
        return {
          ...prevState,
          result: calculateOperation(operand1, operator, operand2),
          operand1: calculateOperation(operand1, operator, operand2),
          operand2: "",
          operator: clickedOperator,
        };
      return { ...prevState, operator: clickedOperator };
    });
  };

  const handleCalculation = (clickedOperator: string) => {
    const { operand1, operator, operand2, prevOperationOperand, result } =
      operation;
    const isPercentageSignClicked = clickedOperator === "%";
    if (!isPercentageSignClicked && !operator) return;

    if (operator && result && prevOperationOperand) {
      const solution = calculateOperation(
        result,
        operator,
        prevOperationOperand
      );

      setOperation((prevState) => ({
        ...prevState,
        operand1: "",
        operand2: "",
        result: solution,
      }));
    } else {
      const solution = isPercentageSignClicked
        ? calculateOperation(operand1, "÷", "100")
        : calculateOperation(operand1, operator, operand2);

      setOperation((prevState) => ({
        ...prevState,
        operand1: "",
        operand2: "",
        result: solution,
        operator: isPercentageSignClicked ? "÷" : prevState.operator,
        prevOperationOperand: isPercentageSignClicked
          ? "100"
          : prevState.operand2,
      }));
    }
  };

  const handleKeyClick = (event: MouseEvent<HTMLButtonElement>) => {
    const key = (event.target as HTMLElement).textContent as string;
    switch (true) {
      case key === "AC":
        resetDisplayValue();
        break;
      case ["=", "%"].includes(key):
        handleCalculation(key);
        break;
      case ["+", "-", "x", "÷", "%"].includes(key):
        handleOperatorPress(key);
        break;
      default:
        handleNumericKeyPress(key);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-slate-100">
      <div className="rounded select-none max-w-[389px]">
        <input
          type="text"
          value={displayValue}
          className="outline-none bg-[#7b7a89] w-full h-20 flex items-center text-3xl text-[#fffdfe] text-right px-3 cursor-default select-none selection:bg-transparent"
          readOnly
        />
        <div className="grid grid-cols-4 bg-[#95949b] gap-[2px] w-full">
          {KEYS.map((key, index, arr) => (
            <button
              className={`h-[100px] flex justify-center items-center text-2xl font-medium ${
                (index + 1) % 4 === 0 || index + 1 === arr.length
                  ? "bg-[#f58636] hover:bg-[#ea7f33] text-[#fffdfe]"
                  : "bg-[#dddadc] hover:bg-[#cfcccc] text-[#030002]"
              } ${key === "0" ? "col-span-2 w-full" : "w-[96px]"}`}
              onClick={handleKeyClick}
              key={index}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
