const express = require('express')
const { postEntry } = require('../controllers/news')
const { validateCreate } = require('../validators/entries')

const router = express.Router()

router.post('/', validateCreate, postEntry)
module.exports = router
