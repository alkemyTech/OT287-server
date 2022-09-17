const bcrypt = require('bcrypt')
const { ErrorObject } = require('../helpers/error')

const encryptPassword = async (password) => {
  try {
    const stringPassword = password.toString()
    return await bcrypt.hash(stringPassword, 10)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = {
  encryptPassword,
}
