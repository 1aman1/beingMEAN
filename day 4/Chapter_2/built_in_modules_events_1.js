//emitter

const EventEmitter = require('events')
const emitter = new EventEmitter();


emitter.on("kuch aya", (err, data) => {
    if (err)
    console.error("nah,khali dabba.");
    else
    console.log("sahi baat, aya to hai.");
});

emitter.emit("kuch aya");