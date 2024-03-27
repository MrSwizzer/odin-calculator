//global variables
let displayValue = "";
let firstNumber;
let secondNumber;
let operator;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multipy(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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
            return divide(firstNumber, secondNumber);
            break;
    }
}

const numberButtons = document.querySelectorAll(".numberButtons");
const display = document.querySelector("#display");
getNumberInput(numberButtons);

function getNumberInput(numberButtons) {
    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            displayValue += event.target.textContent;
            setDisplay(displayValue);
        })
    })
}add

const operatorButtons = document.querySelectorAll(".operatorButtons");
getOperatorInput(operatorButtons);

function getOperatorInput(operatorButtons) {
    operatorButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            operator = event.target.textContent;
            setFirstNumber(displayValue);
            console.log(firstNumber);
            console.log(operator);
            displayValue = "";
        })
    });
}

const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", () => {
    setSecondNumber(displayValue);
    console.log(secondNumber);
    setDisplay(operate(firstNumber,secondNumber,operator));
})

function setFirstNumber(num) {
    firstNumber = parseInt(num);
}

function setSecondNumber(num) {
    secondNumber = parseInt(num);
}

function setDisplay(displayValue) {
    display.textContent = displayValue;
}

