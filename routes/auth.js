const express = require('express')

const router = express.Router()
const { validateUser } = require('../schemas/users')
const { createUser } = require('../controllers/auth')

router.post('/register', validateUser, createUser)

module.exports = router
