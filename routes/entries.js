const express = require('express')
const { get, getById } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)
router.get('/:id', getById)

module.exports = router
