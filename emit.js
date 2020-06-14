const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("goodEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("goodEvent", "Hello World", "Computer");
emitter.emit("goodEvent", "How Novel", "Geeks");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input == "exit") { process.exit() };
    emitter.emit("goodEvent", input, "Terminal");
})
