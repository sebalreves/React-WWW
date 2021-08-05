'use strict';

module.exports.getAll = async (event) => {

    console.log(event);

    var AWS = require('aws-sdk');

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Polls";

    var params = {
        TableName: table,
    };

    console.log(params)

    console.log("Getting all items...");


    try {
        const data = await docClient.scan(params).promise();
        console.log("Success")
        console.log(data)
        return {
            statusCode: 200,
            body: JSON.stringify(
                data,
                null,
                2
            ),
        };
    } catch (err) {
        console.log("Failure", err.message)
        return {
            statusCode: 500,
            body: null,
        };
        // there is no data here, you can return undefined or similar
    }

};