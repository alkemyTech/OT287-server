const express = require('express')
const { get } = require('../controllers/index')
const { post } = require('../controllers/entries')
const { validationResultsSchema } = require('../schemas/entries')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.post('/', validate(validationResultsSchema), post)

router.get('/', get)

module.exports = router
