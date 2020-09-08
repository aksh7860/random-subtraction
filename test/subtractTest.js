let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);


/*
  * Test the /GET route
  */
describe('/POST subtractNumbers', () => {
    it('it should perform post operation successfully', (done) => {
        let questionData = {
            "data": {
                "questionCount": 2,
                "hasBorrowing": false,
                "minuend": 4,
                "subtrahend": 4
            }
        }
        chai.request(server)
            .post('/api/subractNumbers')
            .send(questionData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.have.property('message').eql('Success Fully Executed')
                done();
            });
    });
    it('it should perform post operation successfully', (done) => {
        let questionData = {
            "data": {
                "questionCount": 2,
                "hasBorrowing": false,
                "minuend": 4,
                "subtrahend": 5
            }
        }
        chai.request(server)
            .post('/api/subractNumbers')
            .send(questionData)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.have.property('message').eql('Subtraction Not Possible , second number cannot be greater than first number')
                done();
            });
    });
    it('it should perform post operation successfully', (done) => {
        let questionData = {
            "data": {
                "questionCount": 2,
                "hasBorrowing": true,
                "minuend": 6,
                "subtrahend": 4
            }
        }
        chai.request(server)
            .post('/api/subractNumbers')
            .send(questionData)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

