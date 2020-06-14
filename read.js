const fs = require("fs");

const text = fs.readFile("./text.txt", "UTF-8", (err, data) => {
    if (err) { throw (err); }
    console.log(data);
});

const md = `

This is a new file.

Do you like?

please support me
`;

fs.writeFile("./newfile.txt", md, (err) => {
    if (err) { throw (err); }
    console.log("wrote to file");
})
