let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../app');

const { Activity } = require('../database/models');

chai.use(chaiHttp);


let activityTest = {
    name: "test",
    image: "http://something.jpg",
    content: "Lorem Ipsum...",
}


describe('GET activities', () => {    
    let idTest;
    before(async () => {
        const newActivity = new Activity(activityTest);
        await newActivity.save();
        idTest = newActivity.dataValues.id;
    })

    it('GET > Happy Path > should get all activities', (done) => {
        chai.request(app)
            .get('/activities')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('GET by ID > Happy Path > should get a specific activity', (done) => {
        chai.request(app)
            .get('/activities/' + idTest)
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    after(async () => {
        const activity = await Activity.destroy({
            where: { id: idTest },
            force: true
        });
    });
});


describe('POST activity', () => {
    let idTest;

    it('POST > Happy Path > Should insert an activity in table', (done) => {
        chai.request(app)
            .post('/activities')
            .send(activityTest)
            .end(function (err, res) {
                idTest = res.body.body.id
                expect(res).to.have.status(201);
                done();
            });
    });

    it('POST > Empty Body > Should return a validation error, status 400', (done) => {
        chai.request(app)
            .post('/activities')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
    
    it('POST > Invalid inputs > Should return a validation error, status 400', (done) => {
        let invalidActivityTest = {
            name: "",
            image: "",
            content: "",
        }

        chai.request(app)
            .post('/activities')
            .send(invalidActivityTest)
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });


    after(async () => {
        const activity = await Activity.destroy({
            where: { id: idTest },
            force: true
        });
    });
});


describe('PUT activity', () => {

    let idTest;

    before(async () => {
        const newActivity = new Activity(activityTest);
        await newActivity.save();
        idTest = newActivity.dataValues.id;
    })

    it('PUT > Happy Path > Should update name of activity, status 200', (done) => {
        chai.request(app)
            .put('/activities/' + idTest)
            .send(activityTest)
            .end(function (err, res) {
                expect(res.body.body).to.have.property('name').to.be.equal('test');
                expect(res.body.body).to.have.property('image').to.be.equal('http://something.jpg');
                expect(res.body.body).to.have.property('content').to.be.equal('Lorem Ipsum...');
                expect(res).to.have.status(200);
                done();
            });
    });

    it('PUT > Invalid ID > Should return activity does not exist. status 404', (done) => {
        chai.request(app)
            .put('/activities/' + 0)
            .send(activityTest)
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });


    it('PUT > empty body > should return a validation error, status 400', (done) => {
        chai.request(app)
            .put('/activities/' + idTest)
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    after(async () => {
        const activity = await Activity.destroy({
            where: { id: idTest },
            force: true
        });
    });
});