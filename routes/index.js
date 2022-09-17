const express = require('express')
const { get } = require('../controllers/index')
const createTestimonial = require('./testimonials')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/testimonial', createTestimonial)

module.exports = router
