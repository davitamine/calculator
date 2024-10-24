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

const display = document.getElementById("display");

const updateDisplay = (value) => {
    display.value = value;
}

const getButtonValue = (value) => {
    return value = button.textContent;
}

const numberButtons = document.querySelectorAll(".num");
numberButtons.forEach(button => button.addEventListener("click", () => {
    display.value += button.textContent; 
    console.log(button.textContent);
    console.log(display.textContent);
    // console.log("display");
    // console.log(display);
    // console.log("button");
    // console.log(button);
}))



let operate = (firstNumber, operator, secondNumber) => {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "+") {
        return divide(firstNumber, secondNumber);
    }
}




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

