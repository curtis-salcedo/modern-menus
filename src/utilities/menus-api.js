import sendRequest from "./send-request";
const BASE_URL = '/api/menus';

// Create a new menu
export function create(menuFormData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', menuFormData);
}