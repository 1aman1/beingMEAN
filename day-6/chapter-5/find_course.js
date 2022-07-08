const coursesData = require('./coursesData')
/***
 * FUNCTIONS
 */

function find_course(req) {
    return coursesData.find(i => i.id === parseInt(req.params.id))
}

module.exports = find_course