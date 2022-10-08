let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const { Entry, Category } = require('../database/models');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

let newsTest = {
    name: "test",
    image: "urlTest",
    content: "ContentTest",
}


describe('Get all news: ',()=>{
    let idNewTest;
    before(async () => {
        const newEntry = new Entry(newsTest);
        await newEntry.save();
        idNewTest = newEntry.dataValues.id;
    })

    it('should get all news', (done) => {
        chai.request(url)
        .get('/news')
        .end( (err,res) => {
            expect(res).to.have.status(200);
            expect(err).to.be.equal(null);
        done();
    });
    });

    it('should get json news', (done) => {
        chai.request(url)
        .get('/news')
        .end( (err,res) => {
            expect(res).to.be.json;
            expect(res.body.body).to.be.a('array')
        done();
    });
    });
    
  
    it('should get a new by Id', (done) => {
        chai.request(url)
        .get('/news/' + idNewTest)
        .send()
        .end( (err,res) => {
            expect(res.body.body).to.have.property('id').to.be.equal(idNewTest);
            expect(res).to.have.status(200);
        done();
    });
    });
        
    it('id should be a number', (done) => {
        chai.request(url)
        .get('/news/' + idNewTest)
        .send()
        .end( (err,res) => {
            expect(idNewTest).to.be.a('number');
        done();
    });
    });
    
    
    after(async () => {
        const news = await Entry.destroy({
            where: { id: idNewTest },
            force: true
        });
    });

});
   

describe('Post a new: ',()=>{
   let idTestCategory;
   let newsTestPost;
   let idNewTest;

   before(async () => {
        let categoryTest = {
            name: "categoryTest",
            description: "descriptionCategoryTest",
        }
    const newCategory = new Category(categoryTest);
    await newCategory.save();
    idTestCategory = newCategory.dataValues.id;
     newsTestPost = {
        name: "test",
        image: "urlImageTest",
        content: "contentTest",
        categoryId: idTestCategory,
        }
    })


    it('should post a new', (done) => {
        chai.request(url)
        .post('/news')
        .send(newsTestPost)
        .end( (err,res) => {
            idNewTest = res.body.body.id
            expect(res).to.have.status(200);
        done();
    });
    });

    it('should post a new with an existing categoryId', (done) => {
        chai.request(url)
        .post('/news')
        .send({name: 'novedad', image:'url', content:'contenttext', categoryId: 'falsecategory'})
        .end( (err,res) => {
            expect(res).to.have.status(500);
        done();
    });
    });

    it('should post a new with a name, image and content value. If not return error 400', (done) => {
        chai.request(url)
        .post('/news')
        .send({name: '', image:'', content:'', categoryId: idTestCategory})
        .end( (err,res) => {
            expect(res).to.have.status(400);
        done();
    });
    });
    
    after(async () => {
        const news = await Entry.destroy({
            where: { id: idNewTest },
            force: true
        });
        const categories = await Category.destroy({
            where: { id: idTestCategory },
            force: true
        });
    });   
     
});


describe('Update a new: ',()=>{
    
    let idNewTest;
    before(async () => {
        const newEntry = new Entry(newsTest);
        await newEntry.save();
        idNewTest = newEntry.dataValues.id;
    }) 

    it('should update a new', (done) => {
        chai.request(url)
        .put('/news/' + idNewTest)
        .send({ name: 'hola' })
            .end( (err,res) => {
            expect(res.body.body).to.have.property('name').to.be.equal('hola');
            expect(res).to.have.status(200);
    done();
     
    }); 
    });

    it('should update an existing new', (done) => {
        chai.request(url)
        .put('/news/' + 99999999 )
        .send({ name: 'hola' })
            .end( (err,res) => {
            expect(res).to.have.status(404);
    done();
     
    }); 
    });
    
    after(async () => {
        const news = await Entry.destroy({
            where: { id: idNewTest },
            force: true
        });
    });
      
});


describe('Delete a new: ',()=>{
    
    let idNewTest;
    before(async () => {
        const newEntry = new Entry(newsTest);
        await newEntry.save();
        idNewTest = newEntry.dataValues.id;
    }) 

    it('should delete a new', (done) => {
        chai.request(url)
        .delete('/news/' + idNewTest)
        .send()
        .end( (err,res) => {
            expect(res).to.have.status(200);
                chai.request(url)
                    .get('/news/' + idNewTest)
                    .end( (err,res) => {
                        expect(res).to.have.status(404);

         done();
    });
    });
    });

    it('should delete the correct new', (done) => {
        chai.request(url)
        .delete('/news/' + 999999 )
        .send()
        .end( (err,res) => {
            expect(res).to.have.status(404);

         done();
    
    });
    });
      
 });