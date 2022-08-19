
const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send("/ endpoint reached")
})

app.get('/api/courses', (req, resp) => {
    resp.send(courses)

})

app.get('/api/courses/:id', (req, resp) => {
    // resp.send(req.params.id)
    resp.send(req.query)
})


const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => {
    console.log(`listening on "${PORT}"`)
})