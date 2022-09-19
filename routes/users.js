const express = require('express')

const router = express.Router()
const { users } = require('../schemas/users')
const { post } = require('../controllers/users')
const { validate } = require('../middlewares/validations')

router.post('/register', validate(users), post)

module.exports = router
