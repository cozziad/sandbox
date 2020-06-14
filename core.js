const path = require("path");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);

const util = require("util");

util.log(path.basename(__filename));

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("how do you like node?", answer => {
    console.log(`Your answer is: ${answer}`);
    process.exit();
});


