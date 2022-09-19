const express = require('express')
const { post } = require('../controllers/contacts')
const { contacts } = require('../schemas/contacts')
const { schemaValidation } = require('../middlewares/validations')

const router = express.Router()

router.post('/', schemaValidation(contacts), post)

module.exports = router
