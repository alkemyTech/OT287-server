const express = require('express')
const { post } = require('../controllers/testimonials')
const validationTestimonialSchema  = require('../schemas/testimonials')
const validationTestimonial  = require('../middlewares/testimonials')
const router = express.Router()

router.post('/',
    validationTestimonialSchema(),
    validationTestimonial,
    post
)
const { destroy } = require('../controllers/testimonials')


router.delete('/:id', destroy)

module.exports = router
