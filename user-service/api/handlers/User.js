"use strict";

const userService = require("../services/UserService");
const { listUserTasks } = require("../services/UserTaskService");
const { getUserModel } = require("../models/UserModel");

/**
 * Actions
 */
const CREATE_USER = "create user";
const UPDATE_USER = "update user";

/**
 * Post an user
 */
module.exports.create = (event, context, callback) => {
  _putUser(CREATE_USER, callback, event.body);
};

/**
 * List all the users
 */
module.exports.list = (event, context, callback) => {
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

  userService.listUsers(_onScan);
};

/**
 * Get one user by its ID
 */
module.exports.get = (event, context, callback) => {
  userService
    .getUserPromise(event.pathParameters.userId)
    .then((result) => {
      let response = {};

      if (!result.Item) {
        response = {
          statusCode: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: `User not found`,
          }),
        };
      } else {
        response = {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(result.Item),
        };
      }

      callback(null, response);
    })
    .catch((error) => {
      callback(new Error("Couldn't fetch user."));
      return;
    });
};

/**
 * Update an user
 */
module.exports.update = (event, context, callback) => {
  const userId = event.pathParameters.userId;
  _putUser(UPDATE_USER, callback, event.body, userId);
};

/**
 * Delete an user and its tasks
 */
module.exports.delete = (event, context, callback) => {
  const userId = event.pathParameters.userId;

  /**
   * Callback when the user and its tasks are deleted
   */
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
      });
    }
  };

  /**
   * Get user tasks
   */
  const _onScan = (err, data) => {
    if (err) {
      callback(err);
    } else {
      console.log(JSON.stringify(data.Items));
      userService.deleteUserAndTasks(userId, data.Items, _onDelete);
    }
  };

  listUserTasks(userId, _onScan);
};

/**
 * Create or update user item
 */
const _putUser = (action, callback, body, userId) => {
  const requestBody = JSON.parse(body);
  const name = requestBody.name;

  if (!_isUserValid(name)) {
    callback(new Error("Couldn't update user because of validation errors."));
    return;
  }

  userService
    .createUserPromise(getUserModel(name, userId))
    .then((res) => {
      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: `Sucessfully ${action} ${name}`,
          userId: res.id,
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      callback(null, {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: `Unable to ${action} ${name}`,
        }),
      });
    });
};

/**
 * Validate user params
 */
const _isUserValid = (name) => {
  if (typeof name !== "string" || name.trim() === "") {
    return false;
  }
  return true;
};
