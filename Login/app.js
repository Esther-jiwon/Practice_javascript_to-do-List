const loginForm = document.getElementById("login-form");
const loginInput  = loginForm.querySelector("input");
const loginButton  = loginForm.querySelector("button");

function onLoginBtnClick() {
    const username = loginInput.value;
    
}

loginButton.addEventListener("click", onLoginBtnClick);