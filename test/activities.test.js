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


describe('get all activities', () => {
    it('should get all activities', (done) => {
        chai.request(app)
            .get('/activities')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('Insert a activity', () => {

    it('should insert a activity', (done) => {
        chai.request(app)
            .post('/activities')
            .send(activityTest)
            .end(function (err, res) {
                expect(res).to.have.status(201);
                done();
            });
    });


    after(async () => {
        const activity = await Activity.destroy({
            where: { name: 'test' },
            force: true
        });
    });
});


describe('update the activity', () => {

    let idTest;

    before(async () => {
        const newActivity = new Activity(activityTest);
        await newActivity.save();
        idTest = newActivity.dataValues.id;
    })

    it('should update name of activity, status 200', (done) => {
        chai.request(app)
            .put('/activities/' + idTest)
            .send(activityTest)
            .end(function (err, res) {
                expect(res.body.body).to.have.property('name').to.be.equal('test');
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return activity not exist. status 404', (done) => {
        chai.request(app)
            .put('/activities/' + 0)
            .send(activityTest)
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });


    it('should return a validation error, status 400', (done) => {
        chai.request(app)
            .put('/activities/' + idTest)
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    after(async () => {
        const activity = await Activity.findOne({
            where: { name: 'test' }
        });
        await activity.destroy({
            force: true
        });
    });

});