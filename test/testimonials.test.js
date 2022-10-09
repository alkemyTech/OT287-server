const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = require('chai')
const app = require('../app')
const { Testimonial } = require('../database/models')

chai.use(chaiHttp)

const testimonial = {
    name: "Name Example",
    content: "Content Example",
    image: "https://image-example.jpg"
}


describe('GET /testimonials', () => {

    let idTestimonial;

    before(async () => {
        const testimonialDatabase = new Testimonial(testimonial);
        await testimonialDatabase.save();
        idTestimonial = testimonialDatabase.dataValues.id;
    })

    it('It should get all testimonials', done => {
        chai.request(app)
        .get('/testimonials')
        .end( (err,res)=>{
            expect(res).to.have.status(200)
            done()
        })
    })

    it('It should get testimonial by ID', done => {
        chai.request(app)
        .get(`/testimonials/${idTestimonial}`)
        .end( (err,res)=>{
            expect(res).to.have.status(200)
            done()
        })
    })

    after(async () => {
        const testimonial = await Testimonial.destroy({
            where: { id: idTestimonial },
            force: true
        });
    });
})


describe('POST /testimonials', () => {
    it('It should create testimonial', done => {
        chai.request(app)
        .post('/testimonials')
        .send(testimonial)
        .end( (err, res) => {
            expect(res.body.body).to.have.property('name').to.be.equal(testimonial.name);
            expect(res.body.body).to.have.property('content').to.be.equal(testimonial.content);
            expect(res.body.body).to.have.property('image').to.be.equal(testimonial.image);
            expect(res).to.have.status(200);
            done();
        });
    })
    it('It should reply with 400 if the body is empty', done => {
        chai.request(app)
        .post('/testimonials')
        .send()
        .end( (err, res) => {
            expect(res).to.have.status(400);
            done();
        });
    })
})

describe('PUT /testimonials/:id', () => {

    let idTestimonial;

    before(async () => {
        const testimonialDatabase = new Testimonial(testimonial);
        await testimonialDatabase.save();
        idTestimonial = testimonialDatabase.dataValues.id;
    })

    it('It should update testimonial by ID', done => {
        chai.request(app)
        .put(`/testimonials/${idTestimonial}`)
        .send(testimonial)
        .end( (err,res)=>{
            expect(res).to.have.status(200)
            done();
        })
    })

    it('It should reply with 404 if the body is empty and id not existed', done => {
        chai.request(app)
        .put('/testimonials/'+ 0)
        .send()
        .end( (err, res) => {
            expect(res).to.have.status(404);
            done();
        });
    })

    after(async () => {
        const testimonial = await Testimonial.destroy({
            where: { id: idTestimonial },
            force: true
        });
    });
})

describe('DELETE /testimonials/:id', () => {

    let idTestimonial;

    before(async () => {
        const testimonialDatabase = new Testimonial(testimonial);
        await testimonialDatabase.save();
        idTestimonial = testimonialDatabase.dataValues.id;
    })

    it('It should delete testimonial by ID', done => {
        chai.request(app)
        .delete(`/testimonials/${idTestimonial}`)
        .end( (err,res)=>{
            expect(res).to.have.status(200)
            done()
        })
    })

    it('It should reply with 404 if the body is empty and id not existed', done => {
        chai.request(app)
        .delete('/testimonials/'+ 0)
        .end( (err, res) => {
            expect(res).to.have.status(404);
            done();
        });
    })

    after(async () => {
        const testimonial = await Testimonial.destroy({
            where: { id: idTestimonial },
            force: true
        });
    });

})