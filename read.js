const fs = require("fs");

const text = fs.readFile("./text.txt", "UTF-8", (err, data) => {
    if (err) { throw (err); }
    console.log(data);
});

