const mongoose = require('mongoose')
const dbDebugger = require('debug')('app:db')

mongoose.connect('mongodb://admin:admin@107.23.59.170:27017/testdb')
    .then(() => dbDebugger('connected to mongodb'))
    .catch(err => dbDebugger('could not connect to mongodb', err))