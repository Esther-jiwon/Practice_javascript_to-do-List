// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");


function handleResize(){
    const sizeOfWindow = window.innerWidth;
    const WIDE_CLASS = "wide";
    const NORMAL_CLASS = "normal";
    const SHORT_CLASS = "short";
    if(sizeOfWindow > 1000) {
        body.classList.add(WIDE_CLASS);
        body.classList.remove(NORMAL_CLASS, SHORT_CLASS);
    } else if(sizeOfWindow > 600){
        body.classList.add(NORMAL_CLASS);
        body.classList.remove(WIDE_CLASS,SHORT_CLASS);
    } else {
        body.classList.add(SHORT_CLASS);
        body.classList.remove(NORMAL_CLASS, WIDE_CLASS);
    }
}
 
function init(){
    window.addEventListener("resize", handleResize);
} 

init();