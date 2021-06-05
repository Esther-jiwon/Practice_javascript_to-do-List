const loginForm = document.getElementById("login-form");
const loginInput  = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
}

function handleLinkClick(event) {
    event.preventDefault();
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
