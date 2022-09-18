const express = require('express')
const { get } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)

module.exports = router
