const express = require('express')
const { get } = require('../controllers/index')
const authRouter = require('./users')
const activitiesRouter = require('./activities')
const entriesRouter = require('./entries')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/auth', authRouter)
router.use('/activities', activitiesRouter)
router.use('/news', entriesRouter)

module.exports = router
