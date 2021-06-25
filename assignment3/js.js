const clockContainer = document.querySelector(".js-clock"),
clock = clockContainer.querySelector("h2");

function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const now = new Date;
    const Time = xmasDay - now;
    const day = Math.ceil(Time / (1000*60*60*24));
    const hours = Math.ceil(Time % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.ceil(Time % (1000*60*60) / (1000*60));
    const seconds = Math.ceil(Time % (1000*60) / 1000);

    clock.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();