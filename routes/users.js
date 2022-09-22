const express = require('express')

const router = express.Router()
const { register, loginSchema } = require('../schemas/users')
const { post, destroy, login } = require('../controllers/users')
const { validate } = require('../middlewares/validations')

router.post('/register', validate(register), post)
router.post('/login', validate(loginSchema), login)
router.delete('/:id', destroy)
module.exports = router
