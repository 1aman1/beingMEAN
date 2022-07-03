const EventEmitter = require('events')

const Logger = require('./logger2')
const logger = new Logger();

logger.on("click", (eventArg) => {
    console.log("message logged in the listener")
    console.log(eventArg)
})

logger.log("log param")