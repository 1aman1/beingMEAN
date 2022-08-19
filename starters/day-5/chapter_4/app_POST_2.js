
const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json());

const coursesData = [
    { id: 1, name: "alpha" },
    { id: 2, name: "beta" },
    { id: 3, name: "gamma" }
]

/**
 * GET
 */
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

/**
 * POST
 */
app.post("/api/courses/", (req, resp) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    const result = schema.validate(req.body)

    if (result.error) {
        resp.status(400).send(result.error.details[0].message)
        return
    }

    const newCourse = {
        id: coursesData.length + 1,
        name: req.body.name
    }
    coursesData.push(newCourse);

    resp.status(200).send(newCourse);

})

// HTTP SERVER 
const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => {
    console.log(`listening on "${PORT}"`)
})