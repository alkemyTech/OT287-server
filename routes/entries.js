const express = require('express')
const { get, getById } = require('../controllers/entries')
const { destroy } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)
router.get('/:id', getById)
router.delete('/:id', destroy)

module.exports = router
