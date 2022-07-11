
const debug = require('debug')('app:startup')
const config = require('config')
const morgan = require('morgan')
const express = require('express')
const app = express()
app.use(express.json());

app.set('view engine', 'pug')
app.set('views', './views')


console.log(`using ${config.get('env')} env config`)
if (config.get('env') === "development") {

    app.use(morgan('common'));
    debug("morgan enabled with-common flag")
}

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
    resp.render("index", {title:"My express app", message:" Application Active"})
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