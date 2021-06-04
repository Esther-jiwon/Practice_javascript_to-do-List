const loginForm = document.getElementById("login-form");
const loginInput  = loginForm.querySelector("input");


function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

