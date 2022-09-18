const express = require('express')
const { editEntry } = require('../controllers/entries')

const router = express.Router()

router.put('/:id', editEntry)

module.exports = router
