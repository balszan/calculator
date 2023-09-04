let result = document.querySelector('#result');

const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const timesButton = document.querySelector('#times');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');
const dotButton = document.querySelector('#dot');

const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');

let firstNum ="";
let operand = "";
let secondNum = "";

function operate(first,operand,second) {
    
}

function displayResult(res) {
    result.textContent = res;
}

function sum(...numbers) {

    let total = numbers.reduce((acc,curr) => acc = acc+curr,0)
    return total;
}

function minus(num,...numbers) {
   
    let total = numbers.reduce((acc, curr) => acc = acc-curr, num)
    return total;
}

function multiply(...numbers) {
    
    let total = numbers.reduce((acc,curr) => acc = curr*acc);
    return total;
}

function divide(...numbers) {
    
    let total = numbers.reduce((acc,curr) => acc = acc/curr);
    return total;
}

