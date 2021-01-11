import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

/**
 * Get user from API
 */
export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

/**
 * Create user from API
 */
export function createUser(name) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Create user from API
 */
export function updateUser(id, name) {
  return fetch(baseUrl + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Delete user
 */
export function deleteUser(userId) {
  return fetch(baseUrl + userId, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}
