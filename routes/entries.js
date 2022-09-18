const express = require('express')
const { createEntry } = require('../controllers/news')
const { validateCreate } = require('../validators/entries')

const router = express.Router()

router.post('/', validateCreate, createEntry)
module.exports = router
