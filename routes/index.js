const express = require('express')
const { get } = require('../controllers/index')
const authRouter = require('./users')
const organizationsRouter = require('./organizations')
const activitiesRouter = require('./activities')
const contactsRouter = require('./contacts')
const entriesRouter = require('./entries')
const membersRouter = require('./members')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/auth', authRouter)
router.use('/organizations', organizationsRouter)
router.use('/activities', activitiesRouter)
router.use('/contacts', contactsRouter)
router.use('/news', entriesRouter)
router.use('/members', membersRouter)

module.exports = router
