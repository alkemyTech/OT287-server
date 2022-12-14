const bcrypt = require('bcrypt')
const { ErrorObject } = require('../helpers/error')
const { User } = require('../database/models')
const { generateToken } = require('../middlewares/JWT')

exports.createUser = async (data) => {
  try {
    const emailExists = await User.findOne({ where: { email: data.email } })

    if (emailExists) {
      throw new ErrorObject('Email already exist', 409)
    }

    const encryptedPassword = await bcrypt.hash(data.password, 10)

    const newUser = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: encryptedPassword,
      image: data.image,
      roleId: 2, // All new registrations are 'user' role,
    })

    return newUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getUsers = async () => {
  try {
    const allUsers = await User.findAll({
      include: ['role'],
    })
    if (!allUsers || allUsers.length === 0) {
      throw new ErrorObject('Users not found', 404)
    }
    return allUsers
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

exports.loginUser = async (data) => {
  try {
    const user = await User.findOne({ where: { email: data.email } })
    const match = Boolean(user) && (await bcrypt.compare(data.password, user.password))
    const tokenSession = generateToken(user.toJSON())

    return {
      ok: match,
      user: match ? user : null,
      token: tokenSession,
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateUser = async (id, body) => {
  try {
    const {
      firstName, lastName, email, roleId, image,
    } = body
    const user = await User.findByPk(id)
    if (!user || user.deleteAt) {
      throw new ErrorObject('User not found', 404)
    } else {
      await user.update({
        firstName,
        lastName,
        email,
        roleId,
        image,
      })
      const updateUser = await user.save()
      const token = generateToken(updateUser.toJSON())
      return {
        updateUser,
        token,
      }
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getUserById = async (idUser) => {
  try {
    const getUser = await User.findByPk(idUser)
    if (!getUser) {
      throw new ErrorObject('No user found', 404)
    }
    return getUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
