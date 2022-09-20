const express = require('express')
const { post, destroy } = require('../controllers/testimonials')
const { testimonial }  = require('../schemas/testimonials')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.post('/',validate(testimonial),post)
router.delete('/:id', destroy)

module.exports = router
