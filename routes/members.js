const express = require('express')
const { get, put } = require('../controllers/members')

const router = express.Router()

router.get('/', get)
router.put('/:id', put)

module.exports = router
