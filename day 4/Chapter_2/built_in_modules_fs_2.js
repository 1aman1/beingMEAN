const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on("click", (eventArg) => {
    console.log('inside listener + ', eventArg);
})

emitter.emit("click", { id: 1, name: "alphonso" })
