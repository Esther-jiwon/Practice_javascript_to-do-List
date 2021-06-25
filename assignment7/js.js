const calculator = document.querySelector(".calculator"),
display = document.querySelector(".display"), 
clear = document.querySelector(".clear");

const keys = document.querySelectorAll(".key")
for (const key of keys) {
  key.addEventListener('click', function(event) {
      
    const key = event.target;
    const keyValue = key.value;
    const displayValue = display.textContent;
    const {type} = key.dataset;
    const {previousKeyType} = calculator.dataset;
    

    if(type === "number"){
        if(displayValue === "0" || previousKeyType === "operator" || previousKeyType === "equal"){
            display.textContent = keyValue;
        }/* else if(previousKeyType === "operator") {
            display.textContent = keyValue;
        } */else {
            display.textContent = displayValue + keyValue;
        }

        }

    if(type === "operator"){
        // which one is selected?
        // remove all data-state = "selected" except current operator
        const currentActiveOperator = calculator.querySelector('[data-state="selected"]')
        if(currentActiveOperator){ 
	    currentActiveOperator.dataset.state = ""
        }
        key.dataset.state = "selected";

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if(type === "equal"){
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue; 

        display.textContent = calculation(firstNumber, operator, secondNumber);
        
    }

    calculator.dataset.previousKeyType = type;
})

    function calculation(firstNumber, operator, secondNumber){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        let result = "";
            if(operator === "plus") result = firstNumber + secondNumber;
            if(operator === "minus") result = firstNumber - secondNumber;
            if(operator === "multiple") result = firstNumber * secondNumber;
            if(operator === "divide") result = firstNumber / secondNumber;
        return result;
            

    }

}



/*/
document.querySelectorAll(".number").forEach(
    number => {
        number.onclick = () => input.value = input.value !== "0" ?
        input.value + number.value : number.value;
    }
)
*/