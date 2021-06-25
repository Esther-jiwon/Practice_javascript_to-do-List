const API_KEY = "6d4116e87f087fd840fdd8984cbfeeda";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function getWeather(lat,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
    return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;r
    }); 
}
//6. 날씨를 가져올 수 있는 API를 사용할 겨야. 
// 사용하는 법은 기본 fetch이고 돌아온 response값에는 json정보들이 있는거야. 
// 우리는 그 json 안에 있는 정보들이 필요하기 때문에 (1) response에서 json을 가져오고, 
//(2) json 에서 가져온 온도와 위치 정보를 텍스트로 넣어주는 거지. 
//그니까 API를 쓰는 이유는, 그 안에 있는 json의 정보들이 필요하기 때문이고, 
//(1)API를 가져오고, (2)그 응답 안에 있는 json 정보들을 가져오고 (3)가져온 json 안에 있는 정보들을 다뤄주는 과정인거지  

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
//5. 만약 위치를 잘 잡았다면, 그 위치 안의 위도와 경도를 객체로 묶어줘버려 
// 그리고 로컬 스트리지에 그 객체들을 저장시켜주는 거야. 
// 이 객체들은 위도와 경도잖아? 이 위도와 경도에 맞는 날씨를 가져와줘야겠지?

function handleGeoError(){
    console.log('We have not your position');
} 

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
//4. 무슨 코드? 현재 있는 위치를 알아야 날씨를 가져오니까 위치먼저 일단 가져올까?
// 네비게이터에서 getCurrentPosition을 사용하면 위치를 가져오는 걸 성공했을 때, 실패했을 때의 함수 2개가 필요해. 


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    //2. 로컬스트리지에서 가져올 값이 있나 없나 확인해야겠지? 그 값의 key값을 COORDS라고 이름짓자. 
    if (loadedCoords === null){
        askForCoords();
    } 
    //3. 만약 있는 값이 없다면 코드를 서버에 물어보자. 
    else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
    //7. 만약 저장된 값이 있다면? 그 값은 위도, 경도가 string화 된 값이니까 다시 JSON.parse를 해서 
    // 가져온 경도 위도 값으로 API 함수를 이용해 날씨만 찾아주면 되는 거지! 
}

function init() {
    loadCoords ();
}
// 1. 코드를 불러오는 함수를 실행시키자. 

init();