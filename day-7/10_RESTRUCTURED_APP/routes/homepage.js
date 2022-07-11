
const express = require('express')
const router = express.Router()

/**
 * GET
 */
router.get('/', (req, resp) => {

    resp.render("index", { title: "My express router", message: " Application Active" })

})

module.exports = router