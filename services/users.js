const bcrypt = require('bcrypt')
const { ErrorObject } = require('../helpers/error')
const { User } = require('../database/models')

exports.createUser = async (data) => {
  try {
    const emailExists = await User.findOne({ where: { email: data.email } })

    if (emailExists) {
      throw new ErrorObject('Email already exist', 404)
    }

    const encryptedPassword = await bcrypt.hash(data.password, 10)

    const newUser = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: encryptedPassword,
      image: data.image,
    })

    return newUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyUser = async (id) => {
  try {
    const deleteUser = await User.destroy({ where: { id } })
    if (!deleteUser) throw new ErrorObject('the user does not exist', 404)
    return deleteUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
