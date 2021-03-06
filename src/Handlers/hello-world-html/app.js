const config = require('../../config/config');

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
exports.helloWorldHtmlHandler = async (event, context) => {
    let response;
    try {
        response = {
            'statusCode': 200,
            'body': `<h1>Hello from ${config.secondFunction} - Demo</h1>`,
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
