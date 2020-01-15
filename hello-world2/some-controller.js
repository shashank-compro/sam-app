// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const config = require('../config/config')
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler2 = async (event, context) => {
    try {
        // const ret = await axios(url);
        console.log(event.queryStringParameters);
        console.log("APP Name - " + config.appName);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: '<h1>hello world</h1>',
                // location: ret.data.trim()
            }),
            'headers': {
                'Content-Type': 'text/html'
            }
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
