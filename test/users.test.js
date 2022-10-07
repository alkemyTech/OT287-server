const app  = require('../app')
const api = require("supertest")(app)
const expect = require("chai").expect

const randomNumber = Math.floor(Math.random() * 10000)
const dummyUser = {
                    "firstName": "Dummy",
                    "lastName": "User",
                    "email": `du${randomNumber}@asd.com`,
                    "image": null,
                    "password": "Init!123",
                    "roleId": 2
                  }

describe("GET /users", function () {
    it("requires authentication", async function () {
        const response = await api
            .get("/users")

        expect(response.status).to.eql(401)
    })
    
    it("has to be a valid token", async function () {
        const response = await api
            .get("/users")
            .set("Authorization", `asdasdasd`)
        
        expect(response.status).to.eql(500)
    })

    it("has to be admin user", async function () {
        const response = await api
            .get("/users")
            .set("Authorization", `Bearer ${process.env.API_TEST_TOKEN}`)
        
        expect(response.status).to.eql(404)
    })

    it("allows to see the users list", async function () {
        const response = await api
            .get("/users")
            .set("Authorization", `Bearer ${process.env.API_TEST_ADMIN_TOKEN}`)
        
        expect(response.status).to.eql(200)        
        expect(response.body.body).to.be.an('array')
        expect(response.body.body.length).to.not.eql(0)
    })
})

describe("GET(by ID) /users/:id", function () {
    it("requires authentication", async function () {
        const response = await api
            .get("/users/1")

        expect(response.status).to.eql(401)
    })
    
    it("has to be a valid token", async function () {
        const response = await api
            .get("/users/1")
            .set("Authorization", `asdasdasd`)
        
        expect(response.status).to.eql(500)
    })

    it("has to be admin user", async function () {
        const response = await api
            .get("/users/1")
            .set("Authorization", `Bearer ${process.env.API_TEST_TOKEN}`)
        
        expect(response.status).to.eql(404)
    })

    it("allows to see the users list", async function () {
        const response = await api
            .get("/users/1")
            .set("Authorization", `Bearer ${process.env.API_TEST_ADMIN_TOKEN}`)
        
        expect(response.status).to.eql(200)        
        expect(response.body.body).to.be.an('object')
    })
})

describe("PUT /users/:id", function () {
    it("has to be a valid user", async function () {
        const response = await api
            .put("/users/999999")
            .send({
                firstName: "Prueba",
            })
        
        expect(response.status).to.eql(404)
    })

    it("edits user info", async function () {
        const postResponse = await api
            .post("/auth/register")
            .send(dummyUser)
        expect(postResponse.status).to.eql(200)
        
        const response = await api
            .put(`/users/${postResponse.body.body.id}`)
            .send({
                firstName: "Prueba",
            })
        
        expect(response.status).to.eql(200)
        expect(response.body.body.firstName).to.eql("Prueba")
    })   
})

describe("DELETE /users/:id", function () {
    it("has to be a valid user", async function () {
        const response = await api
            .delete("/users/999999")
            .send({
                firstName: "Prueba",
            })
        
        expect(response.status).to.eql(404)
    })

    it("deletes user", async function () {
        const postResponse = await api
            .post("/auth/register")
            .send({
                ...dummyUser,
                "email": `du${randomNumber+1}@asd.com`,
            })
        expect(postResponse.status).to.eql(200)
        
        const response = await api
            .delete(`/users/${postResponse.body.body.id}`)            
        
        expect(response.status).to.eql(200)        
    })   
})
