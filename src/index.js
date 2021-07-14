const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");
const milisecondsValue = document.getElementById("miliseconds");
const btn_start = document.getElementById("start");
const btn_pause = document.getElementById("pause");
const btn_stop = document.getElementById("stop");
const btn_return = document.getElementById("return");
let timer = [0, 0, 0]; // Timer[0] is the miliseconds, timer[1] is the seconds
// And timer[2] is the minutes

btn_start.addEventListener("click", () => { // Start button has press
    setWork(true);
});

btn_pause.addEventListener("click", () => { // Pause button has press
    setWork(false);
    btn_return.classList.remove("disable");
    document.getElementById("subtitle").innerHTML = "Esperando"
    btn_pause.classList.add("disable");
});

btn_stop.addEventListener("click", () => { // Stop button has press
    minutesValue.innerHTML = formatNumber(timer[2] = 0);
    secondsValue.innerHTML = formatNumber(timer[1] = 0);
    milisecondsValue.innerHTML = formatNumber(timer[0] = 0); // reset clock
    btn_start.classList.remove("disable");
    btn_pause.classList.add("disable");
    btn_stop.classList.add("disable");
    document.getElementById("subtitle").innerHTML = "Comece";
    btn_return.classList.add("disable");
    setWork(false);
});

btn_return.addEventListener("click", () => { // Return button has press
    btn_return.classList.add("disable");
    setWork(true);
});

function setWork(working) {
    working == true ?  ( // If parametre is true, start work. Else, stop.
            btn_start.classList.add("disable"),
            btn_pause.classList.remove("disable"),
            btn_stop.classList.remove("disable"),
            document.getElementById("subtitle").innerHTML = "Contando",
            miliseconds = setInterval(function() {
                timer[0] = increment(timer[0], 100);
                milisecondsValue.innerHTML = formatNumber(timer[0]);
                console.log(timer[0]);
                if (timer[0] == 0) {
                    timer[1] = increment(timer[1], 60);
                    secondsValue.innerHTML = formatNumber(timer[1]);
                    if (timer[1] == 0) {
                        timer[2] = increment(timer[2], 60);
                        minutesValue.innerHTML = formatNumber(timer[2]);
                        document.getElementById("colon").classList.remove("disable");
                        document.getElementById("minutes").classList.remove("disable");        
                    }
                }    
            }, 10)
        )
    : clearInterval(miliseconds);
}

function increment(number, turn) {
    number = ++number;
    return (number >= turn ? 0 : number);
}

function formatNumber(number) {
    return (number < 10 ? ("0" + number).slice(-2) : number);
}