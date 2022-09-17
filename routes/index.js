const express = require('express')
const { get } = require('../controllers/index')
const activitiesRouter = require('./activities')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/activities', activitiesRouter)

module.exports = router
