const sgMail = require('@sendgrid/mail')
const { ErrorObject } = require('../helpers/error')

module.exports = {
  sendEmail: async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email,
      from: 'test@gmail.com', // Change to your verified sender
      subject: 'Subject Test',
      text: 'Text Test',
      html: '<strong>Send grid config test</strong>',
    }
    try {
      await sgMail.send(msg)
    } catch (error) {
      throw new ErrorObject(error.message, 500)
    }
  },
  registerWelcome: async (email, nombre) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email,
      from: process.env.SENDGRID_VERIFIED_EMAIL, // Change to your verified sender
      subject: 'Hola!',
      text: 'Contact Text',
      html: `<strong>Hola ${nombre}! Gracias por contactarte con nosotros! en que podemos ayudarte? </strong>`,
    }
    try {
      await sgMail.send(msg)
    } catch (error) {
      throw new ErrorObject(error.message, 500)
    }
  },
}
