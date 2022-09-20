const express = require('express')
const { get } = require('../controllers/categories')

const router = express.Router()

router.get('/', get)

module.exports = router
