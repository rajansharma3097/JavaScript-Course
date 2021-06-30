const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesc);
}

function writeToLog(operation, preResult, operationNum, newresult) {
    const logEntry = {
        operation: operation,
        preResult: preResult,
        number: operationNum,
        result: newresult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {

    const enteredNumber = getUserNumberInput();
    if (!enteredNumber) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult = currentResult + enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult = currentResult - enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult = currentResult * enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult = currentResult / enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

