const express = require('express')
const { get } = require('../controllers/entry')

const router = express.Router()

router.get('/', get)

module.exports = router
