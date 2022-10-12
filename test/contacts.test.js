const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const app = require('../app')
const { Contact } = require('../database/models')

chai.use(chaiHttp)

const contacts = [
  {
    name: 'Lorem Ipsum 1',
    phone: '202-555-0133',
    email: 'loremipsum1@gmail.com',
    message: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    name: 'Lorem Ipsum 2',
    phone: '202-555-0163',
    email: 'loremipsum2@gmail.com',
    message: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    name: 'Lorem Ipsum 3',
    phone: '202-555-0176',
    email: 'loremipsum3@gmail.com',
    message: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
]

describe('Contacts', () => {
  describe('GET /contacts', () => {
    before(async () => {
      await Contact.bulkCreate(contacts)
    })

    it('should get the contacts', (done) => {
      chai
        .request(app)
        .get('/contacts')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.body).to.not.be.null
          done()
        })
    })

    it('should get the correct amount of contacts', (done) => {
      chai
        .request(app)
        .get('/contacts')
        .end((err, res) => {
          expect(res.body.body).to.be.a('array')
          expect(res.body.body.length).to.be.equal(3)
          done()
        })
    })

    after(async () => {
      await Contact.sync({ force: true })
    })
  })

  describe('POST /contacts', () => {
    it('should insert the contact', (done) => {
      chai
        .request(app)
        .post('/contacts')
        .send(contacts[0])
        .end(async (err, res) => {
          expect(res).to.have.status(201)

          const contact = await Contact.findOne({ raw: true, where: { email: contacts[0].email } })
          expect(contact).to.not.be.null
          expect(contact.name).to.be.equal(contacts[0].name)

          done()
        })
    })

    it('should return error if the name is not sent', (done) => {
      chai
        .request(app)
        .post('/contacts')
        .send({ email: 'email@gmail.com' })
        .end((err, res) => {
          expect(res).to.have.status(400)
          done()
        })
    })

    it('should return error if the email is not sent', (done) => {
      chai
        .request(app)
        .post('/contacts')
        .send({ name: 'Juan' })
        .end((err, res) => {
          expect(res).to.have.status(400)
          done()
        })
    })

    after(async () => {
      await Contact.sync({ force: true })
    })
  })
})
