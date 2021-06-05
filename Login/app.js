const loginForm = document.getElementById("login-form");
const loginInput  = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault();
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
