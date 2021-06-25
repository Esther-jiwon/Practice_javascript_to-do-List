const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"
let toDos = [];
//9.. 여기 할 일 목록들을 먼저 array로 선언해주는 거야 

function saveToDos () {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
/*만약 JSON 없이 저장한다면 toDos array 자체는 브라우저에 존재하지 않는 
그냥 자바스크립트 이 페이지 안에서만 존재하는 거기 때문에 인식을 아예 못함. 
그러니까 이 toDos array 안에 있는 것들을 모두 string화 시켜줘야 함. */

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function filterFn(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
};



function paintToDo(text) {
//인풋에 받은 걸 ul에 추가하는 작업이 포함되겠지?
    const li = document.createElement("li");
    //1..인풋 받은 것들을 모두 리스트에 넣어버릴거야 
    const delBtn = document.createElement("button");
    //2..할 일을 삭제도 해야 하니까 삭제버튼도 추가해주고 
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo)
    //3..삭제버튼은 X로 나오게 하자 / 버튼 눌렀을 때 발생하는 이벤트를 받아줄 함수도 만들고!
    const span = document.createElement("span");
    //4..실제로 할 일 목록을 글자로 받을 span도 만들어주고 
    span.innerText = text;
    //5..인수로 받은 할 일 글자를 받을거야!
    li.appendChild(span);
    //6..그러고 span을 li안에 넣어주고
    li.appendChild(delBtn);
    //7..삭제버튼도 li안에 넣어줘  
    toDoList.appendChild(li);
    /*8.. 최종적으로 이렇게 모일 li들을 ul 안에 넣어주자!-> 이렇게 되면 할 일을 적었을 때 . 할 일(삭제버튼) 이렇게 나올거야.
    하지만 점점 text에 집어넣은 값들이 많아질거니까 일단 이 친구들을 array를 통해 묶어주는 기능을 만들자!*/

    const newId = Math.floor(Math.random() * 100000) ;
    //12.. 아 저거 아이디 붙여주는 건 li에도 붙여줘야되고 좀 기니까 변수로 해주자!
    li.id = newId; 
    //13..li에 아이디를 왜 주냐고? 다 끝난 일은 삭제해줘야할 것 아냐!
    const toDosObj = {
        text: text, 
        id: newId 
    };
    /*10.. 이 array 안에는 object 리스트들이 들어갈 건데 일단 내용은 할 일 내용의 text로 받고 하나씩 id도 붙여주자 
            대신에 id는 이 toDos 목록에 있는 데이터 양의 +1이라는 번호를 매겨주자. 자바스크립트는 0부터 세니까!!*/
    toDos.push(toDosObj);
    /*11..그러고 하나하나 object가 만들어질 때마다 toDos 목록으로 넣어주는 기능을 해주는 거야*/
    saveToDos();
    /*14.. 자 이제 이렇게 toDosObj를 통해 하나하나 toDos 목록에 저장될 때마다 로컬 스토리지에 이 목록들을 저장해줘야겠지?
            저장했어? 그럼 뭐해야돼? 화면이 새로고침 될 때마다 저장되어있는 데이터가 있으면 불러와야 할 것 아냐!
            맨 밑의 load 함수로 가서 선언해줘!*/
}

function handleSubmit (event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}   

function loadToDos () {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    /*처음 화면을 켰을 때 무엇을 보여줄지에 대한 기준을 변수로 정의. 
    이 상황에서는 일단 로컬 스토리지에 있는 TODOS_LS라는 정보를 끌어올거임.*/
   if (loadedToDos !== null) {
    //만약 로컬 스토리지에 있는 정보들이 0개가 아니라면 
    const parsedToDos = JSON.parse(loadedToDos);
    /*가져오긴 가져올 건데 그 정보들이 거기에 저장하느라 글자화 시켜버렸단 말이지..
    그니까 일단은 그걸 다시 object화 시켜서 이름을 붙여주자*/

    parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
    });
    /*지금 한 건 array가 할 수 있는 forEach라는 기능인데, array의 요소 하나하나에 대한 
        기능을 지정하고 싶을 때 쓰는 기능이야. 바로 옆에다가 함수를 만들 수 있고, 이 함수는 
        array 요소 하나하나에 적용될 거야. 일단 콘솔에다가 array 요소들이 가지고 있는 
        text들(할 일)을 보여주자구. todo를 왜 인수로 주냐고? 너가 저기에 뭘 넣던간에 
        그냥 array 요소 하나하나(object들)를 가리키는 말이 될 거야. potato로 해도 됌.*/
   }
}        

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();