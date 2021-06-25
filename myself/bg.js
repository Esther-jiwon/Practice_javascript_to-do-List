const body = document.querySelector("body");
const IMG_NUMBER = 3;



function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgimg");
}



function genNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
//3. 이 함수를 통해 만들어 낸 랜덤 숫자를 

function init() {
 const randomNumber = genNumber();
 //2. 인수 랜덤번호는 랜덤번호를 알려주는 함수를 통해 정하도록 하자. 
 paintImage(randomNumber);
};
//1. 이미지를 칠해줄 거야 무슨 이미지? 인수 랜덤번호에 맞는 이미지. 
//4. 여기 페인트 이미지 인수로 넣어줄 거야. 

init();