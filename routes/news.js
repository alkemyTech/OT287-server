const express = require('express')
const { postNews } = require('../controllers/news')

const router = express.Router()

router.post('/', postNews)
module.exports = router
