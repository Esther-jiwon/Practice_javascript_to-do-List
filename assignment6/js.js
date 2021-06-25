const range = document.querySelector(".range"),
rangeValue = document.querySelector(".rangeValue"),
form = document.querySelector(".form"),
myValue = document.querySelector(".myValue"),
p = document.querySelector("p"),
result = document.querySelector(".result");

range.addEventListener("input", showRangeValue);
form.addEventListener("submit", showMyValue)

function showRangeValue(){
    rangeValue.innerHTML = `${range.value}`;
}

function showMyValue(event){
    const randomNum = Math.round(Math.random() * range.value) ;
    event.preventDefault();
    p.innerText = `You chose: ${myValue.value}, the machine chose: ${randomNum}`;
    if(myValue.value === ""){
        alert("Let's think!");
        p.innerText = "";
        result.innerText = "";
    } else if (myValue.value !== JSON.stringify(randomNum)){
        result.innerText = `You lost!`;
    } else {
        result.innerText = `You win!`;
    }
}



