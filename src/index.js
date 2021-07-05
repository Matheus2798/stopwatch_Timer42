const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");
const milisecondsValue = document.getElementById("miliseconds");
let timer = [0, 0, 0]; // Timer[0] is the miliseconds, timer[1] is the seconds
// And timer[2] is the minutes

function start() {
    document.getElementById("start").classList.add("disable");
    document.getElementById("pause").classList.remove("disable");
    document.getElementById("stop").classList.remove("disable");
    setWork(true);
}

function pause() {
    setWork(false);
    document.getElementById("return").classList.remove("disable");
    document.getElementById("pause").classList.add("disable");
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
    working == true ? time = setInterval(count, 10) : clearInterval(time); //Se a função for chamada para ligar, começa a contar. Se não, para a contagem.
}

function increment(number) {
    return number = ++number;
}

function count() {
    timer[0] == 99 ? (
            timer[1] = ++timer[1],
            timer[0] = 0
        ) : timer[1] == 60 ? (
            timer[1] = 0,
            timer[0] = 0,
            timer[2] = ++timer[2]
        )
            : timer[0] = ++timer[0];

    milisecondsValue.innerHTML = formatNumber(timer[0])
    secondsValue.innerHTML = formatNumber(timer[1])
    minutesValue.innerHTML = formatNumber(timer[2])
    document.title = "Corno..." + minutesValue.innerHTML + ":" + secondsValue.innerHTML;
}

function formatNumber(number) {
    if (number < 10) {
        number = ("0" + number).slice(-2);
    }
    return number
}