const express = require('express')

const { createEntry } = require('../controllers/news')
const { validateCreate } = require('../validators/entries')

const router = express.Router()

router.post('/', validateCreate, createEntry)

const { get } = require('../controllers/entries')

const router = express.Router()

router.get('/', get)


module.exports = router
