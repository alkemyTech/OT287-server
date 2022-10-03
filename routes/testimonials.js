const express = require('express')
const {
  get, post, destroy, put,
} = require('../controllers/testimonials')
const { testimonial } = require('../schemas/testimonials')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.post('/', validate(testimonial), post)
router.delete('/:id', destroy)
router.put('/:id', put)

module.exports = router
