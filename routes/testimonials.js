const express = require('express')
const {
  post, destroy, put, getById,
  get,
} = require('../controllers/testimonials')
const { testimonial } = require('../schemas/testimonials')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.post('/', validate(testimonial), post)
router.delete('/:id', destroy)
router.put('/:id', put)
router.get('/:id', getById)

module.exports = router
