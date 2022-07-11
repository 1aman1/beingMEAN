
const courses = require('./routes/courses')
const homepage = require('./routes/homepage')
const morgan = require('morgan')
const debug = require('debug')('app:startup')
const express = require('express')
const app = express()

app.use(express.json());
app.use(morgan('common'));

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/api/courses', courses)
app.use('/', homepage)

//

if (app.get('env') !== 'development') {
    app.use(morgan('common'))
    debug('morgan active-common flag')
}
else {
    app.use(morgan('tiny'))
    debug('morgan active-tiny flag')
}

// HTTP SERVER 
const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => { console.log(`listening on "${PORT}"`) })