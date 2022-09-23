const express = require('express')
const { get } = require('../controllers/users')

const router = express.Router()

router.get('/me', get)

module.exports = router
