'use strict';

module.exports.create = async (event) => {
    
    console.log(event);

    var AWS = require('aws-sdk');
    var UUID = require('uuid');

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Polls";   

    var uid = UUID.v4();

    var params = {
        TableName:table,
        Item: {
            "id": uid,
            "title": "test",
            "desc": "test desc" 
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.log("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
    
};
