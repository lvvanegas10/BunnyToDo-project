import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

const _getBaseUrl = function (userId) {
  return baseUrl + userId + "/tasks/";
};

/**
 * Get user from API
 */
export function getUserTasks(userId) {
  return fetch(_getBaseUrl(userId)).then(handleResponse).catch(handleError);
}

/**
 * Create user from API
 */
export function createUserTask(userId, description, state) {
  return fetch(_getBaseUrl(userId), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description,
      state,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Create user from API
 */
export function updateUserTask(id, userId, description, state) {
  return fetch(_getBaseUrl(userId) + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      userId,
      description,
      state,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Delete user task
 */
export function deleteUserTask(userId, taskId) {
  return fetch(_getBaseUrl(userId) + taskId, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}
