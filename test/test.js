const request = require("supertest");
const app = require("../index.js")

describe('GET /', () => {
    it('respond with Hello from node app', done => {
        request(app).get('/').expect('Hello from node app', done)
    })
})