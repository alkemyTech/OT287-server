const express = require('express')
const { get } = require('../controllers/index')
const { post } = require('../controllers/entries')
const { validationResultsSchema } = require('../schemas/entries')
const { validateEntry } = require('../middlewares/validateEntry')

const router = express.Router()

router.post('/', validationResultsSchema, validateEntry, post)

router.get('/', get)

module.exports = router
