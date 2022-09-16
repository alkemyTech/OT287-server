const express = require('express')
const { get } = require('../controllers/index')
const entriesRouter = require('./entries')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/news', entriesRouter)

module.exports = router
