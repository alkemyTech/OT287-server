const express = require('express')
const { get } = require('../controllers/index')
const userRouter = require('./users')
const organizationsRouter = require('./organizations')
const activitiesRouter = require('./activities')
const entriesRouter = require('./entries')
const testimonialsRouter = require('./testimonials')
const contactsRouter = require('./contacts')
const membersRouter = require('./members')
const categoriesRouter = require('./categories')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/testimonials', testimonialsRouter)
router.use('/auth', userRouter)
router.use('/organizations', organizationsRouter)
router.use('/activities', activitiesRouter)
router.use('/news', entriesRouter)
router.use('/contacts', contactsRouter)
router.use('/members', membersRouter)
router.use('/categories', categoriesRouter)
router.use('/users', userRouter)

module.exports = router
