const waitTime = 7000;
const waitInterval = 500;
let currentTime = 0;
console.log(`setting a waitime of ${waitTime / 1000} seconds`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("\ndone");
}
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}% complete`);
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
