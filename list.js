const fs = require("fs");

fs.readdirSync("/");

fs.readdir("/", (err, files) => {
    if (err) { throw err; }
    console.log(files);
});
