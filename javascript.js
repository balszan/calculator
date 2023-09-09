let result = document.querySelector('#result');
const buttons = document.querySelector('#buttons');
let firstNum =0;
let operator = 0;
let secondNum = 0;
let displayValue =0;
let calculationResult=0;

buttons.addEventListener('click', (e) => {
        
        displayValue=e.target.innerText;
        displayResult();

        if(firstNum==0) {
            firstNum = e.target.innerText;
            console.log(firstNum)
        } else if(operator==0) {
            operator = e.target.innerText;
        } else if(secondNum==0) {
            secondNum = e.target.innerText;
        } 




        console.log(firstNum + " "+ operator+ " " + secondNum);

        if(e.target.innerText=="=") {
            operate(firstNum,operator,secondNum);
            displayResult();
            firstNum = calculationResult;
            operator=0;
            secondNum=0;
        }

        if(e.target.innerText=="clear") {
            displayValue=""
            displayResult();
        }
});


function operate(first,operator,second) {
    switch(operator) {
        case "-":
            calculationResult = minus(first,second);
            displayValue = calculationResult;
            displayResult();
            break;
        case "+":
            calculationResult = sum(first,second);
            displayValue = calculationResult;
            displayResult();
            break;
        case "*":
            calculationResult = multiply(first,second);
            displayValue = calculationResult;
            displayResult();
            break;
        case "/":
            calculationResult = divide(first,second);
            displayValue = calculationResult;
            displayResult();
            break;
    }
}

function displayResult() {
    result.textContent = displayValue;
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