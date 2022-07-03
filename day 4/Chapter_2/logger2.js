const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit("click", { id: 1, name: "alphonso" })
    }
}

module.exports = Logger;