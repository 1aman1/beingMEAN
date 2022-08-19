
const express = require('express')
const app = express()

const coursesData = [
    { id: 1, name: "alpha" },
    { id: 2, name: "beta" },
    { id: 3, name: "gamma" }
]

app.get('/', (req, resp) => {
    resp.send("/ endpoint reached")
})

app.get('/api/courses', (req, resp) => {
    resp.send(coursesData)

})

app.get('/api/courses/:id', (req, resp) => {

    const course = coursesData.find(tmp => tmp.id === parseInt(req.params.id))

    if (!course)
        resp.status(404).send("course not found")

    resp.status(200).send(course)
})



const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => {
    console.log(`listening on "${PORT}"`)
})