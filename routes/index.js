const express = require('express')
const { get } = require('../controllers/index')
const organizationsRouter = require('./organizations')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/organizations', organizationsRouter)

module.exports = router
