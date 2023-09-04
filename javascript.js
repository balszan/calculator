let result = document.querySelector('#result');

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