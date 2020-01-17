'use strict';

const app = require('../../app.js');
const chai = require('chai');
const config = require('../../../../config/config');
const expect = chai.expect;
const event = require('../event');
let context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.helloWorldHtmlHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = result.body;

        expect(response).to.be.an('string');
        expect(response).to.be.equal(`<h1>Hello from ${config.secondFunction}</h1>`);
    });
});
