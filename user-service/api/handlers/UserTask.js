"use strict";

const userTaskService = require("../services/UserTaskService");
const { getUserPromise } = require("../services/UserService");
const { getUserTaskModel } = require("../models/UserTaskModel");

/**
 * Actions
 */
const CREATE_USER_TASK = "create task";
const UPDATE_USER_TASK = "update task";

/**
 * Post user task
 */
module.exports.create = (event, context, callback) => {
  const userId = event.pathParameters.userId;
  _putUserTask(CREATE_USER_TASK, callback, event.body, userId);
};

/**
 * List all the task related with an user
 */
module.exports.list = (event, context, callback) => {
  var userId = event.pathParameters.userId;
  const _onScan = (err, data) => {
    if (err) {
      callback(err);
    } else {
      return callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(data.Items),
      });
    }
  };

  userTaskService.listUserTasks(userId, _onScan);
};

/**
 * Update a task
 */
module.exports.update = (event, context, callback) => {
  const userId = event.pathParameters.userId;
  const taskId = event.pathParameters.taskId;
  _putUserTask(UPDATE_USER_TASK, callback, event.body, userId, taskId);
};

/**
 * Delete a task
 */
module.exports.delete = (event, context, callback) => {
  const userId = event.pathParameters.userId;
  const taskId = event.pathParameters.taskId;

  const _onDelete = (err, data) => {
    if (err) {
      callback(err);
    } else {
      return callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: `Task deleted`,
        }),
      });
    }
  };

  userTaskService.deleteUserTask(userId, taskId, _onDelete);
};

const _checkIfUserExist = (userId, callback, request) => {
  getUserPromise(userId)
    .then((result) => {
      if (!result.Item) {
        let response = {
          statusCode: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: `User not found`,
          }),
        };
        callback(null, response);
      } else {
        request();
      }
    })
    .catch((error) => {
      callback(new Error("Couldn't fetch user."));
      return;
    });
};

const _putUserTask = (action, callback, body, userId, taskId) => {
  const requestBody = JSON.parse(body);
  const description = requestBody.description;
  const state = requestBody.state;

  const _putTask = () => {
    userTaskService
      .createTaskPromise(getUserTaskModel(description, state, userId, taskId))
      .then((res) => {
        callback(null, {
          statusCode: 201,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "POST, PUT",
          },
          body: JSON.stringify({
            message: `Sucessfully ${action} task`,
            task: {
              id: res.id,
              userId: res.userId,
              description: res.description,
              state: res.state,
            },
          }),
        });
      })
      .catch((err) => {
        callback(null, {
          statusCode: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: `Unable ${action} task`,
          }),
        });
      });
  };

  if (!_isTaskValid(description, state)) {
    callback(new Error(`Couldn't ${action} because of validation errors.`));
    return;
  }

  _checkIfUserExist(userId, callback, _putTask);
};

const _isTaskValid = (description, state) => {
  if ((typeof description !== "string", typeof state !== "string")) {
    return false;
  }
  return true;
};
