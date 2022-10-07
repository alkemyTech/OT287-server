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
})
