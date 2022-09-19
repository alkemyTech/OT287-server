const express = require('express')
const { put, post } = require('../controllers/activities')

const router = express.Router()

router.put('/:id', put)
router.post('/', post)

module.exports = router
