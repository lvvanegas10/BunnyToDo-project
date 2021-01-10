import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

/**
 * Get user from API
 */
export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
