const resultElement = document.querySelector('.result');
const numberElements = document.querySelectorAll('.number');
const removeElement = document.querySelector('.remove');
const operatorElements = document.querySelectorAll('.operator')
const calcElement = document.querySelector('.calculate');
let number;
let operator;
let result; 

function displayValue(value) {
    console.log('Value:' + value);
    resultElement.value = value;
}

function resetDisplay() {
    console.log('Display Resetted');
    resultElement.value = "";
    result = '';
}

function handleNumberClick(event) {
    const button = event.currentTarget;
    number = parseFloat(button.value);
    displayValue(number);
}

function handleOperatorClick(event){
    doCalculation(event);
}

function handleRemoveClick() {
    resetDisplay();
}

function handleCalcClick(event) {
    doCalculation(event);
    displayValue(result);
    console.log('Result: ' + result);
}

function doCalculation(event) {
    const button = event.currentTarget;
    if (button.value != '=') {
        operator = button.value;
    }

    // erster aufruf - Testen ob result leer ist.
    if(result === undefined ) {
        result = number;
    }
    else {

        if (operator == '*') {
            result = result * number;
        } 
        else if (operator == '+')
        {
            result = result + number;
        }
        else if (operator == '-') {
            result = result - number ;
        } 
        else if (operator == '/') {
            result = result / number;  
        } 
    }
}

calcElement.addEventListener('click', handleCalcClick);
removeElement.addEventListener('click', handleRemoveClick);

for (let i = 0; i < numberElements.length; i++) {
    const numberElement = numberElements[i];
    numberElement.addEventListener('click', handleNumberClick);
}
for (let j = 0; j < operatorElements.length; j++) {
    const operatorElement = operatorElements[j];
    operatorElement.addEventListener('click', handleOperatorClick);
}