let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let percentButton = document.getElementById('percent');
let divideButton = document.getElementById('divide');
let multiplyButton = document.getElementById('multiply');
let subtractButton = document.getElementById('subtract');
let addButton = document.getElementById('add');
let equalsButton = document.getElementById('equals');
let numberButtons = document.querySelectorAll('.buttons button:not(#clear, #backspace, #percent, #divide, #multiply, #subtract, #add, #equals)');

let calculation = '';
let result = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculation += button.textContent;
        display.value = calculation;
    });
});

clearButton.addEventListener('click', () => {
    calculation = '';
    display.value = '';
});

backspaceButton.addEventListener('click', () => {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
});

percentButton.addEventListener('click', () => {
    calculation += '%';
    display.value = calculation;
});

divideButton.addEventListener('click', () => {
    calculation += '/';
    display.value = calculation;
});

multiplyButton.addEventListener('click', () => {
    calculation += '*';
    display.value = calculation;
});

subtractButton.addEventListener('click', () => {
    calculation += '-';
    display.value = calculation;
});

addButton.addEventListener('click', () => {
    calculation += '+';
    display.value = calculation;
});

equalsButton.addEventListener('click', () => {
    try {
        result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
        display.value = 'Error';
        calculation = '';
    }
});