const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
  
const subtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};

let firstNumber = null

let operator = null

let secondNumber = null

let operate = (firstNumber, operator, secondNumber) => {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}
const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".num");
numberButtons.forEach(button => button.addEventListener("click", () => {
    display.value += button.textContent;
}))

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    firstNumber = display.value;
    operator = button.textContent;
    display.value = "";
    console.log(operator);
}))

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", () => {
    secondNumber = display.value;
    display.value = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(2));
})

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    display.value = "";
})







/*
const add = (array) => {
    return array.reduce((sum, number) => {
        return sum += number;
     }, 0);
}

const subtract = (array) => {
    return array.reduce((sum, number) => {
        return sum -= number;
     }, 0);
}

const multiply = (array) => {
    return array.reduce((sum, number) => {
        return sum *= number;
     }, 0);
}

*/

