const { check } = require('express-validator')

const validationResultsSchema = [
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
]

module.exports = { validationResultsSchema }
