const express = require('express')
const { get } = require('../controllers/index')
const { post } = require('../controllers/entries')
const { validationResultsSchema } = require('../schemas/entries')
const { validateEntry } = require('../middlewares/validations')

const router = express.Router()

router.post('/', validateEntry(validationResultsSchema), post)

router.get('/', get)

module.exports = router
