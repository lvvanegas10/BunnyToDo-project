import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

/**
 * Get user from API
 */
export function getUserTasks(userId) {
  console.log(baseUrl + userId + "/tasks");
  return fetch(baseUrl + userId + "/tasks")
    .then(handleResponse)
    .catch(handleError);
}
