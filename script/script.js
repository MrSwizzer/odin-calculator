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

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case value: add;
            add(firstNumber, secondNumber);
            break;
        case value: subtract;
            subtract(firstNumber, secondNumber);
            break;
        case value: multipy
            multipy(firstNumber, secondNumber);
            break;
        case value: divide
            divide(firstNumber, secondNumber);
            break;
    }
}


const numberButtons = document.querySelectorAll(".numberButtons");
const display = document.querySelector("#display");

let displayValue = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        displayValue += event.target.textContent;
        display.textContent = displayValue;
    })
})

let selcetedOperator = "";
const operatorButtons = document.querySelectorAll(".operatorButtons");
operatorButtons.forEach(button => {
    button.addEventListener("click", (event) =>{
        selcetedOperator = event.target.textContent;
        console.log(selcetedOperator);
    })
});

