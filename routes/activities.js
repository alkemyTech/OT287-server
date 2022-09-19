const express = require('express')
const { put } = require('../controllers/activities')

const router = express.Router()

router.put('/:id', put)

module.exports = router
