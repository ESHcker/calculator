let number1;
let operator;
let number2;

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, number1, number2){
    switch(operator){
        case "+": return add(number1, number2);
        case "-": return subtract(number1, number2);
        case "x": return multiply(number1, number2);
        case "/": return divide(number1, number2);
    }
}
