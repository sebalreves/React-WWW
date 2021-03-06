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
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
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
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
            body: null,
        };

    }

};