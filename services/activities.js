const { ErrorObject } = require('../helpers/error')
const { Activity } = require('../database/models')

exports.getActivityById = async (id) => {
  try {
    const activity = await Activity.findByPk(id)
    if (!activity) {
      throw new ErrorObject('No activity found', 404)
    }
    return activity
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.editActivity = async (id, data) => {
  try {
    const activity = await Activity.findByPk(id)
    if (!activity) {
      throw new ErrorObject('No activity found', 404)
    }
    const updated = await activity.update({ ...data })
    return updated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createActivity = async (newActivity) => {
  try {
    await Activity.create(newActivity)
    return
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
