const express = require('express')
const { get } = require('../controllers/members')

const router = express.Router()

router.get('/', get)

module.exports = router
