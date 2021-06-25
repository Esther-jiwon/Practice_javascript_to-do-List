/*// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>*/

const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      pendingUl = document.querySelector(".js-pending_list"),
      finishedUl = document.querySelector(".js-finished_list");

function handleSubmit(event){
    event.preventDefault();
    const pendingValue = input.value;
    paintPending(pendingValue);
    input.value = "";
}

let pendingToDos = [];
let finishedToDos = [];
const PENDINGTODOS_LS = "Pending";
const FINISHTODOS_LS = "Finished";

function handlePendingDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    pendingUl.removeChild(li);

    const cleanPendingToDos = pendingToDos.filter(function pendingFilter(toDo){
        return toDo.id !== parseInt(li.id);
    });

    pendingToDos = cleanPendingToDos;
    savePendingToDos();
}

function handleFinishedDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishedUl.removeChild(li);

    const cleanFinishedToDos = finishedToDos.filter(function finishedFilter(toDo){
        return toDo.id !== parseInt(li.id);
    });

    finishedToDos = cleanFinishedToDos;
    saveFinishedToDos();
}

function saveFinishedToDos(){
    localStorage.setItem(FINISHTODOS_LS, JSON.stringify(finishedToDos));
}

function savePendingToDos(){
    localStorage.setItem(PENDINGTODOS_LS, JSON.stringify(pendingToDos));
}

function handleFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    pendingUl.removeChild(li);
    paintFinished(li.querySelector("span").innerText);

    const cleanPendingToDos = pendingToDos.filter(function pendingFilter(toDo){
        return toDo.id !== parseInt(li.id);
    });

    pendingToDos = cleanPendingToDos;
    savePendingToDos();
}

function handleReturn(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishedUl.removeChild(li);
    paintPending(li.querySelector("span").innerText);

    const cleanFinishedToDos = finishedToDos.filter(function finishedFilter(toDo){
        return toDo.id !== parseInt(li.id);
    }); 

    finishedToDos = cleanFinishedToDos;
    saveFinishedToDos();
}

function paintPending(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handlePendingDelete);
    const finishBtn = document.createElement("button");
    finishBtn.innerText = "▼";
    finishBtn.addEventListener("click", handleFinish)
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    pendingUl.appendChild(li);
    const newId = Math.floor(Math.random() * 100000) ;
    li.id = newId;
    const pendingObj = {
        text : text,
        id : newId
    };
    pendingToDos.push(pendingObj);
    savePendingToDos(pendingObj);
}

function paintFinished(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleFinishedDelete);
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "▲";
    returnBtn.addEventListener("click", handleReturn);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(returnBtn);
    finishedUl.appendChild(li);
    const newId = Math.floor(Math.random() * 100000) ;
    li.id = newId;
    const finishedObj = {
        text : text,
        id : newId
    };
    finishedToDos.push(finishedObj);
    saveFinishedToDos(finishedObj);
}

function loadPending(){
    const pending = localStorage.getItem(PENDINGTODOS_LS);
    if(pending !== null){
        const parsedPendingToDos = JSON.parse(pending);
        parsedPendingToDos.forEach(function(toDo){
            paintPending(toDo.text);
        })
    }
}


function loadFinished(){ 
    const finished = localStorage.getItem(FINISHTODOS_LS);
    if( finished !== null){
        const parsedFinishedToDos = JSON.parse(finished);
        parsedFinishedToDos.forEach(function(toDo){
            paintFinished(toDo.text);
        })
    }
}

function init(){
    loadPending();
    loadFinished();
    form.addEventListener("submit", handleSubmit);
}

init();