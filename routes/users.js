const express = require('express')

const router = express.Router()
const { validateUser } = require('../schemas/users')
const { postUser } = require('../controllers/users')

// Falta agregar un middleware
router.post('/register', validateUser, postUser)

module.exports = router
