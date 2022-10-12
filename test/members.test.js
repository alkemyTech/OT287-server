const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const app = require('../app')
const { Member } = require("../database/models")

chai.use(chaiHttp)

const members = [
    {
"name": "Jorge",
"image": "24535.jpg"
},
    {
"name": "Susana",
"image": "susi35.jpg"
},
]

describe('Members', () => {

    describe("📌 GET Members", () => {
        before(async () => {
            await Member.bulkCreate(members)
        })
        it("Should return all members", (done) => {
        chai
        .request(app)
        .get("/members")
        .end((err,res) =>{
            const {body} = res.body
            expect(res).to.have.status(200)
            expect(body).to.be.an("array")
            expect(body.length).to.be.equal(2)
            expect(res.body.message).to.be.equal('Members retrieved successfully')
            done()
        })
        })
            after(async () => {
                await Member.sync({ force: true })
            })
    })


    describe('📌 POST Members', () => {
        it('Should create a member', (done) => {
        chai
            .request(app)
            .post('/members')
            .send(members[0])
            .end(async (err, res) => {
                const member = await Member.findOne({ raw: true, where: { name: members[0].name } })
            expect(res).to.have.status(201)
            expect(member).to.not.be.null
            expect(member.name).to.be.equal(members[0].name)
            done()
            })
        })

        it('Should return error if name is not sent', (done) => {
        chai
            .request(app)
            .post('/members')
            .send({ image: "dodos.png" })
            .end((err, res) => {
            expect(res).to.have.status(400)
            done()
            })
         })
        it('Should return error if the name is not a string', (done) => {
        chai
            .request(app)
            .post('/members')
            .send({ name: 123 })
            .end((err, res) => {
            expect(res).to.have.status(400)
            done()
            })
        })
        it('Should return error if name is an empty string', (done) => {
        chai
            .request(app)
            .post('/members')
            .send({ name:"" })
            .end((err, res) => {
            expect(res).to.have.status(400)
            done()
            })
        })

        after(async () => {
        await Member.sync({ force: true })
        })

     })
    
     describe("📌 PUT Members", () => {

            let memberId

            before(async () => {
                await Member.bulkCreate(members)
            const member = await Member.findOne({ raw: true, where: { id: 2 } })
            memberId = member.id
            })
            
            it("Should update a member based on its id", (done) => {
            chai
            .request(app)
            .put(`/members/${memberId}`)
            .send({name:"Fulano"})
            .end((err,res) =>{
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.equal('Members update successfully')
                done()
            })
            })
           
            it("Should return error with a non-existent id",(done) => {
                chai
                .request(app)
                .put(`/members/${memberId + 3}`)
                .send({name:"Fulano"})
                .end((err,res) =>{
                    expect(res).to.have.status(404)
                    done()
                })
                })

            it("Should return error if the body is not sent",(done) => {
                chai
                .request(app)
                .put(`/members/${memberId}`)
                .end((err,res) =>{
                    expect(res).to.have.status(400)
                    done()
                })
                })
        
        after(async () => {
                await Member.sync({ force: true })
            })
    })

    describe("📌 DELETE Members", () => {

        let memberId

        before(async () => {
            await Member.bulkCreate(members)
        const member = await Member.findOne({ raw: true, where: { id: 2 } })
        memberId = member.id
        })
        
        it("Should delete a member based on its id", (done) => {
        chai
        .request(app)
        .delete(`/members/${memberId}`)
        .send({name:"Fulano"})
        .end((err,res) =>{
            expect(res).to.have.status(200)
            expect(res.body.message).to.be.equal('Member deleted successfully')
            done()
        })
        })
       
        it("Should return error with a non-existent id",(done) => {
            chai
            .request(app)
            .delete(`/members/${memberId + 3}`)
            .send({name:"Fulano"})
            .end((err,res) =>{
                expect(res).to.have.status(404)
                done()
            })
            })
    
    after(async () => {
            await Member.sync({ force: true })
        })
})

})

