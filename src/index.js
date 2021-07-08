const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");
const milisecondsValue = document.getElementById("miliseconds");
const btn_start = document.getElementById("start");
const btn_pause = document.getElementById("pause");
const btn_stop = document.getElementById("stop");
const btn_return = document.getElementById("return");
let timer = [0, 0, 0]; // Timer[0] is the miliseconds, timer[1] is the seconds
// And timer[2] is the minutes


function start() {
    btn_start.classList.add("disable");
    btn_pause.classList.remove("disable");
    btn_stop.classList.remove("disable");
    setWork(true);
}

function pause() {
    setWork(false);
    btn_return.classList.remove("disable");
    btn_pause.classList.add("disable");
}

function stop() {
    setWork(false);
    minutesValue.innerHTML = formatNumber(timer[2]);
    secondsValue.innerHTML = formatNumber(timer[1]);
    document.getElementById("start").classList.remove("disable");
    document.getElementById("pause").classList.add("disable");
    document.getElementById("stop").classList.add("disable");
    document.getElementById("return").classList.add("disable");
}

function returnWork() {
    document.getElementById("return").classList.add("disable");
    start();
}

function setWork(working) {
    working == true ? (
        miliseconds = setInterval(() => { 
            timer[0] = increment(timer[0], 100)
            milisecondsValue.innerHTML = formatNumber(timer[0])
    }, 10),
        seconds = setInterval(() => {
            timer[1] = increment(timer[1], 60)
            secondsValue.innerHTML = formatNumber(timer[1])
            timer[0] = 0;
            document.title = "Corno..." + minutesValue.innerHTML + ":" + secondsValue.innerHTML;
        }, 1000),
        minutes = setInterval(() => {
            timer[2] = increment(timer[2], 60)
            minutesValue.innerHTML = formatNumber(timer[2])
        }, 60000)
        
    ) : clearInterval(miliseconds); //Se a função for chamada para ligar, começa a contar. Se não, para a contagem.    
}

function increment(number, turn) {
    number = ++number;
    return (number >= turn ? 0 : number);
}

function formatNumber(number) {
    if (number < 10) {
        number = ("0" + number).slice(-2);
    }
    return number
}