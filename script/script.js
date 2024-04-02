//global variables
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let secondOperator = "";
let firstNumberCheck = false;
let lastOperatorEqualCheck = false;

function add(num1, num2) {
    return Math.round((num1 + num2) * 100) / 100;
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 100) / 100;
}

function multipy(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multipy(firstNumber, secondNumber);
            break;
        case "/":
            if (secondNumber === 0) {
                return "Well well well seems like you tried dividing by 0: ERROR"
            }
            return divide(firstNumber, secondNumber);
            break;
    }
}

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".numberButtons");
function getNumberInput(numberButtons) {
    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            displayValue += event.target.textContent;
            setDisplay(displayValue);
        })
    })
}
getNumberInput(numberButtons);

const operatorButtons = document.querySelectorAll(".operatorButtons");
function getOperatorInput(operatorButtons) {
    operatorButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            //If a firstNumber hasn't been assigned, we can assign the displayValue as firstNumber
            if (!firstNumberCheck) {
                setFirstNumber(displayValue);
                firstNumberCheck = true;
                //Store the operator in the firstOperator variable since it is used when another operator button was pressed
                firstOperator = event.target.textContent;
            }
            else if (lastOperatorEqualCheck) {
                firstOperator = event.target.textContent;
                lastOperatorEqualCheck = false;
            }
            else {
                //If firstNumber is assigned we can assign the display Value to the secondNumber
                setSecondNumber(displayValue);
                //Store the second operator in it's own variable to not overwrite the first input aswell need it when equals is pressed
                secondOperator = event.target.textContent;
                //Calculate and display the numbers
                setDisplay(operate(firstNumber, secondNumber, firstOperator));
                //Set result as first number so we can continue with the next calculation
                firstNumber = operate(firstNumber, secondNumber, firstOperator);
                //Set first operator so when we get the next operator we calculate with the right one
                firstOperator = secondOperator;
            }
            displayValue = "";
        })
    });
}
getOperatorInput(operatorButtons);

const equalButton = document.querySelector("#equals");
function getEqualInput(equalButton) {
    equalButton.addEventListener("click", () => {
        setSecondNumber(displayValue);
        if (secondOperator.length > 0) {
            setDisplay(operate(firstNumber, secondNumber, secondOperator));
            firstNumber = operate(firstNumber, secondNumber, firstOperator);
            //Check for firstNumber so if equal is pressed before nothing happens
        } else if (firstNumberCheck) {
            setDisplay(operate(firstNumber, secondNumber, firstOperator));
            firstNumber = operate(firstNumber, secondNumber, firstOperator);
        }
        lastOperatorEqualCheck = true;
    })
}
getEqualInput(equalButton);

const clearButton = document.querySelector("#clear");
function clearPress(params) {
    clearButton.addEventListener("click", () => {
        displayValue = "";
        firstNumber = "";
        secondNumber = "";
        firstOperator = "";
        secondOperator = "";
        firstNumberCheck = false;
        setDisplay("0");
    })
}
clearPress();

function setFirstNumber(num) {
    firstNumber = parseInt(num);
}

function setSecondNumber(num) {
    secondNumber = parseInt(num);
}

function setDisplay(displayValue) {
    display.textContent = displayValue;
}

