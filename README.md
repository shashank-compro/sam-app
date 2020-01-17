# Seed sam-app

This project contains source code and supporting files for a basic serverless application that you can deploy with the SAM CLI. It includes the following.

- Two Lambda Functions
  - HelloWorldJsonFunction
  - HelloWorldHtmlFunction
- Two APIs in API Gateway
  - /hellojson
  - /hellohtml

## Steps to deploy the application
- AWS CLI - [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- Configure credentials in AWS CLI using ```aws configure```
- SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Clone this repo.
- Run the following in your cmd inside the repo directory
   - ```sam build```
   - ```sam deploy --guided```

A new application would have been created in your Lambda AWS console.

## Steps to add a resource
- Register another function in ```template.yaml``` file with a new api path.
- Create handler for it inside ```src/handlers/```
- Run ```sam build``` and ```sam deploy```.
