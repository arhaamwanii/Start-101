let currentInput = '';
let currentResult = '';

function appendToScreen(value) {
    currentInput += value;
    document.getElementById('result').innerHTML = currentInput;
}

function clearScreen() {
    currentInput = '';
    document.getElementById('result').innerHTML = '0';
}

function calculate() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('result').innerHTML = currentResult;
        currentInput = currentResult;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error';
        currentInput = '';
    }
}
