export const calculateOperation = (operand1: string, operator: string, operand2: string) => {
  switch (operator) {
    case "+":
      return (Number(operand1) + Number(operand2)).toString();
    case "-":
      return (Number(operand1) - Number(operand2)).toString();
    case "x":
      return (Number(operand1) * Number(operand2)).toString();
    case "÷":
      return (Number(operand1) / Number(operand2)).toString();
    case "%":
      return (Number(operand1) / 100).toString();
    default:
      return "0";
  }
};

export const setDisplayValue = (operation: Operation) => {
  let displayValue: string;
  if (operation.result) {
    displayValue = operation.result;
  } else displayValue = operation.operator ? operation.operand2 : operation.operand1;
  if (displayValue.length > 13) return displayValue.slice(0, 13);
  if (["NaN", "Infinity"].includes(displayValue)) return "∞";
  return displayValue || "0";
};
