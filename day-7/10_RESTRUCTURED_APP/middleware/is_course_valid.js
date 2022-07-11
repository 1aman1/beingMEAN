const Joi = require('joi')
/***
 * FUNCTIONS
 */

function is_course_valid(req_body) {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(req_body)
}

module.exports = is_course_valid