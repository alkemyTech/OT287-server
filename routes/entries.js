const express = require('express')
const { get, put } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)
router.put('/:id', put)

module.exports = router
