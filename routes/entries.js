const express = require('express')
const { destroy } = require('../controllers/entries')
const { get } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)
router.delete('/:id', destroy)

module.exports = router
