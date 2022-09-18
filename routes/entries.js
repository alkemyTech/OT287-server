const express = require('express')
const { destroy } = require('../controllers/entries')
const { get } = require('../controllers/entries')

const router = express.Router()

// Endpoint to delete a new by id
router.delete('/:id', destroy)

router.get('/', get)

module.exports = router
