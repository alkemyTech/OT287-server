const express = require('express')
const { get, post } = require('../controllers/categories')
const { categories } = require('../schemas/categories')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.post('/', validate(categories), post)

module.exports = router
