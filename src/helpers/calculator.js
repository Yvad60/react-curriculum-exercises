export const calculateOperation = (operand1, operator, operand2) => {
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

export const setDisplayValue = (operation) => {
  if (operation.result) return operation.result;
  const activeOperand = operation.operator
    ? operation.operand2
    : operation.operand1;
  return activeOperand ? activeOperand : "0";
};
