
const morgan = require('morgan')
// const helmet = require('helmet')
const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public_webpage'));
// app.use(helmet());

if (app.get('env') === "development")
    app.use(morgan('common'));

/***
 * FUNCTIONS
 */

const coursesData = require('./coursesData')
const find_course = require('./find_course')
const is_course_valid = require('./is_course_valid')

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