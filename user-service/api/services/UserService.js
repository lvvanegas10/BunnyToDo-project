const {
  dynamoDb,
  userTableName,
  userTasksTableName,
} = require("./databaseConfig");

module.exports = {
  /**
   * Post a new user
   * @returns A promise with the new user
   */
  createUserPromise: (user) => {
    const userInfo = {
      TableName: userTableName,
      Item: user,
    };

    return dynamoDb
      .put(userInfo)
      .promise()
      .then((res) => user);
  },
  /**
   * Ger an user by its ID
   * @returns A promise
   */
  getUserPromise: (id) => {
    const params = {
      TableName: userTableName,
      Key: {
        id,
      },
    };

    return dynamoDb.get(params).promise();
  },
  /**
   * List all the users
   * @returns a list of users
   */
  listUsers: (onScan) => {
    let params = {
      TableName: userTableName,
    };
    dynamoDb.scan(params, onScan);
  },
  /**
   * Delete an user and its tasks
   */
  deleteUserAndTasks: (userId, tasks, onDelete) => {
    /**
     * Delete the user from the table
     */
    const _deleteUser = (id, onDelete) => {
      const params = {
        TableName: userTableName,
        Key: {
          id,
        },
      };
      dynamoDb.delete(params, onDelete);
    };

    /**
     * Return a list of requests to delete each user task
     */
    const _getTaskRequestsArrayToDelete = (tasks) => {
      let tasksRequests = [];
      tasks.forEach((task) => {
        tasksRequests.push({
          DeleteRequest: {
            Key: { id: task.id },
          },
        });
      });
      return tasksRequests;
    };

    const params = {
      RequestItems: {
        [userTableName]: [
          {
            DeleteRequest: {
              Key: { id: userId },
            },
          },
        ],
        [userTasksTableName]: _getTaskRequestsArrayToDelete(tasks),
      },
    };

    dynamoDb.batchWrite(params, () => _deleteUser(userId, onDelete));
  },
};
