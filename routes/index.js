const express = require('express')
const { get } = require('../controllers/index')
const organizationsRouter = require('./organizations')
const activitiesRouter = require('./activities')
const entriesRouter = require('./entries') 
const testimonialsRouter = require('./testimonials')
const contactsRouter = require('./contacts')
const membersRouter = require('./members')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/testimonials', testimonialsRouter)
router.use('/news', entriesRouter)
router.use('/contacts', contactsRouter)
router.use('/members', membersRouter)

module.exports = router
