
const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = require('./logger')
const auth = require('./auth')

const coursesData = [
    { id: 1, name: "course 1" },
    { id: 2, name: "course 2" },
    { id: 3, name: "course 3" }
]

/***
 * CUSTOM 
 * MIDDLEWARE
 * FUNCTIONS
 */

app.use(logger)

app.use(auth)

/***
 * FUNCTIONS
 */


function find_course(req) {
    return coursesData.find(i => i.id === parseInt(req.params.id))
}

function is_course_valid(req_body) {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(req_body)
}

//   APIs   //

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

    const course = find_course(req)

    if (!course)
        resp.status(404).send("course not found")

    resp.status(200).send(course)

})

/**
 * POST
 */
app.post("/api/courses/", (req, resp) => {

    const result = is_course_valid(req.body)

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

/***
 * PUT
 */

app.put("/api/courses/:id", (req, resp) => {

    const course = find_course(req)

    if (!course)
        resp.status(404).send("course not found")

    const { error } = is_course_valid(req.body)

    if (error) {
        resp.status(400).send(error.details[0].message)
        return
    }

    course.name = req.body.name
    resp.send(course)

})

/***
 * DELETEs
 */
app.delete("/api/course/:id", (req, resp) => {

    const course = find_course(req)

    if (!course)
        resp.status(404).send("course not found")

    const indexOfCourse = coursesData.indexOf(course)

    coursesData.splice(indexOfCourse, 1);

    resp.send(course)

})


// HTTP SERVER 
const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => { console.log(`listening on "${PORT}"`) })