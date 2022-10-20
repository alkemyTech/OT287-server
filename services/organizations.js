const { ErrorObject } = require('../helpers/error')
const { Organization } = require('../database/models')

// Service to search an organization info in the database

exports.getOrganization = async () => {
  try {
    const organizations = await Organization.findAll()
    if (!organizations) {
      throw new ErrorObject('No organizations found', 404)
    }
    return organizations
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getOrganizationById = async (organizationId) => {
  try {
    const organization = await Organization.findByPk(organizationId)
    if (!organization) {
      throw new ErrorObject('No organization found', 404)
    }
    return {
      name: organization.name,
      image: organization.image,
      phone: organization.phone,
      address: organization.address,
      email: organization.email,
      welcomeText: organization.welcomeText,
      aboutUsText: organization.aboutUsText,
      fbUrl: organization.fbUrl,
      igUrl: organization.igUrl,
      ldUrl: organization.ldUrl,
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.editOrganization = async (id, newValues) => {
  try {
    const organyzationToUpdate = await Organization.findByPk(id)
    if (!organyzationToUpdate) {
      throw new ErrorObject('No organization found', 404)
    }
    const organyzationUpdated = await organyzationToUpdate.update({ ...newValues })
    return organyzationUpdated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createOrganization = async (newOrganization) => {
  try {
    const organization = await Organization.create(newOrganization)
    return organization
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteById = async (organizationId) => {
  try {
    const organization = await Organization.destroy({ where: { id: organizationId } })
    if (!organization) {
      throw new ErrorObject('No organization found to delete', 404)
    }
    return organization
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
