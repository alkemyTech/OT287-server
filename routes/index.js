const express = require('express')
const { get } = require('../controllers/index')
const authRouter = require('./users')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/auth', authRouter)

module.exports = router
