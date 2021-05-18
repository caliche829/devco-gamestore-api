# devco-gamestore-api
This repository contains an API of video-games for testing purposes.

## Structure
Project structure:

* **.github/workflows**: Contains the github pipelines.
* **src**: Contains the project files.
* **src/aws-services**: Contains the files related to the aws api calls. 
* **src/models**: Contains the models.
* **src/services**: Contains the files related to the dynamodb interactions. 
* **src/handler**: Main file of the project
* **package.json**: npm dependencies.
* **serverless.yml**: Config file for aws services
* **tsconfig.json**: Typescript configurations

## Solution
This project contains the serverless API that uses API Gateway Amazon.

Used tools:
* **NodeJS**
* **AWS SDK**
* **DynamoDB**

## Pipeline
The pipeline was configured to run when a person makes a push to the github repository

The following endpoints are deployed:
  GET - https://pkcsq85ngc.execute-api.us-east-1.amazonaws.com/dev/video-games
  POST - https://pkcsq85ngc.execute-api.us-east-1.amazonaws.com/dev/video-games
  PUT - https://pkcsq85ngc.execute-api.us-east-1.amazonaws.com/dev/video-games
  GET - https://pkcsq85ngc.execute-api.us-east-1.amazonaws.com/dev/video-games/{serialNumber}
  DELETE - https://pkcsq85ngc.execute-api.us-east-1.amazonaws.com/dev/video-games/{serialNumber}