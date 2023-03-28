import { useState } from "react";
import { EMPTY_OPERATION, KEYS } from "./constants";
import { calculateOperation, setDisplayValue } from "./helpers/calculator";

const App = () => {
  const [operation, setOperation] = useState({ ...EMPTY_OPERATION });

  const displayValue = setDisplayValue(operation);

  const handleNumberPress = (number) =>
    setOperation((prevState) => {
      const isNegativeSign = number === "+/-";
      const isDecimalSign = number === ".";
      if (prevState.result && !prevState.operand1 && !prevState.operand2) {
        if (isDecimalSign)
          return {
            operand1: prevState.result.includes(".")
              ? prevState.result
              : prevState.result + number,
            operand2: "",
            result: "",
            prevOperationOperand: "",
          };
        return {
          operand1: isNegativeSign
            ? calculateOperation(prevState.result, "x", "-1")
            : number,
          operand2: "",
          result: "",
          prevOperationOperand: "",
        };
      }

      if (prevState.operator) {
        if (isDecimalSign && prevState.operand2.includes(".")) return prevState;
        if (isDecimalSign && !prevState.operand2)
          return {
            ...prevState,
            operand2: "0.",
            result: "",
          };
        return {
          ...prevState,
          operand2: isNegativeSign
            ? calculateOperation(prevState.operand2, "x", "-1")
            : prevState.operand2 + number,
          result: "",
        };
      }
      if (isDecimalSign && prevState.operand1.includes(".")) return prevState;
      if (isDecimalSign && !prevState.operand1)
        return {
          ...prevState,
          operand1: "0.",
          result: "",
        };
      return {
        ...prevState,
        operand1: isNegativeSign
          ? calculateOperation(prevState.operand1, "x", "-1")
          : prevState.operand1 + number,
        result: "",
      };
    });

  const resetDisplayValue = () => setOperation({ ...EMPTY_OPERATION });

  const handleOperatorPress = (operator) => {
    setOperation((prevState) => {
      if (prevState.result)
        return {
          ...prevState,
          operand1: prevState.result,
          result: "",
          operator,
        };
      if (prevState.operand1 && prevState.operand2 && prevState.operator)
        return {
          ...prevState,
          result: calculateOperation(
            prevState.operand1,
            prevState.operator,
            prevState.operand2
          ),
          operand1: calculateOperation(
            prevState.operand1,
            prevState.operator,
            prevState.operand2
          ),
          operand2: "",
          operator,
        };
      return { ...prevState, operator };
    });
  };

  const handleCalculation = (selectedOperator) => {
    const { operand1, operator, operand2, prevOperationOperand, result } =
      operation;
    const isPercentageSign = selectedOperator === "%";
    if (!isPercentageSign && !operator) return;
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
      const solution = isPercentageSign
        ? calculateOperation(operand1, "÷", "100")
        : calculateOperation(operand1, operator, operand2);
      setOperation((prevState) => ({
        ...prevState,
        operand1: "",
        operand2: "",
        result: solution,
        operator: isPercentageSign ? "÷" : prevState.operator,
        prevOperationOperand: isPercentageSign ? "100" : prevState.operand2,
      }));
    }
  };

  const handleKeyClick = (event) => {
    const key = event.target.textContent;
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
        handleNumberPress(key);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-slate-100">
      <div className="rounded select-none max-w-[389px]">
        <input
          type="text"
          value={displayValue}
          className="outline-none bg-[#7b7a89] w-full h-20 flex items-center text-3xl text-[#fffdfe] text-right px-3P cursor-default select-none selection:bg-transparent"
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
