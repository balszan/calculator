const result = document.querySelector('#result');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');

let previousNumber ="";
let currentOperation = undefined;
let currentNumber = "";


function clear() {
    previousNumber = "";
    currentNumber = "";
    operation = undefined;
    result.innerText = "";
}

function back() {
    currentNumber = currentNumber.toString().slice(0,-1);
}

function appendNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
}

function chooseOperation(operation) {
    if(currentNumber=="") return;
    if(previousNumber!="") {
        operate();
    }

    currentOperation = operation;
    previousNumber = currentNumber;
    currentNumber = ""; 

}

function operate() {

if(isNaN(previousNumber) || isNaN(currentNumber)) return;

let operateResult;

switch(currentOperation) {
    case "+": 
        operateResult = parseInt(previousNumber) + parseInt(currentNumber);
        break;
    case "-":
        operateResult = parseInt(previousNumber) - parseInt(currentNumber);
        break;
    case "*":
        operateResult = previousNumber*currentNumber;
        break;
    case "/":
        operateResult = previousNumber/currentNumber;
        break;
}

currentNumber = operateResult;
previousNumber ="";
currentOperation = undefined;

}


function updateDisplay() {

        if(currentOperation==undefined) {
            result.innerText = currentNumber;  
        } else if(currentOperation && currentNumber==""){
            result.innerText = currentOperation;
        } else {
            result.innerText = currentNumber;
        }
}



numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    })
})


equalsButton.addEventListener('click', () => {
    operate();
    updateDisplay();
})

deleteButton.addEventListener('click', () => {
    back();
    updateDisplay();
})

clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
})

clear();