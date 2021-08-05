'use strict';

module.exports.create = async (event) => {

    console.log(event.body);

    var AWS = require('aws-sdk');
    var UUID = require('uuid');

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Polls";

    var uid = UUID.v4();

    var body = JSON.parse(event.body);

    console.log(body);

    var params = {
        TableName: table,
        Item: {
            "id": uid,
            "title": body.title,
            "desc": body.desc
        }
    };

    console.log(params)

    console.log("Adding a new item...");


    try {
        const data = await docClient.put(params).promise()
        console.log("Success")
        console.log(data)
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    id: uid,
                },
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
