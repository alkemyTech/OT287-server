const express = require('express')

const router = express.Router()
const { register } = require('../schemas/users')
const { post } = require('../controllers/users')
const { validate } = require('../middlewares/validations')

router.post('/register', validate(register), post)

module.exports = router
