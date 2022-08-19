
const express = require('express')
const router = express.Router()


/***
 * FUNCTIONS
 */

const coursesData = require('../datastore/coursesData')
const find_course = require('../middleware/find_course')
const is_course_valid = require('../middleware/is_course_valid')

//   APIs   //
/**
 * GET
 */
router.get('/', (req, resp) => {

    resp.send(coursesData)

})

router.get('/:id', (req, resp) => {

    const course = find_course(req)

    if (!course)
        resp.status(404).send("course not found")

    resp.status(200).send(course)

})

/**
 * POST
 */
router.post("/", (req, resp) => {

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

router.put("/:id", (req, resp) => {

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
router.delete("/:id", (req, resp) => {

    const course = find_course(req)

    if (!course)
        resp.status(404).send("course not found")

    const indexOfCourse = coursesData.indexOf(course)

    coursesData.splice(indexOfCourse, 1);

    resp.send(course)

})


module.exports = router