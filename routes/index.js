const express = require('express')
const { get } = require('../controllers/index')
const entriesPost = require('./news')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/news', entriesPost)
module.exports = router
