
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let secPosition = date.getSeconds() / 60 * 360;
let minPosition = (date.getMinutes() / 60 * 360) + (date.getSeconds() * (360 / 60) / 60);
let hrPosition = (date.getHours() / 12 * 360) + (date.getMinutes() * (360 / 60) / 12);

function runClock() {

    secPosition = secPosition + 6;
    minPosition = minPosition + (1 / 10);
    hrPosition = hrPosition + (1 / 120);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runClock(), 1000);
