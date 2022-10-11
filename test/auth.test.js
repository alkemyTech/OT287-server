let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../app');
const { User } = require('../database/models');
chai.use(chaiHttp);

const testUser = {
    "firstName": "testName",
    "lastName":"testLastName",
    "email": `${Math.floor(Math.random() * 10000)}@gmail.com`,
    "password": "@Abc123456",
    "image" : "https://source.unsplash.com/random",
    "roleId": 2
}

describe('POST: Register User ', () => {
    let idTest;

    
    it('empty userData body should return error status 400', (done)=> {
        chai.request(app)
        .post('/auth/register')
        .send()
        .end(function(err, res){
            expect(res).to.have.status(400)
            done()
        })
    })

    it('empty email body should return error status 400', (done)=> {
        chai.request(app)
        .post('/auth/register')
        .send({email: ''})
        .end(function(err, res){
            expect(res).to.have.status(400)
            done()
        })
    })
    

    it('weak password should return error status 400', (done)=> {
        chai.request(app)
        .post('/auth/register')
        .send({password:'1234'})
        .end(function(err, res){
            expect(res).to.have.status(400)
            done()
        })
    })
 

    it('valid userData should create an user in the table', (done) => {
        chai.request(app)
        .post('/auth/register')
        .send(testUser)
        .end(function(err, res){
            idTest= res.body.body.id
            expect(res).to.have.status(200)
            done()
        })
        after(async () => {
            const users = User.destroy({
                where:{id: idTest},
                force:true
            })
        })
    })
 

})

describe('POST: Login User', ()=> {
    it('should login a registered user', (done)=> {
        chai.request(app)
        .post('/auth/login')
        .send(testUser)
        .end(function(err, res){
            expect(res).to.have.status(200)
            done()
        })
    })
    
    it('logged user should return a token', (done)=> {
        chai.request(app)
        .post('/auth/login')
        .send(testUser)
        .end(function(err, res){
            expect(res.body.token).to.not.be.null
            done()
        })
    })

    it('invalid password should return error status 400', (done)=> {
        chai.request(app)
        .post('/auth/login')
        .send({password:'12345'})
        .end(function(err, res){
            expect(res).to.have.status(400)
            done()
        })
    })
    it('invalid email should return error status 400', (done)=> {
        chai.request(app)
        .post('/auth/login')
        .send({email:'abc'})
        .end(function(err, res){
            expect(res).to.have.status(400)
            done()
        })
    })
})

describe('GET: Get My User', ()=> {


    it('should get the logged user info', (done)=> {
        chai.request(app)
        .get('/auth/me')
        .set("Authorization", `Bearer ${process.env.API_TEST_TOKEN}`)
        .end(function(err,res){
            expect(res).to.have.status(200)
            done()
        })

    })
})