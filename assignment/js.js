const title = document.querySelector(".title");

const colorOfTitle = ["#9968db", "#7bb1dd", "#5285eb", "#db2f2f"];


const superEventHandler = {
    handleResize : function(){
    title.innerHTML = "You just resized!";
    title.style.color = colorOfTitle[0];
    }, 

    handleEnter : function(){
    title.innerHTML = "Your mouse is here!";
    title.style.color = colorOfTitle[1];
    },

    handleLeave : function () {
    title.innerHTML ="Your mouse is gone!";
    title.style.color = colorOfTitle[2];
    },

    handleRight: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colorOfTitle[3];
    }
}

window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("mouseenter", superEventHandler.handleEnter);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("contextmenu", superEventHandler.handleRight);