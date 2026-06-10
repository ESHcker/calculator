let number1 = "";
let operator = "";
let number2 = "";

function add(number1, number2){
    return Number(number1) + Number(number2);
}

function subtract(number1, number2){
    return Number(number1) - Number(number2);
}

function multiply(number1, number2){
    return Number(number1) * Number(number2);
}

function divide(number1, number2){
    return Number(number1) / Number(number2);
}

function operate(){
    let result = "";
    switch(operator){
        case "+": result += add(number1, number2); break;
        case "-": result += subtract(number1, number2); break;
        case "x": result += multiply(number1, number2); break;
        case "/": result += divide(number1, number2); break;
    }
    displayToUser("=" + result);
}

function updateDigit(number){
    if(operator === ""){
        number1+= number;
    }else{
        number2+= number;
    }
    displayToUser(number);
}

function updateOperator(operatorToUpdate){
    operator = operatorToUpdate;
    displayToUser(operator);
}

function displayToUser(elementToDisplay){
    let displayToUse = document.getElementById("display");
    displayToUse.textContent += elementToDisplay;
}
