const form = document.querySelector(".js-form"),
    input = form.querySelector("input");


const greeting = document.querySelector(".js-greeting");


const SHOWING_CN = "showing";
//그냥 변수 선언 하면 자동완성으로 나오니까 편하라고 변수 선언


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);/*이거 빼고 localStorage.setItem(KEY, currentValue)하고 saveName함수 제거해도 똑같이 돌아감*/
}
/*3. 저는 제출용 함수에요 . 아 일단 제출하신 내용이 어디로 날아가지 않게 붙잡고 있어야겠네요. 
방금 제출하신 이름을 저는 currentValue라고 이름 지을게요. 아 이 이름을 인수로 주면 근사한 문장 안에 넣어서 환영하는 말을 해주는 함수를 데려올게요.*/
/*5. 아 그리고 이렇게 만들어진 근사한 문장이 새로고침할 때마다 날라가는 건 너무 섭섭하잖아요? 
들어오실 때마다 환영해드리기 위해 제가 기억하고 있을게요! 기억하는 함수에게 전화해볼게요!*/

function askName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
/*2. 어 없네? 그럼 폼을 보여줘서 물어보자. 이름이 어떻게 되세요? 다 쓰셨나요? 그럼 엔터 눌러서 제출하세요. 
야, 제출한 거 들었지? 제출용 함수! 이제 니 차례다!*/

function paintName(text) {
    form.classList.remove(SHOWING_CN); 
    greeting.innerText = `Hello ${text} :)`;
    greeting.classList.add(SHOWING_CN);
}
/*4. 저는 이름이라는 데이터가 넘어오면 일을 하는 함수에요. 일단 이름이 있으면 폼이 필요없어야겠으니 
제가 등장할 때는 항상 제일 먼저 폼을 치워버리는 역할을 담당해야겠어요. 
그러고 이름이라는 인수가 오면 문장 안에 인수를 집어넣어버리고 그 문장을 사람들 눈에 보이게 클래스 마법을 걸어줄게요*/


function saveName (text) {
    localStorage.setItem(KEY, text);
}
/*6. 저는 기억하는 함수에요! 아, 문장이 만들어졌나요? 이름을 주세요! 계속 이름을 주시는 한 항상 KEY의 데이터 값으로 저장할게요!*/


const KEY = "Username";
/*그냥 key값을 임시로 붙여준 것 뿐 ""이렇게 공백으로 해놔도 돌아가긴 돌아감
다만, 공백으로 두지 않는 이유는 localStorage를 쓰는 게 이름 데이터만이 아니기 때문에 
분류해주기 위해서 이름을 붙여주자*/

function loadName () {
    const currentUser = localStorage.getItem(KEY);
//로컬 스토리지에 들어있는 KEY의 데이터값을 currentUser라고 하자.
    if (currentUser === null) {
        askName();
    } else { 
    paintName(currentUser);
    }
}    
//1. 야, 첫 화면에서 일단 가지고 있는 이름이 있는지 확인해봐봐. 없으면 물어보고 있으면 띄워봐

function init() {
    loadName();
}    

init();