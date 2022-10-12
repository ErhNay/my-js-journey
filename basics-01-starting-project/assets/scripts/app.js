const defaultValue = 0;

let currentResult = defaultValue;

const logEntries = [];

//gets user input form an input field
function getUserInput() {
  return +userInput.value;
}

//Creates and outputs Calculation log
function createAndWriteOutput(operator, resultBeforeCal, calNum) {
  const calcDesc = `${resultBeforeCal} ${operator} ${calNum}`;
  outputResult(currentResult, calcDesc); // from the vendor file
}

//logging the entry

function writeToLog(opIdentifier, prevValue, numberEntered, newResult) {
  const logEntry = {
    opIdentifier,
    prevValue,
    numberEntered,
    newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const receivedValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult + receivedValue;
  createAndWriteOutput('+', initialValue, receivedValue);
  writeToLog('Add', initialValue, receivedValue, currentResult);
}

function subtract() {
  const receivedValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult - receivedValue;
  createAndWriteOutput('+', initialValue, receivedValue);
  writeToLog('Subtract', initialValue, receivedValue, currentResult);
}
function multiply() {
  const receivedValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult * receivedValue;
  createAndWriteOutput('*', initialValue, receivedValue);
  writeToLog('Multiply', initialValue, receivedValue, currentResult);
}
function divide() {
  const receivedValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult / receivedValue;
  createAndWriteOutput('/', initialValue, receivedValue);
  writeToLog('Divide', initialValue, receivedValue, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
