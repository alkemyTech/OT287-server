const express = require('express')
const { post } = require('../controllers/testimonials')
const {body} = require('express-validator')

const router = express.Router()

router.post('/',
    body('name').not().isEmpty(),
    body('content').not().isEmpty(),
    post
)

module.exports = router
