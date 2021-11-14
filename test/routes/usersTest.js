const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const assertArrays = require("chai-arrays");
chai.use(assertArrays);
const application = require("../../app");
let axios = require("../../routes/user");
let MockAdapter = require("axios-mock-adapter");

describe("Test Users Api", () => {
    describe("User login successful passes data to response", () => {
        const login_response = {
            "auth": true,
            "token": "a_token",
            "user": {
                "id": "1",
                "interests": [],
                "firstName": "Pablo Matias",
                "lastName": "Rodriguez Massuh",
                "email": "pablomassuh@gmail.com",
                "placeId": "2"
            }
        };

        let mock = undefined

        before(() => {
            mock = new MockAdapter(axios.api);
            mock.onPost("/login").reply(200, login_response);
        });

        it("Should return user date and token", done => {
            chai
                .request(application)
                .post("/users/login")
                .send({
                    email: "pablomassuh@gmail.com",
                    password: "123456"
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.eql(login_response);
                    done();
                });
        });

        after(() => {
            mock.restore();
        });
    });

     describe("Received error is forwarded", () => {
        const login_response = {
            "auth": true,
            "token": "a_token",
            "user": {
                "id": "1",
                "interests": [],
                "firstName": "Pablo Matias",
                "lastName": "Rodriguez Massuh",
                "email": "pablomassuh@gmail.com",
                "placeId": "2"
            }
        };

        let mock = undefined

        before(() => {
            mock = new MockAdapter(axios.api);
            mock.onPost("/login").reply(404, { });
        });

        it("Got http different than 200", done => {
            chai
                .request(application)
                .post("/users/login")
                .send({
                    email: "pablomassuh@gmail.com",
                    password: "123456"
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(404);
                    done();
                });
        });

        after(() => {
            mock.restore();
        });
    });
});