const { dynamoDb, userTasksTableName } = require("./databaseConfig");

module.exports = {
  /**
   * Post a new task related with an user
   */
  createTaskPromise: (task) => {
    const taskInfo = {
      TableName: userTasksTableName,
      Item: task,
    };

    return dynamoDb
      .put(taskInfo)
      .promise()
      .then((res) => task);
  },
  /**
   * Return all the tasks related with an user
   */
  listUserTasks: (userId, onScan) => {
    var params = {
      TableName: userTasksTableName,
      FilterExpression: "userId = :userId",
      ExpressionAttributeValues: { ":userId": userId },
    };
    dynamoDb.scan(params, onScan);
  },
  /**
   * Delete a task that is from an user
   * If the task is not from the user, the server throw an Error
   */
  deleteUserTask: (userId, taskId, onDelete) => {
    const params = {
      TableName: userTasksTableName,
      Key: {
        id: taskId,
      },
      ConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
    };
    dynamoDb.delete(params, onDelete);
  },
};
