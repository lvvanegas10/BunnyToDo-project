/**
 * AWS Entity
 */
const AWS = require("aws-sdk");
AWS.config.setPromisesDependency(require("bluebird"));

/**
 * DynamoDB entity
 */
const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * DynamoDB tables
 */
const userTableName = process.env.USER_TABLE;
const userTasksTableName = process.env.USER_TASKS_TABLE;

module.exports = {
  dynamoDb,
  userTableName,
  userTasksTableName,
};
