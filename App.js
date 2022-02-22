let firstNumber = document.getElementById("first_num");
let secondNumber = document.getElementById("second_num");
let operand = document.getElementById("oper");
let calculate = document.getElementById("button");
let result = document.getElementById("result");



calculate.addEventListener("click", () => {
    let sign = operand.value;
    switch (sign) {
        case "+":
            result.innerText = Number(firstNumber.value) + Number(secondNumber.value);            
            break;
            
        case "-":        
            result.innerText = Number(firstNumber.value) - Number(secondNumber.value);            
            
            break;
        
        case "*":
            result.innerText = Number(firstNumber.value) * Number(secondNumber.value);
            
            break;
        
        case "/":
            result.innerText = Number(firstNumber.value) / Number(secondNumber.value);
            break;
    
        default:
            result.innerText = "enter valid numbers or operand"
            break;
    }

    
});