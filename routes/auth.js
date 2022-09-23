const express = require('express')
const { register, loginSchema } = require('../schemas/users')
const { get, post, login } = require('../controllers/users')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.post('/login', validate(loginSchema), login)
router.post('/register', validate(register), post)
router.get('/me', get)

module.exports = router
