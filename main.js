let number1 = "";
let operator = "";
let number2 = "";
let operateDoneBefore = false;

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
    if(number1 != ""){
        let result = "";
        switch(operator){
            case "+": result += add(number1, number2); break;
            case "-": result += subtract(number1, number2); break;
            case "x": result += multiply(number1, number2); break;
            case "/": result += divide(number1, number2); break;
        }
        number1 = result;
        operateDoneBefore = true;
        resetCalculator("semi");
    } 
}

function updateDigit(number){
    if(operateDoneBefore === false){
        if(operator === ""){
            number1+= number;
            displayToUser(number);
        }else if(operator != ""){
            number2+= number;
            displayToUser(number);
        }
    }else{
        resetCalculator("All");
        updateDigit(number);
    }
    
}

function updateOperator(operatorToUpdate){
    if(operator === ""){
        operator = operatorToUpdate;
        displayToUser(operator);
    }
}

function displayToUser(elementToDisplay){
    let displayToUse = document.getElementById("display");
    if(elementToDisplay == ""){    
        displayToUse.textContent = elementToDisplay;
    }else{
        displayToUse.textContent += elementToDisplay;
    }
}

function resetCalculator(typeOfClear){
    operator = "";
    number2 = "";
    displayToUser("");
    if(typeOfClear === "All"){
        number1 = "";
        operateDoneBefore = false;
    }
    if(typeOfClear === "semi"){
        displayToUser(number1);
    }
}

