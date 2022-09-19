const express = require('express')
const { get } = require('../controllers/index')
const { post } = require('../controllers/entries')
const { validateCreate } = require('../schemas/entries')

const router = express.Router()

router.post('/', validateCreate, post)

router.get('/', get)

module.exports = router
