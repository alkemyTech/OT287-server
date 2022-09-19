const express = require('express')
const { get, getById, put } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)
router.get('/:id', getById)
router.put('/:id', put)

module.exports = router
