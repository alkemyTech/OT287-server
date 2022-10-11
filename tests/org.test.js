let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../app');
const { Organization } = require('../database/models');

chai.use(chaiHttp);
 
// organization example to create and get id for test cases
const organization = {
        name: 'ONG#1',
        image: 'fotosMas.jpg',
        address: 'china 1567',
        phone: '3515678909',
        email: 'somos@gmail.com',
        fbUrl: 'somosFb',
        igUrl: 'somosIgUrl',
        ldUrl: 'somosLdUrl',
        welcomeText: 'somosMasYa',
        aboutUsText: 'leruLerum',
    } 

// user admin already created with token & roleId #1 === isAdmin
const userAdmin = {
    'email': 'tester@gmail.com',
    'password': 'Sistemas123/*',
}

// user standard already created with token & roleId #2 !== Admin
const userStandard = {
    "firstName": "testChai",
    "lastName": "ChaiMocha",
    "email": "chai@gmail.com",
    "password": "Sistemas123/*",
    "image": "chai.jpg"
}

// user not register not token auth
const userNotRegister = {
    "firstName": "covid19",
    "lastName": "lerum",
    "email": "covid19@gmail.com",
    "password": "Sistemas123/*",
    "image": "covid.jpg"
}

// data example to edit and organization
const dataToEditOrg = {
    "name": "Por todos",
    "image": "porTodos.jpg",
    "address": "peru 277",
    "email": "todo@gmail.com"
}


describe('GET /organizations/:id/public', ()=>{
    let idTest;
    before(async () => {
        const newOrganization = new Organization(organization);
        await newOrganization.save();
        idTest = newOrganization.dataValues.id;
    })
    

    it('GET by ID > Happy Path > should get a specific organization', (done) => {
        chai.request(app)
               .get(`/organizations/${idTest}/public`)
               .end(function(err, res){
                  expect('Content-Type', /json/)
                  expect(res.body.body).to.not.be.null
                  expect(res).to.have.status(200)
                  if(err) return done(err)
                  done()
          })
                
    })

    it('GET by ID #1 > Happy Path > should get organization #1 data', (done) => {
        chai.request(app)
               .get('/organizations/1/public')
               .end(function(err, res){
                  expect('Content-Type', /json/)
                  expect(res.body.body).to.not.be.null
                  expect(res.body.body).to.be.a('object')
                  expect(res).to.have.status(200)
                  if(err) return done(err)
                  done()
        })
            
    })

    it('GET by ID not exist > Not Happy Path > Should return a validation error, status 400', (done) =>{
        chai.request(app)
               .get('/organizations/####/public')
               .end(function(err, res){
                         expect('"Error retrieving info"')
                         expect('Content-Type', /json/)
                         expect(res).to.have.status(404)
                         if(err) return done(err)
                         done()
                 }) 
    })

    after(async () => {
        const organization = await Organization.destroy({
            where: { id: idTest },
            force: true
        });
    });

 
})


describe('PUT /organizations/:id/edit', ()=> {
    let idTest;
    before(async () => {
        const newOrganization = await new Organization(organization);
        await newOrganization.save();
        idTest = newOrganization.dataValues.id;
    })
    
    it('PUT > Happy Path > Should update the organization data, having previously validated auth token & isAdmin', (done) => {
       
                // follow up with login
                chai.request(app)
                    .post('/auth/login')
                    // send user login details
                    .send(userAdmin)
                    .end((err, res) => {
                        expect(res.body.body).to.have.keys('ok', 'token', 'user' );
                        expect(res.body.body).to.not.be.null;
                        expect(res.body.body.user.roleId).to.equal(1);
                        expect(res.body.body).to.be.a('object');
                        expect(res).to.have.status(200);
                        let token = res.body.body.token;
                        
                        // follow up with requesting user protected page
                        chai.request(app)
                           .put(`/organizations/${idTest}/edit`)
                           .send(dataToEditOrg)
                           .set({ Authorization: `Bearer ${token}`}) 
                           .end( async (error, response) => {
                              expect(response).to.have.status(200)
                              if(error) return done(error)
                              done()
                         }) 
                    })        
    })

    it('PUT > Invalid roleId > Should return error to update organization, not having roleId authorization', (done) => {
       
        // follow up with login
        chai.request(app)
            .post('/auth/login')
            // send user login details
            .send(userStandard)
            .end((err, res) => {
                expect(res.body.body).to.have.keys('ok', 'token', 'user' );
                expect(res.body.body).to.not.be.null;
                expect(res.body.body.user.roleId).to.equal(2);
                expect(res.body.body).to.be.a('object');
                expect(res).to.have.status(200);
                let token = res.body.body.token;
                
                // follow up with requesting user protected page
                chai.request(app)
                   .put(`/organizations/${idTest}/edit`)
                   .send(dataToEditOrg)
                   .set({ Authorization: `Bearer ${token}`}) 
                   .end( async (error, response) => {
                      expect(response).to.have.status(404)
                      if(error) return done(error)
                      done()
                 }) 
            })        
})

it('PUT > Invalid Auth > Should return error to update organization, not having token authorization', (done) => {
       
    // follow up with login
    chai.request(app)
        .post('/auth/login')
        // send user login details
        .send(userNotRegister)
        .end((err, res) => {
            expect(res).to.have.status(500)
                  if(err) return done(err)
                  done()
            
            // follow up with requesting user protected page
            chai.request(app)
               .put(`/organizations/${idTest}/edit`)
               .send(dataToEditOrg)
               .end( async (error, response) => {
                  expect(response).to.have.status(500)
                  if(error) return done(error)
                  done()
             }) 
        })        
})

    it('PUT > Invalid ID > Should validate at first auth token & isAdmin roleId. By then return organization does not exist. status 404', (done) => {
          // follow up with login
          chai.request(app)
                  .post('/auth/login')
                  // send user login details
                  .send(userAdmin)
                  .end((err, res) => {
                      expect(res.body.body).to.have.keys('ok', 'token', 'user' );
                      expect(res.body.body).to.not.be.null;
                      expect(res.body.body.user.roleId).to.equal(1);
                      expect(res.body.body).to.be.a('object');
                      expect(res).to.have.status(200);
                      let token = res.body.body.token;
             
              
              // follow up with requesting user protected page
          chai.request(app)
                 .put(`/organizations/0/edit`)
                 .send(dataToEditOrg)
                 .set({ Authorization: `Bearer ${token}`}) 
                 .end(function(error, response){
                    expect(response).to.have.status(404)
                    if(error) return done(error)
                    done()
               }) 
          })
    });

    after(async () => {
        const organization = await Organization.destroy({
            where: { id: idTest },
            force: true
        });
    });
})
