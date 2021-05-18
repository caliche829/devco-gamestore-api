import { DynamoDB } from 'aws-sdk';
import { Service } from 'typedi';
import { IVideoGame } from '../models/videoGame.model';

@Service()
export default class VideoGameService {

  constructor() { }

  public async ListVideoGames() {
    // Create DynamoDB service object
    var docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
    // connect to local DB if running offline
    if (process.env.IS_OFFLINE == "true") {
      let options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
      console.log('entra');
      docClient = new DynamoDB.DocumentClient(options);
    }

    var params = {
      TableName: process.env.DYNAMO_TABLE
    };

    return docClient.scan(params).promise().then((data) => {
      console.log('Found DynamoDB data');
      return data.Items;
    }).catch(error => {
      console.log(`==>> Error [ListVideoGames] [${error.message}]`);
    });
  }

  public async OneVideoGame(serialNumber: number) {
    // Create DynamoDB service object
    var docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
    // connect to local DB if running offline
    if (process.env.IS_OFFLINE == "true") {
      let options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
      docClient = new DynamoDB.DocumentClient(options);
    }

    var params = {
      TableName: process.env.DYNAMO_TABLE,
      Key: { "serialNumber": serialNumber }
    };

    return docClient.get(params).promise().then((data) => {
      console.log(`VideoGame with SerialNumber [${serialNumber}] returned`);
      return data.Item;
    }).catch(error => {
      console.log(`==>> Error [OneVideoGame] [${error.message}]`);
    });
  }

  public async DeleteVideoGame(serialNumber: number) {
    // Create DynamoDB service object
    var docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
    // connect to local DB if running offline
    if (process.env.IS_OFFLINE == "true") {
      let options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
      docClient = new DynamoDB.DocumentClient(options);
    }

    var params = {
      TableName: process.env.DYNAMO_TABLE,
      Key: { "serialNumber": serialNumber }
    };

    return docClient.delete(params).promise().then((data) => {
      console.log(`VideoGame with SerialNumber [${serialNumber}] deleted`);
      return { message: `VideoGame with SerialNumber [${serialNumber}] deleted` };
    }).catch(error => {
      console.log(`==>> Error [queryData] [${error.message}]`);
    });
  }

  public async CreateVideoGame(videoGameData: IVideoGame) {
    // Create DynamoDB service object
    var docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
    // connect to local DB if running offline
    if (process.env.IS_OFFLINE == "true") {
      let options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
      docClient = new DynamoDB.DocumentClient(options);
    }

    console.log("Inserting into Dynamo Table...");

    const params = {
      TableName: process.env.DYNAMO_TABLE,
      Item: {
        "serialNumber": videoGameData.serialNumber,
        "name": videoGameData.name,
        "console": videoGameData.console,
        "entryDate": videoGameData.entryDate,
        "outDate": videoGameData.outDate,
        "launchDate": videoGameData.launchDate,
        "description": videoGameData.description
      },
    }

    return docClient.put(params).promise().then(() => {
      console.log(`VideoGame with SerialNumber [${videoGameData.serialNumber}] inserted`);
      return { message: `VideoGame with SerialNumber [${videoGameData.serialNumber}] inserted` };
    }).catch(error => {
      console.log(`==>> Error [insertData] VideoGame with SerialNumber [${videoGameData.serialNumber}] [${error.message}]`);
    });
  }

  public async UpdateVideoGame(videoGameData: IVideoGame) {
    // Create DynamoDB service object
    var docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
    // connect to local DB if running offline
    if (process.env.IS_OFFLINE == "true") {
      let options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
      docClient = new DynamoDB.DocumentClient(options);
    }

    console.log("Updating Dynamo Table record...");

    const serialNumber = videoGameData.serialNumber;
    const params = {
      TableName: process.env.DYNAMO_TABLE,
      Key: { serialNumber },
      UpdateExpression: 'set #a = :name, #b = :console, #c = :entryDate, #d = :outDate, #e = :launchDate, #f = :description',
      ExpressionAttributeNames: { '#a': 'name', '#b': 'console', '#c': 'entryDate', '#d': 'outDate', '#e': 'launchDate', '#f': 'description' },
      ExpressionAttributeValues: {
        ':name': videoGameData.name, ':console': videoGameData.console, ':entryDate': videoGameData.entryDate, ':outDate': videoGameData.outDate,
        ':launchDate': videoGameData.launchDate, ':description': videoGameData.description
      },
    };

    return docClient.update(params).promise().then(() => {
      console.log(`VideoGame with SerialNumber [${videoGameData.serialNumber}] updated`);
      return { message: `VideoGame with SerialNumber [${videoGameData.serialNumber}] updated` };
    }).catch(error => {
      console.log(`==>> Error [UpdateVideoGame] VideoGame with SerialNumber [${videoGameData.serialNumber}] [${error.message}]`);
    });
  }
}