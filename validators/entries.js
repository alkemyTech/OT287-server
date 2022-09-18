const { check } = require('express-validator')
const { validateEntry } = require('../helpers/validateEntryHelper')

const validateCreate = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('content')
    .exists()
    .not()
    .isEmpty(),
  check('image')
    .not()
    .isEmpty(),
  (req, res, next) => {
    validateEntry(req, res, next)
  },
]

module.exports = { validateCreate }
