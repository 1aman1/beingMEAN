const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const morgan = require('morgan')
const express = require('express')
const app = express()

/***
 * DEBUG=app:startup,app:db
 * DEBUG=app:* nodemon 8_debug.js
 */

if (app.get('env') === 'development') {
    app.use(morgan('common'))
    startupDebugger('morgan active-common flag')
}

dbDebugger('db connection established')

//
//
const PORT = 6789
const HOST = '0.0.0.0'
app.listen(PORT,
    HOST,
    (req, resp) => { startupDebugger(`app started listening on "${PORT}" `) })