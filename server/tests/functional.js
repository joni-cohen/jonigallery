const dalImage = require("../lib/dal/images");

const mocha = require('mocha');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const spies = require('chai-spies');

let agent;

mocha.suite('unit tests', () => {
    mocha.describe('Server', () => {

        mocha.it('should call API only once', async () => {
            chai.use(chaiHttp);
            chai.use(spies);
            agent = chai.request.agent(server);
            const sandbox = chai.spy.sandbox();
            sandbox.on(dalImage, 'getImagesFromSource');
            //sandbox.on('getImagesFromSource');
            await agent.get(`/api/images/0/15`)
            await agent.get(`/api/images/15/30`)
            chai.expect(dalImage.getImagesFromSource).to.have.been.called.once;
        });

        mocha.it('should receive the right amount of images', async () => {

            chai.use(chaiHttp);
            agent = chai.request.agent(server);
            let res = await agent.get(`/api/images/0/15`)
            assert.equal(res.body.length, 15);
            res = await agent.get(`/api/images/0/30`)
            assert.equal(res.body.length, 30);
        });

        mocha.it('should reject bad requests', async () => {
            chai.use(chaiHttp);
            agent = chai.request.agent(server);
            let res = await agent.get(`/api/images`);
            assert.equal(res.status, 404);
            res = await agent.get(`/api/images/0`)
            assert.equal(res.status, 404);
            res = await agent.get(`/api/images/0/30`)
            assert.equal(res.status, 200);
        });
    })
})